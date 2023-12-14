/**
 * @openapi
 * tags:
 *   name: Time
 *   description: Operations related to time entries
 */

/**
 * @openapi
 * /time:
 *   post:
 *     summary: Create a new time entry
 *     description: Endpoint to create a new time entry.
 *     tags: [Time]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define your request body properties here
 *     responses:
 *       200:
 *         description: Time entry created successfully
 *         content:
 *           application/json:
 *             example: { message: 'Time entry created successfully' }
 */

/**
 * @openapi
 * /time:
 *   get:
 *     summary: Get a list of all time entries
 *     description: Endpoint to get a list of all time entries.
 *     tags: [Time]
 *     responses:
 *       200:
 *         description: Successfully retrieved time entries
 */

/**
 * @openapi
 * /time/avg:
 *   get:
 *     summary: Get the average time
 *     description: Endpoint to get the average time.
 *     tags: [Time]
 *     responses:
 *       200:
 *         description: Successfully retrieved average time
 */

module.exports = (server) => {
    const timeController = require('../controllers/timeController');
    const jwtMiddlewares = require('../Middlewares/jwtMiddleware');

    server.post('/time', jwtMiddlewares.verifyToken, timeController.createTime);
    server.get('/time', jwtMiddlewares.verifyToken, timeController.listAllTime);
    server.get('/time/avg', jwtMiddlewares.verifyToken, timeController.avgTime);
}
