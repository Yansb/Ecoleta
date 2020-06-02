import { Request, Response } from 'express';
import knex from '../database/connection';

interface Iitem {
  id: number;
  title: string;
  image_url: string;
}

export default class ItemsController {
  async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');

    const serializadeItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializadeItems);
  }

  show;
}
