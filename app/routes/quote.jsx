import { useNavigate } from "@remix-run/react";

import Modal from "../components/modal";
import { useState } from "react";

export const meta = () => {
  return [
    {title: "Request a Quote - Enhance Printing"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Enhance Printing, All rights reserved."},
    {name: "description", content: "Tell us about your upcoming project and we can start making your vision come true!"},    
   {name: "og:title", content: "Get a Quote from Enhance Printing"},
   {name: "og:description", content: "ell us about your upcoming project and we can start making your vision come true!"},
   {name: "og:image", content: "/favicon.ico"},
  ];
};
  
  export default function QuotePage() {
    const nav = useNavigate();

    function closeHandler(){
      nav(-1);
    }

    return (
      <main>
        <Modal onClose={closeHandler} >
          <h2>Quote Request</h2>
        </Modal>
      </main>
    );
  }