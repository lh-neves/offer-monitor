import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EmailController {
    async index(req: Request, res: Response) {
      const emails = await prisma.email.findMany();
      return res.json(emails);
    }
  
    async create(req: Request, res: Response) {
      const { email } = req.body;
      
      try {
        // Certifique-se de que o modelo correto está sendo utilizado
        console.log(email + "chegou")
        const newEmail = await prisma.email.create({
          data: {
            Email:email // Aqui assumimos que o modelo `Email` tem um campo `email`
          },
        });
        
        return res.status(201).json(newEmail);
      } catch (error) {
        console.error('Erro ao criar email:', error);
        return res.status(500).json({ error: 'Erro ao criar o email' });
      }
    }
  }
  

export default new EmailController();