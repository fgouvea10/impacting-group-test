import { Router } from "express";

import { pagesRoutes } from "./pages.routes";
import { postsRoutes } from "./posts.routes";

export const appRoutes = Router();

appRoutes.use("/", postsRoutes);
appRoutes.use("/", pagesRoutes);
