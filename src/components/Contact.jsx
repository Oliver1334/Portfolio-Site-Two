import React, { useState } from 'react'

export const Contact = () => {
  // states to keep track of form inputs
  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Functions to handle changes in input fields
  const handleNameChange = (e) => { setName(e.target.value) };
  const handleEmailChange = (e) => { setEmail(e.target.value) };
  const handleMessageChange = (e) => { setMessage(e.target.value) };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Check if all required fields are filled
    if (!name || !email || !message) {
      setError('Please fill out all fields.');  // Set error message if fields are missing
      return;
    }
  
    setError('');  // Clear the error message if all fields are filled
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    try {
      await fetch('https://getform.io/f/', {
        method: 'POST',
        body: formData,
      });
  
      // Clear form fields and show a success message
      setName('');
      setEmail('');
      setMessage('');
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred while submitting the form.');  // Set error message on failure
    }
  };


  return (
    <div name='contact' className='w-full h-screen bg-[#040F0F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/pbqgogdb" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#248232] text-[#FCFFFC]'>Contact</p>
                <p className='text-[#FCFFFC] py-4'>// Submit the form below or send me an email - oliver.taylor1334@outlook.com</p>
            </div>
            <input className='p-1 bg-[#FCFFFC]' type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input className='my-4 p-1 bg-[#FCFFFC]' type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className='bg-[#FCFFFC] p-2 w-full max-w-full max-h-[300px] resize-y' name="message" rows="10" placeholder='Message' value={message} onChange={handleMessageChange} maxLength="1500"></textarea>
            <p className='text-[#FCFFFC]'>Character count: {message.length}/1500</p>
            {error && <p className='text-red-500 mb-2'>{error}</p>}
            <button className='text-white border-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] px-4 py-3 my-8 mx-auto flex items-center' type='submit' > Let's Collaborate</button>

        </form>

    </div>
  );
};
