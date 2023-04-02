import { FC, useEffect, useState } from 'react';
import { Card } from './Card';
import { useFilterContext } from './FilterContext';
import { applySort, fetchMany, Good, Sort } from '../../lib';

const CARDS_PER_PAGE = 15;

type CardsProps = {
  cards: Good[];
};

export const Cards: FC<CardsProps> = ({ cards }) => {
  const { applyFilters } = useFilterContext();
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <>
      <div className="catalogue-cards">
        {applyFilters(cards)
          .slice(
            CARDS_PER_PAGE * (currentPage - 1),
            CARDS_PER_PAGE * currentPage
          )
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
        <div className="pagination">
          <ul className="pagination-list">
            <li className="pagination-list__item pagination-arrow">
              <button className="arrow-left">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z"
                    fill="#FFC85E"
                  />
                </svg>
              </button>
            </li>
            {Array(
              Math.ceil((cards?.length || CARDS_PER_PAGE) / CARDS_PER_PAGE)
            )
              .fill(0)
              .map((_, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1);
                    }}
                    className="pagination-list__item"
                  >
                    <a href="#!" className="pagintaion-list__link ">
                      {idx + 1}
                    </a>
                  </li>
                );
              })}
            <li className="pagination-list__item pagination-arrow">
              <button className="arrow-left">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z"
                    fill="#FFC85E"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div className="catalogue-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis. Faucibus consectetur
            aliquet sed pellentesque consequat consectetur congue mauris
            venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.
          </p>
        </div>
      </div>
    </>
  );
};
