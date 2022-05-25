const base_api_path = `${window.location.origin}`;

async function getCoursesPage() {
    await fetch(base_api_path + '/courses', {method: 'GET'})
    .then(response => response.text())
    .then(view => {
        document.getElementById('page').innerHTML = view;
    })
        await getCourses();
}

async function getCourses(){
    // let response = await fetch(base_api_path + '/courseslist');
    // let user = await response.json();

    await fetch(base_api_path+'/getCourses', {metod: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('pagec');       
        
            res.forEach(income => {
                let div = document.createElement('div');
                div.setAttribute('class', 'contentSec');
                div.setAttribute('id', 'maindiv');
                
                let img = document.createElement('img');
                img.setAttribute('id', 'imageCou');
                img.id='imgCou';
                img.src = income.image;
                let br = document.createElement('br');

                let courseName = document.createElement('input');
                courseName.setAttribute('id', 'courseName'+income.id);
                courseName.setAttribute('type', 'text');
                courseName.setAttribute('readonly', 'true');
                courseName.value = income.courseName;
                let br1 = document.createElement('br');

                let language = document.createElement('input');
                language.setAttribute('id', 'language');
                language.setAttribute('type', 'text');
                language.setAttribute('readonly', 'true');
                language.value = income.language;
                let br2 = document.createElement('br');

                let teacher = document.createElement('input');
                teacher.setAttribute('id', 'teacher');
                teacher.setAttribute('type', 'text');
                teacher.setAttribute('readonly', 'true');
                teacher.value = income.teacher;
                let br3 = document.createElement('br');

              
                let courseDescrition = document.createElement('textarea');
                courseDescrition.setAttribute('id', 'courseDescrition');
                // teacher.setAttribute('type', 'text');
                courseDescrition.setAttribute('readonly', 'true');
                courseDescrition.value = income.courseDescrition;
                let br4 = document.createElement('br');
                
                div.appendChild(img);
                div.appendChild(br);
                div.appendChild(courseName);
                div.appendChild(br1);
                div.appendChild(language); 
                div.appendChild(br2);
                div.appendChild(teacher);
                div.appendChild(br3);
                div.appendChild(courseDescrition);
                div.appendChild(br4);
                container.appendChild(div);
            })
        })
}