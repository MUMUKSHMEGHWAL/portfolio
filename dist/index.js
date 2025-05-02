// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import * as fs from "fs";
import * as path from "path";
var Storage = class {
  contactMessages = [];
  storagePath;
  constructor() {
    this.storagePath = path.join(process.cwd(), "data");
    this.ensureStorageDirectoryExists();
    this.loadMessages();
  }
  ensureStorageDirectoryExists() {
    if (!fs.existsSync(this.storagePath)) {
      fs.mkdirSync(this.storagePath, { recursive: true });
    }
  }
  loadMessages() {
    const messagesPath = path.join(this.storagePath, "messages.json");
    if (fs.existsSync(messagesPath)) {
      try {
        const data = fs.readFileSync(messagesPath, "utf8");
        this.contactMessages = JSON.parse(data);
      } catch (error) {
        console.error("Error loading messages:", error);
        this.contactMessages = [];
      }
    }
  }
  saveMessages() {
    const messagesPath = path.join(this.storagePath, "messages.json");
    try {
      fs.writeFileSync(messagesPath, JSON.stringify(this.contactMessages, null, 2));
    } catch (error) {
      console.error("Error saving messages:", error);
    }
  }
  async saveContactMessage(message) {
    const newMessage = {
      ...message,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactMessages.push(newMessage);
    this.saveMessages();
    return newMessage;
  }
  async getResumePath(type) {
    const resumesPath = path.join(process.cwd(), "attached_assets");
    switch (type) {
      case "technical":
        const techPath = path.join(resumesPath, "Mumuksh_Meghwal_SSE-8.pdf");
        return fs.existsSync(techPath) ? techPath : null;
      case "product":
        const productPath = path.join(resumesPath, "Mumuksh_SC_F-2.pdf");
        return fs.existsSync(productPath) ? productPath : null;
      case "meesho":
        const meeshoPath = path.join(resumesPath, "Mumuksh_Meesho.pdf");
        return fs.existsSync(meeshoPath) ? meeshoPath : null;
      default:
        return null;
    }
  }
};
var storage = new Storage();

// server/routes.ts
import * as path2 from "path";
import * as fs2 from "fs";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          message: "All fields are required: name, email, subject, message"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      const savedMessage = await storage.saveContactMessage({
        name,
        email,
        subject,
        message
      });
      res.status(201).json({
        message: "Message sent successfully",
        data: savedMessage
      });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/resumes/:type", async (req, res) => {
    try {
      const { type } = req.params;
      if (type !== "technical" && type !== "product" && type !== "meesho") {
        return res.status(400).json({ message: "Invalid resume type" });
      }
      const resumePath = await storage.getResumePath(type);
      if (!resumePath) {
        const resumesDir = path2.join(process.cwd(), "resumes");
        if (!fs2.existsSync(resumesDir)) {
          fs2.mkdirSync(resumesDir, { recursive: true });
        }
        const dummyContent = `This is a ${type} resume placeholder.`;
        const filePath = path2.join(resumesDir, `${type}_resume.pdf`);
        if (!fs2.existsSync(filePath)) {
          fs2.writeFileSync(filePath, dummyContent);
        }
        res.setHeader("Content-Disposition", `attachment; filename="${type}_resume.pdf"`);
        res.setHeader("Content-Type", "application/pdf");
        return res.send(dummyContent);
      }
      const fileName = path2.basename(resumePath);
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      res.setHeader("Content-Type", "application/pdf");
      const fileStream = fs2.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ message: "Failed to download resume" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs3 from "fs";
import path4 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path3 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path3.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@db": path3.resolve(__dirname, "db"),
      "@": path3.resolve(__dirname, "client", "src"),
      "@shared": path3.resolve(__dirname, "shared"),
      "@assets": path3.resolve(__dirname, "attached_assets")
    }
  },
  root: path3.resolve(__dirname, "client"),
  build: {
    outDir: path3.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
import { fileURLToPath as fileURLToPath2 } from "url";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = path4.dirname(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: ["true"]
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path4.resolve(__dirname2, "..", "client", "index.html");
      let template = await fs3.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path4.resolve(__dirname2, "public");
  if (!fs3.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path4.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import path5 from "path";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/images", express2.static(path5.join(process.cwd(), "public/images")));
app.use((req, res, next) => {
  const start = Date.now();
  const path6 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path6.startsWith("/api")) {
      let logLine = `${req.method} ${path6} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 3e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
