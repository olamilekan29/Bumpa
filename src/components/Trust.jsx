import Peculiar from "../assets/img/Peculiar.jpg"
const Trust = () =>{
    return(
        <>
        <h1 className="text-[48px] text-black font-semibold text-center">Trusted by over <span className="text-[#009444]">50,000</span> SMEs</h1>
        <h3  className="text-[18px] text-black font-semibold text-center">Our customers talk about how Bumpa solves real life business problems for <br /> them</h3>
        
        <div className="flex py-[100px]">
            <img className="h-[400px] w-[800px] rounded-2xl ml-[50px]" src={Peculiar} alt="" />
                <div className="ml-[200px] mr-[100px]">  
                    <h1 className="text-[44px] font-semibold"> “Extraordinary”</h1>

                    <h2 className="text-[16px] text-[var(--black02)] m-[12px] font-bold"> Bumpa is doing an extraordinary thing for every small and Medium business owners on the platform. For Shop Tadi, It's more than just an app. It's the fact that they make out time to teach and walk me through the process of being a better entrepreneur. Not every brand can do that and that's incredible</h2>

                    <h3 className="text-16px"> — Peculiar, CEO Shop Tadi </h3>
                </div>
           
        </div>
        </>
    )
};
export default Trust