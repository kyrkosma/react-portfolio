import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function App() {
    return (
        <h1>
            <Navbar/>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
        </h1>
    )
}