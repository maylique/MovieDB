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
    let cache;
    movies.forEach(array => {
        let cache = array.shift()
        return cache
    })
    console.log(cache);
    movies.sort()
    grid.innerHTML = ''
    movies.forEach(array => {
        array.unshift(cache)
    })
    arrayToDiv(movies)
}


sort.addEventListener('click', sortFunc)

