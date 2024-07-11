import { jobForm, jobSectionData } from "./job-section.js";

const routes = { 
  '/apply/:id': function(id) {
    console.log('Route function called with ID:', id);
    const job = jobSectionData.find(item => item.id === id);
    console.log('Found job:', job);
    if (job) {
      jobForm(job);
    } else {
      console.error('Job not found for ID:', id);
    }
  }
};

function getRoute() {
    const path = window.location.pathname;
    console.log('Current path:', path);
    if (path.startsWith('/apply/')) {
        const parts = path.split('/');
        if (parts.length === 3) {
            return { path: '/apply/:id', id: parts[2] };
        }
    }
    return { path };
}

export function router() {
    const { path, id } = getRoute();
    console.log('Route path:', path, 'ID:', id);
    const route = routes[path];
    if (route) {
        route(id);
    } else {
        console.error('Route not found for path:', path);
    }
}

export function navigate(url) {
    history.pushState({}, '', url);
    router();
}

window.addEventListener('popstate', router);   






