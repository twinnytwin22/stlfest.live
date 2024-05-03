'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            console.log(formData.email)
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setStatus("success");
            if (res) {
                toast("Your message was sent successfully");
            }
            setFormData({ email: "", });
        } catch (err) {
            setStatus("error");
            toast("Error sending email. Please try again later.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex-col md:flex-row flex mx-auto items-center content-center max-w-md w-full'>
                <input type="text" className='mx-auto p-2.5 w-full' placeholder='your email' onChange={handleChange} id='email' name='email' />
                <button className='p-2.5 bg-red-600 text-white font-["owners2"] px-4 whitespace-nowrap hover:scale-105 duration-150 ease-in-out w-full md:w-auto'>Sign up for updates</button>
            </form>
            {status === "success" && <p className=" text-white font-owners pt-2.5 text-lg">Email saved!</p>}
        </div>)
}

export default SignUp