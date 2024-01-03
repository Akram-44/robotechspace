'use strict';

/**
 * print-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::print-service.print-service');
