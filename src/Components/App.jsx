import React, {Component} from "react";
import ReactComponent from "./ReactComponent";
import helloReact from "./CreateElementComponent";
import ReactPureComponent from "./ReactPureComponent";
import FunctionalComponent from "./FunctionalComponent";
import Counter from "./Counter";
import Search from "./SearchComponent";





class App extends Component {
    render() {
        return(
            <>
                {helloReact}
                <ReactComponent/>
                <ReactPureComponent/>
                <FunctionalComponent />
                <Counter />
                <Search />

            </>
        )
    }
}

export default App;