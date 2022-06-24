import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return {form, onChange, cleanFields}
}

export default useForm;