import { useState } from 'react';

const StatsCurrency = () => {
    const [gold, setGold] = useState(100);
    const [wounds, setWounds] = useState(0);
    const [skills, setSkills] = useState([]);

    return (
        <div class="w-1/4 pt-8 px-4 bg-base-200">
            <h2 class="text-xl font-bold mb-4">Character Stats</h2>
            <p>Wound Tracker: {wounds}</p>
            <button
                class="btn btn-sm btn-outline mt-2"
                onClick={() => setWounds(wounds + 1)}
            >
                Take Damage
            </button>
            <h3 class="mt-4 text-lg font-bold">Currency</h3>
            <p>Gold: {gold}</p>
            <button
                class="mt-2 btn btn-sm btn-outline"
                onClick={() => setGold(gold + 10)}
            >
                Earn Gold
            </button>
            <h3 class="mt-4 text-lg font-bold">Skills</h3>
            <ul class="list-disc pl-6">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <button
                class="mt-2 btn btn-sm btn-outline"
                onClick={() => setSkills([...skills, 'New Skill'])}
            >
                Add Skill
            </button>
        </div>
    );
};

export default StatsCurrency;
