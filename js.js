async function getData() {
    data = {
        users: [],
        posts: [],
        comments: [],
        photos: [],
        todos: [],
        albums: [],
    };
    
    keys = Object.keys(data);
    keys.forEach(key => {
        fetch(`https://jsonplaceholder.typicode.com/${key}`)
        .then(response => {
            response = response.json().then(response => {
                data[key] = data[key].concat(response);
            })
        });
    })
}

getData()
.then(() => {
    console.log(data);
    
});