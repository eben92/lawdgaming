const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector('.side-bar')
const navConatainer = document.querySelector(".nav-container");

toggleBtn.addEventListener('click', () => {
    // console.log(sidebar.classList)
    sidebar.classList.add('show-sidebar')
    navConatainer.classList.add('hide-nav')
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
    navConatainer.classList.remove('hide-nav')
})