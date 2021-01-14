function hide(id){
    var el = document.getElementById (id)
    el.style.display = 'none'
}

function show(id){
    var el = document.getElementById(id); 
    el.style.display = '';
}

function hideAllPages(){
    hide('home')
    hide('languages')
    hide('projects')
    hide('skills');
}


function showSkillsPage (){
    hideAllPages()

    show('skills'); 
}


function showLanguagesPage(){
    hideAllPages()

    show('languages'); 
}


function showProjectsPage (){
    hideAllPages()

    show('projects'); 
}


function showHomePage (){
    hideAllPages()

    show('home')
}