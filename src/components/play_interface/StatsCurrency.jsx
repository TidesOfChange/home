import React, { useState } from "react";

const StatsCurrency = () => {
  const [gold, setGold] = useState(100);
  const [wounds, setWounds] = useState(0);
  const [skills, setSkills] = useState([]);

  return (
    <div className="w-1/4 p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Character Stats</h2>
      <p>Wound Tracker: {wounds}</p>
      <button
        className="mt-2 px-3 py-2 bg-red-600 rounded cursor-pointer"
        onClick={() => setWounds(wounds + 1)}
      >
        Take Damage
      </button>
      <h3 className="mt-4 text-lg">Currency</h3>
      <p>Gold: {gold}</p>
      <button
        className="mt-2 px-3 py-2 bg-yellow-600 rounded cursor-pointer"
        onClick={() => setGold(gold + 10)}
      >
        Earn Gold
      </button>
      <h3 className="mt-4 text-lg">Skills</h3>
      <ul className="list-disc pl-6">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button
        className="mt-2 px-3 py-2 bg-green-600 rounded cursor-pointer"
        onClick={() => setSkills([...skills, "New Skill"])}
      >
        Add Skill
      </button>
    </div>
  );
};

export default StatsCurrency;
