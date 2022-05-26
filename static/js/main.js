const base_api_path = `${window.location.origin}`;

function checkFields(value) {
    if (value.length != 0)
        return true;
    else return false;
}

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
                button.setAttribute('id', 'addEnroll'+income.courseName);
                // button.setAttribute('class', 'button');
                button.setAttribute('class', 'button1');
                button.setAttribute('value', income.courseName);
                // button.value=income.id;
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
            let divadd = document.createElement('div');
            divadd.setAttribute('class', 'AddCourses');
            divadd.setAttribute('id', 'ADD');

            let AddcourseName = document.createElement('input');
            AddcourseName.setAttribute('id', 'AddcourseName');
            AddcourseName.setAttribute('type', 'text');
            AddcourseName.setAttribute('placeholder', 'Enter Course Name');
            // language.setAttribute('readonly', 'true');
            let bradd1 = document.createElement('br');

            let Addlanguage = document.createElement('input');
            Addlanguage.setAttribute('id', 'Addlanguage');
            Addlanguage.setAttribute('type', 'text');
            Addlanguage.setAttribute('placeholder', 'Enter Language');
            // language.setAttribute('readonly', 'true');
            let bradd2 = document.createElement('br');

            let Addteacher = document.createElement('input');
            Addteacher.setAttribute('id', 'Addteacher');
            Addteacher.setAttribute('type', 'text');
            Addteacher.setAttribute('placeholder', 'Enter Teacher');
            // language.setAttribute('readonly', 'true');
            let bradd3 = document.createElement('br');

            let Addimage = document.createElement('input');
            Addimage.setAttribute('id', 'Addimage');
            Addimage.setAttribute('type', 'text');
            Addimage.setAttribute('placeholder', 'Enter path to Image');
            // language.setAttribute('readonly', 'true');
            let bradd4 = document.createElement('br');

            let AddcourseDescrition = document.createElement('input');
            AddcourseDescrition.setAttribute('id', 'AddcourseDescrition');
            AddcourseDescrition.setAttribute('type', 'text');
            AddcourseDescrition.setAttribute('placeholder', 'Enter Course Descrition');
            // language.setAttribute('readonly', 'true');
            let bradd5 = document.createElement('br');

            let addbuttonCourses = document.createElement('button');
            addbuttonCourses.setAttribute('id', 'addbuttonCourses');
            addbuttonCourses.setAttribute('class', 'addbuttonCourses');
            addbuttonCourses.setAttribute('onclick', 'addCourses()');
            addbuttonCourses.innerHTML='Add';
            addbuttonCourses.value = 'Add courses';
            let bradd6 = document.createElement('br');

            divadd.appendChild(AddcourseName);
            divadd.appendChild(bradd1);
            divadd.appendChild(Addlanguage);
            divadd.appendChild(bradd2);
            divadd.appendChild(Addteacher); 
            divadd.appendChild(bradd3);
            divadd.appendChild(Addimage);
            divadd.appendChild(bradd4);
            divadd.appendChild(AddcourseDescrition);
            divadd.appendChild(bradd5);
            divadd.appendChild(addbuttonCourses);
            divadd.appendChild(bradd6);           
            container.appendChild(divadd);


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
                courseName.setAttribute('id', 'courseName'+income.courseName);
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
                // courseDescrition.setAttribute('readonly', 'true');
                courseDescrition.value = income.courseDescrition;
                let br4 = document.createElement('br');
                
                let deleteCourses = document.createElement('button');
                deleteCourses.setAttribute('id', 'deleteCourses'+income.courseName);
                deleteCourses.setAttribute('class', 'deleteCourses');
                deleteCourses.setAttribute('value',income.courseName)
                deleteCourses.setAttribute('onclick', 'deleteCourses(this.value)');
                deleteCourses.innerHTML='Delete';
                let br5 = document.createElement('br');

                let editCourses = document.createElement('button');
                editCourses.setAttribute('id', 'editCourses'+income.courseName);
                editCourses.setAttribute('class', 'editCourses');
                editCourses.setAttribute('value', income.courseName)
                editCourses.setAttribute('onclick', 'editCourses(this.value)');
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
            let divadd = document.createElement('div');
            divadd.setAttribute('class', 'AddTeacher');
            divadd.setAttribute('id', 'ADD');

            let Addtname = document.createElement('input');
            Addtname.setAttribute('id', 'Addtname');
            Addtname.setAttribute('type', 'text');
            Addtname.setAttribute('placeholder', 'Enter Teacher Name');
            // language.setAttribute('readonly', 'true');
            let bradd1 = document.createElement('br');

            let Addphoto = document.createElement('input');
            Addphoto.setAttribute('id', 'Addphoto');
            Addphoto.setAttribute('type', 'text');
            Addphoto.setAttribute('placeholder', 'Enter path to photo');
            // language.setAttribute('readonly', 'true');
            let bradd2 = document.createElement('br');

            let Addsubject = document.createElement('input');
            Addsubject.setAttribute('id', 'Addsubject');
            Addsubject.setAttribute('type', 'text');
            Addsubject.setAttribute('placeholder', 'Enter Subject');
            // language.setAttribute('readonly', 'true');
            let bradd3 = document.createElement('br');

            let addbuttonTeacher = document.createElement('button');
            addbuttonTeacher.setAttribute('id', 'addbuttonTeacher');
            addbuttonTeacher.setAttribute('class', 'addbuttonTeacher');
            addbuttonTeacher.setAttribute('onclick', 'addTeacher()');
            addbuttonTeacher.innerHTML='Add';
            addbuttonTeacher.value = 'Add Teacher';
            let bradd4 = document.createElement('br');

            divadd.appendChild(Addtname);
            divadd.appendChild(bradd1);
            divadd.appendChild(Addphoto);
            divadd.appendChild(bradd2);
            divadd.appendChild(Addsubject); 
            divadd.appendChild(bradd3);            
            divadd.appendChild(addbuttonTeacher);
            divadd.appendChild(bradd4);      
            container.appendChild(divadd);
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
                tname.setAttribute('id', 'tname'+income.tname);
                tname.setAttribute('type', 'text');
                // tname.setAttribute('readonly', 'true');
                tname.value = income.tname;
                let br1 = document.createElement('br');

                let subject = document.createElement('input');
                subject.setAttribute('id', 'subject');
                subject.setAttribute('type', 'text');
                // subject.setAttribute('readonly', 'true');
                subject.value = income.subject;
                let br2 = document.createElement('br');

                let deleteTeacher = document.createElement('button');
                deleteTeacher.setAttribute('id', 'deleteTeacher'+income.tname);
                deleteTeacher.setAttribute('class', 'deleteTeacher');
                deleteTeacher.setAttribute('value', income.tname)
                deleteTeacher.setAttribute('onclick', 'deleteTeacher(this.value)');
                deleteTeacher.innerHTML='Delete';
                let br3 = document.createElement('br');

                let editTeacher = document.createElement('button');
                editTeacher.setAttribute('id', 'editTeacher'+income.tname);
                editTeacher.setAttribute('class', 'editTeacher');
                editTeacher.setAttribute('value', income.tname)
                editTeacher.setAttribute('onclick', 'editTeacher(this.value)');
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

