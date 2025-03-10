import { useState } from "react";
import pkg from "file-saver";
const { saveAs } = pkg;
import { jsPDF } from "jspdf";

const speciesOptions = [
  {
    name: "Mutated Humans",
    image: "/images/karkorte/kraken.png",
    description: "Survivors of a harsh world, adapted to radiation.",
  },
  {
    name: "Woodland Creatures",
    image: "/images/karkorte/kraken.png",
    description: "Mystical beings living in harmony with nature.",
  },
  {
    name: "Bird Pirates",
    image: "/images/karkorte/kraken.png",
    description: "Airborne adventurers who rule the skies.",
  },
  {
    name: "Ecotopians",
    image: "/images/karkorte/kraken.png",
    description: "Airborne adventurers who rule the skies.",
  },
  {
    name: "Bird Pirates",
    image: "/images/karkorte/kraken.png",
    description: "Airborne adventurers who rule the skies.",
  },
  {
    name: "Bird Pirates",
    image: "/images/karkorte/kraken.png",
    description: "Airborne adventurers who rule the skies.",
  },
];

const classOptions = [
  {
    name: "Scavenger",
    image: "/images/karkorte/kraken.png",
    description: "Survival expert and resourceful.",
  },
  {
    name: "Hunter",
    image: "/images/karkorte/kraken.png",
    description: "Sharp-eyed and precise with a bow.",
  },
  {
    name: "Ranger",
    image: "/images/karkorte/kraken.png",
    description: "Protector of the wilds.",
  },
];

const backgrounds = [
  { name: "Nomad", description: "Always on the move, never settling." },
  { name: "Scholar", description: "Seeker of ancient knowledge." },
  { name: "Merchant", description: "Master of trade and negotiation." },
];

const CharacterForm = () => {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    species: "",
    species_image: "",
    class: "",
    class_image: "",
    background: "",
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
      [key]: prev[key] === value ? "" : value, // reset if already selected
    }));
  };

  const nextStep = () => {
    if (step === 1 && !character.species) {
      alert("Please select a species first, or skip this step.");
      return;
    }
    if (step === 2 && !character.class) {
      alert("Please select a class first, or skip this step.");
      return;
    }
    if (step === 3 && !character.background) {
      alert("Please select a background first, or skip this step.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep(step - 1);
  const skipStep = () => setStep(step + 1);

  const saveCharacter = () => {
    const characters = JSON.parse(localStorage.getItem("characters")) || [];
    characters.push(character);
    localStorage.setItem("characters", JSON.stringify(characters));
    window.location.href = "/play_interface";
  };

  const exportToJSON = () => {
    const jsonData = JSON.stringify(character, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "character.json");
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
    doc.save("character.pdf");
  };

  const updateStat = (stat, value) => {
    value = Math.max(0, parseInt(value) || 0);
    
    const total =
      Object.values(character.stats).reduce((sum, val) => sum + val, 0) -
      character.stats[stat] +
      value;

    if (total > 15) {
      alert("Total stats cannot exceed 15.");
      return;
    }

    setCharacter((prev) => ({
      ...prev,
      stats: { ...prev.stats, [stat]: value },
    }));
  };

  return (
    <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg relative">
      {step === 1 && (
        <div className="text-center">
          <h2 class="text-2xl font-bold mb-4">Select a Species</h2>
          <div className="grid grid-cols-2 gap-2">
            {speciesOptions.map((option) => (
              <div
                key={option.name}
                onClick={() => {
                  handleSelection("species", option.name);
                  handleSelection("species_image", option.image);
                }}
                className={`cursor-pointer border rounded-lg p-3 transition duration-100 ${
                  character.species === option.name
                    ? "border-blue-400"
                    : "border-transparent"
                }`}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-24 h-24 mx-auto"
                />
                <p className="mt-2">{option.name}</p>
                <small className="text-gray-400">{option.description}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="text-center">
          <h2 class="text-2xl font-bold mb-4">Select a Class</h2>
          <div className="grid grid-cols-2 gap-2">
            {classOptions.map((option) => (
              <div
                key={option.name}
                onClick={() => {
                  handleSelection("class", option.name);
                  handleSelection("class_image", option.image);
                }}
                className={`cursor-pointer border rounded-lg p-3 transition duration-100 ${
                  character.class === option.name
                    ? "border-blue-400"
                    : "border-transparent"
                }`}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-24 h-24 mx-auto"
                />
                <p className="mt-2">{option.name}</p>
                <small className="text-gray-400">{option.description}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <h2 class="text-2xl font-bold mb-4">Choose Background</h2>
          {backgrounds.map((option) => (
            <div
              key={option.name}
              onClick={() => handleSelection("background", option.name)}
              className={`cursor-pointer border rounded-lg p-3 transition duration-100 ${
                character.background === option.name
                  ? "border-blue-400"
                  : "border-transparent"
              }`}
            >
              <p>{option.name}</p>
              <small className="text-gray-400">{option.description}</small>
            </div>
          ))}
        </div>
      )}

      {step === 4 && (
        // random assign option
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Assign Stats</h2>
          <p className="text-gray-400 mb-4">
            Distribute 30 points among the stats.
          </p>
          <div className="flex flex-col items-center gap-4">
            {Object.keys(character.stats).map((stat) => (
              <div key={stat} className="flex items-center gap-4">
                <label className="w-24 text-right">{stat}:</label>
                <input
                  type="number"
                  value={character.stats[stat]}
                  onChange={(e) => updateStat(stat, e.target.value)}
                  placeholder="0"
                  className="w-20 bg-gray-700 text-white p-2 rounded text-center"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold mb-4">Finalize Your Character</h2>
          <p className="mb-4">
            <strong>Species:</strong>
            <br /> {character.species}
          </p>
          <p className="mb-4">
            <strong>Class:</strong> <br />
            {character.class}
          </p>
          <p className="mb-4">
            <strong>Background:</strong>
            <br /> {character.background}
          </p>
          <p className="mb-4">
            <strong>Stats:</strong> <br />
            Strength: {character.stats.Strength}, Intelligence:
            {character.stats.Intelligence}, Wisdom: {character.stats.Wisdom},
            Dexterity: {character.stats.Dexterity}, Constitution:{" "}
            {character.stats.Constitution}, Charisma: {character.stats.Charisma}
          </p>

          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-white  mr-6 mb-4">
              Save for future online editing:
            </p>
            <p className="text-white mb-4">Offline Printing/Sharing:</p>
          </div>

          <button
            onClick={exportToJSON}
            className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mr-2"
          >
            Export Character as JSON
          </button>
          <button
            onClick={exportToPDF}
            className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Export Character as PDF
          </button>
        </div>
      )}

      <div className="text-center mt-6">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="cursor-pointer px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            style={{ marginRight: "10px" }}
          >
            Prev
          </button>
        )}
        {step < 5 ? (
          <>
            <button
              onClick={nextStep}
              className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              style={{ marginRight: "10px" }}
            >
              Next
            </button>
            <button
              onClick={skipStep}
              className="absolute bottom-6 right-6 cursor-pointer hover:underline px-4 py-2 bg-gray-700 text-white rounded"
            >
              Skip
            </button>
          </>
        ) : (
          <button
            onClick={saveCharacter}
            className="cursor-pointer px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
          >
            Finish & Start Your Adventure
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterForm;
