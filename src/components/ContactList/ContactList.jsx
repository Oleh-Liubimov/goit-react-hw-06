import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redux/selectors";

/* eslint-disable react/prop-types */
export default function ContactList({ onDelete }) {

    const contacts = useSelector(getContacts);


  return (
    <ul className="flex gap-3 flex-wrap ">
      {contacts.map((contact) => (
        <li key={contact.id} className="">
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
