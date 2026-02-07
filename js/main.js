import { updateUI, toggleView, toggleMusic } from './ui.js';
import { getWeather } from './weather.js';
import { loadDailyQuote } from './quotes.js';
import { setupMagic, handleMagic } from './magic.js';
import { toggleTimer } from './timer.js';

// ... (keep your backgrounds and portraits arrays here) ...

const backgrounds = ["https://i.postimg.cc/JGsdX7Xt/1000481158.jpg", "https://i.postimg.cc/BtnH4MFy/IMG-20250406-150134-376.jpg", /* ... rest of your links ... */];
const portraits = ["https://i.postimg.cc/MvFbdDqk/1000481154.jpg", "https://i.postimg.cc/XpJkfhMq/1000481158.jpg", /* ... rest of your links ... */];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Styles
    document.body.style.backgroundImage = `url('${backgrounds[Math.floor(Math.random()*backgrounds.length)]}')`;
    const portrait = document.getElementById('portrait-img');
    if(portrait) portrait.style.backgroundImage = `url('${portraits[Math.floor(Math.random()*portraits.length)]}')`;
    
    // 2. Run Initial Logic
    updateUI();
    getWeather();
    loadDailyQuote(backgrounds);
    setupMagic();
    
    setInterval(updateUI, 1000);

    // 3. THE MAGIC LINK (Fixes the buttons)
    // This attaches your modular functions to the global window object
    window.toggleView = toggleView;
    window.toggleTimer = toggleTimer;
    window.toggleMusic = toggleMusic;
    window.handleMagic = handleMagic;
    
    console.log("Phestone Mission: System Booted 🚀");
});
