import { filterData } from "./job-section";
export function renderHeader(){
    const headerTemplate= `
    <header>
    <div>        
        <ul>
            <h2>indeed</h2>
            <li><a href="">Home</a></li>
            <li><a href="">Comapany review</a></li>
            <li><a href="">Salary guide</a></li>            
        </ul>
    </div>
    <div>
        <span>Employers/Post Job</span>
    </div>
    </header>

    <div class="inputDiv">
    <div class="marquee-div"> <marquee behavior="" direction="">Welcome to Indeed - Your one-stop destination for the latest job opportunities! Browse through thousands of job listings, apply directly, and take your career to the next level stay updated with new job postings every day!</marquee>
</div>
        <input type="search" id="jobProfileSearch" placeholder="Job profile">
        <input type="search" id="locationSearch" placeholder="Location">
        <input type="search" id="companySearch" placeholder="Company">
        <button id="searchButton">Search</button>
        
    </div>
    `
    document.body.innerHTML += headerTemplate 
} 
