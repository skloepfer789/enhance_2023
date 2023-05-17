import { useNavigate } from "@remix-run/react";

import Modal from "../components/modal";

export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
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
  