import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = ()=>{
    const[dataForm, setDataForm] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChangeInput = (e)=>{
        setDataForm({...dataForm, [e.target.name]: e.target.value})
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
    }
}