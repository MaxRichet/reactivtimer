module.exports = (server) => {
    const timeController = require('../controllers/timeController');

    server.post('/time', timeController.createTime);
    server.get('/time', timeController.listAllTime);
    server.get('/time/avg', timeController.avgTime);
}