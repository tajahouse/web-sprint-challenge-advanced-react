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

  //Testing address input field
  const expectedAddress = "444 Fake St."
  const address = getByTestId("address");
  fireEvent.change(address, {target:{value:expectedAddress}})

  //Testing city input field
  const expectedCity = "Fakeness City"
  const city = getByTestId("city")
  fireEvent.change(city,{target:{value:expectedCity}})
  
  //Testing State input field
  const expectedState = "Faker York"
  const state = getByTestId("state")
  fireEvent.change(state, {target:{value:expectedState}})

  //Testing Zip input field
  const expectedZip = "00000"
  const zip = getByTestId("zip")
  fireEvent.change(zip, {target:{value:expectedZip}})

  //Testing button
  const button = getByTestId("button")
  fireEvent.click(button)

  // Wait for page to update with success message

  const successMessage = getByTestId("successMessage")
  fireEvent.click(button)
  expect(successMessage).toBeInTheDocument();

})