function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");

    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        hide(page.id);
       // hide(pagesIds[i]);
    }
}

function showHomePage() {
    hideAllPages()
    show('home')
}

function showSkillsPage() {
    hideAllPages()
    show('skills');
}

function showLanguagesPage() {
    hideAllPages()
    show('languages');
}

function showProjectsPage() {
    hideAllPages()
    show('projects');
}

