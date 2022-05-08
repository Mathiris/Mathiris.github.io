const sounds = ['SLTVLAD','Baited','baki fourchetted','Blitz OOF','Ah bah jeffed','OOOOOOOFFF',
'ça clique au hasard',
'Chevaled',
'CLIQUE',
'DANGEREUSED',
'EL PUNTO !',
'GPALAREF',
'Fistinièred',
'Fioned',
'IL EST PAS BIEN LE FRERO',
'JE TE KEN SONG',
'JEAN MICHEL MALAISE',
'JTE KEN',
'Merci Aurevoired',
'NICOLAGED',
'oh bah nicolaged',
'Oh le malaise',
'OH LE MALAISE x3',
'OOF + MALAISE',
'PAVUDE',
'Piegeosed',
'PIEGOS JEFF, DE SON PRENOM',
'POUSSE',
'ROBERTO DI RANCHO',
'who makes the malines',
'yes yes common lezgo',
'ypeuxpasvoir'];



sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;

    })
}