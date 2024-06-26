/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="border border-black flex gap-6 max-w-80 items-center rounded p-2">
      <div className="w-full">
        <p>{data.name}</p>
        <p>{data.number}</p>
      </div>
      <button
        type="button"
        className="bg-red-400
            border rounded border-slate-950 h-7 p-1 flex justify-center
            items-center hover:bg-red-500 transition-all"
        onClick={() => dispatch(deleteContact(data.id))}
      >
        Delete
      </button>
    </div>
  );
}
