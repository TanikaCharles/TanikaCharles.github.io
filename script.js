let artistList = document.getElementById('artist-list');
let artistForm = document.getElementById("new_artist_form");


let addButton = document.getElementById('submit');
addButton.addEventListener("click", addArtist);

function showArtistForm(){
	document.getElementById("addArtistPhoto").value = '';
	document.getElementById('addArtistDesc').value = '';
	document.getElementById('addArtistName').value = '';

	artistList.style.display = "none";
	artistForm.style.display = "block";
}

function addArtist() {
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
}

function deleteArtist() {
	console.log(this.parentElement);
	artistList.removeChild(this.parentElement.parentElement);
}



