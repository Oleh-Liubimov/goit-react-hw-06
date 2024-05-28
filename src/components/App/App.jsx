import { useEffect, useState } from "react";
import initialContacts from "../../contacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import * as Yup from "yup";

const objSchema = Yup.object().shape({
  name: Yup.string() 
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Only Latin letters allowed"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(12, "Too long!")
    .required("Requaired"),
});

function App() {


  // const filteredContacts = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="root flex flex-col justify-center items-center h-screen p-5">
      <h1 className="text-3xl mb-5 font-bold">Phonebook</h1>
      <ContactForm validation={objSchema} />
      <SearchBox  />
      <ContactList />
    </div>
  );
}

export default App;
