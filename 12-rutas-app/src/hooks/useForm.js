import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
        ...values,
        [name]: value,
        });
    };
    
    return [values, handleInputChange];
};