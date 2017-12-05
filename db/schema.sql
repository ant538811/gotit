drop database if exists gotit_db;
create database gotit_db;

use gotit_db;
create table users(
user_id integer auto_increment not null,
username varchar (255) not null,
email varchar (255) not null,
password varchar (255) not null,
name varchar (255) not null,
phone varchar(20),
gender varchar (20),
age integer,
primary key (user_id)
);


create table positions(
position_id integer auto_increment not null,
time bigint default 0,
fk_user_id integer,
fk_team_id integer,
role varchar (255),
primary key (position_id)
);

create table teams(
team_id integer auto_increment not null,
team_name varchar(255),
primary key (team_id)
);




use gotit_db;
insert into users(username, email, password, name, phone, gender, age)
values
("jdoe","patient@gmail.com", "thisisapassword", "John Doe", "832-100-200", "Male", 30),
("ljones","lj@yahoo.com", "qwerty", "Laura Jones", "281-211-432", "Female", 35);
insert into positions(role, fk_user_id, fk_team_id)
values
("Manager", 1, 2),
("CFO", 2, 1);

insert into teams(team_name)
values
("gotit"),
("notit");
alter table positions
add foreign key (fk_user_id) references users(user_id);
alter table positions
add foreign key (fk_team_id) references teams(team_id);
select * from users;
select * from positions;
select * from teams;
select users.name, positions.role, positions.fk_user_id,  teams.team_name from users left join positions on users.user_id = positions.fk_user_id left join teams on positions.fk_team_id = teams.team_id order by time desc;