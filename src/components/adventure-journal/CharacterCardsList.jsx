import CharacterCard from './CharacterCard';

const CharacterCardsList = ({
    characters,
    updateCharacter,
    importCharacters,
    setConfirmDelete,
}) => {
    return (
        <div className="bg-base-200 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mx-4">Your Characters</h2>

            {/* Scrollable Character Grid */}
            <div>
                <div className="grid gap-4">
                    {characters.length === 0 && (
                        <div className="card bg-base-100 shadow-sm grid gap-4">
                            <div className="card-body grid gap-4">
                                <p className="text-center">
                                    You don't have any characters yet. Create a
                                    new character or import an existing
                                    character.
                                </p>
                                <a
                                    role="button"
                                    className="btn btn-primary"
                                    href="/home/character-creator"
                                >
                                    Create New
                                </a>
                                <label
                                    htmlFor="file-upload"
                                    className="btn btn-soft"
                                >
                                    Import JSON
                                </label>
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept="application/json"
                                    onChange={importCharacters}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                    {characters.map((char, index) => (
                        <CharacterCard
                            key={`Character ${index}`}
                            index={index}
                            char={char}
                            updateCharacter={updateCharacter}
                            setConfirmDelete={setConfirmDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterCardsList;
