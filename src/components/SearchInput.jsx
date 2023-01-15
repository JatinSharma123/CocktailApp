import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCocktail } from "../redux/features";
import Detail from "./Detail";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";
import Card from "./Card";
export default function SearchInput() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { loading, cocktail } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(searchCocktail({ input }));
  };

  console.log(cocktail);

  return (
    <div className="container">
      <MDBCard style={{ height: "20vh" }}>
        <div class="form-outline mb-4">
          <MDBInput
            class="form-control"
            label="Enter drink Name"
            id="form1"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            class="btn btn-secondary  mx-1"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </MDBCard>
      <div>
        <div className="row">
          {!loading &&
            cocktail?.map((item) => {
              return <Card item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
