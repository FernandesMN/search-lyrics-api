function findLyrics (artist, song) {
    return fetch (`https://api.lyrics.ovh/v1/${artist}/${song}`);
};

const form = document.querySelector('#lyrics-form');

form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit () {
    const lyrics = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    lyrics.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>'

    //then
    // findLyrics (artist.value, song.value)
    // .then (response => response.json())
    // .then (data => {
    //     if (data.lyrics) {
    //         lyrics.innerHTML = data.lyrics;
    //     } else {
    //         lyrics.innerHTML = data.error;
    //     };
    // })
    // .catch (err => {
    //     lyrics.innerHTML = `Oops! ${err}`;
    // });


    //async await
    try {
        const response = await findLyrics (artist.value, song.value);
        const data = await response.json();

        if (data.lyrics) {
            lyrics.innerHTML = data.lyrics;
        } else {
            lyrics.innerHTML = data.error;
        }

    } catch (err) {
        console.error(err)
    };
}