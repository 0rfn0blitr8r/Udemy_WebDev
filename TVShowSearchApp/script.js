let makeImage = (shows) => {
	for (let result of shows){
		let newImg = document.createElement('img');
		
		let imgSrc = result.show.image;
		if(imgSrc != null){
			newImg.src = imgSrc.medium;	
			document.body.appendChild(newImg);
			newImg.classList.add('display', 'inline-block');
			newImg.classList.add('padding', '10px');
		}
	}
}


let form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
	e.preventDefault();
	console.log("submitted");
	let searchTerm = form.elements.query.value;
	console.log(searchTerm);
	// console.dir(this);
	
	let config = {params : { q: searchTerm } }
	let resp = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
		console.log(resp.data);
		
		// console.log(typeof(resp.data[0].show.image.medium));
		
		// let newImg = document.createElement('img');
		// newImg.src = resp.data[0].show.image.medium;

		// document.body.appendChild(newImg);
		makeImage(resp.data);
});