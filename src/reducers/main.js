import moment from 'moment';
import {
    MAIN_MESSAGES_LIST_FETCH,
    MAIN_MESSAGES_LIST_SUCCESS,
    MAIN_MESSAGES_LIST_FAILED,

    MAIN_SEND_MESSAGE,
} from '../actions/mainActions';

const initialState = {
    username: 'Anonim',
    messagesList: null,
    messengerError: null,
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case MAIN_MESSAGES_LIST_FETCH: {
            const newState = Object.assign({}, state);
            newState.messagesList = null;
            return newState;
        }
        case MAIN_MESSAGES_LIST_SUCCESS: {
            const newState = Object.assign({}, state);
            newState.messagesList = action.messagesList;
            console.log(newState.messagesList)
            return newState;
        }
        case MAIN_MESSAGES_LIST_FAILED: {
            const newState = Object.assign({}, state);
            newState.messengerError = action.error;
            return newState;
        }
            
        case MAIN_SEND_MESSAGE: {
            const newState = Object.assign({}, state);
            const messageList = [
                ...newState.messagesList ? newState.messagesList : [],
                {
                    time: moment().format('HH:MM'),
                    text: action.messageText,
                    sender: newState.username,
                }
            ]
            newState.messagesList = messageList;
            return newState;
        }
        default: {
            return state;
        }
    }

};

export default main;
