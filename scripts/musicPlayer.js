// initialise the SDK
SC.initialize({
    client_id: 'z7npDMrLmgiW4wc8pPCQkkUUtRQkWZOF'
});

let likedTracks = [];
let currentPlayingId = 0;
let playerModule;
let trackmap = [];
let trackIds = [];
let isPlaying = false;

// get the liked songs
SC.get('/users/4810231/favorites').then(function(tracks){
    likedTracks = tracks;
    
    // play first song by def.
    playTrack(likedTracks[0].id); //disable in prod

    // initialise local player
    listTracks();
    //reset current playing to first
    currentPlayingId = 0;
});

const playTrack = (id) => {
    SC.stream(`/tracks/${id}`).then(function(player){
        playerModule = player;
        console.log(`song changed!`);
        
        // implicitly start player
        player.play().then(function(){
          console.log('Playback started!');
        }).catch(function(e){
          console.error('Playback rejected. Try calling play() from a user interaction.', e);
        });

        updateMeta(); //update metadata
        isPlaying = true; //update flag
    });
}

const playPrev = () => {
    if(currentPlayingId === 0){
        'This is the first song in the queue'
        // disable prev. btn OR play last in queue
    } else {
        currentPlayingId -= 1;
        playCurrentId();
    }
}

const playNext = () => {
    if(currentPlayingId === (likedTracks.length - 1)){
        'This is the last song in the queue'
        // disable next. btn OR play 1st in queue
    } else {
        currentPlayingId += 1;
        playCurrentId();
    }
}

const playCurrentId = () => {
    const newId = trackIds[currentPlayingId];
    playTrack(newId);
}

const updateMeta = () => {
    // update all the metadata when this is called

    // update play/pause icon using isPalying flag

    // update song title
}

const mediaPlayer = {
    play: (id) => {playTrack(id)},
    resume : () => {playerModule.play(); isPlaying = true;},
    pause : () => {playerModule.pause(); isPlaying = false;},
    next : () => {playNext()},
    prev : () => {playPrev()},
    // mute: () => {},
}

// playlist cleaner
const listTracks = () => {
    likedTracks.forEach(track => {
        if(track.kind === "track"){
            const currMap = {
                id: track.id,
                title: track.title,
                url: track.permalink_url,
                artwork: track.artwork_url,
                duration: track.duration,
                waveform: track.waveform_url,
            };

            trackmap.push(currMap);
            trackIds.push(track.id);
        }
    });
    
    console.log('current reduced map is:', trackmap);

    //inject the list in UI
}