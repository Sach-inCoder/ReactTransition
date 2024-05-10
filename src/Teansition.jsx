import { 
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useNavigation,
    useLocation,
} from "react-router-dom";
import "./assets/teansition.css";
import { Children } from "react";

 const About = ()=>{
    <section style={{background:"#fff",color:"#000"}}>
        <Nav title="About"/>
    </section>
 };

 const Contact = ()=>{
    <section style={{background:"#000",color:"#fff"}}>
        <Nav title="Contact"/>
    </section>
 };

 const Link = ({to, Children, colorEnd}) => {
    const navigate = useNavigation();
    const location = useLocation();

    const handleClicked = () => {
        const bubble = document.querySelector("#bubble");
        bubble.classList.add("show");
        
        const bubbleSecond = bubble.querySelector("div:nth-child(2)");
        bubbleSecond.style.background = colorEnd;

        setTimeout(()=> navigate(to), 1000);

        setTimeout(()=>{
            bubble.classList.remove("show");
            bubble.classList.add("hide");
        },1200);

        setTimeout(()=>{
            bubble.classList.remove("hide");
        },2400);
    };

    return (
        <a onClick={handleClicked}>{Children}</a>
    );
}

const Nav = ({title}) => {
    return(
        <nav>
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to="/about" colorEnd="#fff">About</Link>
                </li>
            </ul>
        </nav>
    );
};

const Bubble = () => {
    return (
        <div id="bubble">
            <div style={{animationDuration:"1200"}} className="bubbles_first"></div>
            <div style={{animationDuration:"1200"}} className="bubbles_second"></div>
        </div>
    );
};

const Layout = () => {
    return (
        <>
            <Bubble />
            <Outlet />
        </>
    );
};

export const Teansition = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}