let message = document.querySelector('#message');

const addMovie = (evnt) => {
    evnt.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
}

document.querySelector('form').addEventListener('submit', addMovie);


const deleteMovie = (evnt) => {
    evnt.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

const crossOffMovie = (evnt) => {
    evnt.target.classList.toggle('checked')
    if(evnt.target.classList.contains('checked')){
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = 'Movie added back!';
    }
}