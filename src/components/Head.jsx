import React from "react";
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.svg"
const Head = () => {
    return(
        <>
         <header className="flex items-center justify-between   px-[10px] md:px-[30px] py-[40px] ">
           
        
            <div className="md:flex hidden items-center gap-[20px]">
                 <img src={logo}/>
            <ul className="flex gap-[50px] text-15px items-center">
                <li>Features </li>
                <li><select><option>Company</option><option>About Us</option> <option>Career</option></select></li>
                <li><select><option>Categories</option> <option>Fashion</option></select></li>
                <li>Pricing</li>
                <li><select><option>Learn</option><option>Blog</option> <option>FAQs</option></select></li>
            </ul>
              <button className="bg-[rgba(0,148,68,.13)] p-[10px] rounded-full text-[#009444] text-sm w-[170px] font-semibold">sell on instagram</button>
           <div className="flex">
           <Link to={"/LoginPage"}><button  className=" p-[10px] rounded-lg text-[#009444] text-sm border-2 border-[#009444] h-[50px] mr-[5px] font-semibold w-[150px]">Login</button></Link>
             {/* <link to={"/LoginPage"}> >Login</button></link> */}
            <button className="bg-[#009444] p-[10px] rounded-lg text-[#fff] text-sm w-[150px] font-semibold h-[50px]">Get Started</button>
            </div></div>
        </header>
        </>
    )
};
export default Head;