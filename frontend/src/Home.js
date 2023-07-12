import React from 'react'
import { useNavigate } from "react-router-dom";

const Home =(props) =>{
    const navigate = useNavigate();

    return (
        <div>
            Project Booking
            <div onClick={()=>{
                navigate({
                    pathname: "/calendar",
                    // search: `?${createSearchParams({ id: item._id})}`,
                    // state: { id: item._id }
                })
            }}>
                View calendar
            </div>
        </div>
    )
}

/*
  
*/

export default Home 