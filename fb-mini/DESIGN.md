SCHEMA

users
- id INT
- first_name VARCHAR
- last_name VARCHAR
- birthdate DATE
- email VARCHAR
- password VARCHAR
- bio VARCHAR

posts
- id INT
- user_id INT
- post VARCHAR
- post_date DATE
- num_likes INT

friends
- id INT
- requestor_id INT
- requested_id INT
- date_requested DATE
- status VARCHAR
