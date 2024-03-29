import { UrlController } from "../controller/urlController.js";
import { UrlRepository } from "../repository/urlRepository.js";

const urlRepository = new UrlRepository()
export const urlController = new UrlController(urlRepository)