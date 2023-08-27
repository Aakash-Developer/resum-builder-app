import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="create-new" element={<MainLayout />}>
        <Route index element={<Resume />} />
      </Route>
    </>
  )
);

export default function RootRouter() {
  return <RouterProvider router={Router} />;
}
