import { MinistryItem, RhemaWord, Sermon, BankAccount, LocationDetail } from '@/types';

export const SITE_INFO = {
  name: 'End Time Revival Mission',
  tagline: 'Word Changes World',
  founder: 'Bishop. Dr. J. Sam Selvaraj',
  role: 'Founder & Senior Pastor',
  scriptureVerse: '“Not by might, nor by power, but by my Spirit.” — Zechariah 4:6',
  stats: {
    experience: 'Over a Decade of Spiritual Guidance',
    soulsHarvested: '10,00,000+ Souls Harvested for Kingdom of God',
    capacity: '~2,500 people per service',
  },
  contact: {
    primaryPhone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    landline: '0461-76543210',
    email: 'prayer.etrm@gmail.com',
    address: 'No. 15,Toovipuram, 1st Street (West) Tuticorin, Tamil Nadu 628003',
    hours: '24×7 Prayer Helpline always open',
  },
  social: {
    youtube: 'https://www.youtube.com/@etrm-official9293',
    youtubeMelodies: 'https://www.youtube.com/@ETRMMELODIES',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  }
};

export const ASSOCIATE_PASTOR = {
  name: 'Pastor Jim Williams',
  formalName: 'Bro. S. Jim Williams',
  role: 'Associate Pastor & Music Director',
  tagline: 'Leading Worship, Equipping Generations for Revival',
  image: '/images/pastor-jim.jpg',
  youtubeMelodies: 'https://www.youtube.com/@ETRMMELODIES'
};

