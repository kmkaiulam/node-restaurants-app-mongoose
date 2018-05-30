'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://kmlam:testing123@ds133920.mlab.com:33920/restaurant-app-db';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://kmlam:testing123>@ds133570.mlab.com:33570/test-mlab-db';
exports.PORT = process.env.PORT || 8080;