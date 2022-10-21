import { Router } from "express";

import { PostsRepository } from "../repositories/posts-repository";
import { CreatePostService } from "../services/create-post-service";

const postsRepository = new PostsRepository();

export const postsRoutes = Router();

postsRoutes.post("/posts", (request, response) => {
  const { title, category, content } = request.body;

  const createPostService = new CreatePostService(postsRepository);

  createPostService.execute({ title, category, content });

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
