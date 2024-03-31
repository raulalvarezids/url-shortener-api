import { UrlController } from "../controller/urlController.js";
import { UserController } from "../controller/userController.js";
import { UrlRepository } from "../repository/urlRepository.js";
import { UserRepository } from "../repository/userRepository.js";

const urlRepository = new UrlRepository()
export const urlController = new UrlController(urlRepository)

const userRepository = new UserRepository()
export const userController = new UserController(userRepository)