import { Link } from "react-router-dom";
export default function SpellCard(props) {
  return (
    <>
      <div className="link-container">
        <Link to={`/spells/${props.spell._id}`}>{props.spell.name}</Link>
      </div>
    </>
  );
}
