CREATE USER test_user LOGIN PASSWORD 'this.is.the.pass.but.must.be.longer';
CREATE DATABASE test_db WITH OWNER = test_user ENCODING = 'UTF8';

