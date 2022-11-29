import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, setCities, setOffers, setOffer, requireAuthStatus, changeLoadingStatus, setComments, setNearPlaces, setUserData } from './actions';
import { AuthStatus } from '../types/auth-status';
import { City, Offer, Comment } from '../types/offer-types';
import { UserData } from '../types/user-data';

type State = {
  cities: City[];
  activeCity: City | null;
  offers: Offer[];
  activeOffer: Offer | null;
  activeOfferNearPlaces: Offer[] | null;
  activeOfferComments: Comment[] | null;
  authStatus: AuthStatus;
  loadingStatus: boolean;
  userData: UserData | null;
};

const initialState: State = {
  cities: [],
  activeCity: null,
  offers: [],
  activeOffer: null,
  activeOfferNearPlaces: null,
  activeOfferComments: null,
  authStatus: AuthStatus.Unknown,
  loadingStatus: false,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setCities, (state, action) => {
      state.cities = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(setNearPlaces, (state, action) => {
      state.activeOfferNearPlaces = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.activeOfferComments = action.payload;
    })
    .addCase(changeLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    })
    .addCase(requireAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
