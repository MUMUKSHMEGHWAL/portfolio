import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as path from 'path';
import * as fs from 'fs';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate inputs
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required: name, email, subject, message' 
        });
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // Save the contact message
      const savedMessage = await storage.saveContactMessage({
        name,
        email,
        subject,
        message
      });
      
      res.status(201).json({
        message: 'Message sent successfully',
        data: savedMessage
      });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  });
  
  // Resume download endpoints
  app.get('/api/resumes/:type', async (req, res) => {
    try {
      const { type } = req.params;
      
      if (type !== 'technical' && type !== 'product' && type !== 'meesho') {
        return res.status(400).json({ message: 'Invalid resume type' });
      }
      
      const resumePath = await storage.getResumePath(type);
      
      if (!resumePath) {
        // Create dummy resumes directory and files for demonstration if they don't exist
        const resumesDir = path.join(process.cwd(), 'resumes');
        if (!fs.existsSync(resumesDir)) {
          fs.mkdirSync(resumesDir, { recursive: true });
        }
        
        const dummyContent = `This is a ${type} resume placeholder.`;
        const filePath = path.join(resumesDir, `${type}_resume.pdf`);
        
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, dummyContent);
        }
        
        res.setHeader('Content-Disposition', `attachment; filename="${type}_resume.pdf"`);
        res.setHeader('Content-Type', 'application/pdf');
        return res.send(dummyContent);
      }
      
      // Set headers for file download
      const fileName = path.basename(resumePath);
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Type', 'application/pdf');
      
      // Stream the file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error('Error downloading resume:', error);
      res.status(500).json({ message: 'Failed to download resume' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
