import { useState, useEffect, useRef } from 'react';
import pkg from 'file-saver';
const { saveAs } = pkg;
import CharacterCard from './CharacterCard';

const CharacterCardsList = () => {
    const [characters, setCharacters] = useState([]);
    const [panelWidth, setPanelWidth] = useState('25%');
    const [confirmDelete, setConfirmDelete] = useState(null);
    const panelRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCharacters = localStorage.getItem('characters');
            const savedWidth = localStorage.getItem('panelWidth');

            if (savedCharacters) setCharacters(JSON.parse(savedCharacters));
            if (savedWidth) setPanelWidth(savedWidth);
        }
    }, []);

    const updateCharacter = (index, key, value) => {
        const updatedCharacters = [...characters];

        if (key in updatedCharacters[index].stats) {
            updatedCharacters[index].stats[key] = Math.max(
                0,
                parseInt(value) || 0
            );
        } else {
            updatedCharacters[index][key] = value;
        }
        setCharacters(updatedCharacters);
        localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    };

    const deleteCharacter = (index) => {
        const updatedCharacters = characters.filter((_, i) => i !== index);
        setCharacters(updatedCharacters);
        setConfirmDelete(null);
        localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    };

    const exportCharacters = () => {
        const jsonData = JSON.stringify(characters, null, 2);
        saveAs(
            new Blob([jsonData], { type: 'application/json' }),
            'characters.json'
        );
    };

    const importCharacters = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = JSON.parse(e.target.result);
            const updatedCharacters = [...characters, ...data];
            setCharacters(updatedCharacters);
            localStorage.setItem(
                'characters',
                JSON.stringify(updatedCharacters)
            );
        };
        reader.readAsText(file);
    };

    return (
        <div
            ref={panelRef}
            className="bg-base-200 flex flex-col gap-4 pt-8"
            style={{ width: panelWidth, minWidth: '15%', maxWidth: '50%' }}
        >
            <h2 className="text-xl font-bold mx-4 text-center">
                Your Characters
            </h2>

            {/* Scrollable Character Grid */}
            <div className="overflow-y-auto scrollbar-hide px-4">
                <div className={`grid grid-cols-1 gap-4`}>
                    {characters.length <= 0 && (
                        <p className="text-center">
                            You don't have any characters yet.
                        </p>
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

            <div className="flex gap-2 px-4">
                <a
                    role="button"
                    className="btn btn-primary btn-sm"
                    href="/home/character-creator"
                >
                    Create New
                </a>
                <label htmlFor="file-upload" className="btn btn-primary btn-sm">
                    Import JSON
                </label>
                <input
                    type="file"
                    id="file-upload"
                    accept="application/json"
                    onChange={importCharacters}
                    style={{ display: 'none' }}
                />
                {characters.length > 0 && (
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={exportCharacters}
                    >
                        Export JSON
                    </button>
                )}
            </div>

            {/* Delete Confirmation Popup */}
            {confirmDelete !== null && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-base-100 p-6 rounded-lg text-center shadow-xl">
                        <p className="text-lg mb-4">
                            Are you sure you want to delete this character?
                        </p>
                        <div className="flex justify-center gap-2">
                            <button
                                onClick={() => deleteCharacter(confirmDelete)}
                                className="btn btn-primary"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setConfirmDelete(null)}
                                className="btn btn-soft"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CharacterCardsList;
