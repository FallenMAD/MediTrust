import { useState } from 'react';

import cn from 'classnames';

import style from './FrequentlyAskedQuestion.module.scss';

import arrow from '../../../public/arrow.svg';
import { Icon } from '../../UI';
import { quetions } from '../../constants/questions';

export const FrequentlyAskedQuestions = () => {
  const [isHidden, setIsHidden] = useState<null | number>(null);

  const handleToggle = (i: number) => {
    console.log(i);
    if (isHidden === i) {
      return setIsHidden(null);
    }
    setIsHidden(i);
  };

  return (
    <section className={style.faq}>
      <h2 className={style.faq__title}>Frequently asked questions</h2>
      {quetions.map(({ question, answer }, i) => (
        <div
          className={cn(style.faq__wrapper, {
            [style.faq__active]: isHidden === i,
          })}
        >
          <div
            className={cn(style.faq__question, {
              [style.faq__active]: isHidden === i,
            })}
          >
            <p className={style.faq__generalTitle}>{question}</p>
            <button type="button" onClick={() => handleToggle(i)}>
              <Icon
                svg={arrow}
                id="arrow"
                cl={cn(style.faq__arrow, {
                  [style.faq__arrowUp]: isHidden === i,
                  [style.faq__arrowDown]: isHidden !== i,
                })}
              />
            </button>
          </div>

          <div
            className={cn(style.faq__answer, {
              [style.faq__active]: isHidden === i,
            })}
          >
            <p className={style.faq__generalTitle}>{answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
