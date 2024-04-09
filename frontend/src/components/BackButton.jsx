import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ destination = "/books" }) => {
  return (
    <Link to={destination}>
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="text-4xl text-sky-600 m-10"
      />
    </Link>
  );
};

export default BackButton;
