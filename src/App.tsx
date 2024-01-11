import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Stores from "./Pages/Stores";
import Layout from "./Pages/Layout";
import Terms from "./Pages/Terms";
import Privacity from "./Pages/Privacity";
import ProductsCategory from "./Pages/ProductsCategory";
import ProductCard from "./components/ProductCard";
//import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<NotFound />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:name" element={<ProductsCategory />} />
          <Route path="/menu/:name/:product" element={<ProductCard />} />
        </Route>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacity" element={<Privacity />} />
      </Routes>
    </>
  );
}

export default App;
