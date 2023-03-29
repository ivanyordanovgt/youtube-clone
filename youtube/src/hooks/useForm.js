import { useState } from "react";

export const useForm = (intialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(intialValues)

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if (onSubmitHandler) {
            onSubmitHandler(formValues);
        }
    }

    return {formValues, onChangeHandler, onSubmit};
}