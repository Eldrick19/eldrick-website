function OutputJobs(jobs){
    for (let i=0; i<jobs.length; i+=1) {
        // CREATE JOBS

        //Create Elements
        var job = document.createElement('p');
        var image = document.createElement('img');
        var jobLink = document.createElement('a');
        var jobDesc = document.createElement('p');

        //Assign Classes
        job.className = 'job-title';
        image.src = './img/logo/' + jobs[i].img;
        image.style.height = "20px";
        jobLink.href = jobs[i].link;
        jobLink.target = '_blank';
        jobDesc.className = 'job-description';

        //Appending everything together
        jobLink.appendChild(image);
        jobLink.appendChild(document.createTextNode(' - '));
        jobLink.appendChild(document.createTextNode(jobs[i].company));
        job.appendChild(jobLink);
        jobDesc.appendChild(document.createTextNode(jobs[i].desc));

        var resumeText = document.getElementById("resume-text");
        resumeText.appendChild(job);
        resumeText.appendChild(jobDesc);

        console.log(jobs[i].img);
    }

}