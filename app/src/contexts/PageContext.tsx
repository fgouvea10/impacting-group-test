import { createContext, ReactNode, useCallback, useState } from "react";

import { client } from "../services/client";

type PageContent = {
  type: string;
  title: string;
  properties: {
    categories: string[];
  }
}

export type Page = {
  title: string;
  icon: string;
  content: PageContent[];
};

type PageContextData = {
  getPages(): Promise<void>;
  pages: Page[];
};

type PageProviderProps = {
  children: ReactNode;
};

export const PageContext = createContext({} as PageContextData);

export function PageProvider({ children }: PageProviderProps) {
  const [pages, setPages] = useState<Page[]>([]);

  const getPages = useCallback(async () => {
    try {
      const { data } = await client.get<Page[]>("/pages");

      const mappedPages = data.map((page) => ({
        title: page.title,
        icon: page.icon,
        content: page.content,
      }));

      setPages(mappedPages);
    } catch (err) {
      setPages([]);
    }
  }, []);

  return (
    <PageContext.Provider value={{ pages, getPages }}>
      {children}
    </PageContext.Provider>
  );
}
