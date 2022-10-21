import { Router } from "express";

import { PagesRepository } from "../repositories/pages-repository";

const pagesRepository = new PagesRepository();

export const pagesRoutes = Router();

pagesRoutes.post("/pages", (request, response) => {
  const { title, icon, url, content } = request.body;

  pagesRepository.create({
    title,
    icon,
    url,
    content,
  });

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
