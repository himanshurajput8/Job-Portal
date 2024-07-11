import { navigate } from './router.js'; 

 export var jobSectionData = [
    {id: "1", position: 'Front-end developer',imageurl:"https://wallpapers.com/images/hd/web-developer-programming-languages-isometric-xwr4p5e0ind4mqu6-xwr4p5e0ind4mqu6.png", company: 'Onea Technology Pvt Ltd', Location: 'Noida, Uttar Pradesh',jobType: 'Part time', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "2", position: 'Java developer', imageurl:"https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg", company: 'TCS', Location: 'Noida',jobType: 'Full time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "3", position: 'Python developer', imageurl: "https://www.digiwebart.com/wp-content/uploads/2018/08/Difference-between-Web-Designing-and-Web-Development.png", company: 'TCS', Location: 'Delhi',jobType: 'Part time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "4", position: 'PHP developer',imageurl: "https://wallpapers.com/images/hd/web-developer-programming-languages-isometric-xwr4p5e0ind4mqu6-xwr4p5e0ind4mqu6.png", company: 'TCS', Location: 'Ghaziabad',jobType: 'Full time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "5", position: '.Net developer', imageurl: "https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg", company: 'TCS', Location: 'Hyderabad',jobType: 'Part time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "6", position: 'Azure developer',imageurl:"https://wallpapers.com/images/hd/web-developer-programming-languages-isometric-xwr4p5e0ind4mqu6-xwr4p5e0ind4mqu6.png", company: 'TCS', Location: 'Meerut',jobType: 'Full time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "7", position: 'Android developer',imageurl:"https://www.digiwebart.com/wp-content/uploads/2018/08/Difference-between-Web-Designing-and-Web-Development.png", company: 'TCS', Location: 'Chandigarh',jobType: 'Part time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "8", position: 'IOS developer', imageurl:"https://wallpapers.com/images/hd/web-developer-programming-languages-isometric-xwr4p5e0ind4mqu6-xwr4p5e0ind4mqu6.png", company: 'TCS', Location: 'Bangalore',jobType: 'Full time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "9", position: 'Java FullStack developer',imageurl:"https://i.pinimg.com/originals/0f/41/50/0f4150b62f13e9b88310e35c95a2f4e3.png", company: 'Faridabad', Location: 'Noida',jobType: 'Part time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "10", position: ' developer',imageurl:"https://www.digiwebart.com/wp-content/uploads/2018/08/Difference-between-Web-Designing-and-Web-Development.png", company: 'TCS', Location: 'Gurgaon',jobType: 'Full time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    {id: "11", position: 'Web developer',imageurl:"https://wallpapers.com/images/hd/web-developer-programming-languages-isometric-xwr4p5e0ind4mqu6-xwr4p5e0ind4mqu6.png", company: 'wipro', Location: 'Delhi',jobType: 'Part time', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt at laudantium mollitia dolore atque veniam iusto odit tempora possimus?'},
    
]


export function renderData(jobSectionData){
    var renderjobSectionData = jobSectionData.map(function(item){ 
        return `        
            <li data-id="${item.id}">                        
                <h2>${item.position}</h2><hr>                          
                <p><span>Company:</span>  ${item.company}</p>
                <p><span>Location:</span> ${item.Location}</p>
                <p><span>Description:</span>  ${item.description}</p> 
                <h2>Job Details</h2>  
                                
            </li>
            `        
        }).join(" ");
         document.querySelector('.left-div ul').innerHTML = renderjobSectionData; 
     
     // Add event listeners to li elements click and shown in rightDiv
     document.querySelectorAll('.left-div ul li').forEach(function(item) {
        item.addEventListener('click', function() {
            var dataId = this.getAttribute('data-id');
            displayJobDetails(dataId);             
        });
    });
    displayJobDetails(jobSectionData[0].id);  
}

//function when click li then li will shown in rightDiv
export function displayJobDetails(dataId) {
    var job = jobSectionData.find(function(item) {
        return item.id == dataId;
    });
    if (job) {
        var jobDetails = `
            <div class="inner-right-div1">
                 <h2>Position: ${job.position}</h2>
                <div class="img-div"><img src="${job.imageurl}"></div>               
                <p><span>Company: </span>${job.company}</p>
                <p><span>Location:</span> ${job.Location}</p>
                <button class="apply-now" data-id="${job.id}">Apply now</button>
            </div> 
            <div class="inner-right-div2"> 
                <h2>Job Details</h2>  
                <h3>Job type</h3>
                <span>${job.jobType}</span>
                <h3>Shift and schedule</h3>
                <span>Day shift</span><hr>
                <h2>Location</h2>
                <p>${job.Location}<p>
                <p>${job.description}</p>  
            </div>                   
        `;
        document.querySelector('.right-div').innerHTML = jobDetails;
        document.querySelector('.apply-now').addEventListener('click', function() {          
            const id = this.getAttribute('data-id'); 
            navigate(`/apply/${id}`);
                                         
        });
    }
}
// function filter data when search
export function filterData() {
    var location = document.getElementById('locationSearch').value.toLowerCase();
    var Company = document.getElementById('companySearch').value.toLowerCase();
    var jobProfile = document.getElementById('jobProfileSearch').value.toLowerCase()
    var filteredData = jobSectionData.filter(function (item) {
        return item.Location.toLowerCase().includes(location) &&
                item.company.toLowerCase().includes(Company) &&
                item.position.toLowerCase().includes(jobProfile)  
    });
    renderData(filteredData); 
}  

// apply job form 

export function jobForm(job) {      
    const formTemplate = `
    <div class="form-div">
        <form>
            <h2>Apply for ${job.position} at ${job.company}</h2>
            <input type="text" placeholder="Enter your name">
            <input type="email" placeholder="E-mail">
            <input type="text" placeholder="mob. no.">
            <input type="text" placeholder="D.O.B">
            <button>Submit</button>
        </form>;
    </div> `   
    document.querySelector('#app').innerHTML = formTemplate 
}





