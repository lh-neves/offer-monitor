import express, { Express } from "express";
import routes from "./routes";
import cors from "cors";

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors()); // Configurações de middleware
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
