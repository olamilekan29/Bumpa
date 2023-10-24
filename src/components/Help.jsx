import websitehome from "../assets/img/websitehome.png"
const Help = () =>{
    return(
        <>
        <h1 className="text-black text-[48px] text-center font-semibold pt-[50px] mb-[8px]">How <span className="text-[#009444]">Bumpa</span> can help you</h1>
        <h3 className="text-#7b7b7b text-[20px] text-center">There’s a Bumpa feature for every business need.</h3>
        <div className="flex">
            <div className="p-[70px]">
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Create a business Website</h1></span>
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Issue Invoices & Send Receipts</h1></span>
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Record Sales, Expenses & Customer Information</h1></span>
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Send messages to Customers</h1></span>
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Receive business report</h1></span>
                <span><h1 className="text-[20px] text-[#202021] pt-[20px] border-b border-black-200 font-semibold">Meta Integration</h1></span>
            </div>
            <div>
                <img className="w-[600px] p-[70px]" src={websitehome} />
            </div>
        </div>
        </>
    )
};
export default Help