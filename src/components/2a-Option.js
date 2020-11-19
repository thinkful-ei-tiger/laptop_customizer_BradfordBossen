import React from "react";

export default function Option(props) {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="Option">
      {Object.keys(props.state.selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = props.state.selected[feature];
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
