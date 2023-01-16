function changeTheme() {
    let container = document.querySelector('#container')

    console.log(container);

    if (document.body.classList.contains('image_1')) {
        document.body.classList.remove('image_1')
        document.body.classList.add('image_2')
    } else {
        document.body.classList.remove('image_2')
        document.body.classList.add('image_1')
    }

    if (container.classList.contains('container-white')) {
        container.classList.remove('container-white')
        container.classList.add('container-dark')
    } else {
        container.classList.remove('container-dark')
        container.classList.add('container-white')
    }
}