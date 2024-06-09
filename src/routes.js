import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";

export const routes = [
    {
      path: "/",
      component: HomePage,
      exact: true,
    },{
      path: '/about',
      component: AboutPage,
    }
  ];
  