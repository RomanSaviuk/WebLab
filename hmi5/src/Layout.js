import {Link, Outlet} from "react-router-dom";
import { useLocation } from "react-router-dom"
import './Layout.css';

function Layout() {
    const location = useLocation()["pathname"]
    let notHome = true;
    if (location === "/"){
        document.body.className = "homeBody"
        notHome = false;
    }else if (location === "/hardware"){
        document.body.className = "hardwareBody"
    }

    return (
        <>
            <nav className="Nav">
                {notHome ? <Link to="/"><img src="/back.png" className="backButton" alt="Back"/></Link> : null}
                <div className="Logo">
                    AIDA64
                </div>
            </nav>
            {notHome && <div className="hardwareBackground"/>}

            <Outlet/>
        </>
    );
}

export default Layout;