import { useEffect, useState } from 'react';
import { Cards } from './Cards';
import { FilterContext, useFilterContext } from './FilterContext';
import { Filters } from './Filter';
import { applySort, fetchMany, Good, Sort, sortTypes } from '../../lib';

export const Body = () => {
  const [sortType, setSortType] = useState<Sort>('name_asc');
  const { updateFilters } = useFilterContext();
  const [cards, setCards] = useState<Good[]>([]);

  useEffect(() => {
    fetchMany(setCards);
  }, []);

  const setCareType = (type: string) => () => {
    updateFilters('careTypes', type);
  };

  return (
    <main>
      <div className="main">
        <div className="container">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a href="#!" className="breadcrumbs__link">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <div className="breadcrumbs__border"></div>
            </li>
            <li className="breadcrumbs__item">
              <p className="breadcrumbs__page">Косметика и гигиена</p>
            </li>
          </ul>

          <div className="catalogue">
            <div className="catalogue-top">
              <h1 className="catalogue-top__title title">
                Косметика и гигиена
              </h1>
              <div className="catalogue-top__buttons">
                <label htmlFor="select" className="select-label">
                  <span>Сортировка:</span>
                  <div className="select">
                    <select
                      name="select"
                      id="cataloque-select"
                      className="catalogue-select"
                      onChange={(event) => {
                        setSortType(event.target.value as any);
                      }}
                    >
                      {sortTypes.map((sortType) => {
                        return (
                          <option key={sortType.value} value={sortType.value}>
                            {sortType.label}
                          </option>
                        );
                      })}
                    </select>
                    <svg
                      width="7"
                      height="6"
                      viewBox="0 0 7 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z"
                        fill="#3F4E65"
                      />
                    </svg>
                  </div>
                </label>

                <div className="catalogue-toggle">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.3">
                      <path
                        d="M3 11.5H17V9.5H3V11.5ZM3 16.5H17V14.5H3V16.5ZM3 4.5V6.5H17V4.5H3Z"
                        fill="#3F4E65"
                      />
                    </g>
                  </svg>

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="6"
                      height="6"
                      rx="0.5"
                      stroke="#3F4E65"
                    />
                    <rect
                      x="10"
                      y="1"
                      width="6"
                      height="6"
                      rx="0.5"
                      stroke="#3F4E65"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="6"
                      height="6"
                      rx="0.5"
                      stroke="#3F4E65"
                    />
                    <rect
                      x="1"
                      y="10"
                      width="6"
                      height="6"
                      rx="0.5"
                      stroke="#3F4E65"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <nav className="catalogue-sort">
              <ul className="catalogue-sort__list">
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('body')}
                  >
                    Уход за телом
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('hands')}
                  >
                    Уход за руками
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('feet')}
                  >
                    Уход за ногами
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a href="#!" className="catalogue-sort__link">
                    Уход за лицом
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('hair')}
                  >
                    Уход за волосами
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a href="#!" className="catalogue-sort__link">
                    Средства для загара
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('face')}
                  >
                    Средства для бритья
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('body')}
                  >
                    Подарочные наборы
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('body')}
                  >
                    Гигиеническая продукция
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('mouth')}
                  >
                    Гигиена полости рта
                  </a>
                </li>
                <li className="catalogue-sort__item">
                  <a
                    href="#!"
                    className="catalogue-sort__link"
                    onClick={setCareType('body')}
                  >
                    Бумажная продукция
                  </a>
                </li>
              </ul>
            </nav>

            <div className="catalogue-inner">
              <Filters
                brands={cards
                  .map((item) => item.brand)
                  .reduce(
                    (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
                    {} as { [key: string]: number }
                  )}
                manufacturers={cards
                  .map((item) => item.manufacturer)
                  .reduce(
                    (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
                    {} as { [key: string]: number }
                  )}
              />
              <Cards cards={applySort(cards, sortType)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
