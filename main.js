import './style.css'
import { renderHeader } from './header'
import{renderData, filterData, jobSectionData, displayJobDetails }from './job-section.js';



document.addEventListener('DOMContentLoaded', function(){

    renderHeader()
    
    document.body.innerHTML+=`<div class="section-container">
                                 <div class="left-div"><ul> </ul></div> 
                                <div class="right-div">ggggh</div> 
                            </div>` ;
    
    renderData(jobSectionData) ;
    displayJobDetails()
    document.getElementById('searchButton').addEventListener('click', filterData);  

})
   
    
    
    
