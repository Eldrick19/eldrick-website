function OutputProjects(projects){
    // Loop through all projects
    for (let i=0; i<projects.length; i+=1) {
        // CREATE PROJECT CONTAINERS

        //Create Elements
        var projDiv = document.createElement('div');
        var image = document.createElement('img');
        var spanTitle = document.createElement('span');
        var title = document.createElement('h5');
        var spanDesc = document.createElement('span');
        var description = document.createElement('p');
        var more = document.createElement('b');
        var learnMoreDiv = document.createElement('div');
        var learnMore = document.createElement('h4');
        var learnMoreArrow = document.createElement('i');

        //Assign Classes
        projDiv.className = 'project';
        projDiv.id = projects[i].id;
        image.src = './img/project/' + projects[i].img;
        spanTitle.id = 'project-title';
        title.className = 'vert-center';
        spanDesc.id = 'project-desc';
        spanDesc.className = 'vert-center';
        learnMore.className = 'vert-center';
        learnMoreArrow.className = 'fa fa-angle-right';

        //Appending everything together
        title.appendChild(document.createTextNode(projects[i].title));
        description.appendChild(document.createTextNode(projects[i].desc));
        more.appendChild(document.createTextNode('...'));
        learnMore.appendChild(document.createTextNode('LEARN MORE'));

        spanTitle.appendChild(title);
        spanDesc.appendChild(description);
        spanDesc.appendChild(more);
        learnMore.appendChild(learnMoreArrow);
        learnMoreDiv.appendChild(learnMore);

        projDiv.appendChild(image);
        projDiv.appendChild(spanTitle);
        projDiv.appendChild(spanDesc);
        projDiv.appendChild(learnMoreDiv);

        //Putting project in correct category
        if (projects[i].category == "Work"){
            var categoryDiv = document.getElementById("projects-work");
            categoryDiv.appendChild(projDiv);
        } else if(projects[i].category == "Class"){
            var categoryDiv = document.getElementById("projects-class");
            categoryDiv.appendChild(projDiv);
        } else if(projects[i].category == "Personal"){
            var categoryDiv = document.getElementById("projects-personal");
            categoryDiv.appendChild(projDiv);
        } else {
            console.log("ERROR Assigning Project");
        }
        
    }
}

//Navigate between project and project detail pages
$(document).ready(function() {
    for (let i=0; i<projects.length; i+=1) {
        $("#" + projects[i].id).click(function() {
            window.open("./project-details.php?id=" + projects[i].id, "_self");
        });
    }
    $("#back-button").click(function() {
        window.open("./projects.html", "_self");
    });

});

//Used on project-details.php page. Searches for all project information based on ID and outputs it to page.
function detailsOutput(id){
    var project = search(id, projects);
    console.log(project.title);
    
    document.getElementById("title-output").innerHTML = project.title;
    document.getElementById("desc-output").innerHTML = project.desc;
    document.getElementById("img-output").src = "./img/project/" + project.img;

    var linkOutput = '';
    console.log(project.link[0][0]);
    for (var i=0; i < project.link.length; i++){
        linkOutput += '<a href="' + project.link[i][1] + '" target="_blank">' + project.link[i][0] +'</a><br><br>';
    }

    document.getElementById("link-output").innerHTML = linkOutput;
}

function search(id, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === id) {
            return myArray[i];
        }
    }
}