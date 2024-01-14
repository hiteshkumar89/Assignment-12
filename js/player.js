class Jukebox {
    constructor() {
        this.albums = []
    }
    addAlbum(album) {
        this.albums.push(album)
    }
    favoriteAlbum() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play() {
        this.played += 1
    }
    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
// Array of albums
const albumsArray = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
]

// Populate dropdown with albums
const albumDropdown = document.getElementById('albumDropdown')
albumsArray.forEach(albumData => {
    const album = new Album(albumData.artist, albumData.title)
    jbox.addAlbum(album)
    const option = document.createElement('option')
    option.text = `${album.artist} - ${album.title}`
    albumDropdown.add(option)
})


// Function to play the selected album
function playAlbum() {
    const selectedIndex = albumDropdown.selectedIndex
    if (selectedIndex !== -1) {
        const selectedAlbum = jbox.albums[selectedIndex]
        selectedAlbum.play()
        console.log(`${selectedAlbum.artist} - ${selectedAlbum.title} has been played.`)
    }
}

// Function to show favorite album
function showFavoriteAlbum() {
    const favoriteAlbumDisplay = document.getElementById('favoriteAlbum')
    favoriteAlbumDisplay.textContent = `Your favorite album is: ${jbox.favoriteAlbum()}`
}