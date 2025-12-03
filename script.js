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
    // Afficher le carnet de notes et la main
    document.getElementById('notebookBtn').classList.remove('hidden');
    document.getElementById('pointingHand').classList.remove('hidden');
    
    // Cacher le bouton + et les boutons de suppression dans cette page
    hideNotebookControls();
}

// Cacher les contrôles du carnet (bouton + et poubelles)
function hideNotebookControls() {
    const addBtn = document.querySelector('.add-note-btn');
    const deleteButtons = document.querySelectorAll('.delete-note-btn');
    
    if (addBtn) {
        addBtn.style.display = 'none';
    }
    
    deleteButtons.forEach(btn => {
        btn.style.display = 'none';
    });
}

// Réafficher les contrôles du carnet
function showNotebookControls() {
    const addBtn = document.querySelector('.add-note-btn');
    const deleteButtons = document.querySelectorAll('.delete-note-btn');
    
    if (addBtn) {
        addBtn.style.display = 'flex';
    }
    
    deleteButtons.forEach(btn => {
        btn.style.display = 'block';
    });
}

// Parler à Robert
function talkToRobert() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-robert').classList.remove('hidden');
    // Réinitialiser l'affichage
    document.getElementById('robert-buttons').style.display = 'block';
    document.getElementById('robert-leave-response').style.display = 'none';
    // Cacher le carnet
    document.getElementById('notebookBtn').classList.add('hidden');
    document.getElementById('pointingHand').classList.add('hidden');
    // Réafficher les contrôles du carnet
    showNotebookControls();
}

// Parler à Tom
function talkToTom() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-tom').classList.remove('hidden');
    // Cacher le carnet
    document.getElementById('notebookBtn').classList.add('hidden');
    document.getElementById('pointingHand').classList.add('hidden');
    // Réafficher les contrôles du carnet
    showNotebookControls();
}

// Parler à Patrick
function talkToPatrick() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page12-patrick').classList.remove('hidden');
    // Cacher le carnet
    document.getElementById('notebookBtn').classList.add('hidden');
    document.getElementById('pointingHand').classList.add('hidden');
    // Réafficher les contrôles du carnet
    showNotebookControls();
}

// Demander à Patrick pour le talkie-walkie
function askPatrickWalkie() {
    document.getElementById('patrick-response').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Demander à Robert pourquoi il a pris congé
function askRobertLeave() {
    document.getElementById('robert-leave-response').style.display = 'block';
    document.getElementById('robert-buttons').style.display = 'none';
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
    
    // Réinitialiser les états
    if (document.getElementById('robert-buttons')) {
        document.getElementById('robert-buttons').style.display = 'block';
        document.getElementById('robert-leave-response').style.display = 'none';
    }
    
    // Afficher la page de choix
    document.getElementById('page11').classList.remove('hidden');
    // Réafficher le carnet
    document.getElementById('notebookBtn').classList.remove('hidden');
    document.getElementById('pointingHand').classList.remove('hidden');
    // Recacher les contrôles du carnet
    hideNotebookControls();
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

// Toggle carnet de notes
function toggleNotebook() {
    const notebook = document.getElementById('notebookPanel');
    const isClosing = !notebook.classList.contains('hidden');
    
    notebook.classList.toggle('hidden');
    // Masquer la main après le premier clic
    document.getElementById('pointingHand').classList.add('hidden');
    
    // Si on ferme le carnet, afficher le bouton des travailleurs
    if (isClosing) {
        document.getElementById('workersBtn').classList.remove('hidden');
    }
}

// Raccourci pour aller directement à la page de choix (temporaire pour le dev)
function jumpToCameras() {
    // Cacher toutes les pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.classList.add('hidden'));
    
    // Afficher la page du rendez-vous avec Wilms
    document.getElementById('page-wilms-meeting').classList.remove('hidden');
}

// Aller voir les travailleurs de la banque
function goToWorkers() {
    document.getElementById('page11').classList.add('hidden');
    document.getElementById('page-workers').classList.remove('hidden');
    // Cacher le carnet
    document.getElementById('notebookBtn').classList.add('hidden');
    document.getElementById('pointingHand').classList.add('hidden');
    // Réafficher les contrôles du carnet
    showNotebookControls();
}

// Revenir au choix depuis la page des travailleurs
function returnToChoiceFromWorkers() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page11').classList.remove('hidden');
    // Réafficher le carnet
    document.getElementById('notebookBtn').classList.remove('hidden');
    // Le bouton reste visible
}

// Interroger Jean
function interrogateJean() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page-jean').classList.remove('hidden');
}

