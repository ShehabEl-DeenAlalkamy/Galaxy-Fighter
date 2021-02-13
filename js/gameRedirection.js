console.log();

function selectAvatar(avatarName) {
    const urlParams = new URLSearchParams( window.location.search);
    const level = urlParams.get('level');
    //const nextURL = new URL('http://localhost:5500/levels/level1.html');
    //nextURL.searchParams.set('level', level); 
    //nextURL.searchParams.set('avatar', avatarName); 
    location.replace(`../levels/level1.html?level=${level}&avatar=${avatarName}`);
}
