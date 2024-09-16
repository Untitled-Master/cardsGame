// Initialize Firebase with the provided config
const firebaseConfig = {
    apiKey: "AIzaSyDk3RLkM4f732rtIaaWfIQAx3IMvqamJZ0",
    authDomain: "crss-58a32.firebaseapp.com",
    databaseURL: "https://crss-58a32-default-rtdb.firebaseio.com",
    projectId: "crss-58a32",
    storageBucket: "crss-58a32.appspot.com",
    messagingSenderId: "907816297594",
    appId: "1:907816297594:web:8995e1aa9ee37b12dc87c3",
    measurementId: "G-2TRNZD1NZK"
};

// Initialize Firebase app and database
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Update the element with the 'code' id with the value from localStorage
document.getElementById('code').textContent = localStorage.getItem('room_code');
let cardId = localStorage.getItem('me');
let room = localStorage.getItem('room_code');
let player1 = localStorage.getItem('player1');
let player2 = localStorage.getItem('player2');

function makeRed(card) {
    if (card.classList.contains('bg-dark')) {
        // Remove 'bg-dark' and add 'bg-danger'
        card.classList.remove('bg-dark');
        card.classList.add('bg-danger');
    } else if (card.classList.contains('bg-danger')) {
        // Remove 'bg-danger' and add 'bg-success' if the card ID matches, otherwise add 'bg-dark'
        if (card.id === cardId) {
            card.classList.remove('bg-danger');
            card.classList.add('bg-success');
        } else {
            card.classList.remove('bg-danger');
            card.classList.add('bg-dark');
        }
    } else if (card.classList.contains('bg-success')) {
        // Remove 'bg-success' and add 'bg-dark'
        card.classList.remove('bg-success');
        card.classList.add('bg-danger');
    } else {
        // If none of the classes are present, add 'bg-danger' as default
        card.classList.add('bg-danger');
    }
}

// Function to make the card green by changing its background color
function makeGreen(cardId) {
    // Get the card element by ID
    let card = document.getElementById(cardId);
    if (card) {
        // Remove the 'bg-dark' class if it exists
        card.classList.remove('bg-dark');
        
        // Add the 'bg-success' and 'border-light' classes
        card.classList.add('bg-success', 'border-light');
        
        console.log('Card with id ' + cardId + ' is now green');
    } else {
        console.log('Card with id ' + cardId + ' not found');
    }
}

// Retrieve the card ID from localStorage and apply the green color update
makeGreen(cardId);

// JavaScript to handle the button click and check the number
document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the value from the input field
    let inputValue = document.getElementById('input-text').value;
    
    // Get the value from localStorage
    let player2Value = localStorage.getItem('player2');
    
    // Get the result message div
    let resultMessage = document.getElementById('result-message');
    
    // Check if the input value matches the localStorage value
    if (inputValue === player2Value) {
        resultMessage.textContent = 'You win!';
        resultMessage.className = 'text-success'; // Optional: apply a Bootstrap class for styling
        db.ref('rooms/' + room).set({
            room: room,
            player1: player1,
            player2: player2,
            state: true
        });
    } else {
        resultMessage.textContent = 'Try again.';
        resultMessage.className = 'text-danger'; // Optional: apply a Bootstrap class for styling
    }
});

// Function to check game state and show modal if game has ended
window.onload = function() {
    db.ref('rooms/' + room).once('value', function(snapshot) {
        const gameState = snapshot.val().state;
        if (gameState) {
            // Show the modal if the game state is true
            const modal = new bootstrap.Modal(document.getElementById('gameEndedModal'));
            modal.show();
        }
    });
};
