insert into users1
(is_admin, username, password, therapist, firstName, lastName)
values 
($1, $2, $3, $4, $5, $6)
returning *;