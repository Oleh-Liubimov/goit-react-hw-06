import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  getContacts,
  getFilterName,
} from "../../redux/selectors";


export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilterName);
  console.log(contacts);
  console.log(filterName);
 
  const filteredContacts = () =>
    
    contacts.filter(
      (contact) =>
        (contact.name.toLowerCase().includes(filterName.toLowerCase())) || (contact.number.includes(filterName)));
   

  return (
    <ul className="flex gap-3 flex-wrap ">
      {filteredContacts().map((contact) => (
          <li key={contact.id} className="">
            <Contact data={contact} />
          </li>
        ))}
    </ul>
  );
}
