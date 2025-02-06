//Albuns e artistas

document.addEventListener('DOMContentLoaded', () => {

    //Um array de objetos de artistas, onde cada objeto terá as propriedades nome e imagem.
    const artistsData = [

        { name: 'Henrique & Juliano', image: './assets/artista-henrique-juliano.jpg' }, 
        { name: 'Jorge & Mateus', image: './assets/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './assets/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './assets/artista-gustavo-limma.jpg'},
        { name: 'Luan Santana', image: './assets/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './assets/artista-mateus- kauan.jpg' }
        ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'SleepyJohn', image: './assets/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano',
        image: './assets/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais',
        image: './assets/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image:
        './assets/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './assets/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image:
        './assets/album-escandalo.jpg' }
        ];

        //Selecionando o elemento com a classe artist-grid
        const artistsGrid = document.querySelector('.artists-grid'); //M
        const albumsGrid = document.querySelector('.albums-grid'); //M

        //Pegando item por item
        artistsData.forEach(artist => {
            //Criando um elemento div
            const artistCard = document.createElement('div')
            //Adicionando a classe artist-card ao elemento
            artistCard.classList.add('artist-card')
            //Adicionando o HTML do artista ao elemento
            artistElement.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
            `
            //Adicionando o elemento ao artistGrid
            artistsGrid.appendChild(artistCard)
        })

})

