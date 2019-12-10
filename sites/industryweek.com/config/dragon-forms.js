const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com/loading.do' });

config
  // .addForm('newsletterSignup', { omedasite: 'ASUnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6086_IYnew', query: { pk: 'NNHWEB' } });

module.exports = config;
