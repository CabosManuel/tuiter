window.onload = function () {
	const tuits = [
		{ 
			autor: { name: 'Miguel Ángel Durán', username: '@midudev', date: 'Jun 21'}, 
			text: `¡Figma para Visual Studio Code! Características de la extensión:<br>- Acceso a los recursos directamente en tu editor<br>- Autocompletado de tokens del diseño al código<br>- Enlaza tu código al diseño<br>- Comentarios en tiempo real de tu equipo`,
			stats: { comments: 12, retuits: 13, likes: 14, views: 15 },
		},
	];
	
	let timeline = document.getElementById('timeline');

	// for (const tuit of tuits) {
	for (let i = 0; i < 10; i++) {
		const tuit = tuits[0];

		let newTuit = document.createElement('div');
		newTuit.className = 'tuit';
	
		newTuit.innerHTML = `
		<div class="pfp">
			<img src="https://picsum.photos/100/100" alt="">
		</div>
		<div class="tuit-content">
	
			<div class="tuit-autor-data">
				<div class="autor-name"><a href="">${tuit.autor.name}</a></div>
				<div class="autor-username">${tuit.autor.username}</div>
				<div class="autor-date"><span class="middle-dot">·</span>${tuit.autor.date}</div>
				<div class="options"><i class="fa-solid fa-ellipsis"></i></div>
			</div>
			<p class="tuit-text">${tuit.text}</p>
			<div class="stats">
				<div class="comments">
					<i class="fa-regular fa-message"></i>
					<span>${tuit.stats.comments}</span>
				</div>
				<div class="retuits">
					<i class="fa-solid fa-retweet"></i>
					<span>${tuit.stats.retuits}</span>
				</div>
				<div class="likes">
					<i class="fa-regular fa-heart"></i>
					<span>${tuit.stats.likes}</span>
				</div>
				<div class="views">
					<i class="fa-solid fa-chart-column"></i>
					<span>${tuit.stats.views}</span>
				</div>
				<div class="share"><i class="fa-solid fa-share"></i></div>
			</div>
		</div>
		`;

		timeline.appendChild(newTuit);
	}
}