import React from "react";
import Option from "./2a-Option";
import Total from "./2a-Total";

export default function Summary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Option state={props.state} />
      <Total state={props.state} />
    </section>
  );
}
