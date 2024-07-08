import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function onSubmit(e){
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/pPrX5lc4kbh", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                }
                else if(response.code === 422){
                    // Field validation failed
                    alert("Field validation failed");
                }
                else {
                    // other error from formcarry
                    alert("Something went wrong!");
                }
            })
            .catch(error => {
                // request related error.
                alert(error.message ? error.message : error);
            });
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center text-white'>
            <form onSubmit={(e) => onSubmit(e)} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-emerald-500'>Contact</p>
                </div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='Name' name='name' className='p-2 mb-4'/>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Email' name='email'  className='p-2 mb-4'/>
                <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} id='message' name='message' rows='10' className='p-2 mb-2'/>
                <button className='flex items-center mx-auto border-2 px-4 py-2 my-3 text-white bold hover:bg-emerald-500 duration-500 hover:border-emerald-500' type='submit'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact;