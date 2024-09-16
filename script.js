// Update the element with the 'code' id with the value from localStorage
document.getElementById('code').textContent = localStorage.getItem('room_code');
let cardId = localStorage.getItem('me');

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
