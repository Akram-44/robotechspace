'use strict';

/**
 * print-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::print-service.print-service');
