import pkg from 'file-saver';
const { saveAs } = pkg;
import { jsPDF } from 'jspdf';
import PdfExportButton from './PdfExportButton';

const FinalizeCharacter = ({ character }) => {
    const exportToJSON = () => {
        const jsonData = JSON.stringify([character], null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'character.json');
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(`Character Sheet:`, 20, 20);
        doc.text(`Species: ${character.species}`, 20, 30);
        doc.text(`Background: ${character.background}`, 20, 50);
        doc.text(
            `Stats: Strength: ${character.stats.Strength}, Intelligence: ${character.stats.Intelligence}, Wisdom: ${character.stats.Wisdom},
      Dexterity: ${character.stats.Dexterity}, Constitution: ${character.stats.Constitution}, Charisma: ${character.stats.Charisma}`,
            20,
            60
        );
        doc.save('character.pdf');
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Finalize Your Character</h2>
            <div className="card bg-base-100 shadow-sm mb-4">
                <div className="card-body">
                    <p className="mb-4">
                        <strong>Species:</strong>
                        <br /> {character.species}
                    </p>
                    <p className="mb-4">
                        <strong>Background:</strong>
                        <br /> {character.background}
                    </p>
                    <strong>Stats:</strong>
                    {Object.entries(character.stats).map(
                        ([statName, value]) => (
                            <div
                                key={statName}
                                className="flex justify-between border-b py-1"
                            >
                                <span className="font-semibold">
                                    {statName}
                                </span>
                                <span>{value}</span>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <div>
                    <p className="mb-4">Save for future online editing:</p>
                    <button onClick={exportToJSON} className="btn btn-soft">
                        Export Character as JSON
                    </button>
                </div>
                <div>
                    <p className="mb-4">Offline Printing/Sharing:</p>
                    <PdfExportButton character={character} />
                </div>
            </div>
        </div>
    );
};

export default FinalizeCharacter;