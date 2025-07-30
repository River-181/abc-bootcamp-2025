const library = document.querySelector('.library');
const modal = document.createElement('div');
modal.id = 'album-details';
modal.style.display = 'none';
document.body.appendChild(modal);

const albums = [
    {
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/2a/The_Dark_Side_of_the_Moon.png',
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        tracks: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse']
    },
    {
        cover: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
        title: 'Abbey Road',
        artist: 'The Beatles',
        tracks: ['Come Together', 'Something', 'Maxwell's Silver Hammer', 'Oh! Darling', 'Octopus's Garden', 'I Want You (She's So Heavy)', 'Here Comes the Sun', 'Because', 'You Never Give Me Your Money', 'Sun King', 'Mean Mr. Mustard', 'Polythene Pam', 'She Came in Through the Bathroom Window', 'Golden Slumbers', 'Carry That Weight', 'The End', 'Her Majesty']
    },
    {
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png',
        title: '21',
        artist: 'Adele',
        tracks: ['Rolling in the Deep', 'Rumour Has It', 'Turning Tables', 'Don't You Remember', 'Set Fire to the Rain', 'He Won't Go', 'Take It All', 'I'll Be Waiting', 'One and Only', 'Lovesong', 'Someone like You']
    },
    {
        cover: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpeg',
        title: 'Nevermind',
        artist: 'Nirvana',
        tracks: ['Smells Like Teen Spirit', 'In Bloom', 'Come as You Are', 'Breed', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You', 'Lounge Act', 'Stay Away', 'On a Plain', 'Something in the Way']
    },
    {
        cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/RumoursbyFleetwoodMac.png',
        title: 'Rumours',
        artist: 'Fleetwood Mac',
        tracks: ['Second Hand News', 'Dreams', 'Never Going Back Again', 'Don't Stop', 'Go Your Own Way', 'Songbird', 'The Chain', 'You Make Loving Fun', 'I Don't Want to Know', 'Oh Daddy', 'Gold Dust Woman']
    }
];

function renderLibrary() {
    library.innerHTML = '';
    albums.forEach((album, index) => {
        const lpCase = document.createElement('div');
        lpCase.className = 'lp-case';
        lpCase.dataset.index = index;

        const lpSleeve = document.createElement('div');
        lpSleeve.className = 'lp-sleeve';

        const img = document.createElement('img');
        img.src = album.cover;
        img.alt = `${album.title} by ${album.artist}`;

        lpSleeve.appendChild(img);
        lpCase.appendChild(lpSleeve);
        library.appendChild(lpCase);

        lpCase.addEventListener('click', () => {
            displayDetails(album);
        });
    });
}

function displayDetails(album) {
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${album.cover}" alt="${album.title}">
            <h2>${album.title}</h2>
            <h3>${album.artist}</h3>
            <ol>
                ${album.tracks.map(track => `<li>${track}</li>`).join('')}
            </ol>
        </div>
    `;
    modal.style.display = 'flex';

    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

renderLibrary();