import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {  useNavigate } from 'react-router-dom';

const CartList = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const sendDataHandler = (getDAta) => {
        console.log(getDAta)
        navigate(`/details`, { state: getDAta })


    }
    return (
        <div>
            <section className="border-2 border-black m-4">
                <header className="bg-pink-100 p-1 pl-2 font-semibold   ">
                    Coding test
                </header>
                <article className="border-t-2 border-black">
                    <div className="bg-gradient-to-r from-blue-200 to-pink-100 p-2">
                        <div className='p-2  flex justify-between'>
                            <div>
                                <i className="fas fa-arrow-left"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-arrow-right"></i>
                            </div>
                            <div className=" w-width158 ">
                                <div className="relative  flex w-full flex-wrap items-stretch ">
                                    <input
                                        type="search"
                                        className="bg-white relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="button-addon2"
                                    />

                                    <span
                                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                        id="basic-addon2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <i className="fas fa-sync"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-bars"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-star"></i>
                            </div>


                        </div>
                        <div className="border-2 border-black m-2 bg-white pt-2 p-10">
                            <div className="border-b-2 border-black font-bold pb-2">
                                Coding Skill PLAY
                            </div>
                            <div className='font-bold mt-8'>User Card List</div>

                            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                                {
                                    userData.slice(0, 8).map(val => {
                                        return <div>
                                            <article className="grid grid-cols-1 sm:grid-cols-2 gap-1 ">
                                                <div className=" flex justify-between ">
                                                    <div className="text-30 bg-blue-500 text-center w-width45 h-height45 leading-44 text-white">
                                                        {val.name.charAt(0) + val.name.charAt(val.name.indexOf(" ") + 1)}
                                                    </div>
                                                    <div className="w-width158 h-height45 p-0 flex flex-col  justify-between" >
                                                        <div>
                                                            <div className='p-0 m-0 text-10'>
                                                                {val.name} (@{val.username})
                                                            </div>
                                                            <div className='p-0 m-0 text-7' style={{ color: 'blue' }}>
                                                                {val.email}
                                                            </div>
                                                        </div>
                                                        <div className='p-0 m-0 text-9'>
                                                            Company: {val.company.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" h-height45 p-0 flex flex-col  justify-between" >
                                                    <div>
                                                        <div className='p-0 m-0 text-10'>
                                                            {val.phone}
                                                        </div>
                                                        <div className='p-0 m-0 text-7' >
                                                            Website: {val.website}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => sendDataHandler(val)}
                                                        className="w-width100 h-height20 bg-transparent hover:bg-blue-500  font-semibold hover:text-white border border-black hover:border-transparent text-12 rounded-full">
                                                        Details
                                                    </button>
                                                </div>
                                            </article>
                                        </div>
                                    })
                                }








                            </section>

                            {/* <div className='mt-10 flex justify-between '>
                                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full-l">
                                    Previous
                                </button>

                                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full-r">
                                    Next
                                </button>


                            </div> */}

                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default CartList