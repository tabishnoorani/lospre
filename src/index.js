import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor(props)
    {
        super();
        this.state = {
            name:'Fetching....'
        }
    }
    componentDidMount() {
        axios.get('/api/contests')
        .then((doc)=>{
            this.setState ({
                name: doc.data.name
            })
        })
        .catch((err)=>{console.log(err)});
    }

    render() {
        return(<h1>{this.state.name}</h1>)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));