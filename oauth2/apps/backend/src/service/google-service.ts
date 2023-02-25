import {Auth, google} from 'googleapis';

class GoogleService {
  //@ts-ignore
  oauthClient: Auth.OAuth2Client ;


  async init() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const redirect_url = process.env.GOOGLE_REDIRECT_URL
    this.oauthClient = new google.auth.OAuth2(clientId, clientSecret, redirect_url);
  }

  async loginGoogleUser(token: string) {

    const {tokens} = await this.oauthClient.getToken(token);
    const user: Auth.LoginTicket = await this.oauthClient.verifyIdToken({
      idToken: tokens.id_token,
    });
    const currenUser = user.getPayload();

    return {
      email: currenUser.email,
      avatar_url: currenUser.picture,
      name: currenUser.name,
    }
  }
}


export default new GoogleService()
