--------user1_table--------
create table users1 (
    users1_id serial primary key,
    is_admin boolean default false,
    username varchar(250) unique,
    password varchar(250),
    therapist varchar(250),
    firstName varchar(250),
    lastName varchar(250)
)

insert into users1
(is_admin, username, password, therapist, firstName, lastName)
values
(true, 'leo@gmail.com', 'paul', 'null', 'leonard', 'grabert'),
(false, 'drew@gmail.com', 'black', 'leonard grabert', 'andrew', 'grabert')

-- select *
-- from users1

--------text_table--------
create table text (
    text_id serial primary key,
    users1_id int references users1(users1_id),
    info text
)

insert into text 
(users1_id, info)
values 
(5, 'ptsd, having trobale leeping from the nightmares'),
(5, 'anxiety depression needs med change')

-- select *
-- from text