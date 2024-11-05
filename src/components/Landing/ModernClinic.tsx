import style from './ModernClinic.module.scss';

import { Container } from '../../UI';
import homeImage from '../../assets/homeImageSVG1.svg';
import { clinicAdvantages } from '../../constants/clinicAdvantages';

export const ModernClinic = () => {
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
            {clinicAdvantages.map(({ title, description }) => (
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
