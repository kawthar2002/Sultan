import footerLogo from '../../assets/svg/footer-logo.png';

import visaCard from '../../assets/svg/visa-card.svg';
import masterCard from '../../assets/svg/master-card.svg';


export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner container">
        <div className="footer-info">
          <div className="footer-logo">
            <img src={footerLogo} alt="Sulatan" />
          </div>
          <p>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <form className="footer-subscribe" action="submit">
            <span>Подпишись на скидки и акции</span>
            <label className="input footer-input">
              <input type="email" placeholder="Введите ваш E-mail" />
              <button className="input-btn" type="button">
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
                    fill="white"
                  />
                </svg>
              </button>
            </label>
          </form>
        </div>
        <ul className="footer-list">
          <li className="footer-list__item">
            <h4 className="list-title">Меню сайта:</h4>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              О компании
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Доставка и оплата
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Возврат
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Контакты
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list__item">
            <h4 className="list-title">Категории:</h4>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Бытовая химия
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Косметика и гигиена
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Товары для дома
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Товары для детей и мам
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#!" className="footer-list__link">
              Посуда
            </a>
          </li>
        </ul>
        <div className="footer-price">
          <h4 className="list-title">Скачать прайс-лист:</h4>
          <button className="button price-btn">
            Прайс-лист
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.958 4.375H8.12467V0.125H3.87467V4.375H1.04134L5.99967 10.0417L10.958 4.375ZM0.333008 11.4583H11.6663V12.875H0.333008V11.4583Z"
                fill="white"
              />
            </svg>
          </button>
          <span>Связь в мессенджерах:</span>
          <div className="socials">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="39" height="39" rx="19.5" fill="#00E676" />
              <path
                d="M27.6784 11.3568C25.5476 9.18112 22.6022 8 19.594 8C13.2017 8 8.06271 13.1594 8.12533 19.4378C8.12533 21.427 8.68936 23.3541 9.62947 25.0946L8 31L14.079 29.4459C15.7711 30.3784 17.6511 30.8136 19.5314 30.8136C25.861 30.8136 31 25.654 31 19.3758C31 16.3298 29.8092 13.4703 27.6785 11.3568H27.6784ZM19.594 28.8866C17.9019 28.8866 16.2098 28.4515 14.7684 27.5812L14.3924 27.3947L10.7575 28.3271L11.6976 24.7839L11.4469 24.4109C8.68936 19.9974 10.0055 14.154 14.5177 11.4189C19.0299 8.68377 24.8583 9.98921 27.6158 14.4649C30.3733 18.9405 29.0572 24.7216 24.545 27.4568C23.1035 28.3892 21.3488 28.8865 19.594 28.8865V28.8866ZM25.1089 21.9866L24.4196 21.6758C24.4196 21.6758 23.4169 21.2407 22.7902 20.9298C22.7275 20.9298 22.6649 20.8676 22.6022 20.8676C22.4141 20.8676 22.2888 20.9298 22.1635 20.992C22.1635 20.992 22.1008 21.0541 21.2234 22.0488C21.1607 22.1731 21.0354 22.2353 20.9101 22.2353H20.8474C20.7847 22.2353 20.6594 22.1731 20.5967 22.111L20.2833 21.9866C19.594 21.6758 18.9673 21.3028 18.4659 20.8055C18.3406 20.6812 18.1525 20.5569 18.0272 20.4326C17.5885 19.9974 17.1498 19.5001 16.8365 18.9406L16.7738 18.8163C16.7112 18.7541 16.7112 18.692 16.6485 18.5677C16.6485 18.4434 16.6485 18.3191 16.7112 18.2569C16.7112 18.2569 16.9619 17.946 17.1498 17.7596C17.2752 17.6352 17.3379 17.4488 17.4632 17.3245C17.5885 17.1379 17.6512 16.8893 17.5885 16.7028C17.5259 16.392 16.7738 14.7136 16.5859 14.3406C16.4605 14.1541 16.3352 14.092 16.1472 14.0298H15.4578C15.3324 14.0298 15.2072 14.092 15.0817 14.092L15.019 14.1541C14.8937 14.2163 14.7684 14.3406 14.643 14.4028C14.5177 14.5272 14.455 14.6514 14.3297 14.7758C13.891 15.3353 13.6403 16.019 13.6403 16.7028C13.6403 17.2001 13.7656 17.6974 13.9537 18.1325L14.0164 18.3191C14.5804 19.5001 15.3324 20.5569 16.3352 21.4893L16.5859 21.7379C16.7738 21.9244 16.9619 22.0488 17.0872 22.2352C18.4033 23.3542 19.9073 24.1623 21.5994 24.5974C21.7875 24.6595 22.0381 24.6595 22.2262 24.7217H22.8528C23.1662 24.7217 23.5422 24.5974 23.7929 24.4731C23.9809 24.3488 24.1062 24.3488 24.2315 24.2245L24.357 24.1001C24.4823 23.9758 24.6076 23.9136 24.733 23.7893C24.8583 23.665 24.9836 23.5407 25.0463 23.4163C25.1717 23.1677 25.2343 22.8568 25.297 22.5461V22.111C25.297 22.111 25.2343 22.0488 25.1089 21.9866Z"
                fill="white"
              />
            </svg>
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3359_387)">
                <path
                  d="M19.5 0C8.73036 0 0 8.73036 0 19.5C0 30.2696 8.73036 39 19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73036 30.2696 0 19.5 0Z"
                  fill="#40B3E0"
                />
                <path
                  d="M28.9884 11.2169L25.5054 28.7774C25.5054 28.7774 25.0183 29.9953 23.6788 29.4107L15.6414 23.2487L12.7188 21.8362L7.79905 20.1799C7.79905 20.1799 7.04404 19.9121 6.97091 19.3275C6.89779 18.743 7.82343 18.4264 7.82343 18.4264L27.3807 10.7544C27.3807 10.7544 28.9882 10.0481 28.9882 11.2172"
                  fill="white"
                />
                <path
                  d="M15.0237 28.5799C15.0237 28.5799 14.7891 28.558 14.4966 27.6324C14.2046 26.7069 12.7188 21.8358 12.7188 21.8358L24.5312 14.3344C24.5312 14.3344 25.2132 13.9204 25.1888 14.3344C25.1888 14.3344 25.3106 14.4075 24.9451 14.7485C24.5799 15.0896 15.6658 23.1024 15.6658 23.1024"
                  fill="#D2E5F1"
                />
                <path
                  d="M18.7228 25.6112L15.5438 28.5097C15.5438 28.5097 15.2952 28.6983 15.0234 28.5801L15.6322 23.1963"
                  fill="#B5CFE4"
                />
              </g>
              <defs>
                <clipPath id="clip0_3359_387">
                  <rect width="39" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="footer-contacts">
          <h4 className="list-title">Контакты:</h4>
          <div className="info-content">
            <a
              href="tel:+77774900091"
              className="info-content__phone footer-phone"
            >
              +7 (777) 490-00-91
            </a>
            <p>время работы: 9:00-20:00</p>
            <a href="#!" className="info-content__link">
              Заказать звонок
            </a>
          </div>
          <a href="mailto:" className="footer-link">
            <p>
              opt.sultan@mail.ru <span>На связи в любое время</span>
            </p>
          </a>
          <div className="footer-cards">
            <img src={visaCard} alt="visa" />
            <img src={masterCard} alt="master" />
          </div>
        </div>
      </div>
    </footer>
  );
};
