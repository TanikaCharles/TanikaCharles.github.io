let artistList = document.getElementById('artist-list');
let artistForm = document.getElementById("new_artist_form");
let myStorage = window.localStorage;

if(myStorage.getItem('artistList') != undefined){
	artistList.innerHTML = myStorage.getItem('artistList');
	let buttons = document.getElementsByClassName("deleteBtn");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', deleteArtist);
	}
}

let addButton = document.getElementById('submit');
addButton.addEventListener("click", addArtist);

let searchButton = document.getElementById('search');
searchButton.addEventListener('click', search);

function showArtistForm(){
	if(myStorage.getItem('artistList') != undefined){
		artistList.innerHTML = myStorage.getItem('artistList');
	}
	document.getElementById("addArtistPhoto").value = '';
	document.getElementById('addArtistDesc').value = '';
	document.getElementById('addArtistName').value = '';

	artistList.style.display = "none";
	artistForm.style.display = "block";
}

function addArtist() {
	if(myStorage.getItem('artistList') != undefined){
		artistList.innerHTML = myStorage.getItem('artistList');
	}
	let addArtistPhoto = document.getElementById("addArtistPhoto").value;
	
	let addArtistDesc = document.getElementById('addArtistDesc').value;
	let addArtistName = document.getElementById('addArtistName').value;

	let artist = document.createElement('div');
	artist.setAttribute('class', 'artist');
	
	let artistImg = document.createElement('div');
	artistImg.setAttribute('class','artist-img');
	let imgLink = document.createElement('img');
	imgLink.setAttribute('src', addArtistPhoto);
	artistImg.appendChild(imgLink);
	artist.appendChild(artistImg);

	let artistDesc = document.createElement("div");
	artistDesc.setAttribute('class', 'desc');
	let name = document.createElement('h5');
	name.innerText = addArtistName;
	let desc = document.createElement('p');
	desc.innerText = addArtistDesc;
	artistDesc.appendChild(name);
	artistDesc.appendChild(desc);
	artist.appendChild(artistDesc);

	let deleteBtn = document.createElement('button');
	deleteBtn.addEventListener("click", deleteArtist);
	deleteBtn.innerText = "Delete";
	deleteBtn.setAttribute('class', 'deleteBtn');
	artistDesc.appendChild(deleteBtn);
	
	artistList.appendChild(artist);
	artistList.style.display = "grid";
	artistForm.style.display = "none";
	
	myStorage.setItem('artistList', artistList.innerHTML);
}

function deleteArtist() {
	artistList.removeChild(this.parentElement.parentElement);
	myStorage.setItem('artistList', artistList.innerHTML);
}

function search(){
	if(myStorage.getItem('artistList') != undefined){
		artistList.innerHTML = myStorage.getItem('artistList');
	}
	searchBar = document.getElementById("searchText").value;
	var artistSearch = document.getElementsByClassName("artist");
	var h5 = [];
	for (var i = 0; i < artistSearch.length; i++) {
		h5 = artistSearch[i].getElementsByTagName('h5');
		for (var j = 0; j < h5.length; j++) {
			if(!h5[j].innerText.includes(searchBar)){
				artistList.removeChild(h5[j].parentElement.parentElement);
			}
		}
	}
}

