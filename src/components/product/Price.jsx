import React from "react";

export default function Price({ currency, price }) {
  return (
    <>
      {currency}
      <span>
        {currency === "R$"
          ? price.toFixed(2).replace(".", ",")
          : price.toFixed(2)}
      </span>
    </>
  );
}
