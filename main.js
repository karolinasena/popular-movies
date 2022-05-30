const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: "Descrição do filme…",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: false
  },
]

const moviesList = document.querySelector('.movies-list')

function renderMovie(movie) {
  const movieItem = document.createElement('li')
  movieItem.classList.add('movie')
  moviesList.appendChild(movieItem)

  const movieInformations = document.createElement('div')
  movieInformations.classList.add('movie-informations')
  movieItem.appendChild(movieInformations)

  const movieImageContainer = document.createElement('div')
  movieImageContainer.classList.add('movie-image')
  movieInformations.appendChild(movieImageContainer)

  const movieImg = document.createElement('img')
  movieImg.setAttribute('src', `${movie.image}`)
  movieImg.setAttribute('alt', `${movie.title}`)
  movieImageContainer.appendChild(movieImg)
  
  const movieAbout = document.createElement('div')
  movieAbout.classList.add('movie-about')
  movieInformations.appendChild(movieAbout)

  const movieTitle = document.createElement('h2')
  movieTitle.classList.add('movie-title')
  movieTitle.innerText = `${movie.title} (${movie.year})`
  movieAbout.appendChild(movieTitle)

  const movieRatingFavorite = document.createElement('div')
  movieRatingFavorite.classList.add('movie-rating-favorite')
  movieAbout.appendChild(movieRatingFavorite)

  const movieRating = document.createElement('div')
  movieRating.classList.add('rating')
  movieRatingFavorite.appendChild(movieRating)

  const ratingIcon = document.createElement('img')
  ratingIcon.setAttribute('src', './assets/star.svg')
  movieRating.appendChild(ratingIcon)

  const ratingText = document.createElement('span')
  ratingText.innerText = `${movie.rating}`
  movieRating.appendChild(ratingText)

  const movieFavorite = document.createElement('div')
  movieFavorite.classList.add('favorite')
  movieRatingFavorite.appendChild(movieFavorite)

  const favoriteIcon = document.createElement('img')
  movie.isFavorited ? favoriteIcon.setAttribute('src', './assets/heart.svg') : favoriteIcon.setAttribute('src', './assets/heart-empty.svg')
  movieFavorite.appendChild(favoriteIcon)

  const favoriteText = document.createElement('span')
  favoriteText.innerText = 'Favoritar'
  movieFavorite.appendChild(favoriteText)

  const movieDescription = document.createElement('div')
  movieDescription.classList.add('movie-description')
  movieDescription.innerText = `${movie.description}`
  movieItem.appendChild(movieDescription)
}

movies.forEach(movie => renderMovie(movie))