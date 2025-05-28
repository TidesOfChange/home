const StatSelector = ({ character, setCharacter }) => {
    const maxPoints = 12; // Max points allowed to allocate

    const updateStat = (stat, newValue) => {
        newValue = Math.max(0, parseInt(newValue) || 0);

        setCharacter((prev) => {
            const currentStatValue = prev.stats[stat];
            const statsCopy = { ...prev.stats, [stat]: newValue };

            // Calculate new total points if change is applied
            const currentTotal = calculatePoints(prev.stats);
            const newTotal =
                currentTotal -
                calculateAttributeCost(currentStatValue) +
                calculateAttributeCost(newValue);

            if (newTotal <= maxPoints) {
                return { ...prev, stats: statsCopy }; // Allow update (increase or decrease within limits)
            } else if (newValue < currentStatValue) {
                return { ...prev, stats: statsCopy }; // Allow decreasing value even if over the limit
            } else {
                return prev; // Block increasing beyond allowed points
            }
        });
    };

    const calculateAttributeCost = (rank) => {
        if (rank <= 3) {
            return rank; // rank 1–3 = 1 point per rank
        } else return 3 + (rank - 3) * 2; // Ranks 4+ cost 2 each
    };

    const calculatePoints = () => {
        let total = 0;

        for (const rank of Object.values(character.stats)) {
            total += calculateAttributeCost(rank);
        }
        return total;
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">Assign Your Attributes</h2>
            <p>
                Much of what your character does and how they interact with the
                environment around them is determined by their attributes. Each
                attribute can be of rank 0-5, starting at 0. Distribute 12
                points among attributes as you wish.
            </p>
            <div className="grid grid-cols-1 gap-4">
                <div className="collapse bg-base-100 shadow-sm">
                    <div className="collapse-title grid grid-cols-1 gap-4">
                        <p className="text-sm px-4">
                            <strong>Note: </strong>Ranks 1-3 cost 1 point and
                            rank 4 costs 2 points. Rank 5 is not available at
                            creation.
                        </p>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(character.stats).map((stat) => (
                                    <tr key={stat}>
                                        <th>
                                            <label
                                                htmlFor={stat}
                                                className="cursor-pointer"
                                            >
                                                {stat}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                id={stat}
                                                type="number"
                                                className="input"
                                                min="0"
                                                max="4"
                                                value={character.stats[stat]}
                                                onChange={(e) => {
                                                    if (e.target.value > 4) {
                                                        e.target.value = 4;
                                                    }

                                                    updateStat(
                                                        stat,
                                                        e.target.value
                                                    );
                                                }}
                                                placeholder="0"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <em className="text-sm px-4 mb-2 text-center">
                            {maxPoints - calculatePoints()} Points Remaining
                        </em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatSelector;
