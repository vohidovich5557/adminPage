import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { Category } from "./pages/category";
import { CategoryCreate } from "./pages/categoryCreate";
import { AppLayout } from "./layout/app-layout";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="category/create" element={<CategoryCreate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
