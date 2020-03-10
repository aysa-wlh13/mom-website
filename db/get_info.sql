select *
from users1 u 
join text t on u.users1_id = t.users1_id
where u.users1_id = $1
order by text_id asc