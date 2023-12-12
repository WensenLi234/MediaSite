let boxes = {
    users: document.getElementById("users"),
    posts: document.getElementById("posts"),
    albums: document.getElementById("albums"),
    todos: document.getElementById("todos"),
}
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
    boxes.forEach(box => {
        data[box.id].forEach(item => {
            
        })
    })
});