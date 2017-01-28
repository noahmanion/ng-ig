module.exports = {
	db: process.env.db || 'localhost',
	tokenSecret: process.env.tokenSecret || 'ahardtoguessstring'
}