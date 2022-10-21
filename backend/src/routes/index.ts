import { Router } from "express";

import { postsRoutes } from "./posts.routes";

export const appRoutes = Router();

appRoutes.use('/', postsRoutes);
