
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles, User, Cross } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const SpiritualGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Zion Harvest. I am the ZHIC Digital Deacon. How can I pray for you or assist you today?', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await geminiService.sendMessage(input, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '', timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-900 text-white p-4 rounded-full shadow-2xl hover:bg-red-600 transition-all flex items-center gap-2 group border-2 border-white/20"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-black uppercase tracking-tighter pr-2">
          Digital Deacon
        </span>
      </button>

      {if (isOpen) {
        return (
          <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8">
            <div className="bg-blue-900 p-5 text-white flex justify-between items-center border-b-4 border-red-600">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 rounded-lg">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-tighter leading-tight">Digital Deacon</h3>
                  <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">ZHIC Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-blue-900 text-white'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Cross size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed font-medium ${
                      m.role === 'user' ? 'bg-blue-900 text-white rounded-tr-none' : 'bg-white border border-slate-200 shadow-sm rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
              <div className="flex gap-2 bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 focus-within:ring-2 focus-within:ring-blue-900 focus-within:bg-white transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for prayer or info..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="text-blue-900 hover:text-red-600 disabled:opacity-30 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      }()}
    </>
  );
};

export default SpiritualGuide;
