import React, { useState, useEffect, useRef } from "react";
import pkg from "file-saver";
const { saveAs } = pkg;

const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);
  const [panelWidth, setPanelWidth] = useState("25%");
  const [confirmDelete, setConfirmDelete] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCharacters = localStorage.getItem("characters");
      const savedWidth = localStorage.getItem("panelWidth");

      if (savedCharacters) setCharacters(JSON.parse(savedCharacters));
      if (savedWidth) setPanelWidth(savedWidth);
    }
  }, []);

  const updateCharacter = (index, key, value) => {
    const updatedCharacters = [...characters];

    if (key in updatedCharacters[index].stats) {
      updatedCharacters[index].stats[key] = Math.max(0, parseInt(value) || 0);
    } else {
      updatedCharacters[index][key] = value;
    }

    setCharacters(updatedCharacters);
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
  };

  const deleteCharacter = (index) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
    setConfirmDelete(null);
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
  };

  const exportCharacters = () => {
    const jsonData = JSON.stringify(characters, null, 2);
    saveAs(
      new Blob([jsonData], { type: "application/json" }),
      "characters.json"
    );
  };

  const importCharacters = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setCharacters(data);
      localStorage.setItem("characters", JSON.stringify(data));
    };
    reader.readAsText(file);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    let newWidth = (e.clientX / window.innerWidth) * 100;
    newWidth = Math.min(50, Math.max(15, newWidth));
    setPanelWidth(`${newWidth}%`);
    localStorage.setItem("panelWidth", `${newWidth}%`);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const getColumnClass = () => {
    const width = parseFloat(panelWidth);
    return width > 30 ? "grid-cols-2" : "grid-cols-1";
  };

  return (
    <div
      ref={panelRef}
      className="bg-gray-900 text-white relative flex flex-col"
      style={{ width: panelWidth, minWidth: "15%", maxWidth: "50%" }}
    >
      <h2 className="text-xl font-bold mb-4 text-center">Your Characters</h2>

      {/* Resizable Handle */}
      <div
        className="absolute top-0 right-0 h-full w-2 bg-gray-500 hover:bg-gray-300 cursor-ew-resize"
        onMouseDown={handleMouseDown}
        style={{ zIndex: 10 }}
      ></div>

      {characters.length > 0 ? (
        <>
          {/* Scrollable Character Grid */}
          <div className="h-full overflow-y-auto scrollbar-hide px-4">
            <div className={`grid ${getColumnClass()} gap-4`}>
              {characters.map((char, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-800 rounded shadow-lg relative"
                >
                  {/* 🔹 Toggle Between Species or Class Image (Per Character) */}
                  <button
                    onClick={() =>
                      updateCharacter(
                        index,
                        "showSpeciesImage",
                        !char.showSpeciesImage
                      )
                    }
                    className="cursor-pointer px-2 py-1 bg-gray-600 text-white rounded text-xs mb-2"
                  >
                    {char.showSpeciesImage
                      ? "Show Class Image"
                      : "Show Species Image"}
                  </button>

                  {/* 🔹 Character Image (Species OR Class based on toggle) */}
                  <img
                    src={
                      char.showSpeciesImage
                        ? char.species_image
                        : char.class_image
                    }
                    alt="Character"
                    className="w-full h-32 object-cover rounded"
                  />

                  {/* Editable Name Input */}
                  <input
                    type="text"
                    className="w-full mt-2 p-1 bg-gray-700 text-white text-center"
                    value={char.name}
                    onChange={(e) =>
                      updateCharacter(index, "name", e.target.value)
                    }
                    placeholder="Character Name"
                  />

                  <p className="text-sm">Species: {char.species}</p>
                  <p className="text-sm">Class: {char.class}</p>

                  {/* Editable Stats */}
                  <div className="mt-2">
                    {Object.keys(char.stats).map((stat) => (
                      <div
                        key={stat}
                        className="flex justify-between items-center bg-gray-700 p-1 rounded text-white text-sm mt-1"
                        style={{ width: "100%" }} // Ensures full-width inside the card
                      >
                        <label className="w-1/2 text-left pl-2">{stat}:</label>
                        <input
                          type="number"
                          className="w-1/2 p-1 bg-gray-800 text-white rounded text-center"
                          value={char.stats[stat]}
                          onChange={(e) =>
                            updateCharacter(index, stat, e.target.value)
                          }
                          min="0"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Editable Description */}
                  <textarea
                    className="w-full mt-2 p-1 bg-gray-700 text-white"
                    rows="2"
                    value={char.description}
                    onChange={(e) =>
                      updateCharacter(index, "description", e.target.value)
                    }
                    placeholder="Character Description"
                  />

                  {/* Delete Character Button */}
                  <button
                    onClick={() => setConfirmDelete(index)}
                    className="cursor-pointer absolute top-4 right-3 px-1 py-1 bg-gray-700 text-white rounded text-xs"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Delete Confirmation Popup */}
          {confirmDelete !== null && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
              <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                <p className="text-white text-lg mb-4">
                  Are you sure you want to delete this character?
                </p>
                <button
                  onClick={() => deleteCharacter(confirmDelete)}
                  className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded mr-2"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="cursor-pointer px-4 py-2 bg-gray-600 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <p className="text-center">No characters created yet.</p>
          <button
            className="cursor-pointer mt-4 px-4 py-2 bg-yellow-600 rounded block mx-auto"
            onClick={() => (window.location.href = "/home/char_form")}
          >
            Create Character
          </button>
        </>
      )}
    </div>
  );
};

export default CharacterCards;
