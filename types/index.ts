export interface MinistryItem {
  id: string;
  slug: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  activities: string[];
  schedule?: string;
  iconName: string;
}

export interface RhemaWord {
  id: string;
  title: string;
  tamilText: string;
  englishTranslation: string;
  scriptureReference: string;
  date: string;
}

export interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  duration: string;
  date: string;
  youtubeId: string;
  thumbnail: string;
  description?: string;
  channelTitle?: string;
}


export interface BankAccount {
  bankName: string;
  branch: string;
  category: 'India' | 'International';
  accountNumber: string;
  accountName: string;
  ifscCode: string;
  swiftCode?: string;
}

export interface LocationDetail {
  name: string;
  address: string;
  timing: string[];
  googleMapsUrl: string;
}
