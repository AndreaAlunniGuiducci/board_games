import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import GamesList from "./pages/GamesList/GamesList";
import GameDescription from "./pages/GameDescription/GameDescription";
import { useAppDispatch, useAppSelector } from "./store/storeHooks";
import { Alert } from "./components/atoms/Alert/Alert";
import { useEffect } from "react";
import { delError } from "./store/slices/errorSlice";

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
  { basename: "/" }
);

function App() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((store) => store.error);
  const { errors, showError } = error;
  console.log("errors", errors);
  useEffect(() => {
    setTimeout(() => {
      dispatch(delError());
    }, 2000);
  }, [error]);

  return (
    <div className="App">
      {showError && (
        <div className="errorsWrapper">
          {errors.map((i, index) => (
            <Alert key={index} variant="danger">
              {i.errorMessage}
            </Alert>
          ))}
        </div>
      )}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
