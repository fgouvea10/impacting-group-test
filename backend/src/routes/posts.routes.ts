import { Router } from "express";
import { PostsRepository } from "../repositories/posts-repository";

const postsRepository = new PostsRepository();

// type Post = {
//   title: string;
//   category: string;
//   content: string;
// };

export const postsRoutes = Router();

// const posts: Post[] = [
//   {
//     title: "O Papel do novo centro da juventude para todos",
//     category: "messages",
//     content: "...",
//   },
//   { title: "Mensagem de Natal 2020", category: "messages", content: "..." },
//   {
//     title: "Obras na avenida 25 de Abril finalizadas atempadamente",
//     category: "news",
//     content: "...",
//   },
//   {
//     title: "Piscinas municipais abrem portas as cidadãos carenciados",
//     category: "news",
//     content: "...",
//   },
//   {
//     title: "Horários dos serviços municipais",
//     category: "schedules",
//     content: "...",
//   },
//   {
//     title: "Horários das instalações desportivas",
//     category: "schedules",
//     content: "...",
//   },
//   {
//     title: "Atendimento ao cliente no serviço de águas",
//     category: "schedules",
//     content: "...",
//   },
//   { title: "Tarifas de licenciamento", category: "taxes", content: "..." },
//   {
//     title: "Tarifários de água do concelho",
//     category: "taxes",
//     content: "...",
//   },
//   { title: "Taxas de saneamento", category: "taxes", content: "..." },
// ];

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

// postsRoutes.get("/posts", (request, response) => {
//   return response.status(200).json(posts);
// });
