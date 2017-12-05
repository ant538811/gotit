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
time bigint Not Null,
fk_user_id integer,
fk_team_id integer,
role varchar (255),
primary key (position_id)
);

create table teams(
team_id integer auto_increment not null,
fk_position_id integer,
primary key (team_id),
foreign key (fk_position_id) references positions(position_id)
);

alter table positions
add foreign key (fk_user_id) references users(user_id);
alter table positions
add foreign key (fk_team_id) references teams(team_id);
