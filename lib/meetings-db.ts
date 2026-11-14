
import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: 'Musical Number', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Adams',
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Sister Green',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { name: 'Ward Members', topic: 'Personal Testimonies', type: 'speaker' }
    ],
    closingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    closingPrayer: 'Brother White'
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Brown',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Wilson',
    wardBusiness: [{ description: 'Ward missionary update' }],
    stakeBusiness: true,
    sacramentHymn: { number: 194, title: 'There Is a Green Hill Far Away' },
    speakers: [
      { name: 'Sister Adams', topic: 'Service and Charity', type: 'speaker' },
      { name: 'Brother Clark', topic: 'Following the Savior', type: 'speaker' }
    ],
    closingHymn: { number: 29, title: 'A Poor Wayfaring Man of Grief' },
    closingPrayer: 'Sister Taylor'
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Johnson',
    conducting: 'Brother Miller',
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Sister Davis',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 185, title: 'Reverently and Meekly Now' },
    speakers: [
      { name: 'President Johnson', topic: 'Strengthening Families', type: 'speaker' }
    ],
    closingHymn: { number: 27, title: 'Praise to the Man' },
    closingPrayer: 'Brother Lewis'
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Sister Moore',
    openingHymn: { number: 15, title: 'I Saw a Mighty Angel Fly' },
    openingPrayer: 'Brother Thomas',
    wardBusiness: [{ description: 'Youth conference announcement' }],
    stakeBusiness: false,
    sacramentHymn: { number: 188, title: 'Thy Will, O Lord, Be Done' },
    speakers: [
      { name: 'Sister Wilson', topic: 'The Gift of the Holy Ghost', type: 'speaker' },
      { name: 'Brother Adams', topic: 'Building Faith', type: 'speaker' }
    ],
    closingHymn: { number: 25, title: 'Now Let Us Rejoice' },
    closingPrayer: 'Sister Brown',
    announcements: ['Youth conference registration is open']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
