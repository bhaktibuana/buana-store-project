import React from "react";
import "./ThumbnailCard.css";

const ThumbnailCard = (props) => {
  const cardStyle = {
    width: "auto",
    "box-shadow": "rgb(0 0 0 / 4%) 0px 7px 11px",
    border: "none",
    "z-index": "0",
  };

  const titleFormatting = (title) => {
    const titleArr = title.split("");

    if (titleArr.length > 33) {
      const tempArr = titleArr.slice(0, 30);

      for (let i = 0; i < 3; i++) {
        tempArr.push(".");
      }

      return tempArr.join("");
    } else {
      return titleArr.join("");
    }
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
      <div
        id="thumbnail"
        className="card"
        style={cardStyle}
        onClick={() => {
          props.setProductDetail(true);
          props.setItemSelectedCode(props.productCode);
        }}
      >
        <img
          src={require(`../../img/img-${imageUrlParse()}.jpg`)}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{titleFormatting(props.productName)}</h5>
          <p className="card-text">Size: {props.productSize}</p>
          {props.productDiscount > 0 ? (
            <div className="discount-container">
              <div className="discount-alert">{props.productDiscount}%</div>
              <del>Rp{priceFormatting(props.productPrice)},-</del>
            </div>
          ) : (
            ""
          )}

          <div className="price-container">
            <p id="price" className="card-text">
              Rp
              {priceFormatting(
                Math.floor(
                  (props.productPrice * (100 - props.productDiscount)) / 100
                )
              )}
              ,-
            </p>
            <p id="details" className="card-text">
              Click for details
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailCard;
