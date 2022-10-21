import { Router } from "express";

import { PagesRepository } from "../repositories/pages-repository";
import { CreatePageService } from "../services/create-page-service";

const pagesRepository = new PagesRepository();

export const pagesRoutes = Router();

pagesRoutes.post("/pages", (request, response) => {
  const { title, icon, url, content } = request.body;

  const createPageService = new CreatePageService(pagesRepository);

  createPageService.execute({ title, icon, url, content });

  return response.status(201).json({
    title,
    icon,
    url,
    content,
  });
});

pagesRoutes.get("/pages", (request, response) => {
  const pages = pagesRepository.list();

  return response.json(pages);
});
