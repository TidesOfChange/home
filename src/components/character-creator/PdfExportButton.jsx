import { jsPDF } from 'jspdf';
import "../../styles/Cinzel-normal.js";

const PdfExportButton = ({character}) => {
    const exportToPDF = () => {
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [8.5, 11]
          });
        doc.setFont("Cinzel-Regular", "normal");
        doc.setFontSize(16);
        console.log(doc.getFontList());
        doc.addImage(`${character.species_image}`, 2.125, 0, 6.375, 2);
        // doc.text(`Name: ${character.name}`, 2, 4); (ADD 1 TO EVERY OTHER ATTRIBUTE AFTER)
        doc.text(`Species: ${character.species}`, 2.125, 3);
        doc.text(`Background: ${character.background}`, 2.125, 4);
        doc.text(
            `Stats: 
            . Knowledge: ${character.stats.Knowledge} 
            . Intuition: ${character.stats.Intuition} 
            . Strength: ${character.stats.Strength} 
            . Agility: ${character.stats.Agility} 
            . Personality: ${character.stats.Personality} 
            . Health: ${character.stats.Health}`,
            2.125,
            5
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