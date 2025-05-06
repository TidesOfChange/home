import { useState } from 'react';
import pkg from 'file-saver';
const { saveAs } = pkg;
import { jsPDF } from 'jspdf';

const speciesOptions = [
    {
        name: 'Mutated Humans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survivors of a harsh world, adapted to radiation.',
    },
    {
        name: 'Woodland Creatures',
        image: '/home/images/karkorte/kraken.png',
        description: 'Mystical beings living in harmony with nature.',
    },
    {
        name: 'Bird Pirates',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Ecotopians',
        image: '/home/images/sylvangrove/tree-person.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Aqualumeans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Lumea Humans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
];

const classOptions = [
    {
        name: 'Scavenger',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Hunter',
        image: '/home/images/karkorte/kraken.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Ranger',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Enchanter',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Ecotechnicians',
        image: '/home/images/karkorte/kraken.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Public Servants',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Cloudrunners',
        image: '/home/images/archipelago/cloudrunner.jpg',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Skycallers',
        image: '/home/images/archipelago/skycaller.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Farmers',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Seed Keepers',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
];

const backgrounds = [
    { name: 'Nomad', description: 'Always on the move, never settling.' },
    { name: 'Scholar', description: 'Seeker of ancient knowledge.' },
    { name: 'Merchant', description: 'Master of trade and negotiation.' },
];

// Character form with no skip and 12 attributes
const CharacterForm = () => {
    const [step, setStep] = useState(1);
    const [character, setCharacter] = useState({
        species: '',
        species_image: '',
        class: '',
        class_image: '',
        background: '',
        stats: {
            Strength: 0,
            Intelligence: 0,
            Wisdom: 0,
            Dexterity: 0,
            Constitution: 0,
            Charisma: 0,
        },
    });

    const handleSelection = (key, value) => {
        setCharacter((prev) => ({
            ...prev,
            [key]: prev[key] === value ? '' : value, // reset if already selected
        }));
    };

    const nextStep = () => {
        if (step === 1 && !character.species) {
            alert('Please select a species');
            return;
        }
        if (step === 2 && !character.class) {
            alert('Please select a class');
            return;
        }
        if (step === 3 && !character.background) {
            alert('Please select a background');
            return;
        }
        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep(step - 1);

    const saveCharacter = () => {
        const characters = JSON.parse(localStorage.getItem('characters')) || [];
        characters.push(character);
        localStorage.setItem('characters', JSON.stringify(characters));
        window.location.href = '/adventure-journal';
    };

    const exportToJSON = () => {
        const jsonData = JSON.stringify(character, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'character.json');
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(`Character Sheet:`, 20, 20);
        doc.text(`Species: ${character.species}`, 20, 30);
        doc.text(`Class: ${character.class}`, 20, 40);
        doc.text(`Background: ${character.background}`, 20, 50);
        doc.text(
            `Stats: Strength: ${character.stats.Strength}, Intelligence: ${character.stats.Intelligence}, Wisdom: ${character.stats.Wisdom},
      Dexterity: ${character.stats.Dexterity}, Constitution: ${character.stats.Constitution}, Charisma: ${character.stats.Charisma}`,
            20,
            60
        );
        doc.save('character.pdf');
    };

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
        <div>
            {step === 1 && (
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4">Select a Species</h2>
                    <div class="grid grid-cols-2 gap-4">
                        {speciesOptions.map((option) => (
                            <div
                                key={option.name}
                                class={`card card-border border-2 bg-base-100 w-96 shadow-sm cursor-pointer hover:border-base-300 ${
                                    character.species === option.name
                                        ? 'border-base-300'
                                        : 'border-transparent'
                                }`}
                                onClick={() => {
                                    handleSelection('species', option.name);
                                    handleSelection(
                                        'species_image',
                                        option.image
                                    );
                                }}
                            >
                                <figure>
                                    <img src="" alt={option.name} />
                                </figure>
                                <div class="card-body">
                                    <strong>{option.name}</strong>
                                    <small>{option.description}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4">Select a Class</h2>
                    <div class="grid grid-cols-2 gap-4">
                        {classOptions.map((option) => (
                            <div
                                key={option.name}
                                class={`card card-border border-2 bg-base-100 w-96 shadow-sm cursor-pointer hover:border-base-300 ${
                                    character.class === option.name
                                        ? 'border-base-300'
                                        : 'border-transparent'
                                }`}
                                onClick={() => {
                                    handleSelection('class', option.name);
                                    handleSelection(
                                        'class_image',
                                        option.image
                                    );
                                }}
                            >
                                <figure>
                                    <img src="" alt={option.name} />
                                </figure>
                                <div class="card-body">
                                    <strong>{option.name}</strong>
                                    <small>{option.description}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 3 && (
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4">Choose Background</h2>
                    <div class="flex flex-col gap-4">
                        {backgrounds.map((option) => (
                            <div
                                key={option.name}
                                onClick={() =>
                                    handleSelection('background', option.name)
                                }
                                class={`card card-border border-2 bg-base-100 w-96 shadow-sm cursor-pointer hover:border-base-300 ${
                                    character.background === option.name
                                        ? 'border-base-300'
                                        : 'border-transparent'
                                }`}
                            >
                                <div class="card-body">
                                    <strong>{option.name}</strong>
                                    <small>{option.description}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 4 && (
                // random assign option
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4">Assign Stats</h2>
                    <div class="flex flex-col gap-4">
                        <p>Distribute 12 points among the stats.</p>
                        <div class="flex flex-col items-center gap-4">
                            {Object.keys(character.stats).map((stat) => (
                                <div key={stat} class="flex items-center gap-4">
                                    <label class="w-24 text-right shrink-0">
                                        {stat}:
                                    </label>
                                    <input
                                        type="number"
                                        class="input"
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
            )}

            {step === 5 && (
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4">
                        Finalize Your Character
                    </h2>
                    <div class="card bg-base-100 shadow-sm mb-4">
                        <div class="card-body">
                            <p class="mb-4">
                                <strong>Species:</strong>
                                <br /> {character.species}
                            </p>
                            <p class="mb-4">
                                <strong>Class:</strong> <br />
                                {character.class}
                            </p>
                            <p class="mb-4">
                                <strong>Background:</strong>
                                <br /> {character.background}
                            </p>
                            <p class="mb-4">
                                <strong>Stats:</strong> <br />
                                Strength: {character.stats.Strength},
                                Intelligence:
                                {character.stats.Intelligence}, Wisdom:{' '}
                                {character.stats.Wisdom}, Dexterity:{' '}
                                {character.stats.Dexterity}, Constitution:{' '}
                                {character.stats.Constitution}, Charisma:{' '}
                                {character.stats.Charisma}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-4">
                        <div>
                            <p class="mb-4">Save for future online editing:</p>
                            <button onClick={exportToJSON} class="btn btn-soft">
                                Export Character as JSON
                            </button>
                        </div>
                        <div>
                            <p class="mb-4">Offline Printing/Sharing:</p>
                            <button onClick={exportToPDF} class="btn btn-soft">
                                Export Character as PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div class="text-center mt-6">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        class="btn btn-soft"
                        style={{ marginRight: '10px' }}
                    >
                        Prev
                    </button>
                )}
                {step < 5 ? (
                    <>
                        <button
                            onClick={nextStep}
                            class="btn btn-primary"
                            style={{ marginRight: '10px' }}
                        >
                            Next
                        </button>
                    </>
                ) : (
                    <button onClick={saveCharacter} class="btn btn-primary">
                        Finish & Start Your Adventure
                    </button>
                )}
            </div>
        </div>
    );
};

export default CharacterForm;
