import { jsPDF } from 'jspdf';

const PdfExportButton = ({character}) => {
    const exportToPDF = () => {
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [8.5, 11]
          });
        doc.addImage(`${character.species_image}`, 2.125, 0, 6.375, 2);
        // doc.text(`Name: ${character.name}`, 2, 4); (ADD 1 TO EVERY OTHER ATTRIBUTE AFTER)
        doc.text(`Species: ${character.species}`, 2.5, 3);
        doc.text(`Background: ${character.background}`, 2.5, 5);
        doc.text(
            `Stats: 
            . Strength: ${character.stats.Strength} 
            . Intelligence: ${character.stats.Intelligence} 
            . Wisdom: ${character.stats.Wisdom} 
            . Dexterity: ${character.stats.Dexterity} 
            . Constitution: ${character.stats.Constitution} 
            . Charisma: ${character.stats.Charisma}`,
            2.5,
            6
        );
        doc.save('character.pdf');
    };
    return (
        <button onClick={exportToPDF} className="btn btn-soft">
            Export Character as PDF
        </button>
    );
}

export default PdfExportButton