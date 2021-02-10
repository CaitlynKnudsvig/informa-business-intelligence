const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/about-us', label: 'Contact Us' },
      { href: 'https://cv.endeavorb2b.com/american-trucker', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/news', label: 'News' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/business', label: 'Business' },
        { href: '/regulations', label: 'Regulations' },
        { href: '/safety', label: 'Safety' },
        { href: '/galleries', label: 'Galleries' },
        { href: '/american-trucker-magazine', label: 'American Trucker Magazine' },
        { href: '/inquire', label: 'Advertiser Info' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us / Contact Us' },
        { href: 'https://cv.endeavorb2b.com/american-trucker', label: 'Advertise', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
