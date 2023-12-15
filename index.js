const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const videos = [
	{idMovie: 1, nameMovie: "", source: "https://spankbang.party/9257y/embed/"},
	{idMovie: 2, nameMovie: "", source: "https://spankbang.party/9259e/embed/"},
	{idMovie: 3, nameMovie: "", source: "https://spankbang.party/9245a/embed/"},
	{idMovie: 4, nameMovie: "", source: "https://spankbang.party/928kk/embed/"},
	{idMovie: 5, nameMovie: "", source: "https://spankbang.party/91zl2/embed/"},
	{idMovie: 6, nameMovie: "", source: "https://spankbang.party/927z4/embed/"},
	{idMovie: 7, nameMovie: "", source: "https://spankbang.party/928jk/embed/"},
	{idMovie: 8, nameMovie: "", source: "https://spankbang.party/927y1/embed/"},
	{idMovie: 9, nameMovie: "", source: "https://spankbang.party/91yib/embed/"},
	{idMovie: 10, nameMovie: "", source: "https://spankbang.party/91rt9/embed/"},
	{idMovie: 11, nameMovie: "", source: "https://spankbang.party/91qnn/embed/"},
	{idMovie: 12, nameMovie: "", source: "https://spankbang.party/91qk0/embed/"},
]
let movieDisplay = $('.movie-display');
let movieList = $('.movie-list');
movieList.innerHTML = videos.map(renderListLink).join('')
function renderListLink(video){
	let {source, idMovie} = video;
	return(`
		<div class="display_box">
			<iframe class="list-link" src=${source} frameborder="0" scrolling="no" allowfullscreen></iframe>
			<div class="box-name">${idMovie}</div>
		</div>
	`)
}
let movieBtn = $('.movie-btn');
movieBtn.innerHTML = videos.map(renderListNav).join('')
function renderListNav(btn){
	let {idMovie} = btn;
	return (`
		<span>${idMovie}</span>
	`)
}
let listMovie = $$('.movie-btn > span')
let title = $('title')
const numRandom = Math.floor(Math.random() * videos.length)
function renderHTML(){
	movieDisplay.setAttribute('src', videos[numRandom].source);
	listMovie[numRandom].classList.add('choose');
	title.innerText = 'Watching: ' + videos[numRandom].idMovie
}; renderHTML()
function handleMovie(){
	listMovie.forEach((movie, index) => {
		movie.addEventListener('click', () => {
			$('.movie-btn > span.choose').classList.remove('choose');
			movie.classList.add('choose')
			movieDisplay.setAttribute('src', videos[index].source);
			title.innerText = 'Watching: ' + videos[index].idMovie

		})
	})
}; handleMovie()
