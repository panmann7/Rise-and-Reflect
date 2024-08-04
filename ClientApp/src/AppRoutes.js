import { Home } from "./components/Home";
import { NewEntry } from "./components/NewEntry";
import { History } from "./components/History";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/new-entry",
    element: <NewEntry />,
  },
  {
    path: "/history",
    element: <History />,
  },
];

export default AppRoutes;
