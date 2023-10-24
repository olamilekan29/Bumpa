import { Link } from 'react-router-dom'
import woman from "../assets/img/woman.png"
import logo from "../assets/img/logo.svg"
const LoginPage = () => {

    return(
        <>
        <div className='flex'>
            
            <img className='h-[600px] pl-[30px] pt-[40px] ' src={woman} />
           

           <div>
            <img className='pt-[40px]' src={logo} alt="" />
            <h2 className='text-[40px] pt-[80px] font-semibold'>Welcome Back</h2>
            <h3 className='text-[15px] pb-[30px]'>Get back to managing your businesses like a pro</h3>
            <div>
              <label className="grid pb-[20px] "> Email adress*</label> 
              <input className="w-[550px] h-[50px] border border-[#000] rounded-xl " type="text" placeholder="you@gmail.com" />
             </div> 
             <div>
              <label className="grid py-[20px]  "> Password*</label> 
              <input className="w-[550px] h-[50px] border border-[#000] rounded-xl " type="password" placeholder="" />
             </div>
             <div className='flex pt-[30px] justify-between pb-[20px]'>
              <div className='flex'><input type="checkbox"/> <h4 className="pl-[10px]">Remember Password</h4></div> 
              <h4 className='text-[#009444] font-semibold'>Forgot Password?</h4>
             </div>
             <button className='w-[550px]  bg-[#009444] text-center text-white h-[40px] rounded'>Login</button>
           </div>

           
       </div>
        </>
    )
}
export default LoginPage;