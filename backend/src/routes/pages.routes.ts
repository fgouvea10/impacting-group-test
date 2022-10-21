import { Router } from "express";

type Content = {
  type: string;
  title: string;
  properties: {
    categories: string[];
  }
}

type Page = {
  title: string;
  icon: string;
  url: string;
  content: Content[];
};

export const pagesRoutes = Router();

const pages: Page[] = [
  { title: "Home", icon: "fa-home", url: "page://home", content: [] },
  {
    title: "Camera",
    icon: "fa-building",
    url: "page://camera",
    content: [
      {
        type: "post",
        title: "Mensagens do Presidente",
        properties: { categories: ["messages"] },
      },
      { type: "post", title: "Notícias", properties: { categories: ["news"] } },
      {
        type: "post",
        title: "Horas e serviços",
        properties: { categories: ["schedules", "services"] },
      },
      {
        type: "post",
        title: "Taxas e Tarifários",
        properties: { categories: ["taxes"] },
      },
    ],
  },
  { title: "Comunicar", icon: "fa-chat", url: "page://comunicar", content: [] },
  {
    title: "Proteção civil",
    icon: "fa-danger",
    url: "page://protecao-civil",
    content: [],
  },
  { title: "Covid", icon: "fa-band-aid", url: "page://covid", content: [] },
  { title: "Agenda", icon: "fa-calendar", url: "page://agenda", content: [] },
];

pagesRoutes.post("/pages", (request, response) => {
  const newPage = request.body;

  pages.push(newPage);

  return response.status(201).json(newPage);
});

pagesRoutes.get("/pages", (request, response) => {
  return response.status(200).json(pages);
});
