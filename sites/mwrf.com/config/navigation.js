const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/companies/company/21145007/microwaves-rf', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://designengineering.endeavorb2b.com/microwaves-rf/', label: 'Advertise' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/page/resources', label: 'MWRF Resources' },
        { href: '/markets', label: 'Markets' },
        { href: '/technologies/test-measurement', label: 'Test & Measurement' },
        { href: '/technologies/components', label: 'Components' },
        { href: '/technologies/semiconductors', label: 'Semiconductors' },
        { href: '/technologies/systems', label: 'Systems' },
        { href: '/materials', label: 'Materials' },
        { href: '/technologies/software', label: 'Software' },
        { href: '/covid-19', label: 'COVID-19' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/leaders', label: 'Company Directory' },
        { href: 'https://www.electronicdesign.com/', label: 'Electronic Design' },
        { href: 'https://www.powerelectronics.com/', label: 'Power Design' },
        { href: 'https://www.machinedesign.com/', label: 'Machine Design' },
        { href: 'https://www.sourcetoday.com/', label: 'Procurement' },
        { href: '/magazine', label: 'Digital Editions' },
        { href: '/magazine/600a38f1b98b456a318b46b1', label: 'TechXchange' },
        { href: '/magazine/5f4d1d164649416c358b456d', label: 'Top Stories' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/learning-resources/webcasts', label: 'Webcasts' },
        { href: '/learning-resources/white-paper', label: 'White Papers' },
        { href: '/companies/company/21145007/microwaves-rf', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/microwaves-rf/', label: 'Advertise', target: '_blank' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
