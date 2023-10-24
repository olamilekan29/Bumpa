import heroimg from "../assets/img/heroimg.png"
const Getstarted = () =>{
    return(
        <>
        <div className="md:flex md:px-[60px] md:pt-[50px] grid pl-[15px]">
            <div >
                <h1 className="md:text-[60px] md:font-medium pb-[15px] text-[30px]">The best business <br />management app <br />for SMEs.</h1>
                <p className="md:text-[18px] md:font-normal pb-[20px] text-[14px]">Create a business website, issue invoices, record sales, receive financial reports & manage all business operations on <br /> the Bumpa app.</p>
                <button className="bg-[#009444] p-[10px] rounded-lg text-[#fff] text-sm w-[220px] text-[20px] font-semibold h-[50px]">Get Started</button>
            </div>
            <div>
        <img src={heroimg}/>
            </div>
        </div>
        
        
        
        </>
    )
};
export default Getstarted
 