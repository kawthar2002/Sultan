import { useNavigate } from 'react-router-dom';
import { useGood } from '../../features/item/useFetchOne';

export const Item = () => {
  const navigate = useNavigate();
  const good = useGood();

  if (!good) {
    return null;
  }

  return (
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
          <a href="#!" className="breadcrumbs__link">
            Косметика и гигиена
          </a>
        </li>
        <li className="breadcrumbs__item">
          <div className="breadcrumbs__border"></div>
        </li>
        <li className="breadcrumbs__item">
          <p className="breadcrumbs__page">
            {good.description}
          </p>
        </li>
      </ul>

      <div className="item">
        <div className="item-inner">
          <div className="item-image">
            <img src={good.img_url} alt="soap" />
          </div>
          <div className="item-info">
            <div className="item-title">
              <div className="item-status">В наличии</div>
              <h3 className="item-title__title">{good.name}</h3>
              <div className="item-size">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.23" clip-path="url(#clip0_56_930)">
                    <path
                      d="M13.303 7.99994C12.7749 7.99994 12.278 7.71869 12.0092 7.26869L9.99986 3.93743L7.99361 7.26869C7.72173 7.72181 7.22486 8.00306 6.69673 8.00306C6.55611 8.00306 6.41548 7.98431 6.28111 7.94369L1.99986 6.71868V12.2812C1.99986 12.7406 2.31236 13.1406 2.75611 13.2499L9.51236 14.9406C9.83111 15.0187 10.1655 15.0187 10.4811 14.9406L17.2436 13.2499C17.6874 13.1374 17.9999 12.7374 17.9999 12.2812V6.71868L13.7186 7.94056C13.5842 7.98119 13.4436 7.99994 13.303 7.99994ZM19.9467 4.49369L18.3374 1.28118C18.2405 1.08743 18.0311 0.974934 17.8155 1.00306L9.99986 1.99993L12.8655 6.75306C12.9842 6.94993 13.2217 7.04368 13.4436 6.98118L19.628 5.21556C19.9374 5.12493 20.0874 4.78118 19.9467 4.49369ZM1.66236 1.28118L0.0529828 4.49369C-0.0907672 4.78118 0.0623578 5.12493 0.368608 5.21243L6.55298 6.97806C6.77486 7.04056 7.01236 6.94681 7.13111 6.74993L9.99986 1.99993L2.18111 1.00306C1.96548 0.978059 1.75923 1.08743 1.66236 1.28118Z"
                      fill="#3F4E65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_930">
                      <rect width="20" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{`${good.size.amount} ${good.size.unit}`}</span>
              </div>
            </div>
            <div className="item-controls">
              <span className="item-controls__price">
                {`${good.price.amount} ${good.price.currency}`}
              </span>
              <div className="cart-card__counter card-counter">
                <button className="cart-card__button" id="minus">
                  -
                </button>
                <span className="num" id="num">
                  1
                </span>
                <button className="cart-card__button" id="plus">
                  +
                </button>
              </div>
              <button className="button card-button">
                <span>В корзину</span>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3257 6.89296C21.1958 6.71151 21.0215 6.62079 20.8027 6.62079H6.87793L6.5 5.63689C6.4043 5.31431 6.27441 5.03877 6.11035 4.81028C5.94629 4.58178 5.77197 4.42049 5.5874 4.32641C5.40283 4.23232 5.24219 4.16848 5.10547 4.13488C4.96875 4.10127 4.83203 4.08447 4.69531 4.08447H1.88574C1.70801 4.08447 1.55762 4.14496 1.43457 4.26592C1.31152 4.38689 1.25 4.54146 1.25 4.72963C1.25 4.83716 1.27734 4.94133 1.33203 5.04213C1.38672 5.14294 1.46533 5.22023 1.56787 5.27399C1.67041 5.32775 1.77637 5.35463 1.88574 5.35463H4.69531C4.75 5.35463 4.80127 5.36135 4.84912 5.3748C4.89697 5.38824 4.96191 5.44536 5.04395 5.54617C5.12598 5.64697 5.19434 5.79818 5.24902 5.9998L8.19043 14.0764C8.21777 14.1571 8.26221 14.2343 8.32373 14.3083C8.38525 14.3822 8.45703 14.4393 8.53906 14.4796C8.62109 14.52 8.70996 14.5401 8.80566 14.5401H17.665C17.8018 14.5401 17.9282 14.4998 18.0444 14.4191C18.1606 14.3385 18.2393 14.2377 18.2803 14.1167L21.418 7.48772C21.4863 7.27267 21.4556 7.07442 21.3257 6.89296ZM17.2139 13.2498H9.31836L7.22656 7.91111H19.8594L17.2139 13.2498ZM16.0312 15.2398C15.5801 15.2398 15.1938 15.3977 14.8726 15.7136C14.5513 16.0294 14.3906 16.4092 14.3906 16.8527C14.3906 17.2963 14.5513 17.676 14.8726 17.9918C15.1938 18.3077 15.5801 18.4656 16.0312 18.4656C16.4824 18.4656 16.8687 18.3077 17.1899 17.9918C17.5112 17.676 17.6719 17.2963 17.6719 16.8527C17.6719 16.4092 17.5112 16.0294 17.1899 15.7136C16.8687 15.3977 16.4824 15.2398 16.0312 15.2398ZM10.125 15.2398C9.82422 15.2398 9.54736 15.3137 9.29443 15.4616C9.0415 15.6094 8.84326 15.8043 8.69971 16.0463C8.55615 16.2882 8.48438 16.557 8.48438 16.8527C8.48438 17.2963 8.64502 17.676 8.96631 17.9918C9.2876 18.3077 9.67383 18.4656 10.125 18.4656C10.5762 18.4656 10.9624 18.3077 11.2837 17.9918C11.605 17.676 11.7656 17.2963 11.7656 16.8527C11.7656 16.7452 11.7554 16.6377 11.7349 16.5301C11.7144 16.4226 11.6836 16.3218 11.6426 16.2277C11.6016 16.1336 11.5503 16.0429 11.4888 15.9555C11.4272 15.8682 11.3589 15.7875 11.2837 15.7136C11.2085 15.6397 11.1265 15.5725 11.0376 15.512C10.9487 15.4515 10.8564 15.4011 10.7607 15.3608C10.665 15.3204 10.5625 15.2902 10.4531 15.27C10.3438 15.2499 10.2344 15.2398 10.125 15.2398Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="item-controls">
              <div className="item-controls__item card-share">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z"
                    fill="#FFC85E"
                  />
                </svg>
              </div>
              <div className="item-controls__item card-discount">
                <p>
                  При покупке от <span> 10 000 {good.size.unit}</span> бесплатная доставка по
                  Кокчетаву и области
                </p>
              </div>
              <div className="item-controls__item card-download">
                <span>Прайс-лист</span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.958 4.375H8.12467V0.125H3.87467V4.375H1.04134L5.99967 10.0417L10.958 4.375ZM0.333008 11.4583H11.6663V12.875H0.333008V11.4583Z"
                    fill="#3F4E65"
                  />
                </svg>
              </div>
            </div>

            <div className="item-text">
              <ul className="item-text__list">
                <li className="item-text__item">
                  Производитель:<span> {good.manufacturer}</span>
                </li>
                <li className="item-text__item">
                  Бренд: <span>{good.brand}</span>
                </li>
                <li className="item-text__item">
                  Артикул: <span>460404</span>
                </li>
                <li className="item-text__item">
                  Штрихкод:
                  <span>{good.barcode}</span>
                </li>
              </ul>

              <div className="item-descr">
                <h4 className="item-descr-title">
                  <span>Описание</span>
                  <svg
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z"
                      fill="#3F4E65"
                    />
                  </svg>
                </h4>
                <div className="item-descr__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam interdum ut justo, vestibulum sagittis iaculis
                    iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis. Faucibus consectetur aliquet sed pellentesque
                    consequat consectetur congue mauris venenatis. Nunc elit,
                    dignissim sed nulla ullamcorper enim, malesuada.
                  </p>
                </div>
              </div>

              <div className="border descr-border"></div>

              <div className="item-chatacters">
                <h4 className="item-characters__title">
                  <span>Характеристики</span>
                  <svg
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z"
                      fill="#3F4E65"
                    />
                  </svg>
                </h4>

                <div className="item-characters__content">
                  <ul className="item-characters__list">
                    <li className="item-characters__item">
                      Назначение: <span>{good.brand}</span>
                    </li>
                    <li className="item-characters__item">
                      Тип: <span>{good.brand}</span>
                    </li>
                    <li className="item-characters__item">
                      Производитель: <span>460404</span>
                    </li>
                    <li className="item-characters__item">
                      Бренд: <span>4604049097548</span>
                    </li>
                    <li className="item-characters__item">
                      Артикул: <span>4604049097548</span>
                    </li>
                    <li className="item-characters__item">
                      Штрихкод: <span>4604049097548</span>
                    </li>
                    <li className="item-characters__item">
                      Вес: <span>{`${good.size.amount} ${good.size.unit}`}</span>
                    </li>
                    <li className="item-characters__item">
                      Объем: <span>{`${good.size.amount} ${good.size.unit}`}</span>
                    </li>
                    <li className="item-characters__item">
                      Кол-во в коробке: <span>{`${good.size.amount} ${good.size.unit}`}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