export const MINISTRIES_DATA: MinistryItem[] = [
  {
    id: '1',
    slug: 'church',
    num: '01',
    title: 'Church',
    tagline: 'Spirit-filled worship & fellowship',
    shortDescription: 'Join thousands every Sunday for anointed worship, biblical apostolic preaching, and the tangible presence of the Holy Spirit across our revival centers.',
    fullDescription: 'Ruah Church is a thriving, spirit-filled congregation dedicated to transforming believers into passionate disciples of Jesus Christ. With multiple services every Sunday across Chennai, each gathering features high-energy praise, deep prophetic worship led by anointed teams, and uncompromising biblical preaching by Bishop. Dr. J. Sam Selvaraj and pastoral staff.',
    activities: [
      'Multi-lingual Sunday Worship Services (Tamil, English, Bilingual)',
      'Children Sunday School and Ruah Kids Discipleship',
      'Youth & Young Adults Breakthrough Fellowships',
      'Individual Anointing & Breakthrough Prayer Line after every service',
      'Mid-week Fasting and Deliverance Prayers'
    ],
    schedule: 'Sundays 7:00 AM, 9:30 AM',
    iconName: 'Church'
  },
  {
    id: '2',
    slug: 'media',
    num: '02',
    title: 'Media',
    tagline: 'ETRM MELODIES',
    shortDescription: 'Sharing songs of faith, prayer, worship, and revival through original Christian music composed by Bishop. Dr. J. Sam Selvaraj and the believers of End Time Revival Mission.',
    fullDescription: 'ETRM MELODIES is the official music ministry of End Time Revival Mission, dedicated to glorifying God through songs inspired by His Word, love, faithfulness, and the hope we have in Jesus Christ. For over two decades, Bishop. Dr. J. Sam Selvaraj, Founder and Pioneer of the ministry, has written and composed songs that have enriched the spiritual journey of the Church. The platform also features original compositions by ETRM believers, expressing personal testimonies, thanksgiving, worship, and devotion to God. Through worship songs, inspirational music, and heartfelt testimonies, ETRM MELODIES seeks to strengthen faith, encourage believers, preserve the ministry’s musical legacy, and draw hearts closer to God.',
    activities: [
      'Original Christian Songs Written and Composed by Bishop. Dr. J. Sam Selvaraj',
      'Worship Songs and Music Productions by ETRM Believers',
      'Inspirational Songs Centered on Faith, Prayer, and Revival',
      'Music Videos and Gospel Song Releases',
      'Sharing Personal Testimonies and Expressions of Worship Through Music',
      'Preserving and Promoting the Musical Legacy of End Time Revival Mission'
    ],
    schedule: 'Music and worship content available online',
    iconName: 'Music'
  },
  {
    id: '3',
    slug: 'nessa',
    num: '03',
    title: 'Nessa',
    tagline: 'Outreach & compassion in action',
    shortDescription: 'The compassionate outreach arm of End Time Revival Mission bringing Christ’s love to widows, orphans, impoverished families, and disaster victims.',
    fullDescription: 'Nessa exemplifies love in action. Inspired by Christ’s call to serve the least of these, Nessa provides consistent relief supplies, free medical assistance, elderly care, widow pensions, and educational sponsorships to underprivileged communities across urban slums and remote villages.',
    activities: [
      'Free Community Ration & Nutrition Kit Distribution',
      'Medical Camps, Eye Screenings, and Free Prescription Medicines',
      'Orphan and Single-Mother Child School Support Packages',
      'Disaster Emergency Relief Operations across South India',
      'Vocational Training and Empowerment Workshops'
    ],
    schedule: 'Weekly Field Drives & Monthly Regional Outreaches',
    iconName: 'HeartHandshake'
  },
  {
    id: '4',
    slug: 'prayer-tower',
    num: '04',
    title: 'Prayer Tower',
    tagline: 'Standing in the gap together',
    shortDescription: 'A sanctuary of continuous intercession where dedicated prayer warriors bring every petition before God’s throne of grace.',
    fullDescription: 'Located prominently on 100 Feet Road in Vadapalani, the Ruah Praise Prayer Tower operates around the clock. Walk-in seekers receive personal, faith-filled prayer, counseling, and deliverance, while intercessory teams continually pray over thousands of prayer requests received from around the world.',
    activities: [
      'Walk-In Individual and Family Prayer Counseling',
      '24-Hour Intercessory Altar for Nations, Churches, and Revival',
      'Weekly Friday Midnight Breakthrough Prayer (10:00 PM – 1:00 AM)',
      'Special 6-Hour Impartation and Fasting Gatherings',
      'Chain Prayer Network for Urgent Critical Hospital and Crisis Needs'
    ],
    schedule: 'Open 24 Hours Daily for In-Person & Phone Prayers',
    iconName: 'Flame'
  },
  {
    id: '5',
    slug: 'freedom',
    num: '05',
    title: 'Freedom',
    tagline: 'Freedom events & revival',
    shortDescription: 'Mass revival crusades, deliverance conventions, and open-air gatherings releasing miraculous breakthroughs.',
    fullDescription: 'Freedom Events are catalytic encounters designed to break spiritual bondages, heal chronic sicknesses, and ignite supernatural awakening. Led by Bishop. Dr. J. Sam Selvaraj with an apostolic team, these city-wide conferences draw tens of thousands eager to witness the demonstration of God’s power.',
    activities: [
      'Annual Freedom Revival Conferences & Conventions',
      'Open-Air Miracle & Healing Crusades across Tamil Nadu and India',
      'Impartation Meetings for Church Leaders and Evangelists',
      'Youth Deliverance and Spiritual Warfare Seminars',
      'Special Anointing and Prophetic Ministry Sessions'
    ],
    schedule: 'Monthly City Rallies & Annual Major Conventions',
    iconName: 'Sparkles'
  },
  {
    id: '6',
    slug: 'bible-college',
    num: '06',
    title: 'Bible College',
    tagline: 'International Bible College',
    shortDescription: 'Equipping emerging leaders, pastors, and evangelists with sound biblical doctrine, spiritual discipline, and practical ministry training.',
    fullDescription: 'Ruah International Bible College offers rigorous biblical education combined with intensive Holy Spirit mentorship. Students from diverse cultural backgrounds receive theological grounding, homiletics training, church planting strategy, and field ministry experience.',
    activities: [
      'Diploma and Bachelor Programs in Ministry & Theology',
      'Intensive Leadership & Church Planting Practical Practicums',
      'Mentorship by Senior Pastors and International Guest Lecturers',
      'Weekend Field Evangelism and Church Planting Deployments',
      'Bilingual Curriculum (English & Tamil Tracks)'
    ],
    schedule: 'Full-time Residential & Hybrid Executive Cohorts',
    iconName: 'GraduationCap'
  },
  {
    id: '7',
    slug: 'mission',
    num: '07',
    title: 'Mission',
    tagline: 'Reaching North India with the Gospel',
    shortDescription: 'Pioneering church planting and cross-cultural evangelism in unreached northern and central states of India.',
    fullDescription: 'Our North India Mission fulfills the Great Commission in territories with little Christian witness. We train native missionaries, plant rural churches, sponsor gospel workers, and translate discipleship literature to nurture self-sustaining faith communities.',
    activities: [
      'Pioneering Indigenous Church Planting in Northern States',
      'Support & Sponsorship for Local Native Evangelists and Pastors',
      'Village Gospel Outreaches, Free Bibles, and Discipleship Booklets',
      'Community Clean Water Wells and Village Literacy Drives',
      'Protective Care and Fellowship for Persecuted Believers'
    ],
    schedule: 'Continuous Mission Base Operations & Field Campaigns',
    iconName: 'Compass'
  },
  {
    id: '8',
    slug: 'prayer-helpline',
    num: '08',
    title: '24×7 Prayer Helpline',
    tagline: 'Someone is always here to pray',
    shortDescription: 'A direct lifeline of hope available at all hours. Dial +91 98849 01777 or 044-22320122 to connect immediately with a prayer warrior.',
    fullDescription: 'No matter the hour, no one needs to fight their battles alone. The Ruah 24×7 Prayer Helpline connects callers facing grief, sickness, financial strain, marital crisis, or spiritual distress to trained intercessors who pray with biblical authority and deep empathy.',
    activities: [
      'Round-the-Clock Immediate Telephone Prayer Assistance',
      'WhatsApp Prayer Requests & Voice Note Intercession (+91 98849 01777)',
      'Immediate Emergency Hospital & Intensive Care Prayers',
      'Multi-lingual Intercessors fluent in Tamil, English, Telugu, and Hindi',
      'Confidential and Compassionate Pastoral Follow-Up'
    ],
    schedule: 'Available 24 Hours a Day, 365 Days a Year',
    iconName: 'PhoneCall'
  }
];

