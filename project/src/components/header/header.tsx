import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-slice/selectors';
import { AuthStatus, AppRoute } from '../../const';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authStatus === AuthStatus.Auth
                  ?
                  <>
                    <li className="header__nav-item user">
                      <div className="header__nav-profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper" />
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </div>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to={AppRoute.Login}
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        }}
                      >
                        { authStatus === AuthStatus.Auth }
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
