import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";

import css from "../App.module.css";


const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};
  
  export default SearchBox;