import VkService from "../service/vk-service";
import GithubService from "../service/github-service"
import {Request, Response} from "express";
import GoogleService from "../service/google-service";

class AuthController {
  async vk(req: Request, res: Response) {
    const accessToken = await VkService.validate(req.body.code)
    const user = await VkService.getVkUserByToken(accessToken!)
    res.json(user);
  }

  async github(req: Request, res: Response) {
    const accessToken = await GithubService.validate(req.body.code)

    const user = await GithubService.getGithubUserByToken(accessToken!)
    res.json(user)
  }

  async google(req: Request, res: Response) {
    await GoogleService.init()
    const user = await GoogleService.loginGoogleUser(req.body.code)

    res.json(user)
  }
}

export default new AuthController()