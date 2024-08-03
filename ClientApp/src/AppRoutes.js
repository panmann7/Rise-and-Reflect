import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/journal-entries/:entryId',
    element: <Counter />
  },
  {
    path: '/journal-entries/:entryId/edit',
    element: <FetchData />
  },
  {
    path: 'journal-entries/:entryId/delete',
    element: ""
  }
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
