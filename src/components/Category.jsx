import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allCocktails,
  filterCategories,
  listCategories,
} from "../redux/features";
import Card from "./Card";

export default function Category() {
  const [search, setSearch] = useState("all");
  const dispatch = useDispatch();
  let { loading, categories, cocktails } = useSelector((state) => state.app);
  useEffect(() => {
    if (search === "all") {
      dispatch(allCocktails());
    }
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  console.log(categories);
  const categoryHandler = (category) => {
    if (category === "all") {
      dispatch(allCocktails());
    } else dispatch(filterCategories({ category }));
  };
  console.log(cocktails);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <span
            className="p-2  btn-primary ms-2"
            onClick={() => categoryHandler("all")}
          >
            All
          </span>
          {categories
            ? categories.map((item) => {
                const { strCategory } = item;
                return (
                  <span
                    className="p-2 btn-primary ms-2"
                    onClick={() => categoryHandler(strCategory)}
                  >
                    {strCategory}{" "}
                  </span>
                );
              })
            : ""}
        </div>
      </div>
      <div className="row mt-4 p-3">
        {cocktails.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  );
}
