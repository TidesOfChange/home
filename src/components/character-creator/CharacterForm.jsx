import { useState } from 'react';
import SpeciesList from './SpeciesList';
import BackgroundList from './BackgroundList';
import StatSelector from './StatSelector';
import FinalizeCharacter from './FinalizeCharacter';

// Character form with no skip and 12 attributes
const CharacterForm = () => {
    const [step, setStep] = useState(1);
    const [character, setCharacter] = useState({
        background: '',
        name: '',
        description: '',
        equipment: [],
        gold: 0,
        species: '',
        species_image: '',
        life: 5,
        stats: {
            Knowledge: 0,
            Intuition: 0,
            Strength: 0,
            Agility: 0,
            Personality: 0,
            Health: 0,
        },
        skills: [],
    });

    const handleSelection = (key, value) => {
        setCharacter((prev) => ({
            ...prev,
            [key]: prev[key] === value ? '' : value, // reset if already selected
        }));
    };

    const saveCharacter = () => {
        const characters = JSON.parse(localStorage.getItem('characters')) || [];

        // Update character life based on health stat
        character.life += character.stats.Health;

        characters.push(character);
        localStorage.setItem('characters', JSON.stringify(characters));
        window.location.href = '/home/adventure-journal';
    };

    const nextStep = () => {
        if (step === 1 && !character.species) {
            alert('Please select a species.');
            return;
        }
        if (step === 2 && !character.background) {
            alert('Please select a background.');
            return;
        }
        if (step === 3) {
            /* Add validation here */
            // alert('Please select your skills.');
            // return;
        }
        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep(step - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <SpeciesList
                        character={character}
                        handleSelection={handleSelection}
                    />
                );
            case 2:
                return (
                    <BackgroundList
                        character={character}
                        handleSelection={handleSelection}
                    />
                );
            case 3:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            Choose Skills
                        </h2>
                        <p>To-Do</p>
                    </div>
                );
            case 4:
                return (
                    <StatSelector
                        character={character}
                        setCharacter={setCharacter}
                    />
                );
            case 5:
                return <FinalizeCharacter character={character} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Render current step */}
            {renderStep()}

            {/* Form Step Actions */}
            <div className="text-center mt-6">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="btn btn-soft"
                        style={{ marginRight: '10px' }}
                    >
                        Prev
                    </button>
                )}
                {step < 5 ? (
                    <button
                        onClick={nextStep}
                        className="btn btn-primary"
                        style={{ marginRight: '10px' }}
                    >
                        Next
                    </button>
                ) : (
                    <button onClick={saveCharacter} className="btn btn-primary">
                        Finish & Start Your Adventure
                    </button>
                )}
            </div>
        </div>
    );
};

export default CharacterForm;