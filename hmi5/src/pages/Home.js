import {Link} from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Home-Buttons">
                <Link to="/">
                    <div className="Home-Button">
                        <img src={"/software.png"}/>
                        SOFTWARE
                    </div>
                </Link>
                <Link to="/hardware">
                    <div className="Home-Button">
                        <img src={"/hardware.png"}/>
                        HARDWARE
                    </div>
                </Link>
                <Link to="/">
                    <div className="Home-Button">
                        <img src={"/tools.png"}/>
                        TOOLS
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;