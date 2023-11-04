let jobsClass = document.querySelector(".jobs");


//fetch function
// fetch(`http://localhost:3000/all-jobs`)
// fetch(`https://deepakmahakale.com/api/users.json`)
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
                    <a class="one-job-company-name" href="#">Hebrew Public</a>
                    <p class="one-job-job-location">3300 Henry Avenue, Philadelphia, PA 19129</p>
                    <p class="one-job-salary">$50,000 a year</p>
                    <div class="one-job-features">
                        <a href="#">Apply now</a>
                        <a href="#">Bi</a>
                        <a href="#">DSi</a>
                    </div>
                </div>
                <div class="one-job-border"></div>
                <div class="scroll-one-job full-job-ad">
                    <div class="one-job-full-description">
                        <h3>Benefits</h3>
                        <ul>
                            <li>Dental insurance</li>
                            <li>Disability insurance</li>
                            <li>Employee assistance program</li>
                            <li>Flexible spending account</li>
                            <li>Health insurance</li>
                            <li>Life insurance</li>
                            <li>Paid parental leave</li>
                            <li>Parental leave</li>
                            <li>Prescription drug insurance</li>
                            <li>Vision insurance</li>
                        </ul>
                        <h3>Full job description</h3>

                        <p><b>Elementary Special Education (2023-2024)</b></p>
                        <p><b>Location: </b>3300 Henry Avenue, Philadelphia, PA</p>
                        <p><b>Start Date: </b>Immediate</p>
                        <p><b>Contact: </b>jobs@hebrewpublic.org</p>
                        <p><b>Network Website: </b>www.hebrewpublic.org</p>
                        <p><b>About the Organization:</b></p>
                        <p>Hebrew Public Charter Schools for Global Citizens Hebrew Public is a national network of diverse public charter schools that teach Modern Hebrew to children of all backgrounds and prepare them to be successful global citizens. Our schools are models of racial and economic integration, academic excellence, and world language learning. Our schools maintain a focus on global citizenship which leads to our students becoming empathetic, ethical, intellectually curious young adults committed to solving the world's problems. Hebrew Public schools offer partial immersion programs in Modern Hebrew with an accompanying focus on the study of Israel.</p>
                        <p>Hebrew Public's network currently has thirteen schools (eight elementary and five middle schools) in four states and the District of Columbia, serving more than 3,800 students. In NYC, we serve as the Charter Management Organization for schools in Brooklyn, Harlem, Staten Island and Philadelphia.</p>
                        <p>The network's first school in Philadelphia, Philadelphia Hebrew Public, opened in 2019, serving 156 students in Kindergarten and 1st grade. The school will expand to 5th grade in 2023-24 and will add a grade level each year until it ultimately serves grades K to 8 in the 2026-27 school year. PHP provides students with a sophisticated core curriculum in English Language Arts, mathematics, Modern Hebrew, the sciences, social studies, art, and physical education.</p>
                    
                    </div> 
            `;
    
            return job;
        }
    });
    
    

   