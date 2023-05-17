import { Outlet } from "@remix-run/react";
import ContactForm from "../components/contactform";

export default function App() {

    return (
    <>
        <Outlet />
        <ContactForm />
    </>
    );
}