'use strict';

/**
 * sharedcontent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sharedcontent.sharedcontent');
