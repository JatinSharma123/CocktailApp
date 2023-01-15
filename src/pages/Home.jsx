import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import { allCocktails } from "../redux/features";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, cocktails } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(allCocktails());
  }, [dispatch]);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  console.log(cocktails);
  return (
    <div>
      <div className="row text-center">
        <h1 className="h1">Cocktails</h1>
      </div>
      <div className="row">
        {cocktails.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}
