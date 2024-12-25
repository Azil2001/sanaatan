import { elements } from './domElements';
import { generatePDF } from './pdfGenerator';
import { CERTIFICATE_TEMPLATE_URL } from './constants';

export const initCertificateGenerator = () => {
  const { form, buttons, preview } = elements;

  // Set the certificate template image on load
  preview.image().src = CERTIFICATE_TEMPLATE_URL;
  preview.container().classList.remove('hidden');

  // Handle preview generation
  buttons.generate().addEventListener('click', () => {
    preview.nameText().textContent = form.name().value;
    preview.dateText().textContent = form.date().value || new Date().toLocaleDateString();
    buttons.download().style.display = 'block';
  });

  // Handle certificate download
  buttons.download().addEventListener('click', async () => {
    try {
      await generatePDF(preview.container());
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  });
};