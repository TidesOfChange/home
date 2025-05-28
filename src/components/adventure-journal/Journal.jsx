import { useState, useEffect } from 'react';
import pkg from 'file-saver';
const { saveAs } = pkg;
import CharacterCardsList from './CharacterCardsList.jsx';
import GameActions from './GameActions.jsx';
import AdventureNotes from './AdventureNotes.jsx';

const Journal = () => {
    const [characters, setCharacters] = useState([]);
    const [adventureNotes, setAdventureNotes] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCharacters = localStorage.getItem('toc_characters');
            if (savedCharacters) setCharacters(JSON.parse(savedCharacters));

            const savedNotes = localStorage.getItem('toc_adventure_notes');
            if (savedNotes) setAdventureNotes(JSON.parse(savedNotes));
        }
    }, []);

    useEffect(() => {
        if (confirmDelete !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [confirmDelete]);

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
        localStorage.setItem(
            'toc_characters',
            JSON.stringify(updatedCharacters)
        );
    };

    const deleteCharacter = (index) => {
        const updatedCharacters = characters.filter((_, i) => i !== index);
        setCharacters(updatedCharacters);
        setConfirmDelete(null);
        localStorage.setItem(
            'toc_characters',
            JSON.stringify(updatedCharacters)
        );
    };

    const exportCharacters = () => {
        const jsonData = JSON.stringify(characters, null, 2);
        saveAs(
            new Blob([jsonData], { type: 'application/json' }),
            'toc_characters.json'
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
                'toc_characters',
                JSON.stringify(updatedCharacters)
            );

            // Clear the file input so it can detect the same file again
            event.target.value = '';
        };
        reader.readAsText(file);
    };

    const updateAdventureNotes = (newNotes) => {
        setAdventureNotes(newNotes);
        localStorage.setItem('toc_adventure_notes', JSON.stringify(newNotes));
    };

    const exportNotes = () => {
        const jsonData = JSON.stringify(adventureNotes);
        saveAs(
            new Blob([jsonData], { type: 'application/json' }),
            'toc_adventure_notes.json'
        );
    };

    const importNotes = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = JSON.parse(e.target.result);
            updateAdventureNotes(data);
            event.target.value = '';
        };
        reader.readAsText(file);
    };

    return (
        <div className="max-w-6xl">
            <div className="divider mt-0" />
            <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 px-4 lg:p-0">
                <div className="lg:col-span-2">
                    <CharacterCardsList
                        characters={characters}
                        updateCharacter={updateCharacter}
                        importCharacters={importCharacters}
                        setConfirmDelete={setConfirmDelete}
                    />
                </div>

                <div className="col-span-3">
                    <AdventureNotes
                        adventureNotes={adventureNotes}
                        updateAdventureNotes={updateAdventureNotes}
                    />
                </div>
                <GameActions
                    importCharacters={importCharacters}
                    exportCharacters={exportCharacters}
                    importNotes={importNotes}
                    exportNotes={exportNotes}
                />

                {/* Delete Confirmation Popup */}
                {confirmDelete !== null && (
                    <div
                        className="absolute flex items-center justify-center inset-0"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
                    >
                        <div className="bg-base-100 p-6 rounded-lg text-center shadow-lg">
                            <p className="text-lg mb-4">
                                Are you sure you want to delete this character?
                            </p>
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={() =>
                                        deleteCharacter(confirmDelete)
                                    }
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
        </div>
    );
};

export default Journal;
