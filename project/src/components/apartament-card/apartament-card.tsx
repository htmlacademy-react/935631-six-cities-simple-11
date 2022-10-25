import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/AppRoute';
import { ApartamentCardType } from '../../types/CardTypes';

export type ApartamentCardProps = ApartamentCardType;

export const ApartamentCard: React.FC<ApartamentCardProps> = ({
  mark,
  id,
  imgUrl,
  price,
  ratingPercent,
  description,
  type,
}) => (
  <article className="cities__card place-card">
    { mark && <div className="place-card__mark"><span>{ mark }</span></div> }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoute.Offer}/${id}`}>
        <img className="place-card__image" src={imgUrl} width="260" height="200" alt="Place" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{ price }</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${ratingPercent}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${id}`}>{ description }</Link>
      </h2>
      <p className="place-card__type">{ type }</p>
    </div>
  </article>
);
