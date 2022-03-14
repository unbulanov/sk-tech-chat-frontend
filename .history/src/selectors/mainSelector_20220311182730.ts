import { createSelector } from 'reselect';

const getMain = (state) => state.main;

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