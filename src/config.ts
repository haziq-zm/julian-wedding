export const wedding = {
  partnerOne: 'Jauhar',
  partnerTwo: 'Jennifer',
  tagline:
    '<b>Mrs and Mr Mohammad Hussain Malik</b> <span class="lux-hero__tagline-sub">solicit your gracious presence & blessings on the auspicious occasion of marriage ceremony of their beloved son</span>',
  blessing:
    'With the blessings of our families, we invite you to share in our joy',
  date: new Date('2026-10-11T16:00:00'),
  dateLabel: 'Sunday, October 11, 2026',
  rsvpDeadline: 'Kindly respond by Friday, September 18, 2026',
  story: {
    title: 'Our Story',
    lead: 'Two hearts, one promise',
    body: 'What began as a quiet conversation grew into a shared life of laughter, faith, and devotion. Surrounded by family and friends, we look forward to beginning this next chapter together.',
  },
  location: {
    venue: 'Hanji Danter',
    address: 'Anantnag',
    mapUrl: 'https://maps.app.goo.gl/kWVTZBiBgtMey7je8',
    note: 'Garden ceremony followed by dinner under the lanterns',
  },
  schedule: [
    {
      id: 'mehendiraat',
      label: 'Mehendiraat',
      date: 'Saturday, October 10, 2026',
      time: '6:00 PM',
      location: 'The Walnut Courtyard',
      detail:
        'Henna, song, and an intimate gathering beneath the willows.',
    },
    {
      id: 'wedding-ceremony',
      label: 'Masnandnishini',
      date: 'Sunday, October 11, 2026',
      time: '2:00 PM',
      location: 'Hanji Danter, Anantnag',
      detail:
        'Shared tramis, and dinner beneath a canopy of lanterns.',
    },
  ],
} as const
