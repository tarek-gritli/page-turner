import { lazy } from "react";
import Home from "./pages/Home"

const BooksList = lazy(() => import("./pages/BooksList"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EditBook = lazy(()=>import("./pages/EditBook"))
const CreateBook = lazy(()=>import("./pages/CreateBook"))
const DeleteBook = lazy(()=>import("./pages/DeleteBook"))


export const appRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/books",
    component: BooksList,
  },
  {
    path: "/books/create",
    component: CreateBook,
  },
  {
    path: "/books/delete/:id",
    component: DeleteBook,
  },
  {
    path: "/books/edit/:id",
    component: EditBook,
  },
  {
    path: "*",
    component: NotFound,
  },
];
