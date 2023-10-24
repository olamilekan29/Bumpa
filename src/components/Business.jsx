import connect from "../assets/img/connect.png";
import business from "../assets/img/business.png"
const Business = () => {
    return(
        <>
       <div className="flex p-[50px] ">
        <div className="grid bg-[rgba(235,246,240,.5)] p-[40px] rounded-xl mr-[30px]">
            <h1 className="text-[35px] font-semibold pr-[100px]">Bring your business online</h1>
            <h2 className="text-[15px] pt-[20px] pb-[20px]">Create a professional business website in 60 seconds and <br /> start selling to anyone on the internet.</h2>
            <button className="text-left text-[16px] text-[#009444]">Learn More</button>
            <img className="w-[450px] h-[300px] pt-[60px]" src={business} />
        </div>

        <div className="grid bg-[rgba(235,246,240,.5)] p-[40px] rounded-xl">
                <h1 className="text-[35px] font-semibold pr-[100px]">Become a tech-enabled business</h1>
                <h2 className="text-[15px] pt-[20px] pb-[20px]">Create invoices & receipts, save customer details and record <br /> your daily sales from the shop, website, social media, and <br /> marketplaces easily on your mobile phone.</h2>
                <button className="text-left text-[16px] text-[#009444]">Learn More</button>
                <img className="w-[450px] h-[300px] pt-[60px]" src={connect} />
            </div>
       </div> 

      
        
        </>
    )
};
export default Business