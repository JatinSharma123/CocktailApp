import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Detail from "./components/Detail";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Home from "./pages/Home";


function App() {


  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/cocktail/:id" element={<Detail />}></Route>
          <Route path="/searchcocktail" element={<SearchInput />}></Route>
          <Route path="/searchcategory" element={<Category />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
