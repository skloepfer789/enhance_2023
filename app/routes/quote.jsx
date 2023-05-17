import { useNavigate } from "@remix-run/react";

import Modal from "../components/modal";

export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};
  
  export default function QuotePage() {

    const nav = useNavigate();
    function closeHandler(){
      nav('..');
    }
    return (
      <main>
        <Modal onClose={closeHandler}>
          <h2>Quote Request</h2>
        </Modal>
      </main>
    );
  }