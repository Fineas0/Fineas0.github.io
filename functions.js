function hide(id){
    var el = document.getElementById (id)
    el.style.display = 'none'
}

function show(id){
    var el = document.getElementById(id); 
    el.style.display = '';
}


function showSkillsPage (){
    hide('home')
    hide('languages')
    hide('projects')

    show('skills'); 
}

function showLanguagesPage(){
    hide('skills');
    hide('home')
    hide('projects')

    show('languages'); 
}


function showProjectsPage (){
    hide('languages');
    hide('skills')
    hide('home')

    show('projects'); 
}




function showHomePage (){
    hide('languages');
    hide ('skills')
    hide('projects')

    show('home')
}