export const RHEMA_WORDS: RhemaWord[] = [
  {
    id: 'r1',
    title: 'Sow Goodness, You Shall Reap',
    tamilText: 'நன்மையை விதையுங்கள், அறுப்பீர்கள்!',
    englishTranslation: 'Do not grow weary in doing good, for in due season you will reap a supernatural harvest if you do not lose heart.',
    scriptureReference: 'Galatians 6:9',
    date: 'Today'
  },
  {
    id: 'r2',
    title: 'Enemies Will Testify',
    tamilText: 'இயேசு உங்களோடே கூட இருக்கிறாரென்று உங்கள் சத்துருக்கள் சாட்சி சொல்லுவார்கள்!',
    englishTranslation: 'When a man’s ways please the Lord, He makes even his enemies to be at peace with him and acknowledge God’s favor upon his life.',
    scriptureReference: 'Proverbs 16:7',
    date: 'Yesterday'
  },
  {
    id: 'r3',
    title: 'Plans Already Written',
    tamilText: 'உங்களை குறித்த திட்டங்கள் ஏற்கனவே எழுதியிருக்கிறது!!',
    englishTranslation: 'For I know the plans I have for you, declares the Lord—plans to prosper you and not to harm you, plans to give you hope and a future.',
    scriptureReference: 'Jeremiah 29:11',
    date: 'Recent'
  }
];

export const FEATURED_SONG = {
  id: 'karthar-uyarthiduvaar',
  title: 'KARTHAR UYARTHIDUVAAR!',
  tamilTitle: 'கர்த்தர் உயர்திடுவார்',
  composer: 'Bishop. Dr. J. Sam Selvaraj',
  artists: 'Jim Williams & Beryl Williams',
  channel: 'ETRM MELODIES',
  youtubeId: 'IpC81S7zAOc',
  youtubeUrl: 'https://www.youtube.com/watch?v=IpC81S7zAOc',
  thumbnail: 'https://img.youtube.com/vi/IpC81S7zAOc/maxresdefault.jpg',
  hqThumbnail: 'https://img.youtube.com/vi/IpC81S7zAOc/hqdefault.jpg',
  shortDescription: 'As we step into a New Year under open heavens, we declare with faith and authority — “KARTHAR UYARTHIDUVAAR” (The Lord Will Exalt).',
  fullDescription: 'This prophetic New Year worship song is a powerful call for the manifest presence of the Almighty, ushering in divine breakthroughs, restoration, victory, and supernatural alignment for the year ahead.'
};

