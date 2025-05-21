const CharacterCard = ({ index, char, updateCharacter, setConfirmDelete }) => {
    const maxLife = 5 + char.stats.Health; // 5 is baseline

    return (
        <div key={index} className="p-3 bg-base-100 rounded shadow-lg relative">
            {/* Delete Character Button */}
            <button
                onClick={() => setConfirmDelete(index)}
                className="btn btn-soft btn-xs absolute right-4 top-4"
            >
                ✖ Delete
            </button>

            {/* Character Image */}
            <img
                src={char.species_image}
                alt="Character"
                className="w-full h-32 object-cover rounded bg-base-300 mb-4"
            />

            <div className="flex flex-col gap-2">
                {/* Editable Name Input */}
                <div className="flex gap-2 items-center">
                    <strong className="text-sm">Name: </strong>
                    <input
                        type="text"
                        className="input w-full input-sm"
                        value={char.name}
                        onChange={(e) =>
                            updateCharacter(index, 'name', e.target.value)
                        }
                        placeholder="Character Name"
                    />
                </div>

                {/* Background & Species Labels */}
                <div className="flex justify-between">
                    <p className="text-sm">
                        <strong>Species:</strong> {char.species}
                    </p>
                    <p className="text-sm">
                        <strong>Background: </strong>
                        {char.background}
                    </p>
                </div>

                <div className="divider my-0" />

                {/* Editable Stats */}
                <strong className="text-sm">Character Stats</strong>

                {/* Health Bar */}
                <div className="flex gap-1">
                    <button
                        className="btn btn-square btn-xs"
                        onClick={() =>
                            updateCharacter(
                                index,
                                'life',
                                Math.max((char.life -= 1), 0)
                            )
                        }
                    >
                        -
                    </button>
                    <div
                        className="progress"
                        data-label={`Life: ${char.life} / ${maxLife}`}
                    >
                        <span
                            className="value"
                            style={{ width: `${(char.life / maxLife) * 100}%` }}
                        />
                    </div>
                    <button
                        className="btn btn-square btn-xs"
                        onClick={() =>
                            updateCharacter(
                                index,
                                'life',
                                Math.min((char.life += 1), maxLife)
                            )
                        }
                    >
                        +
                    </button>
                </div>

                {Object.keys(char.stats).map((stat) => (
                    <div
                        key={stat}
                        className="flex justify-between items-center text-sm"
                    >
                        <label className="w-1/2 text-left pl-2">{stat}:</label>
                        <input
                            type="number"
                            className="w-1/2 input input-sm text-center"
                            value={char.stats[stat]}
                            onChange={(e) =>
                                updateCharacter(index, stat, e.target.value)
                            }
                            min="0"
                        />
                    </div>
                ))}

                <div className="divider my-0" />

                {/* Editable Skills */}
                <div className="flex gap-2 justify-between">
                    <strong className="text-sm">Skills</strong>
                    <button className="btn btn-soft btn-xs">+ Add Skill</button>
                </div>
                {char.skills.length === 0 && (
                    <p className="text-sm">No skills yet.</p>
                )}
                <ul>
                    {char.skills.map((skill) => (
                        <li key={skill.name}></li>
                    ))}
                </ul>

                <div className="divider my-0" />

                <div className="flex gap-2 justify-between">
                    <strong className="text-sm">Equipment</strong>
                    <button className="btn btn-soft btn-xs">
                        + Add Equipment
                    </button>
                </div>
                {char.equipment.length === 0 && (
                    <p className="text-sm">No equipment yet.</p>
                )}
                <ul>
                    {char.equipment?.map((equip) => (
                        <li key={equip.name}></li>
                    ))}
                </ul>

                <div className="divider my-0" />

                {/* Editable Description */}
                <strong className="text-sm">Description</strong>
                <textarea
                    className="w-full textarea"
                    rows="2"
                    value={char.description}
                    onChange={(e) =>
                        updateCharacter(index, 'description', e.target.value)
                    }
                    placeholder="Character Description"
                />
            </div>
        </div>
    );
};

export default CharacterCard;
