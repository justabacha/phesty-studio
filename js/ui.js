export function updateUI() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    document.getElementById('date-header').innerText = now.toLocaleDateString('en-US', {month:'long', day:'numeric'});
    
    const d = now.getDate();
    const s = (d%10==1&&d!=11)?'st':(d%10==2&&d!=12)?'nd':(d%10==3&&d!=13)?'rd':'th';
    document.getElementById('q-date').innerText = `📌 ${now.toLocaleString('default',{month:'long'})} ${d}${s}, ${now.toLocaleString('default',{weekday:'long'})}`;
}

export function toggleView(view) {
    document.getElementById('dashboard-view').classList.toggle('active-view', view !== 'studio');
    document.getElementById('studio-view').classList.toggle('active-view', view === 'studio');
}

export function toggleMusic() {
    const a = document.getElementById('audio');
    const m = document.querySelector('.music-section');
    a.paused ? (a.play(), m.classList.add('playing')) : (a.pause(), m.classList.remove('playing'));
}
