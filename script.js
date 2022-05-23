let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleBurger');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNavigation');
    toggleButton.classList.toggle('activeBurger')
})


// accordion

let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

