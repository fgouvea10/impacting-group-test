import { createContext, ReactNode, useCallback, useState } from "react";

import { getPages as listPages } from "../services/use-cases/pages";
import type { Page as PageType } from "../domain/shared/page";

interface Page extends Pick<PageType, "title" | "icon" | "content"> {}

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
      const response = await listPages();
      setPages(response);
    } catch (err) {
      setPages([]);
      console.error(`[error]: error while fetch pages - ${err}`);
    }
  }, []);

  return (
    <PageContext.Provider value={{ pages, getPages }}>
      {children}
    </PageContext.Provider>
  );
}
