# is-pg-accessible
Lets know if pg is installable, accessible and operative. 

![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![version](https://img.shields.io/npm/v/is-pg-accesible.svg)](https://npmjs.org/package/is-pg-accesible)
[![downloads](https://img.shields.io/npm/dm/is-pg-accesible.svg)](https://npmjs.org/package/is-pg-accesible)
[![linux](https://img.shields.io/travis/emilioplatzer/is-pg-accesible/master.svg)](https://travis-ci.org/emilioplatzer/is-pg-accesible)
[![windows](https://ci.appveyor.com/api/projects/status/9gv6di2ch52omfri?svg=true)](https://ci.appveyor.com/project/emilioplatzer/is-pg-accessible)
[![coverage](https://img.shields.io/coveralls/emilioplatzer/is-pg-accessible/master.svg)](https://coveralls.io/r/emilioplatzer/is-pg-accessible)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/is-pg-accessible.svg)](https://codeclimate.com/github/emilioplatzer/is-pg-accessible)
[![dependencies](https://img.shields.io/david/emilioplatzer/is-pg-accessible.svg)](https://david-dm.org/emilioplatzer/is-pg-accessible)


Can I install pg with npm? 

Can I connect to postgresql?

If I couldn't, Can I connect to postgresql with php?

# Instructions

 1. Try to install with npm

```
    $ npm install
```    
    
 2. Write your own database connection parameters in a new file local-connect-info.json (to start you can copy connect-info.json)
 
 3. Create the database
 
 4. Try to connect (you must see "all ok: 1 = 1" in the last console line)
```
    $ npm start
```
    
