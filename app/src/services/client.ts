import axios from "axios";

import { baseUrl } from "../config/env.json";

export const client = axios.create({
  baseURL: baseUrl,
});
