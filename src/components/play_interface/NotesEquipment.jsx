import { useState } from 'react';

const NotesEquipment = () => {
    // Handle dragging to resize the panel
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        let newWidth = (e.clientX / window.innerWidth) * 100;
        newWidth = Math.min(70, Math.max(30, newWidth)); // Keep between 15% and 50%
        setPanelWidth(`${newWidth}%`);

        if (typeof window !== 'undefined') {
            localStorage.setItem('panelWidth', `${newWidth}%`);
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const [notes, setNotes] = useState('');
    const [equipment, setEquipment] = useState([]);

    return (
        <div class="w-1/2 bg-base-300 pt-8 px-4">
            <h2 class="text-xl font-bold mb-4">Notes & Equipment</h2>
            <textarea
                class="w-full h-1/3 textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write notes or track story progress..."
            />
            <h3 class="mt-4 text-xl font-bold">Equipment</h3>
            <ul class="list-disc pl-6">
                {equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                class="mt-2 btn btn-primary"
                onClick={() => setEquipment([...equipment, 'New Item'])}
            >
                Add Equipment
            </button>
        </div>
    );
};

export default NotesEquipment;
