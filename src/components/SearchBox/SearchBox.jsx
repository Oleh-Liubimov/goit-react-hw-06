/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { getFilterName } from "../../redux/selectors";

export default function SearchBox() {

    const value = useSelector(getFilterName)
    const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className="border border-black rounded mb-5 outline-none "
      />
    </div>
  );
}
