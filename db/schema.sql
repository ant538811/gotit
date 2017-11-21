drop database if exists gotit_db;
create database gotit_db;

use gotit_db;

drop table if exists users;

create table users(
user_id integer auto_increment not null,
email varchar (255) not null,
password varchar (255) not null,
name varchar (255) not null,
phone varchar(20),
gender varchar (20),
age integer,
primary key (user_id)
);