async function getEnroll(){
    let response = await fetch(base_api_path + '/role');
    let user = await response.json();

    await fetch(base_api_path+'/getEnroll', {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            let container = document.getElementById('pagemy'); 
                
            if(user != 'admin'){
            res.forEach(res => {
                let div = document.createElement('div');
                div.setAttribute('class', 'contentSec');
                div.setAttribute('id', 'maindiv');                           
                        
                let usercour = document.createElement('input')
                usercour.setAttribute('id', 'user');
                usercour.setAttribute('type', 'text');
                usercour.setAttribute('readonly', 'text');
                usercour.value = res.student;
                div.appendChild(usercour);

                let coursmy = document.createElement('input');
                coursmy.setAttribute('id', 'coursmy');
                coursmy.setAttribute('type', 'text');
                coursmy.setAttribute('readonly', 'text');
                coursmy.value = res.course;
                div.appendChild(coursmy);

                let lector = document.createElement('input')
                lector.setAttribute('id', 'lector');
                lector.setAttribute('type', 'text');
                lector.setAttribute('readonly', 'text');
                lector.value = res.lector;
                div.appendChild(lector);                    
                    
                container.appendChild(div);
            })
        }       
    })
}

async function addEnroll(courseName){
    await fetch(base_api_path +'/addEnroll',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                courseName: document.getElementById('addEnroll'+courseName).value,
                teacher: document.getElementById('teacher').value
            }
        )
    })
    await getEnrollPage();
}

async function deleteCourses(courseName){
    await fetch(base_api_path +'/deleteCourses',
    {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            courseName:courseName
        })
    })
    await getCoursesPage();
}

async function deleteTeacher(tname){
    await fetch(base_api_path +'/deleteTeacher',
    {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            tname:tname
        })
    })
    await getTeacherPage();
}

