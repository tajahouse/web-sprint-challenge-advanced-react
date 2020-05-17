import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



  

export const useForm = () =>{
   const [values, setValues] = useState( {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  }
  );
    const [setValue, showSuccessMessage, setShowSuccessMessage] = useLocalStorage('initialValue');

    
    console.log("Initial Value", values)

    const handleChanges = (e) => {
      
        setValues({ ...values, [e.target.name]: e.target.value });
     
 
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        setShowSuccessMessage(true);
 
      };

     
    return [handleChanges,values, handleSubmit,  showSuccessMessage];
}