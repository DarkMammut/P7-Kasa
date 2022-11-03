import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageSlider from "../../components/slider.jsx";
import Tags from "../../components/tags.jsx";
import Collapse from "../../components/collapse.jsx";
import Rating from "../../components/rating.jsx";
import Renter from "../../components/renter.jsx";
import rentals from "../../assets/rentals.json";
import "../../styles/rental.css";

function findRental(id) {
  return rentals.find((rent) => rent.id === id);
}

function Rental() {
  const navigate = useNavigate();

  let { id } = useParams();

  const rent = useMemo(() => findRental(id), [id]);

  useEffect(() => {
    if (!rent) {
      navigate("/404");
    }
  }, [rent]);

  if (!rent) {
    return null;
  }

  return (
    <main>
      <ImageSlider slides={rent.pictures} />
      <h1 className="Rental-Title">{rent.title}</h1>
      <h2 className="Rental-Location">{rent.location}</h2>
      <Tags tags={rent.tags} />
      <Rating rate={rent.rating} />
      <div className="Rental-Collapse">
        <Collapse key="1" title="Description" text={rent.description} />
        <Collapse key="2" title="Équipements" text={rent.equipments} />
      </div>

      <Renter host={rent.host} />
    </main>
  );
}

export default Rental;
