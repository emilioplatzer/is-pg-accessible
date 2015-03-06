# is-pg-accessible
Lets know if pg is installable, accessible and operative. 

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]


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
    
[npm-image]: https://img.shields.io/npm/v/expect-called.svg?style=flat
[npm-url]: https://npmjs.org/package/expect-called
[travis-image]: https://img.shields.io/travis/emilioplatzer/expect-called/master.svg?label=linux&style=flat
[travis-url]: https://travis-ci.org/emilioplatzer/expect-called
[coveralls-image]: https://img.shields.io/coveralls/emilioplatzer/expect-called/master.svg?style=flat
[coveralls-url]: https://coveralls.io/r/emilioplatzer/expect-called
