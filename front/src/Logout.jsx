import React from 'react'
import axios from 'axios';
import cookie from 'js-cookie';
import { RiLogoutCircleRFill } from "react-icons/ri"

const Logout = () => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
          cookie.remove(key, { expires: 1 });
        }};
        
    const handleLogout = async () => {
        try {
            await axios({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}Api/users/logout`,
                withCredentials: true,   
            });
            removeCookie('jwt');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <li onClick={handleLogout}>
                <RiLogoutCircleRFill/>
            </li>
        </div>
    )
}


export default Logout;