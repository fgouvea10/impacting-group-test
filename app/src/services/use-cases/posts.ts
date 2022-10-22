import { client } from "../client";
import type { Post as PostType } from "../../domain/shared/post";

interface Post extends Pick<PostType, "title" | "category"> {}

export async function getPosts(): Promise<Post[]> {
  const { data } = await client.get<Post[]>("/posts");
  const posts = data.map((post) => ({
    title: post.title,
    category: post.category,
  }));

  return posts;
}
