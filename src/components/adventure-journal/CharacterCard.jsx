const CharacterCard = ({ index, char, updateCharacter, setConfirmDelete }) => {
    const maxLife = 5 + char.stats.Health; // 5 is baseline

    return (
        <div key={index} className="bg-base-100 rounded shadow-sm relative">
            <div className="flex items-center">
                {/* Character Image */}
                <figure className="bg-base-300 min-w-[100px] h-[100px] rounded-lg flex justify-center overflow-hidden p-1 m-2">
                    <img
                        className="max-h-[200px]"
                        src={char.image}
                        alt={char.name}
                    />
                </figure>

                {/* Delete Character Button */}
                <button
                    onClick={() => setConfirmDelete(index)}
                    className="btn btn-soft btn-xs absolute top-1 right-1"
                >
                    ✖ Delete
                </button>

                <div className="grid gap-2 p-1">
                    <p className="text-sm">
                        <strong>Name: </strong>
                        {char.name}
                    </p>
                    <p className="text-sm">
                        <strong>Species:</strong> {char.species.name}{' '}
                        {char.subSpecies && `(${char.subSpecies.name})`}
                    </p>
                    <p className="text-sm">
                        <strong>Background: </strong>
                        {char.background.name}
                    </p>
                </div>
            </div>

            <div className="grid">
                {/* Health Bar */}
                <div className="flex gap-1 p-4 border border-base-300 border-b-0 border-x-0">
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

                <div className="join join-vertical">
                    <div className="collapse collapse-arrow join-item border-base-300 border border-x-0">
                        <input type="radio" name="character-accordion" />
                        <div className="collapse-title font-semibold">
                            Attributes
                        </div>
                        <div className="collapse-content text-sm grid gap-2">
                            {Object.keys(char.stats).map((stat) => (
                                <div
                                    key={`${char.name}-${stat}`}
                                    className="flex justify-between items-center text-sm"
                                >
                                    <label
                                        className="w-1/2 text-left"
                                        htmlFor={`${char.name}-${stat}`}
                                    >
                                        {stat}:
                                    </label>
                                    <input
                                        id={`${char.name}-${stat}`}
                                        type="number"
                                        className="w-1/2 input input-sm text-center"
                                        value={char.stats[stat]}
                                        onChange={(e) =>
                                            updateCharacter(
                                                index,
                                                stat,
                                                e.target.value
                                            )
                                        }
                                        min="0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border border-x-0">
                        <input type="radio" name="character-accordion" />
                        <div className="collapse-title font-semibold">
                            Skills
                        </div>
                        <div className="collapse-content text-sm grid gap-2">
                            {Object.keys(char.skills).map((skill) => (
                                <div
                                    key={`${char.name}-${skill}`}
                                    className="flex justify-between items-center text-sm"
                                >
                                    <label
                                        className="w-1/2 text-left"
                                        htmlFor={`${char.name}-${skill}`}
                                    >
                                        {skill}:
                                    </label>
                                    <input
                                        id={`${char.name}-${skill}`}
                                        type="number"
                                        className="w-1/2 input input-sm text-center"
                                        value={char.skills[skill]}
                                        onChange={(e) =>
                                            updateCharacter(
                                                index,
                                                skill,
                                                e.target.value
                                            )
                                        }
                                        min="0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border border-x-0">
                        <input type="radio" name="character-accordion" />
                        <div className="collapse-title font-semibold">
                            Equipment
                        </div>
                        <div className="collapse-content text-sm">
                            {char.background.equipment?.length === 0 && (
                                <p className="text-sm">No equipment yet.</p>
                            )}
                            <ul>{char.background.equipment}</ul>
                            {/* <button className="btn btn-soft btn-xs mt-4">
                                + Add Equipment
                            </button> */}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border border-x-0">
                        <input type="radio" name="character-accordion" />
                        <div className="collapse-title font-semibold">
                            Description
                        </div>
                        <div className="collapse-content text-sm">
                            <textarea
                                className="w-full textarea h-24"
                                rows="2"
                                value={char.description}
                                onChange={(e) =>
                                    updateCharacter(
                                        index,
                                        'description',
                                        e.target.value
                                    )
                                }
                                placeholder="Character Description"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
