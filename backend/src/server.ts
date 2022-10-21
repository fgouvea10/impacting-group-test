import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import swaggerFile from "./swagger.json";
import { appRoutes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(appRoutes);

app.listen(8000, () => console.log("Server is running"));
