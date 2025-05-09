import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { CONFIG } from "../model/config";
import type { ApiPaths } from "./schema";

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
  headers: {
    "User-Agent": "MyBooksList/1.0 (rahmiddin.hasanov@bk.ru)",
  },
});

export const rqClient = createClient(fetchClient);
