import { useState } from "react";

export const useForm = (intialValues) => {
    const [formValues, setFormValues] = useState(intialValues)

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    };


    return {formValues, onChangeHandler};
}