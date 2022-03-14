import {useState} from "react"
import Calls from "./Calls"

function FormHooks() {

    const {getHomeCountry} = Calls()

    const [form, setForm] = useState({
        homeCountry: "",
    })

    const handleChange = e => {
        setForm({...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handleSubmit = e => {
        e.preventDefault()
        getHomeCountry(form.homeCountry)
    }

    return {
        handleChange,
        handleSubmit,
    }
}

export default FormHooks