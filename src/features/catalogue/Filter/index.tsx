import brands5 from '../../../assets/png/brands/brand-5.png';
import brands4 from '../../../assets/png/brands/brand-4.png';
import brands3 from '../../../assets/png/brands/brand-3.png';
import brands2 from '../../../assets/png/brands/brand-2.png';
import brands1 from '../../../assets/png/brands/brand-1.png';
import { ChangeEvent, FC } from 'react';
import { useFilterContext } from '../FilterContext';

type FilterField = keyof Pick<
  ReturnType<typeof useFilterContext>,
  'brands' | 'manufacturers'
>;

export const Filters: FC<{
  brands: { [key: string]: number };
  manufacturers: { [key: string]: number };
}> = ({ brands, manufacturers }) => {
  const { updateFilters, setPriceRange } = useFilterContext();

  const onCheckboxChange =
    (field: FilterField) => (event: ChangeEvent<HTMLInputElement>) => {
      updateFilters(field, event.target.value);
    };

  return (
    <div className="sidebar">
      <div className="sidebar-filters">
        <h2 className="sidebar-title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
        <div className="sidebar-filters__item">
          <div className="filters-price">
            <div className="filters-price__title">
              <span>Цена</span>₸
            </div>
            <div className="filters-price__inputs">
              <input
                type="text"
                placeholder="0"
                onChange={(event) => {
                  setPriceRange({ from: parseInt(event.target.value) });
                }}
                className="filters-price__input"
              />
              <span>-</span>
              <input
                type="text"
                placeholder="10 000"
                onChange={(event) => {
                  setPriceRange({ to: parseInt(event.target.value) });
                }}
                className="filters-price__input"
              />
            </div>
          </div>
        </div>
        <div className="sidebar-filters__item">
          <h3 className="sidebar-filter__title">Производитель</h3>
          <label className="search input sidebar-filters__button">
            <input type="text" placeholder="Поиск..." />
            <button className="input-btn">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </label>
          <div className="sidebar-filter__list">
            <ul className="filter-checkboxes">
              {Object.entries(manufacturers).map(([manufacturer, count]) => {
                return (
                  <li className="filter-checkboxes__item">
                    <input
                      id={manufacturer}
                      type="checkbox"
                      value={manufacturer}
                      onChange={onCheckboxChange('manufacturers')}
                    />
                    <span className="checkmark"></span>
                    <label
                      className="filter-checkboxes__label"
                      htmlFor={manufacturer}
                    >
                      {manufacturer}<span>({count})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className="border"></div>
          </div>
        </div>
        <div className="sidebar-filters__item">
          <h3 className="sidebar-filter__title">Бренд</h3>
          <label className="search input sidebar-filters__button">
            <input type="text" placeholder="Поиск..." />
            <button className="input-btn">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </label>
          <div className="sidebar-filter__list">
          <ul className="filter-checkboxes">
              {Object.entries(brands).map(([brand, count]) => {
                return (
                  <li className="filter-checkboxes__item">
                    <input
                      id={brand}
                      type="checkbox"
                      value={brand}
                      onChange={onCheckboxChange('brands')}
                    />
                    <span className="checkmark"></span>
                    <label
                      className="filter-checkboxes__label"
                      htmlFor={brand}
                    >
                      {brand}<span>({count})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="filter-buttons">
          <button className="button">Показать</button>
          <button className="button filter-clear">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Уход за телом</h2>
          <ul className="filter-list">
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Эпиляция и депиляция
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Средства для ванны и душа
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Скрабы, пилинги и пр.
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Мочалки и губки для тела
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Кремы, лосьоны, масла
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Интимный уход
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Дезодоранты, антиперспиранты
              </a>
            </li>
            <li
              className="filter-list__item"
              onClick={() => updateFilters('careTypes', 'body')}
            >
              <a href="#!" className="filter-list__link">
                Гели для душа
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Уход за руками</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Увлажнение и питание
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства для ногтей
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Мыло твердое
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Мыло жидкое
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Крем для рук
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Защита рук
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Жидкость для снятия лака
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Уход за ногами</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Скрабы, пилинги
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Пилки, ролики
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Крем для ног
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Дезодоранты для ног
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Уход за лицом</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Тональные средства
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства для снятия макияжа
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства для очищения
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Маски, скрабы, сыворотки
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Крем для лица
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Крем для век
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Жидкость для снятия макияжа
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Гигиеническая помада
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Уход за волосами</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Шампуни
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства для укладки
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства для окрашивания волос
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Маски, сыворотки, масла
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Кондиционеры, бальзамы
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Средства для загара</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Средства после загара
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Средства для бритья</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Станки и кассеты
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                После бритья
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Для бритья
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Подарочные наборы</h2>
          <ul className="filter-list">
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Для мужчин
              </a>
            </li>
            <li className="filter-list__item">
              <a href="#!" className="filter-list__link">
                Для женщин
              </a>
            </li>
          </ul>
        </div>

        <div className="border"></div>

        <div className="sidebar-filters__item">
          <h2 className="sidebar-title">Бренды</h2>
          <ul className="brand-list">
            <li className="brand-list__item">
              <a href="#!" className="brand-list__link">
                <img src={brands1} alt="air wick" />
              </a>
            </li>
            <li className="brand-list__item">
              <a href="#!" className="brand-list__link">
                <img src={brands2} alt="master fresh" />
              </a>
            </li>
            <li className="brand-list__item">
              <a href="#!" className="brand-list__link">
                <img src={brands3} alt="Сибиар" />
              </a>
            </li>
            <li className="brand-list__item">
              <a href="#!" className="brand-list__link">
                <img src={brands4} alt="cotton club" />
              </a>
            </li>
            <li className="brand-list__item">
              <a href="#!" className="brand-list__link">
                <img src={brands5} alt="camay" />
              </a>
            </li>
          </ul>
        </div>

        <div className="more">
          <span>Показать все</span>
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
      </div>
    </div>
  );
};
