import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts, getFilterName, getFilteredContacts } from "../../redux/selectors";
import { useEffect } from "react";
import { setFilteredContacts } from "../../redux/filtersSlice";

/* eslint-disable react/prop-types */
export default function ContactList({ onDelete }) {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const filteredContacts = useSelector(getFilteredContacts);
    const filterName = useSelector(getFilterName);

    useEffect(() => {
        const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()))
        dispatch(setFilteredContacts(filtered))
    },[contacts,filterName,dispatch])


  return (
    <ul className="flex gap-3 flex-wrap ">
      {filteredContacts && filteredContacts.map((contact) => (
        <li key={contact.id} className="">
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
