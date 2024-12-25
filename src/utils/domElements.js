// DOM element selectors
export const elements = {
  form: {
    name: () => document.getElementById('name'),
    date: () => document.getElementById('date'),
    template: () => document.getElementById('template')
  },
  buttons: {
    generate: () => document.getElementById('generateBtn'),
    download: () => document.getElementById('downloadBtn')
  },
  preview: {
    container: () => document.getElementById('certificateContainer'),
    image: () => document.getElementById('certificateImage'),
    nameText: () => document.getElementById('nameText'),
    dateText: () => document.getElementById('dateText')
  }
};