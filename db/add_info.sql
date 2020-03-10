insert into text 
(users1_id, info)
values 
($1, $2)
returning text_id;
