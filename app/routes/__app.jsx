import { Outlet } from "@remix-run/react";
import ContactForm, {links as contactLinks} from "../components/contactform";
import Header from "../components/header";

export const links = () => [
    ...contactLinks(),
];

export default function App() {

    return (
    <>
        <Header />
        <Outlet />
        <ContactForm />
    </>
    );
}