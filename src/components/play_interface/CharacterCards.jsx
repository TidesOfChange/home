import { useState, useEffect, useRef } from 'react';
import pkg from 'file-saver';
const { saveAs } = pkg;

const CharacterCards = () => {
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
            setCharacters(data);
            localStorage.setItem('characters', JSON.stringify(data));
        };
        reader.readAsText(file);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        let newWidth = (e.clientX / window.innerWidth) * 100;
        newWidth = Math.min(50, Math.max(15, newWidth));
        setPanelWidth(`${newWidth}%`);
        localStorage.setItem('panelWidth', `${newWidth}%`);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const getColumnClass = () => {
        const width = parseFloat(panelWidth);
        return width > 30 ? 'grid-cols-2' : 'grid-cols-1';
    };

    return (
        <div
            ref={panelRef}
            class="relative bg-base-200 flex flex-col pt-8"
            style={{ width: panelWidth, minWidth: '15%', maxWidth: '50%' }}
        >
            <h2 class="text-xl font-bold mb-4 text-center">Your Characters</h2>

            {/* Resizable Handle */}
            <div
                class="absolute top-0 right-0 h-full w-2 bg-base-300 cursor-ew-resize"
                onMouseDown={handleMouseDown}
                style={{ zIndex: 10 }}
            ></div>

            {characters.length > 0 ? (
                <>
                    {/* Scrollable Character Grid */}
                    <div class="h-full overflow-y-auto scrollbar-hide px-4">
                        <div class={`grid ${getColumnClass()} gap-4`}>
                            {characters.map((char, index) => (
                                <div
                                    key={index}
                                    class="p-3 rounded shadow-lg relative"
                                >
                                    <div class="flex justify-between">
                                        {/* 🔹 Toggle Between Species or Class Image (Per Character) */}
                                        <button
                                            onClick={() =>
                                                updateCharacter(
                                                    index,
                                                    'showSpeciesImage',
                                                    !char.showSpeciesImage
                                                )
                                            }
                                            class="btn btn-soft mb-2"
                                        >
                                            {char.showSpeciesImage
                                                ? 'Show Class Image'
                                                : 'Show Species Image'}
                                        </button>

                                        {/* Delete Character Button */}
                                        <button
                                            onClick={() =>
                                                setConfirmDelete(index)
                                            }
                                            class="btn btn-soft btn-square"
                                        >
                                            ✖
                                        </button>
                                    </div>

                                    {/* 🔹 Character Image (Species OR Class based on toggle) */}
                                    <img
                                        src={
                                            char.showSpeciesImage
                                                ? char.species_image
                                                : char.class_image
                                        }
                                        alt="Character"
                                        class="w-full h-32 object-cover rounded bg-base-300"
                                    />

                                    {/* Editable Name Input */}
                                    <input
                                        type="text"
                                        class="input w-full"
                                        value={char.name}
                                        onChange={(e) =>
                                            updateCharacter(
                                                index,
                                                'name',
                                                e.target.value
                                            )
                                        }
                                        placeholder="Character Name"
                                    />

                                    {/* Class & Species Labels */}
                                    <p class="text-sm">
                                        Species: {char.species}
                                    </p>
                                    <p class="text-sm">Class: {char.class}</p>

                                    {/* Editable Stats */}
                                    <div class="mt-2">
                                        {Object.keys(char.stats).map((stat) => (
                                            <div
                                                key={stat}
                                                class="flex justify-between items-center bg-base-100 p-1 rounded text-sm mt-1"
                                                style={{ width: '100%' }} // Ensures full-width inside the card
                                            >
                                                <label class="w-1/2 text-left pl-2">
                                                    {stat}:
                                                </label>
                                                <input
                                                    type="number"
                                                    class="w-1/2 input input-sm text-center"
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

                                    {/* Editable Description */}
                                    <textarea
                                        class="w-full textarea mt-2"
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
                            ))}
                        </div>
                    </div>

                    {/* Delete Confirmation Popup */}
                    {confirmDelete !== null && (
                        <div class="absolute inset-0 flex justify-center items-center">
                            <div class="bg-base-100 p-6 rounded-lg text-center shadow-xl">
                                <p class="text-lg mb-4">
                                    Are you sure you want to delete this
                                    character?
                                </p>
                                <div class="flex justify-center gap-2">
                                    <button
                                        onClick={() =>
                                            deleteCharacter(confirmDelete)
                                        }
                                        class="btn btn-primary"
                                    >
                                        Yes, Delete
                                    </button>
                                    <button
                                        onClick={() => setConfirmDelete(null)}
                                        class="btn btn-soft"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div class="flex flex-col px-4">
                    <p class="text-center">No characters created yet.</p>
                    <button
                        class="btn btn-primary mt-4"
                        onClick={() =>
                            (window.location.href = 'character-creator')
                        }
                    >
                        Create Character
                    </button>
                </div>
            )}
        </div>
    );
};

export default CharacterCards;
