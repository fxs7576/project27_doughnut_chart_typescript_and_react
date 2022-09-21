
import ReactDOM from "react-dom/client";
import ComponentChartDoughnut from "./component/doughnut/component";

const container = document.getElementById("root")!;  // getting a reference to the div with ID root
const root = ReactDOM.createRoot(container!);  // telling React to take control of that element

const App = () => {  // creating a component
    return (
        <ComponentChartDoughnut />

    );
};

root.render(<App />);