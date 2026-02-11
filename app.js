function playMusic() {
    const audio = document.getElementById('canyoneroMusic');
    audio.play().catch(e => console.log('Audio play failed:', e));
}
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.play-button');
    if (btn) btn.addEventListener('click', playMusic);
});
