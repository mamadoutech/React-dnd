import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMonster } from "../../services/api-calls";
export default function MonsterDetails() {
  const [monsterDetails, setMonsterDetails] = useState({});
  const { monsterId } = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      const monsterData = await getMonster(monsterId);
      setMonsterDetails(monsterData);
    };
    fetchDetails();
  }, [monsterId]);
  return (
    <main className="monster-details">
      <h1>Monster details</h1>
      {monsterDetails.image ? (
        <img
          style={{ width: "320px" }}
          src={`https://dnd5eapi.co${monsterDetails.image}`}
          alt="a scary(Monster details image)"
        />
      ) : (
        <img
          src="https://www.picsum.photos/320/240"
          alt="random lorem picsum photo"
        />
      )}
      <h2>{monsterDetails.name}</h2>
      <h3>Size:{monsterDetails.size}</h3>
      <h3>Type:{monsterDetails.type}</h3>
      <h3>Actions:</h3>
      {!monsterDetails.actions?.length && (
        <h4>`A ${monsterDetails.name} has no actions. womp womp`</h4>
      )}
      {monsterDetails.actions?.map((action) => (
        <div key={action.name} className="subsection">
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
        </div>
      ))}
    </main>
  );
}
