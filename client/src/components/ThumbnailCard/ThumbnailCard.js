import React from "react";
import "./ThumbnailCard.css";

const ThumbnailCard = (props) => {
  const cardStyle = {
    width: "auto",
    "box-shadow": "rgb(0 0 0 / 4%) 0px 7px 11px",
    border: "none",
    "z-index": "0",
  };

  const imageUrlParse = () => {
    const codeArr = props.productCode.split("-");
    codeArr.pop();
    return codeArr.join("-");
  };

  const priceFormatting = (price) => {
    const currency = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const currencyArr = currency.split("");

    for (let i = 0; i < 3; i++) {
      currencyArr.pop();
    }

    currencyArr.shift();

    return currencyArr.join("").replace(/,/g, ".");
  };

  return (
    <>
      <div className="card" style={cardStyle}>
        <img
          src={require(`../../img/img-${imageUrlParse()}.jpg`)}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">Size: {props.productSize}</p>
          <p className="card-text">Rp{priceFormatting(props.productPrice)}</p>
        </div>
      </div>
    </>
  );
};

export default ThumbnailCard;
