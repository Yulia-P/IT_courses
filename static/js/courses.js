const base_api_path = `${window.location.origin}`;

async function getCourses(){
    let response = await fetch(base_api_path + '/courses');
    let user = await response.json();

    fetch(base_api_path + '/courses', {metod: 'GET'})
    .then(res => res.json())
    .then(res => {
        let container = document.getElementById('page');
        if(req.user.role =='user' && req.user.role=='admin'){
            res.forEach(income => {
                let div = document.createElement(`div`);
                div.setAttribute('class', 'contentSec');
                div.setAttribute('method', 'Post');
                let h1 = document.createElement('h1');
                h1.setAttribute('','');
            });
        }
    })
}