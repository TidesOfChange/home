const SkillSelector = ({ character, setCharacter }) => {
    const maxPoints = 10; // Max points allowed to allocate

    const updateSubSpeciesSkills = (subSpeciesName) => {
        const subSpecies = character.species.subSpecies.find(
            (species) => species.name === subSpeciesName
        );

        if (!subSpecies) {
            return console.error('No subspecies found.');
        }

        const subSpeciesSkills = subSpecies.skills
            .split(',')
            .map((skill) => skill.trim())
            .reduce((acc, skill) => {
                acc[skill] = 0;
                return acc;
            }, {});

        setCharacter((prev) => {
            return {
                ...prev,
                subSpecies: subSpecies,
                speciesSkills: subSpeciesSkills,
            };
        });
    };

    const updateSkill = (skillType, skill, newValue) => {
        newValue = Math.max(0, parseInt(newValue) || 0);

        setCharacter((prev) => {
            const currentSkillValue = prev[skillType][skill];
            const skillsCopy = { ...prev[skillType], [skill]: newValue };

            // Calculate new total points if change is applied
            const currentTotal = calculatePoints(prev[skillType]);
            const newTotal =
                currentTotal -
                calculateSkillCost(currentSkillValue) +
                calculateSkillCost(newValue);

            if (newTotal <= maxPoints) {
                return { ...prev, [skillType]: skillsCopy }; // Allow update (increase or decrease within limits)
            } else if (newValue < currentSkillValue) {
                return { ...prev, [skillType]: skillsCopy }; // Allow decreasing value even if over the limit
            } else {
                return prev; // Block increasing beyond allowed points
            }
        });
    };

    const calculateSkillCost = (rank) => {
        if (rank <= 3) {
            return rank; // rank 1–3 = 1 point per rank
        } else return 3 + (rank - 3) * 2; // Ranks 4+ cost 2 each
    };

    const calculatePoints = (skills) => {
        let total = 0;

        for (const rank of Object.values(skills)) {
            total += calculateSkillCost(rank);
        }
        return total;
    };

    const resetSkills = () => {
        setCharacter((prev) => {
            return {
                ...prev,
                subSpecies: '',
                speciesSkills: {},
            };
        });
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">Select Your Skills</h2>
            <p>
                Your chosen species and background each provide you with a set
                of five skills that your character is proficient in. You can
                allocate 10 points to your species and background skill sets
                respectively.
            </p>

            {/* Species SKills */}
            <div className="grid grid-cols-1 gap-4">
                <div className="collapse bg-base-100 shadow-sm">
                    {Object.keys(character.speciesSkills).length === 0 ? (
                        <div className="collapse-title grid grid-cols-1 gap-4">
                            <p className="text-center text-sm">
                                Select a subspecies for {character.species.name}{' '}
                                to allocate your skill points.
                            </p>
                            <select
                                defaultValue={character.species.name}
                                className="select mx-auto"
                                onChange={(e) =>
                                    updateSubSpeciesSkills(e.target.value)
                                }
                            >
                                <option disabled={true}>
                                    {character.species.name}
                                </option>
                                {character.species.subSpecies.map((species) => (
                                    <option key={species.name}>
                                        {species.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="collapse-title grid grid-cols-1 gap-4">
                            <div className="flex gap-4 items-center">
                                <h3 className="font-bold pl-2 pt-1">
                                    {character.species.name}{' '}
                                    {character.subSpecies &&
                                        `(${character.subSpecies.name})`}{' '}
                                    Skills
                                </h3>

                                {character.species.subSpecies && (
                                    <button
                                        className="btn btn-xs btn-soft"
                                        onClick={resetSkills}
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            <p className="text-sm px-4">
                                <strong>Note: </strong>Ranks 1-3 cost 1 point
                                and rank 4 costs 2 points. Rank 5 is not
                                available at creation.
                            </p>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Skill</th>
                                        <th>Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(character.speciesSkills).map(
                                        (skill) => (
                                            <tr key={skill}>
                                                <th>
                                                    <label
                                                        htmlFor={skill}
                                                        className="cursor-pointer"
                                                    >
                                                        {skill}
                                                    </label>
                                                </th>
                                                <td>
                                                    <input
                                                        id={skill}
                                                        type="number"
                                                        className="input"
                                                        min="0"
                                                        max="4"
                                                        value={
                                                            character
                                                                .speciesSkills[
                                                                skill
                                                            ]
                                                        }
                                                        onChange={(e) => {
                                                            if (
                                                                e.target.value >
                                                                4
                                                            ) {
                                                                e.target.value = 4;
                                                            }

                                                            updateSkill(
                                                                'speciesSkills',
                                                                skill,
                                                                e.target.value
                                                            );
                                                        }}
                                                        placeholder="0"
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <em className="text-sm px-4 mb-2 text-center">
                                {maxPoints -
                                    calculatePoints(
                                        character.speciesSkills
                                    )}{' '}
                                Points Remaining
                            </em>
                        </div>
                    )}
                </div>

                {/* Background Skills */}
                <div className="collapse bg-base-100 shadow-sm">
                    <div className="collapse-title grid grid-cols-1 gap-4">
                        <h3 className="font-bold px-2 pt-1">
                            {character.background.name} Skills
                        </h3>

                        <p className="text-sm px-4">
                            <strong>Note: </strong>Ranks 1-3 cost 1 point and
                            rank 4 costs 2 points. Rank 5 is not available at
                            creation.
                        </p>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(character.backgroundSkills).map(
                                    (skill) => (
                                        <tr key={skill}>
                                            <th>
                                                <label
                                                    htmlFor={skill}
                                                    className="cursor-pointer"
                                                >
                                                    {skill}
                                                </label>
                                            </th>
                                            <td>
                                                <input
                                                    id={skill}
                                                    type="number"
                                                    className="input"
                                                    min="0"
                                                    max="4"
                                                    value={
                                                        character
                                                            .backgroundSkills[
                                                            skill
                                                        ]
                                                    }
                                                    onChange={(e) => {
                                                        if (
                                                            e.target.value > 4
                                                        ) {
                                                            e.target.value = 4;
                                                        }
                                                        updateSkill(
                                                            'backgroundSkills',
                                                            skill,
                                                            e.target.value
                                                        );
                                                    }}
                                                    placeholder="0"
                                                />
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        <em className="text-sm px-4 mb-2 text-center">
                            {maxPoints -
                                calculatePoints(
                                    character.backgroundSkills
                                )}{' '}
                            Points Remaining
                        </em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSelector;
