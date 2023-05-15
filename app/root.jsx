import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/styles.css";

import Header, {links as headerLinks} from "./components/header";
import Footer, {links as footerLinks} from "./components/footer";
import ContactForm, {links as contactLinks} from "./components/contactform";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ...headerLinks(),
  ...footerLinks(),
  ...contactLinks(),
  {rel: "stylesheet", href: styles},
  {
    rel: 'favicon',
    sizes: '180x180',
    href: '../public/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '../public/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '../public/Enhance_2023-Favicon-32.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '../public/Enhance_2023-Favicon-16.ico',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '../public/favicon.ico',
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ContactForm/>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
