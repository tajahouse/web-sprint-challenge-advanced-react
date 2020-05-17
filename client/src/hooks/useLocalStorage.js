import { useState } from 'react';

export const useLocalStorage = ( key, initialValue ) => {
    
const [showSuccessMessage, setShowSuccessMessage] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;

   
}
);
const setValue = value =>{
    setShowSuccessMessage(value);
    window.localStorage.setItem(key, JSON.stringify(value));
}

return [setValue, showSuccessMessage, setShowSuccessMessage];
}
