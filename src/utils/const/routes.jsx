import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";
import EventsPage from "../../pages/events";
import GamePage from "../../pages/game";
import ContactPage from "../../pages/contact";

export const routes = [
  {
    name: "Início",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "Formula E",
    path: "/about-fe",
    element: <AboutPage />,
  },
  {
    name: "Eventos",
    path: "/events",
    element: <EventsPage />,
  },
  {
    name: "Jogo",
    path: "/game",
    element: <GamePage />,
  },
  {
    name: "Contato",
    path: "/contact",
    element: <ContactPage />,
  },
];
