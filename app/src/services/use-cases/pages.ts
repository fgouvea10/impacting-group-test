import { client } from "../client";

import type { Page as PageType } from "../../domain/shared/page";

interface Page extends Pick<PageType, "title" | "icon" | "content"> {}

export async function getPages(): Promise<Page[]> {
  const { data } = await client.get<Page[]>("/pages");

  const pages = data.map((page) => ({
    title: page.title,
    icon: page.icon,
    content: page.content,
  }));

  return pages;
}
