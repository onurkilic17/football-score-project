// Başlangıç skolar
let teamAScore = 0;
let teamBScore = 0;

// Skor güncelleme 
function updateScore(team) {
    document.getElementById(`team${team}-score`).textContent = team === 'A' ? teamAScore : teamBScore;
}

// Gol arttırmaa
function increaseScore(team) {
    if (team === 'A') {
        teamAScore++;
    } else {
        teamBScore++;
    }
    updateScore(team);
}

// Gol azaltma 
function decreaseScore(team) {
    if (team === 'A' && teamAScore > 0) {
        teamAScore--;
    } else if (team === 'B' && teamBScore > 0) {
        teamBScore--;
    }
    updateScore(team);
}

// Gol belirleme elle
function setScore(team) {
    let newScore = prompt("Yeni gol sayısını girin:");
    if (newScore !== null && !isNaN(newScore) && newScore >= 0) {
        if (team === 'A') {
            teamAScore = parseInt(newScore);
        } else {
            teamBScore = parseInt(newScore);
        }
        updateScore(team);
    } else {
        alert("Geçerli bir sayı girin.");
    }
}

// Takım ismini değiştirme
function changeTeamName(team) {
    let newName = prompt("Yeni takım ismini girin:");
    if (newName !== null && newName.trim() !== "") {
        document.getElementById(`team${team}-name`).textContent = newName;
    } else {
        alert("Geçerli bir isim girin.");
    }
}
