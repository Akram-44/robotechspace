'use strict';

/**
 * print-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::print-service.print-service');
