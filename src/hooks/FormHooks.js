import {useState} from "react"

function FormHooks() {
    const [form, setForm] = useState({
        homeCountry: "",
        visitCountry: "",
        gasPrice: "",
    })
}

export default FormHooks