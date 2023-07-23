import {Outlet, Link} from "react-router-dom";
import './Hardware.css';

function Hardware() {
    return (
        <div className="Hardware">
            <div className="Hardware-Menu-Background">
                <div className="Hardware-Menu-Title">HARDWARE</div>
                <div className="Hardware-Menu">
                    <Link to="/hardware/sensors">
                        <div className="Hardware-Menu-Button">
                            <img src={"/sensors.png"}/>
                            SENSORS
                        </div>
                    </Link>

                    <Link to="/hardware/motherboard">
                        <div className="Hardware-Menu-Button" style={{fontSize: "14px"}}>
                            <img src={"/motherboard.png"}/>
                            MOTHERBOARD
                        </div>
                    </Link>

                    <Link to="/hardware">
                        <div className="Hardware-Menu-Button">
                            <img src={"/display.png"}/>
                            DISPLAY
                        </div>
                    </Link>

                    <Link to="/hardware">
                        <div className="Hardware-Menu-Button">
                            <img src={"/storage.png"}/>
                            STORAGE
                        </div>
                    </Link>

                    <Link to="/hardware">
                        <div className="Hardware-Menu-Button">
                            <img src={"/devices.png"}/>
                            DEVICES
                        </div>
                    </Link>
                </div>
            </div>

            <Outlet/>
        </div>
    );
}

export default Hardware;