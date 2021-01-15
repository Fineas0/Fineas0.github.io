function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function hideAllPages() {
    var pagesIds = [
        "home", "skills", "languages", "projects"
    ];
    console.debug(pagesIds);

    //  initial  ; condition          ; post exectuion
    for (var i = 0; i < pagesIds.length; i++) {
        console.info('i = ', i);
        hide(pagesIds[i]);
    }
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

function showHomePage() {
    hideAllPages()
    show('home')
}