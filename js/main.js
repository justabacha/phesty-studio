import { updateUI, toggleView, toggleMusic } from './ui.js';
import { getWeather } from './weather.js';
import { loadDailyQuote } from './quotes.js';
import { setupMagic, handleMagic } from './magic.js';
import { toggleTimer } from './timer.js';

const backgrounds = ["https://i.postimg.cc/JGsdX7Xt/1000481158.jpg", "https://i.postimg.cc/BtnH4MFy/IMG-20250406-150134-376.jpg", /* ... rest of your links ... */];
const portraits = ["https://i.postimg.cc/MvFbdDqk/1000481154.jpg", "https://i.postimg.cc/XpJkfhMq/1000481158.jpg", /* ... rest of your links ... */];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = `url('${backgrounds[Math.floor(Math.random()*backgrounds.length)]}')`;
    document.getElementById('portrait-img').style.backgroundImage = `url('${portraits[Math.floor(Math.random()*portraits.length)]}')`;
    
    updateUI();
    getWeather();
    loadDailyQuote(backgrounds);
    setupMagic();
    
    setInterval(updateUI, 1000);

    // Attach to window for HTML onclicks
    window.toggleView = toggleView;
    window.toggleTimer = toggleTimer;
    window.toggleMusic = toggleMusic;
    window.handleMagic = handleMagic;
});
