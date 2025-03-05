import React, { useState } from "react";

const NotesEquipment = () => {
  // Handle dragging to resize the panel
  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    let newWidth = (e.clientX / window.innerWidth) * 100;
    newWidth = Math.min(70, Math.max(30, newWidth)); // Keep between 15% and 50%
    setPanelWidth(`${newWidth}%`);

    if (typeof window !== "undefined") {
      localStorage.setItem("panelWidth", `${newWidth}%`);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  
  const [notes, setNotes] = useState("");
  const [equipment, setEquipment] = useState([]);

  return (
    <div className="w-1/2 p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Notes & Equipment</h2>
      <textarea
        className="w-full h-32 p-2 bg-gray-700 text-white"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write notes or track story progress..."
      />
      <h3 className="mt-4 text-lg">Equipment</h3>
      <ul className="list-disc pl-6">
        {equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        className="mt-2 px-3 py-2 bg-blue-600 rounded"
        onClick={() => setEquipment([...equipment, "New Item"])}
      >
        Add Equipment
      </button>
    </div>
  );
};

export default NotesEquipment;