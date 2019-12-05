function Project(id, title, desc, img, link, category) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.img = img;
    this.link = link;
    this.category = category;
}

let projects = [
    {
        id = "mpp",
        title: "Member Privilege Program Revamp",
        desc: "The MPP is a program hosted by the Canadian Chamber of Commerce in Hong Kong that promotes member products to other members. It was oudated and not used before working on it - I took abut 3 weeks to revamp the entire program ground up by contacting members and rebuilding it from scratch.",
        img: "MPP.jpg",
        link: "https://www.cancham.org/memberprivileges",
        category: "Work"
    },
    {
        id = "unauth",
        title: "Unauthenticated User Experience",
        desc: "This unauthenticated user experience is from Credit Karma. As a Product intern on the Recommendation System Team, I was in charge of working with the Credit Card team and our engineers to deliver offers (using our recommendation platform) to users. This entailed interesting challenges as we were tryin to recommended offers to users based on information we did NOT have of them.",
        img: "",
        link: "",
        category: "Work"
    },
  ];

OutputProjects(projects);
function OutputProjects(projects){
    // Loop through all projects
    for (let i=0; i<projects.length; i+=1) {
        // Create project containers
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

        projDiv.className = 'project';
        image.src = './img/project/' + projects[i].img;
        spanTitle.id = 'project-title';
        title.className = 'vert-center';
        spanDesc.id = 'project-desc';
        spanDesc.className = 'vert-center';
        learnMore.className = 'vert-center';
        learnMoreArrow.className = 'fa fa-angle-right';

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
    }
}