import Home from "./pages/Home";
import About from "./pages/About";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Brewell from "./pages/Brewell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "brewell",
        element: <Brewell />,
      },
      {
        path: "*",
        element: <Home />,
        loader: () => redirect("/"),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
