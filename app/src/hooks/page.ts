import { useContext } from "react";

import { PageContext } from "../contexts/PageContext";

export function usePage() {
  const context = useContext(PageContext);

  return context;
}
