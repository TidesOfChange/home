const GameActions = ({
    importCharacters,
    exportCharacters,
    importNotes,
    exportNotes,
}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Tools</h2>
            <div className="grid gap-4 card bg-base-100 p-2 shadow-sm">
                <a
                    role="button"
                    className="btn btn-sm py-5 btn-soft btn-outline"
                    href="/home/character-creator"
                >
                    Create New Character
                </a>
                <label
                    htmlFor="file-upload"
                    className="btn btn-soft btn-sm py-5"
                >
                    Import Character JSON
                </label>
                <input
                    type="file"
                    id="file-upload"
                    accept="application/json"
                    onChange={importCharacters}
                    style={{ display: 'none' }}
                />
                <button
                    className="btn btn-soft btn-sm py-5"
                    onClick={exportCharacters}
                >
                    Export Character JSON
                </button>
                <label
                    htmlFor="file-upload-notes"
                    className="btn btn-soft btn-sm py-5"
                >
                    Import Notes JSON
                </label>
                <input
                    type="file"
                    id="file-upload-notes"
                    accept="application/json"
                    onChange={importNotes}
                    style={{ display: 'none' }}
                />
                <button
                    className="btn btn-soft btn-sm py-5"
                    onClick={exportNotes}
                >
                    Export Notes JSON
                </button>
            </div>
        </div>
    );
};

export default GameActions;
