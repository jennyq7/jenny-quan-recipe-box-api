// Update with your config settings.
//set up knex file to connect to mysql database
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql',
  connection: {
    host: 'mysql-kpiq',
    charset: 'utf8',
    database: "mysql",
    user: "mysql",
    password: "Td0WgfWWHBjdbmMkcWuNgcUiqz2S15bC"
   }
};

//for main branch
// module.exports = {
//   client: 'mysql',
//   connection: {
//     host: 'mysql-qwcf',
//     charset: 'utf8',
//     database: "mysql",
//     user: "mysql",
//     password: "R65ybprtJymjAilbdMWXO4H6pOlTjU1y"
//    }
// };
