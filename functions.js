function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function hideAllPages() {
    var pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(function (page) {
        hide(page.id);
    });
}

function showPage(pageId) {
    hideAllPages()
    show(pageId)
}

function listenMenuClicks() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-id");
            showPage(id);
        }
    });
}

listenMenuClicks();

showPage("skills");

var allSkills = [];

function showSkills(skills) {
    var allSkillsHtml = skills.map(function (skill) {
        return `<li>${skill.name} <span>(${skill.endorsments})</span></li>`;
    });

    var skillsEl = document.querySelector("#skills ul");
    skillsEl.innerHTML = allSkillsHtml.join("");
}

fetch("skills.json")
    . then(function(r){
        return r.json();
})
.then(function(skills){
    console.warn("done", skills)
    showSkills(skills)
});

// showSkills(allSkills);