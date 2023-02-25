import axios from 'axios'

class VkService {
  async validate(code: string): Promise<VkTokenData | undefined> {
    try {
      const requestData = {
        client_id: process.env.VK_CLIENT_ID,
        client_secret: process.env.VK_CLIENT_SECRET,
        redirect_uri: process.env.VK_REDIRECT_URL,
        code,
      };

      const resp = await axios.get<VkTokenData>(
        `https://oauth.vk.com/access_token?client_id=${requestData.client_id}&client_secret=${requestData.client_secret}&redirect_uri=${requestData.redirect_uri}&code=${requestData.code}`
      );
      return resp.data
    } catch (e) {
      console.log(e)
    }
  }

  async getVkUserByToken(token: VkTokenData) {
    const userId = token.user_id;
    const vkToken = token.access_token;


    const resp = await axios.get(
      `https://api.vk.com//method/users.get?user_ids=${userId}&fields=photo_100,href,contacts&access_token=${vkToken}&v=5.131`
    );
    const user = {
      email: token.email || 'empty',
      avatar_url: resp.data.response[0].photo_100,
      name: `${resp.data.response[0].first_name} ${resp.data.response[0].last_name}`
    }
    return user
  }

}

export default new VkService()

export interface VkTokenData {
  access_token: string;
  expires_in: number;
  user_id: number;
  email: string;
}