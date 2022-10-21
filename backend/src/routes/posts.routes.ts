import { Router } from "express";

import { PostsRepository } from "../repositories/posts-repository";

const postsRepository = new PostsRepository();

export const postsRoutes = Router();

postsRoutes.post("/posts", (request, response) => {
  const { title, category, content } = request.body;

  postsRepository.create({
    title,
    category,
    content,
  });

  return response.status(201).json({
    title,
    category,
    content,
  });
});

postsRoutes.get("/posts", (request, response) => {
  const posts = postsRepository.list();

  return response.json(posts);
});
