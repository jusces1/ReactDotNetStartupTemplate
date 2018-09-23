import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { CounterReducer} from '../../features/Examples/Counter/CounterReducer';
import { WeatherForecastReducer} from "../../features/Examples/Table/FetchDataReducer";
import locale from "../../features/Examples/Languages/localeReducer";

export default function configureStore(history, initialState) {
  const reducers = { counter: CounterReducer, weatherForecasts: WeatherForecastReducer, locale };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
