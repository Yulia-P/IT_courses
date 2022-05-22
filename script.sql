-- drop SCHEMA `ITCOURSES` 

CREATE SCHEMA `ITCOURSES` ;
USE `ITCOURSES` ;

CREATE TABLE IF NOT EXISTS `users` ( -- +
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL UNIQUE, 
  `password` VARCHAR(80) NOT NULL,
  `role` VARCHAR(5) NOT NULL,  
  PRIMARY KEY (`id`));
  
create table if not exists `teacher`( -- +
  `id` int(11) not null auto_increment,
  `tname` varchar(20) not null,
  `tsurname` varchar(20) not null,
  `subject` varchar(50) not null,
  primary key (`id`));

create table if not exists `courses`( -- + 
  `id` int(11) not null auto_increment,
  `language` varchar(20),
  `courseName` varchar(20) not null,
  `courseDescrition` TEXT NOT NULL,
  `teacher` int(11) NOT NULL,
  primary key (`id`),
  FOREIGN KEY (teacher)  REFERENCES  teacher (id));

create table if not exists `enrollments`( -- +
  `id` int(11) not null auto_increment,
  `student` int(11) NOT NULL,
  `course` int(11) NOT NULL,
  primary key (`id`),
  foreign key (course) references courses(id),
  foreign key (student) references users(id));

  
  