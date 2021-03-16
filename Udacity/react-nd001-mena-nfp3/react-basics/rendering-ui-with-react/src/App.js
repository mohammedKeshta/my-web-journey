import React from "react";
import "./App.css";

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;
    return (
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

function App() {
  const contacts1 = [{ name: "Mohammed" }, { name: "Yasmeen" }];
  const contacts2 = [{ name: "Younes" }, { name: "Farah" }];
  return (
    <div>
      <ContactList contacts={[]} />
      <ContactList contacts={contacts1} />
      <ContactList contacts={contacts2} />
    </div>
  );
}

export default App;
