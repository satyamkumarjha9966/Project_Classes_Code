import Props1 from "./Props1";
import Props2 from "./Props2";
import Props3 from "./Props3";
import Jsvar from "./JsVar";
import Jscurlie from "./JsCurlie";

function Props(props) {
    return (
        <div>
            <img src={props.src} />
            <Props1 value='SATYAM' />
            <Props2 />
            <Props3>
                <h1>SUNDARM</h1>
                <h1>KAJAL</h1>
            </Props3>
            <Jsvar />
            <Jscurlie />
        </div>
    )
}

export default Props;