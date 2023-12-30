const search = document.querySelector('#searchButton')
const input = document.querySelector('#search')
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
            genre.innerHTML = array[4].toString().replaceAll(',', '<br>')
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

const searchFunc = () => {
    let matchTitle = movies.filter(title => title[0].toLowerCase().includes(input.value.toLowerCase()))
    let matchYear = movies.filter(year => year[1].toLowerCase().includes(input.value.toLowerCase()))
    let matchDirector = movies.filter(director => director[2].toLowerCase().includes(input.value.toLowerCase()))
    let matchGenre = movies.filter(genre => genre[4].toString().toLowerCase().includes(input.value.toLowerCase()))
    if (matchTitle.length > 0) {
        grid.innerHTML = ''
        arrayToDiv(matchTitle)
    } else if (matchYear.length > 0) {
        grid.innerHTML = ''
        arrayToDiv(matchYear)
    } else if (matchDirector.length > 0) {
        grid.innerHTML = ''
        arrayToDiv(matchDirector)
    } else if (matchGenre.length > 0) {
        grid.innerHTML = ''
        arrayToDiv(matchGenre)
    }else {
        grid.innerHTML = '<p><p></p><p>no matches</p><p></p><p>'
    }
}


search.addEventListener('click', searchFunc)


