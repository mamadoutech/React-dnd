import { useEffect, useState } from "react";
import SearchForm from "../SearcForm/SearchForm";
import { getSpells } from "../../services/api-calls";
import SpellCard from "../SpellCard/SpellCard";

export default function SpellSearch() {
  const [allSpells, setAllSpells] = useState([]);
  const [searchResults, setSearchREsults] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    async function fetchSPells() {
      const res = await getSpells();
      setAllSpells(res);
    }
    fetchSPells();
  }, []);

  function handleSpellSearch(formData) {
    const spellResults = allSpells.filter((spell) =>
      spell.name.toLowerCase().includes(formData.query.toLowerCase())
    );
    setSearchREsults(spellResults);
  }

  return (
    <main>
      <h1>Such Spells</h1>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {searchResults.length ? (
        <h2>{searchResults.length} results found :</h2>
      ) : (
        <h2>Please search for a spell </h2>
      )}

      {searchResults.map((spell) => (
        <SpellCard key={spell._id} spell={spell} />
      ))}
    </main>
  );
}
