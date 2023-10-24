import facebook from "../assets/img/facebook.png"
import instagram from "../assets/img/instagram.png"
import paystack from "../assets/img/paystack.png"
import flw from "../assets/img/flw.png"
import pixel from "../assets/img/pixel.png"

const Connected = () =>{
    return(
        <>
        <div className="bg-[#202021] grid items-center mx-[50px] rounded-xl">
            <div className="pl-[80px]">
                <h1 className="text-white text-[48px] ">Connected Apps</h1>
                <h3 className="text-white text-[20px] ">Your Bumpa app works easily with these business tools.</h3>
                <button className="text-left text-[19px] text-[#009444] pt-[20px] pb-[70px] font-semibold">Learn More</button>
            </div>
        <div className="pl-[80px] flex pr-[80px] justify-between pb-[130px]">
            <div className="width-[164px] mr-[24px] grid">
                <div className="w-[100px] h-[100px]  justify-center bg-[hsla(215,9%,64%,.1)]  rounded-xl"><img className="p-[10px]" src={facebook} alt="" /></div>
                <div className="text-center text-white">
                    <h3 className="text-[24px]">Facebook</h3>
                  <p className="text-[14px]">Connected</p>
                </div>

            </div>
            <div className="width-[164px] mr-[24px] grid">
                <div className="w-[100px] h-[100px]   justify-center bg-[hsla(215,9%,64%,.1)]  rounded-xl "><img className="p-[10px]" src={instagram} alt="" /></div>
                <div className="text-center text-white">
                    <h3 className="text-[24px]">instagram</h3>
                  <p className="text-[14px]">Connected</p>
                </div>

            </div>
            <div className="width-[164px] mr-[24px] grid">
                <div className="w-[100px] h-[100px]  justify-center bg-[hsla(215,9%,64%,.1)]  rounded-xl"><img className="p-[10px]" src={paystack} alt="" /></div>
                <div className="text-center text-white">
                    <h3 className="text-[24px]">paystack</h3>
                  <p className="text-[14px]">Connected</p>
                </div>

            </div>
            <div className="width-[164px] mr-[24px] grid">
                <div className="w-[100px] h-[100px]  justify-center bg-[hsla(215,9%,64%,.1)]  rounded-xl"><img className="p-[10px]" src={flw} alt="" /></div>
                <div className="text-center text-white">
                    <h3 className="text-[24px]">Flw</h3>
                  <p className="text-[14px]">Connected</p>
                </div>

            </div>
            <div className="width-[164px] mr-[24px] grid">
                <div className="w-[100px] h-[100px]  justify-center bg-[hsla(215,9%,64%,.1)]  rounded-xl"><img className="p-[10px]" src={pixel} alt="" /></div>
                <div className="text-center text-white">
                    <h3 className="text-[24px]">Pixel</h3>
                  <p className="text-[14px]">Connected</p>
                </div>

            </div>
        </div>
        </div>
        </>
    )
};
export default Connected