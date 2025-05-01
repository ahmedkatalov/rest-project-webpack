import '../styles/index.css';
const rootElement = document.getElementById('root');
// document.getElementById('click').addEventListener('click', () => alert('yeay, it works'));

const button = document.createElement('button');
button.textContent = 'hey';

rootElement.append(button);