export const LATEST_SERMONS: Sermon[] = [
  {
    id: 's-song',
    title: 'KARTHAR UYARTHIDUVAAR | OFFICIAL SONG | Jim Williams & Beryl Williams',
    series: 'ETRM Melodies Release',
    speaker: 'Bishop. Dr. J. Sam Selvaraj & Jim Williams',
    duration: '4:52',
    date: 'ETRM Melodies',
    youtubeId: 'IpC81S7zAOc',
    thumbnail: 'https://img.youtube.com/vi/IpC81S7zAOc/maxresdefault.jpg'
  },
  {
    id: 's1',
    title: 'August Promise Service | Bishop. Dr. J. Sam Selvaraj',
    series: 'Monthly Promise Service',
    speaker: 'Bishop. Dr. J. Sam Selvaraj',
    duration: '1:15:20',
    date: 'August 2026',
    youtubeId: 'Kr9yRBhXxJQ',
    thumbnail: 'https://img.youtube.com/vi/Kr9yRBhXxJQ/hqdefault.jpg'
  },
  {
    id: 's2',
    title: 'தேவனை மகிமைப்படுத்துங்கள் | DEVANAI MAGIMAIPADUTHUNGAL',
    series: 'ETRM Broadcast',
    speaker: 'Bishop. Dr. J. Sam Selvaraj',
    duration: '38:45',
    date: 'Recent Service',
    youtubeId: '9OMSR9fgViU',
    thumbnail: 'https://img.youtube.com/vi/9OMSR9fgViU/hqdefault.jpg'
  },
  {
    id: 's3',
    title: 'IN HIS PRESENCE - EPISODE 02 - Anointed Worship',
    series: 'Worship Encounter',
    speaker: 'Bro S. Jim Williams',
    duration: '45:10',
    date: 'Worship Series',
    youtubeId: 'HQmq-UUV4-s',
    thumbnail: 'https://img.youtube.com/vi/HQmq-UUV4-s/hqdefault.jpg'
  },
  {
    id: 's4',
    title: 'Christmas Special Sermon & Impartation',
    series: 'Special Convention',
    speaker: 'Bishop. Dr. J. Sam Selvaraj',
    duration: '58:30',
    date: 'Festival Service',
    youtubeId: 'jMGY7HhSteA',
    thumbnail: 'https://img.youtube.com/vi/jMGY7HhSteA/hqdefault.jpg'
  },
  {
    id: 's5',
    title: 'ARISE & SHINE - நீங்கள் செய்வீர்களானால், என் சிநேகிதராயிருப்பீர்கள்',
    series: 'Daily Arise & Shine',
    speaker: 'Bishop. Dr. J. Sam Selvaraj',
    duration: '18:40',
    date: 'Daily Message',
    youtubeId: '9Kc0uK6SjBc',
    thumbnail: 'https://img.youtube.com/vi/9Kc0uK6SjBc/hqdefault.jpg'
  },
  {
    id: 's6',
    title: 'ETRM VBS - Vaalkka Maaruchea | Youth Worship Song',
    series: 'ETRM Melodies',
    speaker: 'ETRM Music & Youth',
    duration: '2:34',
    date: 'ETRM Melodies',
    youtubeId: 'youdG87Ov_M',
    thumbnail: 'https://img.youtube.com/vi/youdG87Ov_M/hqdefault.jpg'
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: 'Bank Test',
    branch: 'Test branch',
    category: 'India',
    accountNumber: '0000 1111 2222 33',
    accountName: 'End Time Revival Mission',
    ifscCode: 'TEST0000123',
  }
];

export const SERVICE_LOCATIONS: LocationDetail[] = [
  {
    name: 'End Time Revival Mission',
    address: 'No. 15,Toovipuram, 1st Street (West) Tuticorin, Tamil Nadu 628003',
    timing: [
      '1st Sunday Service: 7:00 AM (Tamil)'
    ],
    googleMapsUrl: 'https://www.google.com/maps/place//@8.8021519,78.1337355,70m'
  },
  {
    name: 'End Time Revival Mission',
    address: 'No. 15,Toovipuram, 1st Street (West) Tuticorin, Tamil Nadu 628003',
    timing: [
      '1st Sunday Service: 7:00 AM (Tamil)'
    ],
    googleMapsUrl: 'https://www.google.com/maps/place//@8.8021519,78.1337355,70m'
  }
];
