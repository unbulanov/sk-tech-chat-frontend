import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { TState } from '../reducers/main';

const getMain = (state: AppState): TState => state.main as TState;

export const getMainUsername = createSelector(
    [getMain],
    main => main.username,
);

export const getMainMessagesList = createSelector(
    [getMain],
    main => main.messagesList,
);

export const getMainMessengerError = createSelector(
    [getMain],
    main => main.messengerError,
);

export default {
    getMainUsername,
    getMainMessagesList,
    getMainMessengerError,
};