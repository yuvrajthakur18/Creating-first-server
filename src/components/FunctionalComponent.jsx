import React, {useState} from "react";

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    return (
        <div>
            <h2>This is a Functional Component</h2>
            <h3>My name is {props.name} , I am {props.age} & I work for {props.company}.</h3>
            <br/>
            
            <button onClick = {() => setCount(count + 1)}>
                Click me to add 1
            </button>
            <h1>{count}</h1>

            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Change Name</button>
        </div>
    );
}
/*function FunctionalComponent () {
    return (
        <div>
            <h3>This is a Functional Component</h3>
        </div>
    );
}*/
export default FunctionalComponent;