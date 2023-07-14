import Props from "./Props";

function Fragments(props) {
    return(
        <>
            <h2>Hello</h2>
            <h3>My name is Sat</h3>

            <Props src={props.src} /> 
        </>
    );
}

export default Fragments;