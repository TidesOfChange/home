import { useState } from 'react';

const AdventureNotes = () => {
    const [notes, setNotes] = useState('');

    return (
        <div className="bg-base-300 pt-8 px-4 h-screen">
            <h2 className="text-xl font-bold mb-4">Adventure Notes</h2>
            <textarea
                className="w-full h-1/3 textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write notes or track story progress..."
            />
        </div>
    );
};

export default AdventureNotes;
