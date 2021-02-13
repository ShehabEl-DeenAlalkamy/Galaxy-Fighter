function selectAvatar(avatarName) {
    const urlParams = new URLSearchParams( window.location.search);
    const level = urlParams.get('level');
    location.replace(`../levels/level1.html?level=${level}&avatar=${avatarName}`);
}
