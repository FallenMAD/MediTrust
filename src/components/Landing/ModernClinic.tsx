import style from './ModernClinic.module.scss';

import { Container } from '../../UI';
import homeImage from '../../assets/homeImageSVG1.svg';

type Advantages = {
  title: string;
  description: string;
};

export const ModernClinic = () => {
  const advantages: Advantages[] = [
    { title: '300K', description: 'Happy patients' },
    { title: '10K', description: 'Monthly visits' },
    { title: '100', description: 'Qualified doctors' },
  ];

  return (
    <Container>
      <section className={style.section}>
        <div className={style.section__pinkLayer}>
          <img src={homeImage} alt="Our benefits" />
        </div>
        <div className={style.section__description}>
          <h1 className={style.section__title}>
            Modern clinic for all family members
          </h1>
          <p className={style.section__paragraph}>
            WeCare Medical Centre is a newly built, modern, and stylish
            outpatient clinic with time-sensitive services, careful medical
            treatment, up-to-date attitude towards patients, and advanced
            approach to healthcare. We are Professional, Friendly, Modern, and
            Efficient.
          </p>

          <ul className={style.section__list}>
            {advantages.map(({ title, description }) => (
              <li className={style.section__item}>
                <span className={style.section__itemTitle}>{title}</span>
                <p className={style.section__itemDes}>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};
