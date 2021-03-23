import React,{useState} from 'react'

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name:"",
        email:"",
        message:""
    })
    const handleChange = e=>{
        const {name,value} = e.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();
        console.log('form submitted!')
        setFormState({
            name:"",
            email:"",
            message:""
        })
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
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
