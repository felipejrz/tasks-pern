CREATE DATABASE tasksdb

CREATE TABLE tasksdb (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);
