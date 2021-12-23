function setup() {
    const userName = document.querySelector('#user-name').value;
    const password = document.querySelector('#password').value;
    const submitButton = document.querySelector('#submit-btn');
    return { userName, password, submitButton };
}

function run() {
    const { submitButton } = setup();
    submitButton.addEventListener('click', () => {
        const { userName, password } = setup();
        console.log(userName, password);

        // store data for use later
        sessionStorage.setItem('user-name', userName);
        sessionStorage.setItem('password', password);
    })
}

run();
