const search = document.querySelector('#searchButton')
const sort = document.querySelector('#sortYear')
const sortReverse = document.querySelector('#sortYearReverse')
const sortRating = document.querySelector('#sortRating')
const grid = document.querySelector('.grid')

// const movies <-- Array mit Arrays drin

const arrayToDiv = (array) => {
    array.forEach(array => {
        let strings = array.toString()
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const year = document.createElement('p')
        const director = document.createElement('h3')
        const length = document.createElement('p')
        const genre = document.createElement('p')
        const rating = document.createElement('p')
        grid.appendChild(div)
        div.appendChild(title)
        div.appendChild(year)
        div.appendChild(director)
        div.appendChild(length)
        div.appendChild(genre)
        div.appendChild(rating)
        array.forEach(element => {
            title.textContent = array[0]
            year.textContent = array[1]
            director.textContent = array[2]
            length.textContent = array[3]
            genre.textContent = array[4]
            rating.textContent = array[5]
        })
    });
}
arrayToDiv(movies)


const sortFunc = () => {
    movies.sort((a, b) => a[1] - b[1])
    grid.innerHTML = ''
    arrayToDiv(movies)
}

const reverseSortFunc = () => {
    movies.sort((a, b) => a[1] - b[1])
    movies.reverse((a, b) => a[1] - b[1])
    grid.innerHTML = ''
    arrayToDiv(movies)
}

const sortRatingFunc = () => {
    movies.sort((a, b) => a[5] - b[5])
    movies.reverse((a, b) => a[5] - b[5])
    grid.innerHTML = ''
    arrayToDiv(movies)
}


sort.addEventListener('click', sortFunc)
sortReverse.addEventListener('click', reverseSortFunc)
sortRating.addEventListener('click', sortRatingFunc)

