import './style.css';
import { initCertificateGenerator } from './utils/certificateGenerator';
import { TEXT_POSITIONS } from './utils/constants';

document.querySelector('#app').innerHTML = `
  <div class="animated-bg min-h-screen py-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Certificate Generator</h1>
        
        <div class="space-y-8">
          <div class="form-container space-y-4 bg-white/50 p-6 rounded-lg">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white">
            </div>
            
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white">
            </div>
          </div>
          
          <div class="flex justify-center space-x-4">
            <button id="generateBtn" class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition hover:scale-105">
              Generate Preview
            </button>
            <button id="downloadBtn" class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform transition hover:scale-105" style="display: none;">
              Download Certificate
            </button>
          </div>
          
          <div id="certificateContainer" class="relative w-[800px] mx-auto mt-8 hidden bg-white rounded-lg p-4">
            <img id="certificateImage" class="w-full rounded" alt="Certificate Template">
            <div id="nameText" class="absolute certificate-text" style="top: ${TEXT_POSITIONS.name.top}; left: ${TEXT_POSITIONS.name.left}; transform: ${TEXT_POSITIONS.name.transform}; font-size: ${TEXT_POSITIONS.name.fontSize}; font-weight: ${TEXT_POSITIONS.name.fontWeight};"></div>
            <div id="dateText" class="absolute certificate-text" style="top: ${TEXT_POSITIONS.date.top}; left: ${TEXT_POSITIONS.date.left}; transform: ${TEXT_POSITIONS.date.transform}; font-size: ${TEXT_POSITIONS.date.fontSize}; font-style: ${TEXT_POSITIONS.date.fontStyle};"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', initCertificateGenerator);