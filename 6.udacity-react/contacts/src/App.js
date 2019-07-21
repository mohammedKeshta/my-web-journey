import React from 'react';
import './App.css';


const ContactList = ({contacts}) => {
    return (<ol>
        { contacts.map((person, index) => <li key={index}> { person.name }</li>) }
    </ol>);
};

function App() {
    return (
        <div className="App">
            <ContactList contacts={[
                {name: 'Mohammed'},
                {name: 'Yasmeen'},
                {name: 'Hamsa'},
            ]}/>

            <ContactList contacts={[
                {name: 'Elzanaty'},
                {name: 'Hamsa'},
                {name: 'Hamza'},
            ]}/>
        </div>
    );
}

export default App;
