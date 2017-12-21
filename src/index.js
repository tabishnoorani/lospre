import React from 'react';
import ReactDOM from 'react-dom';

const App = (props)=>{
    return(
        <h1> Hello from React! The prop pass inside this component is {props.name}</h1>
    )
};

ReactDOM.render(<App name='123456'/>, document.getElementById('root'));