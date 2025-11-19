// Variables globales
let cluesFound = [];
let suspectInterrogated = [];

// Démarrer l'enquête
function startInvestigation() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

// Vérifier les caméras de sécurité
function checkCameras() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}

// Ouvrir le papier
function openPaper() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
}

// Continuer l'enquête après avoir lu le papier
function continueInvestigation() {
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page5').classList.remove('hidden');
}

// Demander à Wilms comment il sait
function askWilms() {
    document.getElementById('wilms-answer').classList.remove('hidden');
    event.target.style.display = 'none'; // Cache le bouton après le clic
}

// Voir la photo
function showPhoto() {
    document.getElementById('page5').classList.add('hidden');
    document.getElementById('page6').classList.remove('hidden');
    
    // Animation du piratage après 1 seconde
    setTimeout(() => {
        document.getElementById('hackedScreen').classList.add('active');
    }, 1000);
}

// Revoir la vidéo
function replayVideo() {
    const hackedScreen = document.getElementById('hackedScreen');
    const runningPerson = document.getElementById('runningPerson');
    
    // Reset l'écran piraté
    hackedScreen.classList.remove('active');
    
    // Reset l'animation de la personne
    runningPerson.style.animation = 'none';
    setTimeout(() => {
        runningPerson.style.animation = 'runFast 1s linear forwards';
    }, 10);
    
    // Re-pirater après 1 seconde
    setTimeout(() => {
        hackedScreen.classList.add('active');
    }, 1000);
}

// Continuer après avoir vu la photo
function continueAfterPhoto() {
    alert('Suite à développer...');
}

// Interroger Robert
function interrogateRobert() {
    document.getElementById('page6').classList.add('hidden');
    document.getElementById('page7').classList.remove('hidden');
}

// Demander à Robert s'il travaillait
function askRobertWork() {
    document.getElementById('robert-response').textContent = '"Non, c\'était Tom."';
    showRobertAnswer();
}

// Demander à Robert ce qui s'est passé
function askRobertWhat() {
    document.getElementById('robert-response').textContent = '"Je ne sais pas, j\'avais pris congé à ce moment. C\'était Tom qui surveillait..."';
    showRobertAnswer();
}

// Afficher la réponse de Robert
function showRobertAnswer() {
    document.getElementById('robert-answer').classList.remove('hidden');
    // Cacher les boutons de questions
    const cards = document.querySelectorAll('#page7 .suspect-card');
    cards.forEach(card => card.style.display = 'none');
}

// Aller voir Tom
function goToTom() {
    document.getElementById('page7').classList.add('hidden');
    document.getElementById('page8').classList.remove('hidden');
}

// Après le témoignage de Tom
function afterTom() {
    alert('Suite à développer...');
}

// Demander pourquoi Tom n'a pas appelé la police
function askWhyNoPolice() {
    document.getElementById('tom-answer').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Jouer le message du talkie-walkie
function playWalkieTalkie() {
    document.getElementById('walkie-message').classList.remove('hidden');
    event.target.style.opacity = '0.5';
    event.target.style.cursor = 'default';
}

// Après avoir écouté le talkie-walkie
function afterWalkie() {
    document.getElementById('page8').classList.add('hidden');
    document.getElementById('page9').classList.remove('hidden');
}

// Mentionner le vol de la banque
function showBankRobbery() {
    document.getElementById('patrick-conversation').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Mentionner le talkie-walkie
function mentionWalkieTalkie() {
    document.getElementById('patrick-defense').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Après l'interrogatoire de Patrick
function afterPatrick() {
    document.getElementById('page9').classList.add('hidden');
    document.getElementById('page10').classList.remove('hidden');
}

// Après la réflexion
function afterReflection() {
    document.getElementById('page10').classList.add('hidden');
    document.getElementById('page11').classList.remove('hidden');
}

// Parler à Robert
function talkToRobert() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-robert').classList.remove('hidden');
}

// Parler à Tom
function talkToTom() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-tom').classList.remove('hidden');
}

// Parler à Patrick
function talkToPatrick() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-patrick').classList.remove('hidden');
}

// Demander à Patrick pour le talkie-walkie
function askPatrickWalkie() {
    document.getElementById('patrick-response').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Demander à Robert pourquoi il a pris congé
function askRobertLeave() {
    document.getElementById('robert-response').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Demander à Tom comment monter sur le toit
function askTomRoof() {
    document.getElementById('tom-response').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Revenir au choix
function returnToChoice() {
    // Cacher toutes les pages d'interrogatoire
    document.getElementById('page12-patrick').classList.add('hidden');
    document.getElementById('page12-robert').classList.add('hidden');
    document.getElementById('page12-tom').classList.add('hidden');
    
    // Afficher la page de choix
    document.getElementById('page11').classList.remove('hidden');
}

// Chercher avec la police
function askPolice() {
    alert('Vous demandez l\'aide de la police pour fouiller...');
    // À développer
}

// Interroger le village
function interrogateVillage() {
    alert('Vous allez interroger les habitants du village...');
    // À développer
}