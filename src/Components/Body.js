import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Account from "./Account";
import TransferProfile from "./TransferProfile";
import ManageProfile from "./ManageProfile";

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/transfer-profile",
        element: <TransferProfile />,
      },
      {
        path: "/manage-profile",
        element: <ManageProfile />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;