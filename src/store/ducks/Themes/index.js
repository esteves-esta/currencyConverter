import colors from '../../../data/colors';
import { AsyncStorage } from 'react-native';

export const Types = {
    CHANGE_PRIMARY_COLOR: 'THEME/CHANGE_PRIMARY_COLOR',
};

const INITIAL_STATE = {
    primaryColor: colors.blue,
};

export default function theme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.CHANGE_PRIMARY_COLOR: {
            return { ...state, primaryColor: action.payload };
        }
        default:
            return state;
    }
}

