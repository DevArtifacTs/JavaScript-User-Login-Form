function setup() {
    const userElem = document.querySelector('#user-name');
    return userElem;
}

function run() {
    const userElem = setup();
    console.log(userElem)
    console.log(sessionStorage.getItem('user-name'))

    userElem.innerText = sessionStorage.getItem('user-name');
}

run();