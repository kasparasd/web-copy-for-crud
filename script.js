let jobsClass = document.querySelector(".jobs");


//fetch function
fetch(`http://localhost:3000/all-jobs`)
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
        let oneJobClass = document.querySelector(".one-job");

        
        fetch(`http://localhost:3000/all-jobs?id=${event.target.id}`)
        .then(res=>res.json())
        .then(json=>{
            json.map(item=>{
                oneJobClass.append(oneJob(item))
            })
        })
    
        function oneJob(item){
    
            let job=document.createElement('div')
                job.innerHTML = 
            `
            <h2 id=${item.id} class="ad-name">${item["ad-name"]}</h2>
            `;
    
            return job;
        }
    });
    
    

   