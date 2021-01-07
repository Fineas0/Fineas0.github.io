function showSkillsPage (){
    var home = document.getElementById('home');
    home.style.display = 'none'

    var languages = document.getElementById ('languages')
    languages.style.display = 'none'

    var projects = document.getElementById ('projects')
    projects.style.display = 'none'



    var page = document.getElementById('skills'); 
    page.style.display = '';

}

function showLanguagesPage(){
    var skills = document.getElementById('skills');
    skills.style.display = 'none'

    var home = document.getElementById ('home')
    home.style.display = 'none'

    var projects = document.getElementById ('projects')
    projects.style.display = 'none'



    var page = document.getElementById('languages'); 
    page.style.display = '';
}


function showProjectsPage (){
    var languages = document.getElementById('languages');
    languages.style.display = 'none'

    var skills = document.getElementById ('skills')
    skills.style.display = 'none'

    var home = document.getElementById('home')
    home.style.display = 'none'



    var page = document.getElementById('projects'); 
    page.style.display = '';
    

}




function showHomePage (){
    var languages = document.getElementById('languages');
    languages.style.display = 'none'

    var skills = document.getElementById ('skills')
    skills.style.display = 'none'

    var projects = document.getElementById ('projects')
    projects.style.display = 'none'

   

    var page = document.getElementById ('home')
    page.style.display = ''

}