import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
} from "mdb-react-ui-kit";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchCocktail({ cocktail }) {
  const { idDrink, strDrink, strCategory, strDrinkThumb, strInstructions } =
    cocktail;
  console.log(cocktail);
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ height: "100%" }}>
        <MDBCard style={{ height: "150vh" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              style={{ height: "70vh", width: "100vw" }}
              src={strDrinkThumb}
              fluid
              alt="..."
            />
            <Link to="/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              >
                {strCategory}
              </div>
            </Link>
          </MDBRipple>
          <MDBCardBody className="text-center">
            <MDBCardTitle>{strDrink}</MDBCardTitle>
            <MDBCardTitle>{strCategory}</MDBCardTitle>
            <MDBCardText>{strInstructions}</MDBCardText>
            <MDBBtn onClick={() => navigate(`/`)}>Go Back</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
