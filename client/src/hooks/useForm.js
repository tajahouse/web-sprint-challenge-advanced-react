import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  

export const useForm = () =>{
    //const [someValue, setSomeValue] = useLocalStorage(darkMode)
   
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage(initialValue);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

    return [showSuccessMessage, handleChanges, handleSubmit, values];
}