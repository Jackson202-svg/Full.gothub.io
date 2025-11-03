// Load navbar dynamically
document.getElementById('navbar').innerHTML = `
  <nav>
    <a onclick="scrollToSection('stats')">Player Stats</a>
    <a onclick="scrollToSection('news')">Latest News</a>
    <a onclick="scrollToSection('playlists')">Playlists</a>
    <a onclick="scrollToSection('download')">Download</a>
  </nav>
`;

// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Load Warzone stats
document.getElementById('loadStatsBtn').addEventListener('click', () => {
  const username = document.getElementById('usernameInput').value.trim();
  if(username) {
    document.getElementById('statsIframe').src = `https://tracker.gg/warzone/profile/pc/${username}/overview`;
  }
});

// Change playlist dynamically
document.getElementById('playlistSelector').addEventListener('change', () => {
  const playlistId = document.getElementById('playlistSelector').value;
  document.getElementById('playlistIframe').src = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
});
