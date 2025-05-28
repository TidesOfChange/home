const AdventureNotes = ({ adventureNotes, updateAdventureNotes }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Adventure Notes</h2>
            <div className="card bg-base-100 shadow-sm p-2">
                <textarea
                    className="w-full min-h-[402px] textarea"
                    value={adventureNotes}
                    onChange={(e) => updateAdventureNotes(e.target.value)}
                    placeholder="Write notes or track story progress..."
                />
            </div>
        </div>
    );
};

export default AdventureNotes;
