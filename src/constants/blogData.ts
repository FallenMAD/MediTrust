import blogImg1 from '../assets/blogImage1.png';
import blogImg2 from '../assets/blogImage2.png';
import blogImg3 from '../assets/blogImage3.png';
import blogImg4 from '../assets/blogImage4.png';
import blogImg5 from '../assets/blogImage5.png';
import blogImg6 from '../assets/blogImage6.png';

export type BlogData = {
  img: string;
  type: string;
  title: string;
  date: string;
};

export const blogData: BlogData[] = [
  {
    img: blogImg1,
    type: 'General health',
    title: 'Understanding depression - Everything you need to know ',
    date: '24.03.2024',
  },
  {
    img: blogImg2,
    type: 'Gastroenterology',
    title: 'Acid reflux relief - strategies for living with GERD',
    date: '15.02.2024',
  },
  {
    img: blogImg3,
    type: 'Gynecology',
    title: 'Managing polycystic ovary syndrome (PCOS)',
    date: '12.02.2024',
  },
  {
    img: blogImg4,
    type: 'General health',
    title: 'Weight loss without diet - healthy lifestyle',
    date: '12.02.2024',
  },
  {
    img: blogImg5,
    type: 'Gynecology',
    title: 'A Comprehensive Guide To Birth Control',
    date: '08.02.2024',
  },
  {
    img: blogImg6,
    type: 'Cardiology',
    title: 'How to prevent, treat & manage hypertension',
    date: '01.02.2024',
  },
];
