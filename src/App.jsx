import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './routes/homePage/homePage'
import Layout from "./Layout/Layout";
import SinglePage from "./routes/singlePage/singlePage";
import ListPage from "./routes/listPage/listPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App