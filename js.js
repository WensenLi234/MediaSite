async function getData() {
    let data = {
        users: [],
        posts: [],
        comments: [],
        photos: [],
        todos: [],
        albums: [],
    };
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data.users.concat(response));
}

getData()
.then(console.log());