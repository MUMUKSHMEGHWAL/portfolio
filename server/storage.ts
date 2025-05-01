import * as fs from 'fs';
import * as path from 'path';
import { db } from '@db';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

class Storage {
  private contactMessages: ContactMessage[] = [];
  private storagePath: string;
  
  constructor() {
    this.storagePath = path.join(process.cwd(), 'data');
    this.ensureStorageDirectoryExists();
    this.loadMessages();
  }
  
  private ensureStorageDirectoryExists() {
    if (!fs.existsSync(this.storagePath)) {
      fs.mkdirSync(this.storagePath, { recursive: true });
    }
  }
  
  private loadMessages() {
    const messagesPath = path.join(this.storagePath, 'messages.json');
    if (fs.existsSync(messagesPath)) {
      try {
        const data = fs.readFileSync(messagesPath, 'utf8');
        this.contactMessages = JSON.parse(data);
      } catch (error) {
        console.error('Error loading messages:', error);
        this.contactMessages = [];
      }
    }
  }
  
  private saveMessages() {
    const messagesPath = path.join(this.storagePath, 'messages.json');
    try {
      fs.writeFileSync(messagesPath, JSON.stringify(this.contactMessages, null, 2));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  }
  
  async saveContactMessage(message: Omit<ContactMessage, 'createdAt'>): Promise<ContactMessage> {
    const newMessage = {
      ...message,
      createdAt: new Date()
    };
    
    this.contactMessages.push(newMessage);
    this.saveMessages();
    
    return newMessage;
  }
  
  async getResumePath(type: string): Promise<string | null> {
    const resumesPath = path.join(process.cwd(), 'attached_assets');
    
    // Return paths to the uploaded resume files
    switch (type) {
      case 'technical':
        const techPath = path.join(resumesPath, 'Mumuksh_Meghwal_SSE-8.pdf');
        return fs.existsSync(techPath) ? techPath : null;
      case 'product':
        const productPath = path.join(resumesPath, 'Mumuksh_SC_F-2.pdf');
        return fs.existsSync(productPath) ? productPath : null;
      case 'meesho':
        const meeshoPath = path.join(resumesPath, 'Mumuksh_Meesho.pdf');
        return fs.existsSync(meeshoPath) ? meeshoPath : null;
      default:
        return null;
    }
  }
}

export const storage = new Storage();
