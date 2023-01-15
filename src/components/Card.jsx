import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
export default function Card({ item }) {
  const navigate = useNavigate();

  const {
    idDrink,
    strDrink,
    strCategory,
    strDrinkThumb,
    strInstructions,
    strGlass,
  } = item;
  return (
    <div className="col-4" style={{ height: "50%" }}>
      <MDBCard style={{ height: "60vh" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <Link to={`/cocktail/${idDrink}`}>
            <MDBCardImage
              src={strDrinkThumb}
              fluid
              className="img"
              alt="drinkimage"
            />
          </Link>

          <Link to="/">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            >
              {strCategory}
            </div>
          </Link>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{strDrink}</MDBCardTitle>
          <MDBCardTitle>{strCategory}</MDBCardTitle>
          <MDBCardText>{strGlass}</MDBCardText>
          <MDBCardText>{strInstructions}</MDBCardText>

          <MDBBtn onClick={() => navigate(`/cocktail/${idDrink}`)}>
            View Drink
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
