let jobsClass = document.querySelector(".jobs");

fetch(`https://kasparasd.github.io/api-crud-1/api/jobs.json`)
.then(res=>res.json())
    .then(json=>{
        json.map(item=>{
            jobsClass.append(jobs(item))
        })
    })


//create job element    
    function jobs(item){

        let jobs=document.createElement('div')
            jobs.innerHTML = 
        `
        <div class="jobs-one-container" id=${item.id}>
        <h2 id=${item.id} class="ad-name">${item["ad-name"]}</h2>
        <p id=${item.id} class="company-name">${item["company-name"]}</p>
        <p id=${item.id} class="job-location">${item["job-location"]}</p>
        <p id=${item.id} class="job-salary">${item["job-salary"]}</p>
        <ul id=${item.id}>
        <li id=${item.id} class="short-description">
            ${item["short-description-li-1"]}
            </li>
            <li id=${item.id} class="short-description">
            ${item["short-description-li-2"]}
            </li>
            </ul>
            <div id=${item.id} class="job-more-details">
            <p id=${item.id} class="ad-date">${item["ad-date"]}</p>
            <a href="#">More...</a>
            </div>
            </div>
        `;

        return jobs;
    }


    
    jobsClass.addEventListener('click', event=>{
        let oneJobClass = document.querySelector(".one-job-container");

        fetch(`https://kasparasd.github.io/api-crud-1/api/one-job.json`)
        .then(res=>res.json())
        .then(json=>{
            json.map(item=>{
                if(item.id == event.target.id) {
                    oneJobClass.replaceWith(oneJob(item))
                }
            })
        })
    
        function oneJob(item){
            let job=document.querySelector(".one-job-container")
                job.innerHTML = 
            `
             <div class="job-summary">
                </div>
                <h2 id=${item.id} class="ad-name">${item["ad-name"]}</h2>
                    <a class="one-job-company-name" href="#">${item["company-name"]}</a>
                    <p class="one-job-job-location">${item["job-location"]}</p>
                    <p class="one-job-salary">${item["job-salary"]}</p>
                    <div class="one-job-features">
                        <a class="apply-now" href="#">Apply now</a>
                        <a class="bookmark-icon" href="#"><i class="fa fa-bookmark fa-2x"></i> </a>
                        <a class="block-icon" href="#"><i class="fa fa-ban fa-2x"></i></a>
                    </div>
                </div>
                <div class="one-job-border"></div>
                <div class="scroll-one-job full-job-ad">
                    <div class="one-job-full-description">
                        <h3>Full job description</h3>
                        <p><b>${item["ad-name"]}</b></p>
                        <p><b>Location: </b>${item["job-location"]}</p>
                        <p><b>Start Date: </b>${item["start-date"]}</p>
                        <p><b>Contact: </b>${item["contact"]}</p>
                        <h3>Benefits</h3>
                        <ul>
                            <li>${item["benefit-1"]}</li>
                            <li>${item["benefit-2"]}</li>
                            <li>${item["benefit-3"]}</li>
                            <li>${item["benefit-4"]}</li>
                            <li>${item["benefit-5"]}</li>
                            <li>${item["benefit-6"]}</li>
                            <li>${item["benefit-7"]}</li>
                            <li>${item["benefit-8"]}</li>
                            <li>${item["benefit-9"]}</li>
                            <li>${item["benefit-10"]}</li>
                        </ul>
                        <p><b>About the Organization:</b></p>
                        <p>${item["about-organization-1"]}</p>
                        <p>${item["about-organization-1"]}</p>
                        <p>${item["about-organization-1"]}</p>
                    
                    </div> 
            `;
    
            return job;
        }
    });
    
    

   