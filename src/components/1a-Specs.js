import React from "react";
import Parts from "./1b-Parts";

export default function Specs(props) {
  return (
    <div className="specs">
      {Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Parts
              features={props.features}
              feature={feature}
              state={props.state}
              updateFeature={props.updateFeature}
            />
          </fieldset>
        );
      })}
    </div>
  );
}
