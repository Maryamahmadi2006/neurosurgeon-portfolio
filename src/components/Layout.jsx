import { Outlet } from 'react-router-dom';import Navbar from './Navbar';import Footer from './Footer';
export default function Layout(){return <><div id="top"><Navbar/></div><main><Outlet/></main><Footer/></>}
