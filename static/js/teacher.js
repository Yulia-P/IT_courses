const base_api_path = `${window.location.origin}`;

async function getTeacherPage() {
    await fetch(base_api_path + '/teacher', {method: 'GET'})
    .then(response => response.text())
    .then(view => {
        document.getElementById('page').innerHTML = view;
    })
        await getTeacher();
}

async function getTeacher(){
    // let response = await fetch(base_api_path + '/courseslist');
    // let user = await response.json();

    await fetch(base_api_path+'/getTeacher', {metod: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('paget');       
        
            res.forEach(income => {
                let div = document.createElement('div');
                div.setAttribute('class', 'contentSec');
                div.setAttribute('id', 'maindiv');
                
                let img = document.createElement('img');
                img.setAttribute('id', 'imageTea');
                img.id='imgTea';
                img.src = income.photo;
                let br = document.createElement('br');

                let tname = document.createElement('input');
                tname.setAttribute('id', 'tname');
                tname.setAttribute('type', 'text');
                tname.setAttribute('readonly', 'true');
                tname.value = income.tname;
                let br1 = document.createElement('br');

                let subject = document.createElement('input');
                subject.setAttribute('id', 'subject');
                subject.setAttribute('type', 'text');
                subject.setAttribute('readonly', 'true');
                subject.value = income.subject;
                let br2 = document.createElement('br');

                           
                div.appendChild(img);
                div.appendChild(br);
                div.appendChild(tname);
                div.appendChild(br1);
                div.appendChild(subject);
                container.appendChild(div);
            })
        })
}