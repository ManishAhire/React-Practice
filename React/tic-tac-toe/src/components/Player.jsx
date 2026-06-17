import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEdition] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEdition((prev) => !prev);
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangeName}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
