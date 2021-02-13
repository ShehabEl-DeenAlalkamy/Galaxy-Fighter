function selectAvatar(avatarName) {
    const currentURL = window.location.search;
    const urlParams = new URLSearchParams(currentURL);
    const level = urlParams.get('level');
    const nextURL = new URL('http://localhost:5500/levels/level1.html');
    nextURL.searchParams.set('level', level); 
    nextURL.searchParams.set('avatar', avatarName); 
    location.replace(nextURL);
}
