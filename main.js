import './style.css'
import { renderHeader } from './header'
import { renderInputDiv } from './header';
import{renderData, filterData, jobSectionData, displayJobDetails, jobForm}from './job-section.js';
import { renderFooter } from './footer.js';
import { router } from './router.js';





document.addEventListener('DOMContentLoaded', function(){
    renderHeader()
    renderInputDiv()              
    document.querySelector('#app').innerHTML+=`<div class="section-container">
                                 <div class="left-div"><ul> </ul></div> 
                                <div class="right-div">ggggh</div> 
                            </div>` ;
    
    renderData(jobSectionData) ;    
    displayJobDetails(dataId)    
    jobForm() 
    renderFooter()     
    document.getElementById('searchButton').addEventListener('click', filterData); 
    router()  

})   
   

    
    
