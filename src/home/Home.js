import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../style/style.css';
import FixedNavBar from "./components/FixedNavBar";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    testMethod = () => {

    }

    componentDidMount() {
        // call any services
        // got some data
    }

    render() {
        return (
            <div className="bg-dark mt-5">
                <FixedNavBar/>
            </div>
        )
    }
}

export default Home;
