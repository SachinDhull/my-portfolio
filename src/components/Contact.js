import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/84f84e0f-31e2-4343-b63b-c19980d5bf1d' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-white my-2'>// Submit the form below or shoot me an email - sachindhull619@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2'  name='message' placeholder='Message' rows='10'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collab!</button>
      </form>
    </div>
  )
}

export default Contact
