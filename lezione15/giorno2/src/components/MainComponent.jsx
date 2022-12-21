import CardComponent from "./CardComponent";
import TableComponent from "./TableComponent";

function MainComponent() {
    return (
        <div className="row g-3 my-3" id="myPage">
            <TableComponent />
            <CardComponent /> 
        </div>
    )
}

export default MainComponent;