
import { jobForm, renderData } from "./job-section";
const routes = { 
'/apply/:id': jobForm
  
};
function getRoute() {
    const path = window.location.pathname;  
    if (path.startsWith('/apply/')) {
      const parts = path.split('/');
      if (parts.length === 3) {
        return { path: '/apply/:id', id: parts[2] };
      }
    }  
    return { path };
  }
//
export function router() {
    const { path, id } = getRoute(); 
    const route = routes[path] 
    if(route) {
    if (path === '/apply/:id') {
      route(id);
    } else {
      route();
    }
  }
}
//
export function navigate(url) {
  history.pushState({}, '', url);
  router();
}

window.addEventListener('popstate', router);