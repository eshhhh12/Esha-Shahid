import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const result = await storage.createContactSubmission(submission);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid submission data" });
    }
  });

  // Get all contact submissions
  app.get("/api/contact", async (_req, res) => {
    const submissions = await storage.getContactSubmissions();
    res.json(submissions);
  });

  const httpServer = createServer(app);
  return httpServer;
}