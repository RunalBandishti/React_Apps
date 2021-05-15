import React from 'react';
import ReactDOM from 'react-dom';


function Greeting(){
    return(
        <div>
            <Person />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia praesentium consequatur expedita sit quibusdam quod sunt assumenda! Earum quas excepturi reprehenderit,
            laboriosam est explicabo sapiente incidunt quod recusandae nihil voluptates!</p>
        </div>
    );
}

const Person = () => {
    return <h2>Runal Bandishti</h2>
}


ReactDOM.render(<Greeting />,document.getElementById('root'));