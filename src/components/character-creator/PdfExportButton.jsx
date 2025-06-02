import { jsPDF } from 'jspdf';
import "../../styles/Cinzel-normal.js";

const PdfExportButton = ({character}) => {
    const exportToPDF = () => {
        var img = new Image();
        img.src = "/home/toc.png"
        var img2 = new Image();
        img2.src = "/home/toc2.png"
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "in",
            format: [8.5, 11]
          });
        const w = doc.internal.pageSize.getWidth();
        const h = doc.internal.pageSize.getHeight();
        doc.addImage(img, 'PNG', 0, 0, w, h);
        doc.setFontSize(11);
        doc.setFont("Cinzel-Regular", "bold");
        doc.text(`Player name: `, 1, 1.5);
        doc.text(`Character Name: `, 5, 1.5);
        doc.text(`Species: `, 1, 2);
        doc.text(`Background: `, 5, 2);
        doc.text(`Total XP: `, 1, 2.5);
        doc.text(`Current XP: `, 3, 2.5);
        doc.text(`HT: `, 5, 2.5);
        doc.text(`Current Harm: `, 6, 2.5);
        doc.text(`Background, Personality, Description:`, 1, 3);

        // First Column of Attributes
        doc.text('Attributes', 1, 4.5);
        doc.setFont("Cinzel-Regular", "regular");
        doc.text('Agility OOOOO', 1, 4.75);
        doc.text('Strength OOOOO', 1, 5);
        doc.setFont("Cinzel-Regular", "bold");
        doc.text('Skills', 1, 5.5);
        doc.setFont("Cinzel-Regular", "regular");
        doc.text('Agility', 1, 5.75);
        doc.text('Thievery OOOOO', 1, 6);
        doc.text('Sneakiness OOOOO', 1, 6.25);
        doc.text('Shooting OOOOO', 1, 6.5);
        doc.text('Reaction OOOOO', 1, 6.75);
        doc.text('Strength', 1, 7.5);
        doc.text('Force OOOOO', 1, 7.75);
        doc.text('Climbing OOOOO', 1, 8.);
        doc.text('Swimming OOOOO', 1, 8.25);
        doc.setFont("Cinzel-Regular", "bold");
        doc.text('Species Ability', 1, 9.25);
        doc.setFont("Cinzel-Regular", "regular");

        // Second column of attributes
        doc.text('Knowledge OOOOO', 3.5, 4.75);
        doc.text('Intuition OOOOO', 3.5, 5);
        doc.text('Knowledge', 3.5, 5.75);
        doc.text('Vehicles OOOOO', 3.5, 6);
        doc.text('Cybernetics OOOOO', 3.5, 6.25);
        doc.text('Handiness OOOOO', 3.5, 6.5);
        doc.text('Deduction OOOOO', 3.5, 6.75);
        doc.text('Medicine OOOOO', 3.5, 7);
        doc.text('Intuition', 3.5, 7.5);
        doc.text('Foraging OOOOO', 3.5, 7.75);
        doc.text('Awareness OOOOO', 3.5, 8);
        doc.text('Insight OOOOO', 3.5, 8.25);
        doc.text('Tracking OOOOO', 3.5, 8.5);
        doc.text('Affinity OOOOO', 3.5, 8.75);

        //Third Column of attributes
        doc.text('Personality OOOOO', 6, 4.75);
        doc.text('Health OOOOO', 6, 5);
        doc.text('Personality', 6, 5.75);
        doc.text('Fear OOOOO', 6, 6);
        doc.text('Deception OOOOO', 6, 6.25);
        doc.text('Leadership OOOOO', 6, 6.5);
        doc.text('Bartering OOOOO', 6, 6.75);
        doc.text('Charm OOOOO', 6, 7);
        doc.text('Background Skill', 6, 7.5);
        doc.text('___________ OOOOO', 6, 8);
        doc.setFont("Cinzel-Regular", "bold");
        doc.text('Species Weakness', 4, 9.25);

        //Second Page
        doc.addPage();
        doc.addImage(img2, 'PNG', 0, 0, w, h);
        doc.text('NPC Contacts', 0.5, 1.5);
        doc.text('Expertise Tree', 0.5, 2.6);
        doc.text('Weapons and Equipment', 0.5, 6.1);
        doc.text('Magic', 0.5, 8.5);
        doc.setFont("Cinzel-Regular", "regular");
        doc.text('Spells known: ', 0.5, 8.75);
        doc.text('Magic Points / Magitech Charges:', 0.5, 9.75);
        doc.save('character.pdf');
    };
    return (
        <button onClick={exportToPDF} className="btn btn-soft">
            Export Character as PDF
        </button>
    );
}

export default PdfExportButton