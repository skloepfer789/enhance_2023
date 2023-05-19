import { useNavigate } from "@remix-run/react";

import Modal from "../components/modal";

export const meta = () => {
  return [
    {title: "Payment Portal - Enhance Printing"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Enhance Printing, All rights reserved."},
    {name: "description", content: "Pay your invoice here. All payments processed through Stripe"},    
   {name: "og:title", content: "Pay Your Invoice"},
   {name: "og:description", content: "Pay your invoice here. All payments processed through Stripe"},
   {name: "og:image", content: "/favicon.ico"},
  ];
};
  
  export default function PayPage() {

    const nav = useNavigate();
    function closeHandler(){
      nav(-1);
    }
    return (
      <main>
        <Modal onClose={closeHandler}>
          <h2>Make a Payment</h2>
        </Modal>
      </main>
    );
  }
  