import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Mainnav from "./Mainnav";
import Event from "./pages/CreateEvent/Event";
import Errorboundary from "./pages/errorElement";
import getEvent from "./pages/action/register";
import Register from "./pages/EventUser/Register";
import register from "./pages/Loader/register";
import subscribeEvent from "./pages/action/registerEvent";
import Uploadmetadata from "./pages/uploadMetadata";
import Eventform from "./pages/CreateEvent/EventForm";
import loader from "./pages/Loader/getUserEvent";
import RegisterEvent from "./pages/RegisterEvent";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainnav />,
    errorElement: <Errorboundary />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "search",
        element: <RegisterEvent />,
        action: getEvent,
      },
      {
        path: "Create/:wallet",
        element: <Event />,
        children: [
          {
            index: true,
            element: <Uploadmetadata />,
            loader: loader,
          },
          {
            path: "upload",
            element: <Eventform />,
          },
        ],
      },
      {
        path: "register/:id",
        element: <Register />,
        action: subscribeEvent,
        loader: register,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}
export default App;
