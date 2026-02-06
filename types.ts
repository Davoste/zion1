
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  thumbnail: string;
  series: string;
  description: string;
  videoId?: string; // YouTube video ID
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Service' | 'Community' | 'Youth' | 'Small Group';
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
