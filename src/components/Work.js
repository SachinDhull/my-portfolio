import React from 'react'
import Disney from'../assests/disney.png'
import Netflix from'../assests/netflix.png'
import Youtube from '../assests/youtube.png'
import Game from '../assests/fighter.png'
import Port from '../assests/portfolio.png'
import Cart from '../assests/Cart.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-10'>Work</p>
        <p className='py-6'>// Check out some of my recent work</p>
       </div>

       {/* container */}

        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid Item */}
            <div style={{backgroundImage:`url(${Disney})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Disney+ Clone using Reactjs
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://sachindhull.github.io/hotstar-clone/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/SachinDhull/hotstar-clone'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${Netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Netflix Clone using Reactjs
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://sachindhull.github.io/react-netflix-clone/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/SachinDhull/netflix-clone'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${Youtube})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Youtube Home page html & Css
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://sachindhull.github.io/youtube-homepage-ui/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/SachinDhull/youtube-homepage-ui'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${Game})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      javascript street fighter game
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://street-fighter.sachindhull1.repl.co/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${Port})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Portfolio code
                    </span>
                    <div className='pt-8 text-center'>
                        {/* <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a> */}
                        <a href='https://github.com/SachinDhull/my-portfolio'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${Cart})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* hover */}

               
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Shopping Cart App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://sachindhull.github.io/react-context-cart-app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/SachinDhull/react-context-cart-app'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
