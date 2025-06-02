import { jsPDF } from 'jspdf';
import "../../styles/Cinzel-normal.js";

const PdfExportButton = ({character}) => {
    const exportToPDF = () => {
        var img = new Image();
        img.src = "/home/toc.png"
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [8.5, 11]
          });
        const w = doc.internal.pageSize.getWidth();
        const h = doc.internal.pageSize.getHeight();
        doc.addImage(img, 'PNG', 0, 0, w, h);
        doc.setFont("Cinzel-Regular");
        doc.text(`Player name`, 2.125, 0, 6.375, 2);
        doc.save('character.pdf');
    };
    return (
        <button onClick={exportToPDF} className="btn btn-soft">
            Export Character as PDF
        </button>
    );
}

export default PdfExportButton