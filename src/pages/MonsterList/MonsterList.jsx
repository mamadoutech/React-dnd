import { useEffect, useState } from "react";
import { getMonsterList } from "../../services/api-calls";
import { Link } from "react-router-dom";
export default function MonsterList() {
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    // make an api call
    const fetchMonsterList = async () => {
      const monsterData = await getMonsterList();
      setMonsterList(monsterData);
    };
    fetchMonsterList();
  }, []);
  if (!monsterList.length) return <h1>Loading Scary Monsters...</h1>;
  return (
    <>
      <main className="monster-list">
        <h1>Monster List (OMG SCARY)</h1>
        {monsterList.map((monster) => (
          <div className="link-container" key={monster._id}>
            <Link to={`/monsters/${monster._id}`}>{monster.name}</Link>
          </div>
        ))}
      </main>
    </>
  );
}
