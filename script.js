document.getElementById('code').textContent = localStorage.getItem('room_code');
function makeRed(card) {
    card.classList.toggle('bg-danger');
}
function makeGreen(card) {
    document.getElementById('id').textContent = localStorage.getItem('me');
    // make the card with the same id green and thats by adding the bg-success class like class="card text-center bg-success border-light"
}

function makeGreen(cardId) {
    
    // Add the bg-success class to the card
    let card = document.getElementById(cardId);
    if (card) {
        card.classList.remove('bg-dark');
        card.classList.add('bg-success', 'border-light');
        console.log('Card with id ' + cardId + ' is now green');
    } else {
        console.log('Card with id ' + cardId + ' not found');
    }
}
cardId = localStorage.getItem('me');
makeGreen(cardId)
