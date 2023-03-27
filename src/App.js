import Home from "./pages/home/Home";
import Login from "./Login";
import List from "./pages/list/List";
import ProductList from "./pages/list/ProductList"
import OrderList from "./pages/list/orderlist";
import Single from "./pages/single/Single";
import BrandList from "./pages/list/brandlist";
import StoreList from "./pages/list/storelist";
import StockList from "./pages/list/stocklist";
import CategoryList from "./pages/list/categorylist";
import Stafflist from "./pages/list/stafflist"

import New from "./pages/new/New";
import NewCategory from "./pages/new/NewCategory";
import NewBrand from "./pages/new/NewBrand";
import NewProduct from "./pages/new/NewProduct";
import NewStaff from "./pages/new/NewStaff";
import NewStock from "./pages/new/NewStock";
import NewStore from "./pages/new/NewStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, orderInputs, staffsInputs, storeInputs, stockInputs, brandInputs, categoryInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New  title="customer" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<NewProduct  title="event" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<OrderList />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New  title="order" />}
              />
            </Route>
            <Route path="stores">
              <Route index element={<StoreList />} />
              <Route path=":storeId" element={<Single />} />
              <Route
                path="new"
                element={<NewStore title="store" />}
              />
            </Route>
            <Route path="stocks">
              <Route index element={<StockList />} />
              <Route path=":stockId" element={<Single />} />
              <Route
                path="new"
                element={<NewStock  title="stock" />}
              />
            </Route>
            <Route path="brands">
              <Route index element={<BrandList />} />
              <Route path=":brandId" element={<Single />} />
              <Route
                path="new"
                element={<NewBrand  title="brand" />}
              />
              
            </Route>
            <Route path="category">
              <Route index element={<CategoryList />} />
              <Route path=":categoryId" element={<Single />} />
              <Route
                path="new"
                element={<NewCategory title="category" />}
              />
            </Route>
            <Route path="staffs">
              <Route index element={<Stafflist />} />
              <Route path=":staffId" element={<Single />} />
              <Route
                path="new"
                element={<NewStaff  title="staff" />}
              />
            </Route>
            <Route path="logout">
              <Route index element={<Login />} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
