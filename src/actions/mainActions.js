import { makeActionCreator } from './helpers';



export const MAIN_SET_USERNAME = 'MAIN_SET_USERNAME';

export const MAIN_MESSAGES_LIST_FETCH = 'MAIN_MESSAGES_LIST_FETCH';
export const MAIN_MESSAGES_LIST_SUCCESS = 'MAIN_MESSAGES_LIST_SUCCESS';
export const MAIN_MESSAGES_LIST_FAILED = 'MAIN_MESSAGES_LIST_FAILED';

export const MAIN_SEND_MESSAGE = 'MAIN_SEND_MESSAGE';
export const MAIN_SEND_MESSAGE_SUCCESS = 'MAIN_SEND_MESSAGE_SUCCESS';
export const MAIN_SEND_MESSAGE_FAILED = 'MAIN_SEND_MESSAGE_FAILED';

export default {
    MAIN_SET_USERNAME,

    MAIN_MESSAGES_LIST_FETCH,
    MAIN_MESSAGES_LIST_SUCCESS,
    MAIN_MESSAGES_LIST_FAILED,

    MAIN_SEND_MESSAGE,
    MAIN_SEND_MESSAGE_SUCCESS,
    MAIN_SEND_MESSAGE_FAILED,

    mainSetUsername: makeActionCreator(MAIN_SET_USERNAME, 'username'),

    mainMessagesListFetch: makeActionCreator(MAIN_MESSAGES_LIST_FETCH),
    mainMessagesListSuccess: makeActionCreator(MAIN_MESSAGES_LIST_SUCCESS, 'messagesList'),
    mainMessagesListFailed: makeActionCreator(MAIN_MESSAGES_LIST_FAILED, 'error'),

    mainSendMessage: makeActionCreator(MAIN_SEND_MESSAGE, 'messageText'),
    mainSendMessageSuccess: makeActionCreator(MAIN_SEND_MESSAGE_SUCCESS, 'messageText'),
    mainSendMessageFailed: makeActionCreator(MAIN_SEND_MESSAGE_FAILED, 'messageText'),
}