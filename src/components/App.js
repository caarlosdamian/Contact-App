import "../App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Contacts from '../helpers/Data'

function App() {
  return (
    <div className="ui container">
      <Header />
      <div>
        {" "}
        <AddContact />
        <ContactList data={Contacts} />
      </div>
    </div>
  );
}

export default App;
