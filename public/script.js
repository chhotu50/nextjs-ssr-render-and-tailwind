const toggle = document.getElementById('toggle-sidebar-btn');
const logoSidebar = document.getElementById('logo-sidebar');
toggle.addEventListener('click', () => {
    if (logoSidebar.classList.contains('-translate-x-full')) {
      logoSidebar.classList.add('transform-none');
      logoSidebar.classList.remove('-translate-x-full');
    } else {
        logoSidebar.classList.remove('transform-none');
      logoSidebar.classList.add('-translate-x-full');
    }
});

const userProfile = document.getElementById('user-toggle');
const userProfileShow = document.getElementById('dropdown-user');
userProfile.addEventListener('click', (event) => {
    event.stopPropagation();
    userProfileShow.classList.toggle('hidden');
});

window.onclick = function (event) {
    if (!event.target.matches('.nav-profile')) {
        userProfileShow.classList.add('hidden');
    }
};

const elements = document.getElementsByClassName('child-dropdown');
var childDropDown = function() {
     this.nextElementSibling.classList.toggle('hidden');
};

for (var i = 0; i < elements.length; i++) {
    console.log(i,'---------------------------')
    elements[i].addEventListener('click', childDropDown, false);
}