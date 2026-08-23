export const wedding = {
  partnerOne: 'Aria',
  partnerTwo: 'Julian',
  monogram: 'A&J',
  tagline:
    'Together with their families, invite you to celebrate their marriage',
  blessing:
    'With the blessings of our families, we invite you to share in our joy',
  date: new Date('2026-12-12T16:00:00'),
  dateLabel: 'Saturday, December 12, 2026',
  timeLabel: 'Ceremony begins at 4:00 in the afternoon',
  story: {
    title: 'Our Story',
    lead: 'Two hearts, one promise',
    body: 'What began as a quiet conversation grew into a shared life of laughter, faith, and devotion. Surrounded by family and friends, we look forward to beginning this next chapter together.',
  },
  location: {
    venue: 'The Willow Conservatory',
    address: '128 Meadow Lane, Sonoma Valley, CA',
    mapUrl: 'https://maps.google.com/?q=Sonoma+Valley',
    note: 'Garden ceremony followed by dinner under the lanterns',
  },
  featuredEvents: [
    {
      id: 'ceremony',
      label: 'The Ceremony',
      time: '4:00 PM',
      detail: 'Among the willows — an intimate gathering of family and friends',
      accent: 'olive' as const,
    },
    {
      id: 'reception',
      label: 'The Reception',
      time: '6:30 PM',
      detail: 'Shared tables, soft light, dinner and toasts beneath lantern glow',
      accent: 'burgundy' as const,
    },
  ],
  schedule: [
    { time: '3:30 PM', title: 'Guest Arrival', detail: 'Drinks & garden stroll' },
    { time: '4:00 PM', title: 'Ceremony', detail: 'Among the willows' },
    { time: '5:00 PM', title: 'Cocktail Hour', detail: 'Live strings on the terrace' },
    { time: '6:30 PM', title: 'Dinner & Toasts', detail: 'Shared tables, soft light' },
    { time: '9:00 PM', title: 'First Dance', detail: 'Then we celebrate until late' },
  ],
  rsvp: {
    deadline: 'November 1, 2026',
    email: 'rsvp@ariaandjulian.love',
  },
} as const
