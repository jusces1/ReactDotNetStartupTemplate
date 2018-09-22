
import {
    REQUEST_WEATHER_FORECASTS,
    RECEIVE_WEATHER_FORECASTS
} from "./constants";

const initialState = { forecasts: [], isLoading: false };


export const WeatherForecastReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case REQUEST_WEATHER_FORECASTS:
            return { ...state, startDateIndex: action.startDateIndex, isLoading: true };
        case RECEIVE_WEATHER_FORECASTS:
            return { ...state, startDateIndex: action.startDateIndex, forecasts: action.forecasts, isLoading: false };
        default:
            return state;
    }
};