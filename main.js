import './style.css';
import { renderHeader, renderInputDiv, sortDataBySalary } from './header';
import { renderData, filterData, jobSectionData, displayJobDetails } from './job-section.js';
import { renderFooter } from './footer.js';
import { router } from './router.js';


    renderHeader();
    renderInputDiv();    
   
    document.querySelector('#app').innerHTML += `<div class="section-container">
                                 <div class="left-div"><ul> </ul></div> 
                                <div class="right-div"></div>`;
    renderData(jobSectionData);
    displayJobDetails();
    renderFooter();
    document.getElementById('searchButton').addEventListener('click', filterData);
    document.getElementById('locationSearch').addEventListener('input', filterData);
    document.getElementById('companySearch').addEventListener('input', filterData);
    document.getElementById('jobProfileSearch').addEventListener('input', filterData);
    // document.getElementById('sortButton').addEventListener('click',function(){
    //     sortDataBySalary(jobSectionData)
    // });
    
document.addEventListener('DOMContentLoaded',function(){
    router()     
})  

    

  



    
