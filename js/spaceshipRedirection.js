//var easyURL = new URL('http://localhost:5500/views/spaceship-select.html'); 
var easyLevel = document.getElementById("easyLevel");
//easyURL.searchParams.set('level', 'easy'); 
//easyLevel.setAttribute("href",easyURL);
easyLevel.setAttribute("href",`./spaceship-select.html?level=easy`);

//var intermediateURL = new URL('http://localhost:5500/views/spaceship-select.html'); 
var intermediateLevel = document.getElementById("intermediateLevel");
//intermediateURL.searchParams.set('level', 'intermediate'); 
//intermediateLevel.setAttribute("href",intermediateURL);
intermediateLevel.setAttribute("href",`./spaceship-select.html?level=intermediate`);

//var hardURL = new URL('http://localhost:5500/views/spaceship-select.html'); 
var hardLevel = document.getElementById("hardLevel");
//hardURL.searchParams.set('level', 'hard'); 
//hardLevel.setAttribute("href",hardURL);
hardLevel.setAttribute("href",`./spaceship-select.html?level=hard`);



//var arcadeURL = new URL('http://localhost:5500/views/spaceship-select.html'); 
var arcadeLevel = document.getElementById("arcadeLevel");
//arcadeURL.searchParams.set('level', 'arcade'); 
//arcadeLevel.setAttribute("href",arcadeURL);
arcadeLevel.setAttribute("href",`./spaceship-select.html?level=arcade`);