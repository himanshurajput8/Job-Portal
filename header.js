import { filterData } from "./job-section";
import { jobSectionData } from "./job-section";
import { renderData } from "./job-section";
export function renderHeader(){
    const headerTemplate= `
    <header>
    <div><h2>indeed</h2></div
    <div>        
        <ul>
            
            <li><a href="" >Home</a></li>
            <li><a href="">Comapany review</a></li>
            <li><a href="">Salary guide</a></li>            
        </ul>
    </div>
    <div>
        <span>Employers/Post Job</span>
    </div>
    </header>   
    `
    document.querySelector('.header-div').innerHTML += headerTemplate       
 
} 

export function renderInputDiv(){
    const InputDivTemplate = `
         <div class="inputDiv">

        <input type="search" id="jobProfileSearch" placeholder="Job profile">
        <input type="search" id="locationSearch" placeholder="Location">
        <input type="search" id="companySearch" placeholder="Company">
        <button id="searchButton">Search</button>
        
        
    </div>     
    `
    document.querySelector('#app').innerHTML += InputDivTemplate 
   
}
//function sort by salary
export function sortDataBySalary(jobSectionData) {    
    console.log('sort data by salary')
    const sortedData = jobSectionData.sort((a, b) => a.salary - b.salary);
    renderData(sortedData);
} 

