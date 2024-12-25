import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generatePDF = async (container) => {
  const canvas = await html2canvas(container);
  const imgData = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [canvas.width, canvas.height]
  });
  
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('certificate.pdf');
};