
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the 'ZHIC Digital Deacon', the official AI assistant for Zion Harvest International Church (ZHIC) in Nairobi. 
Your tone is charismatic, encouraging, knowledgeable, and deeply welcoming. 
You help visitors with:
1. Church Information: Service times are Sundays (Main Service: 8 AM & 10:30 AM) and Wednesday (Mid-week Revival: 5:30 PM). 
2. Location: Nairobi, Kenya (Ngong Road District).
3. Mission: "Raising a generation of impact through the word and power of God."
4. Leadership: Senior Pastors are Rev. Emmanuel and Pastor Grace.
5. Spiritual Support: Provide uplifting scriptures (NIV/KJV) and offer to pray (textually) with users.

Keep responses concise and culturally resonant with the Nairobi community. If you don't know a specific detail, suggest they visit the church office or email info@zionharvest.org.`;

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(prompt: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role, parts: h.parts })),
          { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, brethren. I'm experiencing a technical hitch. Please try again or reach out to our office.";
    }
  }
}

export const geminiService = new GeminiService();
