import { PagesRepository } from "../repositories/pages-repository";

interface Content {
  type: string;
  title: string;
  properties: {
    categories: string[];
  };
}

interface CreatePageServiceRequest {
  title: string;
  icon: string;
  url: string;
  content: Content[];
}

export class CreatePageService {
  constructor(private pagesRepository: PagesRepository) {}

  execute({ title, url, icon, content }: CreatePageServiceRequest) {
    this.pagesRepository.create({
      title,
      url,
      icon,
      content,
    });
  }
}
