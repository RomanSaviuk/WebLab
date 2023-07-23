import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Hardware from "./pages/Hardware";
import Sensors from "./pages/Sensors";
import Motherboard from "./pages/Motherboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/hardware" element={<Hardware/>}>
                        <Route path="/hardware/sensors" element={<Sensors/>} />
                        <Route path="/hardware/motherboard" element={<Motherboard/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
