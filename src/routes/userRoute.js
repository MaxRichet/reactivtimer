/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @openapi
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to register a new user.
 *     tags: [Users]
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
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example: { message: 'User registered successfully' }
 */

/**
 * @openapi
 * /user/login:
 *   post:
 *     summary: Login as an existing user
 *     description: Endpoint to login as an existing user.
 *     tags: [Users]
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
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example: { token: 'JWT_TOKEN_HERE' }
 */

module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.post('/user/register', userController.userRegister);
    server.post('/user/login', userController.userLogin);
}
