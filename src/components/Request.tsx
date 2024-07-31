import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Request = ({ title, description, buttonText }: any) => {
  return (
    <div className="request">
      <h3 className="request__title title">{title}</h3>
      <p className="request__description">{description}</p>
      <button className=" button request__button">
        {buttonText}
        <Image src={"/images/arrow-light.svg"} width={60} height={60} alt="" />
      </button>
    </div>
  );
};

Request.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Request.defaultProps = {
  title: "ЕСТЬ ВОПРОСЫ?",
  description: "оставьте заявку и мы позвоним в течение дня",
  buttonText: "Отправить заявку",
};

export default Request;