function askJeanMidnight() {
    document.getElementById('jean-answer').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Interroger Marc
function interrogateMarc() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page-marc').classList.remove('hidden');
}

function askMarcMidnight() {
    document.getElementById('marc-answer').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Interroger Sophie
function interrogateSophie() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page-sophie').classList.remove('hidden');
}

function askSophieMidnight() {
    document.getElementById('sophie-answer').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Interroger Lucas
function interrogateLucas() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page-lucas').classList.remove('hidden');
}

function askLucasMidnight() {
    document.getElementById('lucas-answer').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Revenir à la liste des travailleurs
function returnToWorkers() {
    // Cacher toutes les pages d'interrogatoire des travailleurs
    document.getElementById('page-jean').classList.add('hidden');
    document.getElementById('page-marc').classList.add('hidden');
    document.getElementById('page-sophie').classList.add('hidden');
    document.getElementById('page-lucas').classList.add('hidden');
    
    // Afficher la page des travailleurs
    document.getElementById('page-workers').classList.remove('hidden');
}

// Inspecter les lieux
function inspectPlace() {
    document.getElementById('page-workers').classList.add('hidden');
    document.getElementById('page-inspection').classList.remove('hidden');
}

// Jouer le message du talkie-walkie d'inspection
function playInspectionWalkie() {
    document.getElementById('inspection-walkie-message').classList.remove('hidden');
    event.target.style.opacity = '0.5';
    event.target.style.cursor = 'default';
}

// Après l'inspection
function afterInspection() {
    document.getElementById('page-inspection').classList.add('hidden');
    document.getElementById('page-king').classList.remove('hidden');
}

// Saluer le roi
function greetKing() {
    document.getElementById('king-conversation1').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Donner le carnet au roi
function giveNotebook() {
    document.getElementById('king-conversation2').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Confirmer pour Patrick
function confirmPatrick() {
    document.getElementById('king-conversation3').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Ouvrir le papier du roi
function openKingPaper() {
    document.getElementById('page-king').classList.add('hidden');
    document.getElementById('page-king-paper').classList.remove('hidden');
}

// Après avoir lu le papier du roi
function afterKingPaper() {
    alert('Suite à développer...');
}

// Demander l'heure au roi
function askTime() {
    document.getElementById('king-time-response').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Après avoir demandé l'heure
function afterKingTime() {
    alert('Suite à développer...');
}

// Aller faire une sieste
function goToNap() {
    document.getElementById('page-king-paper').classList.add('hidden');
    document.getElementById('page-nap').classList.remove('hidden');
    startClockCountdown();
}

// Démarrer le compte à rebours de l'horloge
function startClockCountdown() {
    let count = 5;
    const clockDisplay = document.getElementById('clockDisplay');
    let hasRestarted = false;
    
    const countdown = setInterval(() => {
        count--;
        clockDisplay.textContent = count;
        
        // Quand arrive à 1 pour la première fois, montrer le message du bruit
        if (count === 1 && !hasRestarted) {
            clearInterval(countdown);
            // Afficher le message "Encore 2 secondes..."
            setTimeout(() => {
                document.getElementById('noise-message').classList.remove('hidden');
            }, 100);
            
            hasRestarted = true;
            // Redémarrer le compte à rebours de 2 après 2 secondes
            setTimeout(() => {
                count = 2;
                clockDisplay.textContent = count;
                // Reprendre le compte à rebours
                const countdown2 = setInterval(() => {
                    count--;
                    clockDisplay.textContent = count;
                    
                    // Quand arrive à 1, sonner
                    if (count === 1) {
                        document.getElementById('noise-message').classList.add('hidden');
                    }
                    else if (count === 0) {
                        clearInterval(countdown2);
                        clockDisplay.textContent = '🔔';
                        document.getElementById('wake-message').classList.remove('hidden');
                    }
                }, 1000);
            }, 2000);
        }
    }, 1000); // Chaque seconde
}

// Après la sieste
function afterNap() {
    document.getElementById('page-nap').classList.add('hidden');
    document.getElementById('page-wilms-meeting').classList.remove('hidden');
}

// Demander à Wilms "Comment ça ?"
function askWilmsWhat() {
    document.getElementById('wilms-revelation').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Confronter Wilms
function confrontWilms() {
    document.getElementById('wilms-confirmation').classList.remove('hidden');
    event.target.style.display = 'none';
}

// Après la révélation de Wilms
function afterWilmsRevelation() {
    document.getElementById('page-wilms-meeting').classList.add('hidden');
    document.getElementById('page-attack').classList.remove('hidden');
}

// Se réveiller dehors
function wakeUpOutside() {
    document.getElementById('page-attack').classList.add('hidden');
    document.getElementById('page-escape').classList.remove('hidden');
}

// Fuir
function runAway() {
    document.getElementById('page-escape').classList.add('hidden');
    document.getElementById('page-after-escape').classList.remove('hidden');
}

// Ouvrir le carnet après la fuite
function openNotebookAfterEscape() {
    // Afficher le carnet
    document.getElementById('notebookBtn').classList.remove('hidden');
    document.getElementById('notebookPanel').classList.remove('hidden');
    
    // Cacher la main pointant (si elle était visible)
    document.getElementById('pointingHand').classList.add('hidden');
    
    // Activer l'effet de floutage avec le message
    setTimeout(() => {
        showBlurMessage();
    }, 500);
}

// Afficher le message avec effet de flou
function showBlurMessage() {
    const blurOverlay = document.getElementById('blurOverlay');
    const messageText = document.getElementById('blurMessageText');
    
    if (blurOverlay && messageText) {
        blurOverlay.classList.remove('hidden');
        
        // Afficher le premier message
        messageText.innerHTML = '<p style="font-size: 1.5em;">📝 Effacez les anciennes notes</p><p style="font-size: 1.2em; margin-top: 20px;">Cliquez sur 🗑️ pour supprimer chaque note</p>';
        messageText.style.opacity = '1';
        messageText.style.display = 'block';
        
        // Faire disparaître le message après 3 secondes (mais garder le flou)
        setTimeout(() => {
            messageText.style.opacity = '0';
            
            // Après le fade out, cacher le message mais garder l'overlay
            setTimeout(() => {
                messageText.style.display = 'none';
            }, 500);
        }, 3000);
        
        // Démarrer la surveillance des notes
        checkNotesDeleted();
    }
}

// Vérifier si toutes les notes ont été supprimées
function checkNotesDeleted() {
    const messageText = document.getElementById('blurMessageText');
    let allDeleted = false;
    
    const interval = setInterval(() => {
        const remainingNotes = document.querySelectorAll('.notebook-content .note-item:not(#note-wilms)');
        
        if (remainingNotes.length === 0 && !allDeleted) {
            // Toutes les notes sont supprimées pour la première fois
            allDeleted = true;
            clearInterval(interval);
            
            if (messageText) {
                // Afficher le message de succès
                messageText.style.display = 'block';
                messageText.style.opacity = '1';
                messageText.innerHTML = '<p style="font-size: 1.5em; color: #4CAF50;">✓ Parfait !</p><p style="font-size: 1.3em; margin-top: 20px;">Appuyez sur <strong>+</strong> pour ajouter la note importante</p>';
                
                // Faire disparaître après 3 secondes
                setTimeout(() => {
                    messageText.style.opacity = '0';
                    setTimeout(() => {
                        messageText.style.display = 'none';
                    }, 500);
                }, 3000);
            }
        }
    }, 100);
}

// Supprimer une note du carnet
function deleteNote(noteId) {
    const note = document.getElementById(noteId);
    if (note) {
        note.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            note.remove();
        }, 300);
    }
}

// Ajouter la note sur Wilms directement
function addWilmsNote() {
    // Vérifier si la note n'existe pas déjà
    if (document.getElementById('note-wilms')) {
        return; // Ne rien faire si la note existe déjà
    }
    
    // Créer l'élément de note
    const noteItem = document.createElement('div');
    noteItem.className = 'note-item';
    noteItem.id = 'note-wilms';
    noteItem.innerHTML = `
        <div class="note-icon">🚨</div>
        <p><strong>Wilms est le voleur !</strong> - Il a avoué avoir volé la banque depuis le début.</p>
    `;
    noteItem.style.borderLeft = '4px solid #f44336';
    
    // Ajouter la note au début du carnet
    const notebookContent = document.querySelector('.notebook-content');
    const firstNote = notebookContent.querySelector('.note-item');
    if (firstNote) {
        notebookContent.insertBefore(noteItem, firstNote);
    } else {
        notebookContent.appendChild(noteItem);
    }
    
    // Animation d'entrée
    noteItem.style.animation = 'slideInNote 0.5s ease-out';
    
    // Masquer le message de flou
    const blurOverlay = document.getElementById('blurOverlay');
    if (blurOverlay) {
        blurOverlay.classList.add('hidden');
    }
}