import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCocktail } from "../redux/features";
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
export default function Detail() {
  const navigate = useNavigate();
  let { id } = useParams();

  const { loading, cocktail } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailCocktail({ id }));
  }, [dispatch, id]);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  let { idDrink, strDrink, strCategory, strDrinkThumb, strInstructions } =
    cocktail;

  console.log(cocktail);

  return (
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
  );
}
