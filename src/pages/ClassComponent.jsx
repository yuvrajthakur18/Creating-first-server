import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            name: "YuvrajSinghThakur",
            age: 20,
        };

        console.log("Checking purpose constructor");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate(){
        console.log("Component did update ?");
    }

    componentWillUnmount(){
        console.log("Component did unmount");
    }

    render() {

        console.log("Checking purpose Render");

        return (
            <div>
                <h3>This is class based component</h3>

                <button
                    onClick = { () => 
                        this.setState ({
                            ...this.state ,
                            age: this.state.age + 1,
                        })
                    }
                >
                    Click to add 1
                </button>

                <h1> {this.state.age} </h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);