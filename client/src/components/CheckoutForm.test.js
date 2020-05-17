import React from "react";
import { render, getByTestId, findByTestId, fireEvent } from "@testing-library/react";
import * as rtl from "@testing-library/dom"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});

it('check out form test', async ()=>{
  const {getByTestId, findByTestId} = render(<CheckoutForm />);

  //Testing first name input field
  const expectedFirstName = "Taja";
  const firstName = getByTestId("firstName");
  fireEvent.change(firstName, {target:{value:expectedFirstName}})

  //Testing last name input field
  const expectedLastName = "House";
  const lastName = getByTestId("lastName");
  fireEvent.change(lastName, {target:{value:expectedLastName}})
})