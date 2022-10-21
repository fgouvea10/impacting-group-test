import { PostsRepository } from "../repositories/posts-repository";

interface CreatePostRequest {
  title: string;
  category: string;
  content: string;
}

export class CreatePostService {
  constructor(private postsRepository: PostsRepository) {}

  execute({ title, category, content }: CreatePostRequest) {
    this.postsRepository.create({
      title,
      category,
      content,
    });
  }
}
