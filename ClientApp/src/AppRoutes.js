import { Home } from "./components/Home";
import { NewEntry } from "./components/NewEntry";
import { History } from "./components/History";
import { Edit } from "./components/Edit";

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
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/history",
    element: <History />,
  },
];

export default AppRoutes;
