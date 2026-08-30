export const wedding = {
  partnerOne: 'Jennifer',
  partnerTwo: 'Jauhar',
  tagline:
    'Together with their families, invite you to celebrate their marriage',
  blessing:
    'With the blessings of our families, we invite you to share in our joy',
  date: new Date('2026-10-10T16:00:00'),
  dateLabel: 'Saturday, October 10, 2026',
  timeLabel: 'Ceremony begins at 4:00 in the afternoon',
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
      time: '4:00 PM',
      location: 'The Walnut Courtyard',
      detail:
        'Henna, song, and an intimate gathering beneath the willows.',
    },
    {
      id: 'wedding-ceremony',
      label: 'Wedding Ceremony',
      time: '6:30 PM',
      location: 'Hanji Danter, Anantnag',
      detail:
        'The nikah, shared tramis, and dinner beneath a canopy of lanterns.',
    },
  ],
} as const
