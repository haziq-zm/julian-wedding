export const wedding = {
  partnerOne: 'Aria',
  partnerTwo: 'Julian',
  tagline: 'Together with their families, invite you to celebrate their marriage',
  date: new Date('2026-12-12T16:00:00'),
  dateLabel: 'Saturday, December 12, 2026',
  timeLabel: 'Ceremony begins at 4:00 in the afternoon',
  location: {
    venue: 'The Willow Conservatory',
    address: '128 Meadow Lane, Sonoma Valley, CA',
    mapUrl: 'https://maps.google.com/?q=Sonoma+Valley',
    note: 'Garden ceremony followed by dinner under the lanterns',
  },
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
