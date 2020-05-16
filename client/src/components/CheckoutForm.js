import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, handleChanges, handleSubmit] = useForm(false);
  const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={props.values.firstName}
            onChange={props.handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={props.values.lastName}
            onChange={props.handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={props.values.address}
            onChange={props.handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={props.values.city} onChange={props.handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={props.values.state} onChange={props.handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={props.values.zip} onChange={props.handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {props.values.firstName} {props.values.lastName}
          </p>
          <p>{props.values.address}</p>
          <p>
            {props.values.city}, {props.values.state} {props.values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
