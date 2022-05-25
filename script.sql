-- drop SCHEMA `ITCOURSES` 

CREATE SCHEMA `ITCOURSES` ;

USE `ITCOURSES` ;
CREATE TABLE IF NOT EXISTS `users` ( 
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `username` VARCHAR(16) NOT NULL UNIQUE, 
  `password` VARCHAR(80) NOT NULL,
  `role` VARCHAR(5) NOT NULL,  
  PRIMARY KEY (`username`));
  
  use `ITCOURSES`;
create table if not exists `teacher`(
  `id` int not null auto_increment UNIQUE,
  `tname` varchar(50) not null,
  `photo` varchar(100),
  `subject` varchar(50) not null,
  primary key (`tname`));

 use `ITCOURSES`;
create table if not exists `courses`(
  `id` int not null auto_increment unique,
  `language` varchar(20),
  `courseName` varchar(20) not null,
  `courseDescrition` varchar(500) NOT NULL,
  `teacher`varchar(50) not null,
  `image` varchar(100),
  primary key (`courseName`),
  FOREIGN KEY (`teacher`)  REFERENCES  teacher (`tname`));

  use `ITCOURSES`;
create table if not exists `enrollments`( -- +
  `id` int not null auto_increment,
  `student`VARCHAR(16) NOT NULL,
  `course` varchar(50) not null,
  `lector` varchar(50) not null,
  primary key (`id`),
  foreign key (course) references courses(courseName),
  foreign key (lector) references teacher(tname),
  foreign key (student) references users(username));

  
  