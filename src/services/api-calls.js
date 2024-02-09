const BASE_URL = "https://sei-dnd-api.herokuapp.com";

export async function getMonsterList() {
  const res = await fetch(`${BASE_URL}/api/monsters`);
  return res.json();
}
export async function getMonster(monsterId) {
  const res = await fetch(`${BASE_URL}/api/monsters/${monsterId}`);
  return res.json();
}

export async function getSpells() {
  const res = await fetch(`${BASE_URL}/api/spells`);
  return res.json();
}

export async function getSpellDetails(spellId) {
  const res = await fetch(`${BASE_URL}/api/spells/${spellId}`);
  return res.json();
}