async function editCourses(courseName){
    console.log(document.getElementById('courseName'+courseName).value);
    await fetch(base_api_path + '/editCourses',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                courseName: courseName,
                image: document.getElementById('imgCou').value,
                language:  document.getElementById('language').value,
                teacher: document.getElementById('teacher').value,
                courseDescrition: document.getElementById('courseDescrition').value,
            }
        )
    })
    getTeacherPage();

}

async function editTeacher(tname){
    console.log(document.getElementById('tname'+tname).value);
       
    await fetch(base_api_path + '/editTeacher',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                tname: tname,
                photo: document.getElementById('imgTea').value,
                subject:  document.getElementById('subject').value,
            }
        )
    })
    getTeacherPage();
}

async function addCourses(){
    let AddcourseName = document.getElementById('AddcourseName');
    let Addlanguage = document.getElementById('Addlanguage');
    let AddcourseDescrition = document.getElementById('AddcourseDescrition');
    let Addteacher = document.getElementById('Addteacher');
    let Addimage = document.getElementById('Addimage');
    if(AddcourseName.value.length==0||Addlanguage.value.length==0||AddcourseDescrition.value.length||Addteacher.value.length==0||Addimage.value.length==0)
    {
        window.alert("Check the fields, they must not be empty");
    }
    else {
    fetch(base_api_path + '/addCourses',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                
                courseName: document.getElementById('AddcourseName').value,
                language: document.getElementById('Addlanguage').value,
                courseDescrition: document.getElementById('AddcourseDescrition').value,
                teacher: document.getElementById('Addteacher').value,
                image: document.getElementById('Addimage').value
            }
        )
    })
    document.getElementById('AddcourseName').value="";
    document.getElementById('Addlanguage').value="";
    document.getElementById('AddcourseDescrition').value="";
    document.getElementById('Addteacher').value="";
    document.getElementById('Addimage').value="";
   await getCoursesPage()   
}
}

async function addTeacher(){
    let Addtname = document.getElementById('Addtname');
    let Addphoto = document.getElementById('Addphoto');
    let Addsubject = document.getElementById('Addsubject');
    if(Addtname.value.length==0|| Addphoto.value.length==0|| Addsubject.value.length==0)
    {
        window.alert("Check the fields, they must not be empty");
    }
    else {
    fetch(base_api_path + '/addTeacher',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    tname: document.getElementById('Addtname').value,
                    photo: document.getElementById('Addphoto').value,                
                    subject: document.getElementById('Addsubject').value
                    
                }
            )
        })
        document.getElementById('Addtname').value="";
        document.getElementById('Addphoto').value="";
        document.getElementById('Addsubject').value="";

    await getTeacherPage()
    }
}
async function Search(){
    let Searchinp = document.getElementById('Searchinp');
    if(Searchinp.value.length==0)
    {
        window.alert("Check the fields, they must not be empty");
    }
    else {
    fetch(base_api_path + '/Search', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                language: document.getElementById('Searchinp').value,
            })
    })
    .then(res => res.json())
        .then(res => {
            let container = document.getElementById('pagelang'); 
            // res.forEach(res => {
                let div = document.createElement('div');
                div.setAttribute('class', 'contentSec');
                div.setAttribute('id', 'maindiv');
                
                let img = document.createElement('img');
                img.setAttribute('id', 'imageCou');
                img.id='imgCou';
                img.src = res.image;
                let br = document.createElement('br');

                let courseName = document.createElement('input');
                courseName.setAttribute('id', 'courseName'+res.id);
                courseName.setAttribute('type', 'text');
                courseName.setAttribute('readonly', 'true');
                courseName.value = res.courseName;
                let br1 = document.createElement('br');

                let language = document.createElement('input');
                language.setAttribute('id', 'language');
                language.setAttribute('type', 'text');
                language.setAttribute('readonly', 'true');
                language.value = res.language;
                let br2 = document.createElement('br');

                let teacher = document.createElement('input');
                teacher.setAttribute('id', 'teacher');
                teacher.setAttribute('type', 'text');
                teacher.setAttribute('readonly', 'true');
                teacher.value = res.teacher;
                let br3 = document.createElement('br');

              
                let courseDescrition = document.createElement('textarea');
                courseDescrition.setAttribute('id', 'courseDescrition');
                // teacher.setAttribute('type', 'text');
                courseDescrition.setAttribute('readonly', 'true');
                courseDescrition.value = res.courseDescrition;
                let br4 = document.createElement('br');
                
                let button = document.createElement('button');
                button.setAttribute('id', 'addEnroll'+res.courseName);
                // button.setAttribute('class', 'button');
                button.setAttribute('class', 'button1');
                button.setAttribute('value', res.courseName);
                // button.value=income.id;
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

        //  })
        document.getElementById('Searchinp').value="";
}
}