export type LoginData = {
  loggedIn: boolean;
  email: string;
  username: string;
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    login?: LoginData;
  }
}
