import { AuthRoute, MainRoute } from '../../domain/router.constants';

export enum SignInButtonContent {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  SignOut = 'Sign Out',
}

export const AUTH_BUTTON_CONTENT_BY_PATH = {
  login: {
    title: SignInButtonContent.SignIn,
    link: `/${MainRoute.Auth}/${AuthRoute.Login}`,
  },
  registration: {
    title: SignInButtonContent.SignUp,
    link: `/${MainRoute.Auth}/${AuthRoute.Registration}`,
  },
} as const;

export const MAIN_NAVIGATION_ITEMS = [
  {
    title: 'Home',
    link: MainRoute.Home,
  },
  {
    title: 'Gallery',
    link: MainRoute.Gallery,
  },
  {
    title: 'About',
    link: MainRoute.About,
  },
  {
    title: 'Your feedbacks',
    link: MainRoute.Feedbacks,
  },
];
