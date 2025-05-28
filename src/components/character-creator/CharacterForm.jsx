import { useState, useEffect, useRef } from 'react';
import SpeciesList from './SpeciesList';
import BackgroundList from './BackgroundList';
import StatSelector from './StatSelector';
import FinalizeCharacter from './FinalizeCharacter';
import SkillSelector from './SkillSelector';

// Character form with no skip and 12 attributes
const CharacterForm = () => {
    const [step, setStep] = useState(0);
    const [character, setCharacter] = useState({
        background: '',
        name: '',
        description: '',
        equipment: [],
        gold: 0,
        species: '',
        image: '',
        life: 5,
        stats: {
            Knowledge: 0,
            Intuition: 0,
            Strength: 0,
            Agility: 0,
            Personality: 0,
            Health: 0,
        },
        skills: {},
        speciesSkills: {},
        backgroundSkills: {},
    });
    const characterRef = useRef(character);

    useEffect(() => {
        characterRef.current = character;
    }, [character]);

    const handleStepChange = (newStep) => {
        if (step > newStep) {
            setStep(newStep);
        }
    };

    const handleSelection = (key, value) => {
        setCharacter((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange = (key, value) => {
        setCharacter((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const updateCharacterLife = () => {
        const baseLife = 5;
        const healthBonus = Number(characterRef.current.stats.Health);
        const updatedLife = baseLife + healthBonus;

        characterRef.current.life = updatedLife;
    };

    const joinCharacterSkills = () => {
        const joinedSkills = {
            ...character.speciesSkills,
        };

        for (const [key, value] of Object.entries(character.backgroundSkills)) {
            if (joinedSkills[key] === undefined || value > joinedSkills[key]) {
                joinedSkills[key] = value; // take the higher value
            }
        }

        characterRef.current.skills = joinedSkills;
    };

    const saveCharacter = () => {
        if (character.name.length === 0) {
            return alert('Please set a name for your character.');
        }

        const characters =
            JSON.parse(localStorage.getItem('toc_characters')) || [];

        // Update life based on health
        updateCharacterLife();

        // Consolidate skills
        joinCharacterSkills();

        characters.push(character);
        localStorage.setItem('toc_characters', JSON.stringify(characters));
        window.location.href = '/home/adventure-journal';
    };

    const nextStep = () => {
        if (step === 0 && !character.species) {
            return alert('Please select a species.');
        } else if (step === 1 && !character.background) {
            return alert('Please select a background.');
        } else {
            window.scrollTo(0, 0);
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        window.scrollTo(0, 0);
        setStep(step - 1);
    };

    const formSteps = [
        'Species',
        'Background',
        'Attributes',
        'Skills',
        'Review',
    ];

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <SpeciesList
                        character={character}
                        handleSelection={handleSelection}
                    />
                );
            case 1:
                return (
                    <BackgroundList
                        character={character}
                        handleSelection={handleSelection}
                    />
                );
            case 2:
                return (
                    <StatSelector
                        character={character}
                        setCharacter={setCharacter}
                    />
                );
            case 3:
                return (
                    <SkillSelector
                        character={character}
                        setCharacter={setCharacter}
                    />
                );
            case 4:
                return (
                    <FinalizeCharacter
                        character={character}
                        handleInputChange={handleInputChange}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-5xl">
            <div className="divider mt-0" />
            <div className="grid grid-cols-4 gap-4">
                {/* Mobile Stepper */}
                <ul className="col-span-4 steps mb-2 lg:hidden text-xs sm:text-sm">
                    {formSteps.map((formStep, index) => (
                        <li
                            key={formStep}
                            className={`step ${
                                step >= index &&
                                'step-primary cursor-pointer hover:text-primary'
                            }`}
                            onClick={() => handleStepChange(index)}
                        >
                            {formStep}
                        </li>
                    ))}
                </ul>

                {/* Render current step */}
                <div className="col-span-4 lg:col-span-3 px-4 lg:px-0">
                    {renderStep()}
                </div>

                {/* Mobile Form Step Actions */}
                <div className="flex gap-4 col-span-4 px-4 lg:hidden">
                    {step > 0 && (
                        <button onClick={prevStep} className="btn btn-soft">
                            Go Back
                        </button>
                    )}
                    {step < formSteps.length - 1 ? (
                        <button
                            onClick={nextStep}
                            className="btn btn-primary ml-auto"
                        >
                            Next Step
                        </button>
                    ) : (
                        <button
                            onClick={saveCharacter}
                            className="btn btn-primary ml-auto"
                        >
                            Finish
                        </button>
                    )}
                </div>

                {/* PC Stepper */}
                <div className="col-span-1 p-8 hidden lg:block">
                    <ul className="steps steps-vertical">
                        {formSteps.map((formStep, index) => (
                            <li
                                key={formStep}
                                className={`step ${
                                    step >= index &&
                                    'step-primary cursor-pointer hover:text-primary'
                                }`}
                                onClick={() => handleStepChange(index)}
                            >
                                {formStep}
                            </li>
                        ))}
                    </ul>

                    {/* Form Step Actions */}
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {step < formSteps.length - 1 ? (
                            <button
                                onClick={nextStep}
                                className="btn btn-primary btn-wide"
                            >
                                Next Step
                            </button>
                        ) : (
                            <button
                                onClick={saveCharacter}
                                className="btn btn-primary"
                            >
                                Finish
                            </button>
                        )}
                        {step > 0 && (
                            <button
                                onClick={prevStep}
                                className="btn btn-soft btn-wide"
                            >
                                Go Back
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterForm;
