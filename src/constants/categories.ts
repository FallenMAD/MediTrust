import cardiology from '/public/cardiology.svg';
import dermatology from '/public/dermatology.svg';
import gastroenterology from '/public/gastroenterology.svg';
import gynecology from '/public/gynecology.svg';
import neurology from '/public/neurology.svg';
import surgery from '/public/surgery.svg';
import therapy from '/public/therapy.svg';
import urology from '/public/urology.svg';

export interface Categories {
  id: string;
  title: string;
  svg: string;
}

export const categories: Categories[] = [
  { id: 'gastroenterology', title: 'Gastroenterology', svg: gastroenterology },
  { id: 'cardiology', title: 'Cardiology', svg: cardiology },
  { id: 'neurology', title: 'Neurology', svg: neurology },
  { id: 'urology', title: 'Urology', svg: urology },
  { id: 'gynecology', title: 'Gynecology', svg: gynecology },
  { id: 'dermatology', title: 'Dermatology', svg: dermatology },
  { id: 'therapy', title: 'Therapy', svg: therapy },
  { id: 'surgery', title: 'Surgery', svg: surgery },
];
