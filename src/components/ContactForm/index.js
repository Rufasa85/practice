import React,{useState,useEffect} from 'react'
import {validateEmail} from "../../utils/helpers"

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name:"",
        email:"",
        message:""
    })
    const [errMessages,setErrMessages] = useState([])

    useEffect(()=>{
        console.log('err message effect');
        console.log(errMessages)
    },[errMessages])
    const handleChange = e=>{
        const {name,value} = e.target;
       
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();
       const myErr = [];
        if(formState.name.length<1){
            myErr.push("name is required")
            
        } 
        if(formState.email.length<1) {
            myErr.push("email is required")
        }
        if(formState.message.length<1) {
            myErr.push("message is required")
        }
        if(!validateEmail(formState.email)){
            myErr.push("email format invalid")
        }
        if(myErr.length<1){
            console.log('form submitted!')
            setFormState({
                name:"",
                email:"",
                message:""
           
            })
        }
        else {
            myErr.forEach(msg=>{
                console.log(msg);
            })
            setErrMessages(myErr);
        }
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} value = {formState.name} type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input onChange={handleChange} value = {formState.email} type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onChange={handleChange} value = {formState.message} rows="5" />
                </div>
                {errMessages.length? errMessages.map(msg=><p className="error-text">{msg}</p>):null}
                <button data-testid="submitBtn" type="submit">Submit</button>
            </form>
        </section>
    )
}
