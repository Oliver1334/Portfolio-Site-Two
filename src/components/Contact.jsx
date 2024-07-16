import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#040F0F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/pbqgogdb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#248232] text-[#FCFFFC]'>Contact</p>
                <p className='text-[#FCFFFC] py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='p-1 bg-[#FCFFFC]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-1 bg-[#FCFFFC]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FCFFFC] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] px-4 py-3 my-8 mx-auto flex items-center'> Let's Collaborate</button>

        </form>

    </div>
  )
}
