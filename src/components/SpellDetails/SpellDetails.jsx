import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpellDetails } from "../../services/api-calls";

export default function SpellDetails() {
  const [spellDetails, setSpellDetails] = useState({});
  const { spellId } = useParams();
  useEffect(() => {
    async function fetchSpellDetails() {
      const spellData = await getSpellDetails(spellId);
      setSpellDetails(spellData);
    }
    fetchSpellDetails();
  }, [spellId]);
  return (
    <>
      <main className="spell-details">
        <h1>Spell Details</h1>
        <h2>{spellDetails.name}</h2>
        <h3>
          A level {spellDetails.level} {spellDetails.school} spell
        </h3>
        <img src="https://picsum.photos/320/240" alt="random photo" />
        <h3>Range : {spellDetails.range}</h3>
        <h3>Description:</h3>
        <div className="subsection">
          <p>{spellDetails.description}</p>
        </div>
        {!!spellDetails.classes?.length && (
          <h3>Theses classes use this spell:</h3>
        )}
        {spellDetails.classes?.map((playerClass) => (
          <div key={playerClass} className="subsection">
            <p>{playerClass}</p>
          </div>
        ))}
      </main>
    </>
  );
}
