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
    let response = await fetch(base_api_path + '/role');
    let user = await response.json();

    await fetch(base_api_path+'/getCourses', {metod: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('pagec');       
        
            if(user != 'admin'){
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
                
                let button = document.createElement('button');
                button.setAttribute('id', 'setEnroll');
                button.setAttribute('class', 'button');
                button.value=income.id;
                button.setAttribute('onclick', 'addEnroll(this.value)');
                button.innerHTML='Subscribe';

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
                div.appendChild(button);
                container.appendChild(div);
            })
        }
        else{
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
                // courseName.setAttribute('readonly', 'true');
                courseName.value = income.courseName;
                let br1 = document.createElement('br');

                let language = document.createElement('input');
                language.setAttribute('id', 'language');
                language.setAttribute('type', 'text');
                // language.setAttribute('readonly', 'true');
                language.value = income.language;
                let br2 = document.createElement('br');

                let teacher = document.createElement('input');
                teacher.setAttribute('id', 'teacher');
                teacher.setAttribute('type', 'text');
                // teacher.setAttribute('readonly', 'true');
                teacher.value = income.teacher;
                let br3 = document.createElement('br');

              
                let courseDescrition = document.createElement('textarea');
                courseDescrition.setAttribute('id', 'courseDescrition');
                // teacher.setAttribute('type', 'text');
                courseDescrition.setAttribute('readonly', 'true');
                courseDescrition.value = income.courseDescrition;
                let br4 = document.createElement('br');
                
                let deleteCourses = document.createElement('button');
                deleteCourses.setAttribute('id', 'deleteCourses');
                deleteCourses.setAttribute('class', 'deleteCourses');
                //deleteCourses.setAttribute('onclick', 'deleteCourses(this.value)');
                deleteCourses.value=income.id;
                deleteCourses.innerHTML='Delete';
                let br5 = document.createElement('br');

                let editCourses = document.createElement('button');
                editCourses.setAttribute('id', 'editCourses');
                editCourses.setAttribute('class', 'editCourses');
                //editCourses.setAttribute('onclick', 'editCourses(this.value)');
                editCourses.innerHTML='Edit';
                let br6 = document.createElement('br');

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
                div.appendChild(deleteCourses);
                div.appendChild(br5);
                div.appendChild(editCourses);
                div.appendChild(br6);
                container.appendChild(div);
            })
        }
    })
    
}

async function getTeacherPage() {
    await fetch(base_api_path + '/teacher', {method: 'GET'})
    .then(response => response.text())
    .then(view => {
        document.getElementById('page').innerHTML = view;
    })
        await getTeacher();
}

async function getTeacher(){
    let response = await fetch(base_api_path + '/role');
    let user = await response.json();

    await fetch(base_api_path+'/getTeacher', {metod: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('paget'); 
                
            if(user != 'admin'){
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
        }
        else{
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

                let deleteTeacher = document.createElement('button');
                deleteTeacher.setAttribute('id', 'deleteTeacher');
                deleteTeacher.setAttribute('class', 'deleteTeacher');
                //deleteCourses.setAttribute('onclick', 'deleteCourses(this.value)');
                deleteTeacher.value=income.id;
                deleteTeacher.innerHTML='Delete';
                let br3 = document.createElement('br');

                let editTeacher = document.createElement('button');
                editTeacher.setAttribute('id', 'editTeacher');
                editTeacher.setAttribute('class', 'editTeacher');
                //editCourses.setAttribute('onclick', 'editCourses(this.value)');
                editTeacher.innerHTML='Edit';
                let br4 = document.createElement('br');
                           
                div.appendChild(img);
                div.appendChild(br);
                div.appendChild(tname);
                div.appendChild(br1);
                div.appendChild(subject);
                div.appendChild(br2);
                div.appendChild(deleteTeacher);
                div.appendChild(br3);
                div.appendChild(editTeacher);
                div.appendChild(br4);
                container.appendChild(div);
            })
        }
    })
}

async function getEnrollPage() {
    await fetch(base_api_path + '/enroll', {method: 'GET'})
    .then(response => response.text())
    .then(view => {
        document.getElementById('page').innerHTML = view;
    })
        await getEnroll();
}

async function getTeacher(){
    let response = await fetch(base_api_path + '/role');
    let user = await response.json();

    await fetch(base_api_path+'/getTeacher', {metod: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('paget'); 
                
            if(user != 'admin'){
            res.forEach(income => {
                let div = document.createElement('div');
                div.setAttribute('class', 'contentSec');
                div.setAttribute('id', 'maindiv');
                
                let student = document.createElement('input');
                student.setAttribute('id', 'student');
                student.setAttribute('type', 'text');
                student.setAttribute('readonly', 'true');
                student.value = income.student;
                let br1 = document.createElement('br');

                let course = document.createElement('input');
                course.setAttribute('id', 'course');
                course.setAttribute('type', 'text');
                course.setAttribute('readonly', 'true');
                course.value = income.course;
                let br2 = document.createElement('br');

                           
                div.appendChild(student);
                div.appendChild(br1);
                div.appendChild(course);
                div.appendChild(br2);
                container.appendChild(div);
            })
        }       
    })
}
