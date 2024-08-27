import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ItemController{

  async index(req: Request, res: Response) {
    const items = await prisma.item.findMany({
        where: {
            status: 1,
        },
    });
    return res.json(items);
}

// Recupera um item
async show(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const item = await prisma.item.findUnique({
      where: { id },
  });

  if (!item || item.status !== 1) {
      return res.status(404).json({ error: 'Item not found' });
  }

  return res.json(item);
}

// Cria um novo item

async create(req: Request, res: Response) {
  const { link, description, ref_price, last_checked_price} = req.body;

  const newItem = await prisma.item.create({
      data: {
          link,
          description,
          ref_price,
          last_checked_price,
          status: 1
      },
  });

  return res.status(201).json(newItem);
}

//atualiza um item

async update(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const { link, description, ref_price } = req.body;

  const updatedItem = await prisma.item.update({
      where: { id },
      data: {
          link,
          description,
          ref_price,
      },
  });

  return res.json(updatedItem);
}
  //exclui(inativa) um item

  async destroy(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    const updatedItem = await prisma.item.update({
        where: { id },
        data: { status: 0 },
    });

    return res.status(200).json(updatedItem);
  }

}
export default new ItemController();