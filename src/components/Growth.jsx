import phone from "../assets/img/phone.png"
const Growth = () =>{
    return(
        <>
        <div className="bg-[#009444] flex items-center mx-[50px] rounded-xl">
            <img className="w-[400px] h-[550px] pl-[90px] pt-[40px]" src={phone}  />
            <div className="pl-[80px]">
                <h1 className="text-white text-[50px]">Grow your business like a pro!</h1>
                <h3 className="text-white text-[20px] font-thin">Connect all the tools you need to grow your business, like payments, Google <br /> Analytics, Facebook Pixel, Instagram, etc, to your Bumpa app.</h3>
                <button className="text-left text-[19px] text-[#fff] pt-[30px] font-semibold">Learn More</button>
            </div>
        </div>
        </>
    )
};
export default Growth
