import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "//new-entry",
    element: <NewEntry />,
  },
  {
    path: "/history",
    element: <History />,
  },
];

// const AppRoutes = [
//   {
//     index: true,
//     element: <Home />
//   },
//   {
//     path: '/counter',
//     element: <Counter />
//   },
//   {
//     path: '/fetch-data',
//     element: <FetchData />
//   }
// ];

export default AppRoutes;
