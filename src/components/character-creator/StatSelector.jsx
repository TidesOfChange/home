const StatSelector = ({ character, setCharacter }) => {
    const updateStat = (stat, value) => {
        value = Math.max(0, parseInt(value) || 0);

        const total =
            Object.values(character.stats).reduce((sum, val) => sum + val, 0) -
            character.stats[stat] +
            value;

        if (total > 12) {
            alert('Total stats cannot exceed 12.');
            return;
        }

        setCharacter((prev) => ({
            ...prev,
            stats: { ...prev.stats, [stat]: value },
        }));
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Assign Stats</h2>
            <div className="flex flex-col gap-4">
                <p>Distribute 12 points among the stats.</p>
                <div className="flex flex-col items-center gap-4">
                    {Object.keys(character.stats).map((stat) => (
                        <div key={stat} className="flex items-center gap-4">
                            <label className="w-24 text-right shrink-0">
                                {stat}:
                            </label>
                            <input
                                type="number"
                                className="input"
                                min="0"
                                max="12"
                                value={character.stats[stat]}
                                onChange={(e) =>
                                    updateStat(stat, e.target.value)
                                }
                                placeholder="0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatSelector;