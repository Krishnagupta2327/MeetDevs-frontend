import axios from 'axios';
import {BaseUrl} from '../Utils/const'
import { useSelector } from "react-redux";
import {useState} from "react";


export const Premium = ()=>{
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
    const user = useSelector((store)=> store.user)
   const [membershipType,setMembershipType] = useState(user?.membershipType);

   
    const allPlans = [
      {
        name: "Silver",
        price: "499",
        duration: "Valid for 2 months",
        highlight: false,
        features: [
          "Send up to 100 connection requests per day",
          "Chat with your connections",
          "500 feed views per day",
        ],
      },
      {
        name: "Gold",
        price: "799",
        duration: "Valid for 3 months",
        highlight: true,
        features: [
          "Send up to 300 connection requests per day",
          "Chat with your connections",
          "Chat with non-connections",
          "1000 feed views per day",
        ],
      },
    ];

    
    const plans = membershipType === "Silver"
      ? allPlans.filter((p) => p.name === "Gold")
      : allPlans;

    const cardClass = `rounded-3xl border p-10 backdrop-blur-xl text-center transition-colors duration-300 ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-black/5 shadow-lg"}`;

    const handleBuy = async (planName)=>{
      try{
      console.log("buy start")
      const resp = await axios.post(BaseUrl + "/payment/create",{
        plan : planName
      },{
        withCredentials:true
      });
      console.log("ekjhiurr");
        console.log(resp?.data?.data);
        console.log("ekjhiurrolooo");
      

        

      
        console.log("ekjhiurrol333ooo");
        const order = resp?.data?.data;
        console.log("ekjhiurrol3232ooo");
        const options = {
          "key": "rzp_test_TJmfN8SptVod2D" ,// Replace with your Razorpay Key ID
          "amount": order.amount, // Amount in paise (50000 = ₹500)
          "currency": order.currency,
          "name": "MeetDevs",
          "description": "Upgrade your plan, explore more...",
          // "image": "https://yourdomain.com/logo.png",
          "order_id": order.id, // Generated from backend
          "handler": async function (response) {
           
              alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
              // You should verify payment on the server here
             
              const mbt = await axios.get(BaseUrl + "/payment/verify",{withCredentials:true});
              console.log('hiii')
              console.log(mbt)
              setMembershipType(mbt.data);
              console.log(membershipType);
             
          },
          "prefill": {
              "name": order.notes.firstName,
              "email": order.notes.email,
            
          },
          "notes": order.notes,
          "theme": {
              "color": "#3399cc"
          },
          "modal": {
              "ondismiss": function(){
                  console.log("Payment popup closed");
              }
          }
      };
      console.log("ekjhiurroloo11111o");
  
          const rzp=  new window.Razorpay(options);
         
          rzp.open();
         
          // e.preventDefault();
       }catch(err){
          console.log(err);
       }
    }

    
    if (membershipType === "Gold") {
      return (
        <div className="px-4 py-12 md:py-16 flex justify-center">
          <div className={`${cardClass} max-w-md relative overflow-hidden`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="text-4xl mb-4">🏆</div>
            <h1 className={`text-2xl font-bold tracking-tight mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              You're a <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Gold Member</span>
            </h1>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              You already have our top-tier plan — enjoy unlimited chats and maximum visibility on MeetDevs.
            </p>
          </div>
        </div>
      );
    }

    return (
        <div className="px-4 py-12 md:py-16">

          <div className="flex flex-col items-center text-center mb-14">
            <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
              {membershipType === "Silver" ? "Upgrade" : "Pricing"}
            </span>
            <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              {membershipType === "Silver" ? (
                <>Go for <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Gold</span></>
              ) : (
                <>Go <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Premium</span></>
              )}
            </h1>
            <p className={`text-sm max-w-md ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {membershipType === "Silver"
                ? "You're on Silver — upgrade to Gold for chat with non-connections and higher daily limits."
                : "Unlock more connections, more visibility, and more conversations with the developer community."}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex-1 rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                  plan.highlight
                    ? (isDark ? "bg-linear-to-b from-sky-500/10 to-blue-600/5 border-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.15)]" : "bg-linear-to-b from-sky-50 to-blue-50 border-sky-300 shadow-xl")
                    : (isDark ? "bg-white/3 border-white/10" : "bg-white border-black/5 shadow-md")
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-sky-400 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                <h2 className={`text-xl font-bold tracking-tight mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {plan.name} Membership
                </h2>
                <p className={`text-xs mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{plan.duration}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>₹{plan.price}</span>
                  <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>one-time</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 mt-0.5 text-sm">✓</span>
                      <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    plan.highlight
                      ? "w-full bg-linear-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                      : `w-full text-sm font-semibold py-3 rounded-xl border transition-all ${isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-white" : "bg-black/5 hover:bg-black/10 border-black/10 text-gray-900"}`
                  }
                  onClick = {()=>{ handleBuy(plan.name) }}
                >
                  {membershipType === "Silver" ? "Upgrade to Gold" : `Buy for ₹${plan.price}/-`}
                </button>
              </div>
            ))}
          </div>

          <p className={`text-center text-xs mt-10 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Secure payments powered by Razorpay. Cancel anytime.
          </p>
        </div>
    )
}