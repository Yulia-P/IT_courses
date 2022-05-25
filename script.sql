-- drop SCHEMA `ITCOURSES` 

CREATE SCHEMA `ITCOURSES` ;

USE `ITCOURSES` ;
CREATE TABLE IF NOT EXISTS `users` ( 
  `id` int NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL UNIQUE, 
  `password` VARCHAR(80) NOT NULL,
  `role` VARCHAR(5) NOT NULL,  
  PRIMARY KEY (`id`));
  
  use `ITCOURSES`;
create table if not exists `teacher`(
  `id` int not null auto_increment UNIQUE,
  `tname` varchar(50) not null,
  `photo` varchar(100),
  `subject` varchar(50) not null,
  primary key (`tname`));

 use `ITCOURSES`;
create table if not exists `courses`(
  `id` int not null auto_increment,
  `language` varchar(20),
  `courseName` varchar(20) not null,
  `courseDescrition` varchar(500) NOT NULL,
  `teacher`varchar(50) not null,
  `image` varchar(100),
  primary key (`id`),
  FOREIGN KEY (`teacher`)  REFERENCES  teacher (`tname`));

  use `ITCOURSES`;
create table if not exists `enrollments`( -- +
  `id` int not null auto_increment,
  `student` int NOT NULL,
  `course` int NOT NULL,
  primary key (`id`),
  foreign key (course) references courses(id),
  foreign key (student) references users(id));

  
  