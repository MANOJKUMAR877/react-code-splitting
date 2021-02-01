import React from "react";
import ReactDom from "react-dom";
import Button from "./../Button";
import { render } from "@testing-library/react";


("<------------Its for button rendering-------------->");

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button></Button>, div);
});

("<-------------Its for Props Testing and the text of the props -------------->");

it("render button correctly", () => {
  const { getByTestId } = render(<Button label={"Take Me To Chart"}></Button>);
  expect(getByTestId("button")).toHaveTextContent("Take Me To Chart");
});


