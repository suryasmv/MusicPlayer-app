first we added tailwind css to our react-project

then we created a components folder in src 

and then we added 3 jsx files
namely => {SearchBar.jsx, SongCards.jsx, SongsDB.jsx}

in SongsDB we created a random 9 songs which are having id, title, artist, duration, year uniquely

later we created a SongCards for displaying songs as a grid having 3 rows. I used props as Song to handle the search songs in the search input

and at last we have handlesearch function which takes seachbar input target value and then gives to the filteredsongs function to fetch the songs that are equal to the search value using SongCards function.