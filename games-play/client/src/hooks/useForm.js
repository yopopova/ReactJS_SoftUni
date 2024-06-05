// Custom hooks allow us to have access to other hooks.
import { useState } from "react";

// 'submitHandler' is the last function which will be executed after the form was submitted
export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues); // initialValues = object

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}