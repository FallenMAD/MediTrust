import heart from '../../public/heart-outline.svg';
import doctor from '../../public/main-doctor.svg';
import calendar from '../../public/minicalendar.svg';

type Advantages = {
  icon: string;
  title: string;
  description: string;
  alt: string;
};

export const advantages: Advantages[] = [
  {
    icon: doctor,
    title: 'Expert medical staff',
    alt: 'Doctor',
    description:
      'Our team of highly qualified doctors and healthcare professionals ensures you receive the best possible care.',
  },
  {
    icon: calendar,
    title: 'Online appointment booking',
    alt: 'Calendar',
    description:
      'Schedule appointments anytime, reducing wait times and streamlining your visit.',
  },
  {
    icon: heart,
    alt: 'Heart',
    title: 'Patient-centered approach',
    description:
      'We prioritize building trusting relationships and providing compassionate care in a comfortable environment.',
  },
];
