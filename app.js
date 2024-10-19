// Function displays top goalscoreres in the Premier League
function displayTopScorers(scorers) {
    const scorersContainer = document.getElementById('scorers');
    scorers.forEach(player => {
        const scorerElement = document.createElement('div');
        scorerElement.classList.add('scorer');

        // replaces missing player photos with a placeholder image
        const playerPhoto = player.player.photo || 'https://via.placeholder.com/80';
        scorerElement.innerHTML = `
            <img src="${playerPhoto}" alt="${player.player.name}">
            <h3>${player.player.name}</h3>
            <p>Team: ${player.statistics[0].team.name}</p>
            <p>Goals: ${player.statistics[0].goals.total}</p> `;
        scorersContainer.appendChild(scorerElement);
    });
}
