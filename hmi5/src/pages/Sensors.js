import './Sensors.css'

function Sensors() {
    return (
        <div className="Sensors">
            <h2>Temperature</h2>
            <table className="TableBlock">
                <tbody>
                <tr>
                    <td className="te-left">CPU Package</td>
                    <td className="te-right">62°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU IA Cores</td>
                    <td className="te-right">62°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU GT Cores</td>
                    <td className="te-right">54°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #1</td>
                    <td className="te-right">57°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #2</td>
                    <td className="te-right">55°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #3</td>
                    <td className="te-right">56°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #4</td>
                    <td className="te-right">62°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #5</td>
                    <td className="te-right">54°</td>
                </tr>
                <tr>
                    <td className="te-left">CPU #1 / Core #6</td>
                    <td className="te-right">52°</td>
                </tr>
                <tr>
                    <td className="te-left">GPU Diode</td>
                    <td className="te-right">51°</td>
                </tr>
                </tbody>
            </table>


            <h2>Voltage values</h2>
            <table className="TableBlock">
                <tbody>
                <tr>
                    <td className="te-left">CPU Core</td>
                    <td className="te-right">1.110 V</td>
                </tr>
                <tr>
                    <td className="te-left">CPU VID</td>
                    <td className="te-right">1.110 V</td>
                </tr>
                <tr>
                    <td className="te-left">Battery</td>
                    <td className="te-right">17.210 V</td>
                </tr>
                <tr>
                    <td className="te-left">GPU Core</td>
                    <td className="te-right">0.613 V</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sensors;