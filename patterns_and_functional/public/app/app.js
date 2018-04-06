document.querySelector('#myButton').onclick = () => {
    fetch("notass")
    .then(res => {
        if (res.ok)
            return res.json();
        return Promise.reject(res.statusText); 
    })
    .catch(res => console.log(res.target.error()));
};