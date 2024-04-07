import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import GamesList from "./pages/GamesList/GamesList";
import GameDescription from "./pages/GameDescription/GameDescription";

const router = createBrowserRouter(
  [
    {
      element: (
        <div>
          <Header />
          <Outlet />
        </div>
      ),
      children: [
        { path: "/", element: <Home className="pageWithHeader" /> },
        {
          path: "/lista_giochi",
          element: <GamesList className="pageWithHeader" />,
        },
        {
          path: "/gioco/:gameId",
          element: <GameDescription className="pageWithHeader" />,
        },
      ],
    },
  ],
  { basename: "/board_games" }
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
