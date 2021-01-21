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

function showPage(pageId) {
    hideAllPages()
    show(pageId)
}

function listenMenuClicks() {
    document.addEventListener("click", function(e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}

listenMenuClicks();