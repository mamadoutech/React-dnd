import { useState } from "react";
import "./SearchForm.css";
export default function SearchForm(props) {
  const [formData, setFormData] = useState({
    query: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.query) {
      props.handleSpellSearch(formData);
    }
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        value={formData.query}
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
