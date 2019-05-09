drop DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;
drop table if exists burger;
create table burgers (
    id int not null auto_increment,
    burger_name varchar(100) not null ,
    devoured boolean not null default false,
    primary key (id)
);