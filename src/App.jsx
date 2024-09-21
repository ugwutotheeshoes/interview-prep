import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Error from "./Error";
import Homepage from "./Homepage";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <Error />,
      },
      { path: "about", element: <About />, errorElement: <Error /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
