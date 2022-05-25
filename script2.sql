SELECT * FROM itcourses.courses;
SELECT * FROM itcourses.teacher;
SELECT * FROM itcourses.users;
SELECT * FROM itcourses.enrollments;

use itcourses;
update users set role='admin' where id=1;

use itcourses;
insert into courses(language, courseName, courseDescrition, teacher, image) values ('Java', 'Start in Java','На курсе java ты научишься: писать интересные алгоритмы, работать с коллекциями, файлами и др.; сделаешь парочку многопоточных приложений; освоишь работу с базами данных; изучишь самые популярные фреймворки - Spring и Hibernate и разработаешь web-приложение.',
'Lora Porta', '/style/img/java.jpg');
use itcourses;
insert into courses(language, courseName, courseDescrition, teacher, image) values ('Python', 'Start in Python','Курс Python с нуля в школе Brain Hack – возможность изучить экосистему Python, 
научиться разрабатывать приложения на фреймворке Django, работать с базами данных и серверами.',  'Florence Pugh', '/style/img/python.jpg');

use itcourses;
insert into teacher(tname, photo, subject) values ('Lora Porta', '/style/img/Lora.jpg', 'Java'); 
use itcourses;
insert into teacher(tname, photo, subject) values ('Florence Pugh','/style/img/Florence.jpg', 'Python'); 


