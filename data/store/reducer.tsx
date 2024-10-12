//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export default function setReducer(state = initialState, action: Action): ExampleInitInter {
//     switch (action.type) {
//         case Example: {
//             return {
//                 ...state,
//                 example: action.payload
//             };
//         }
//         default:
//             return state;
//     }
// }

import { CartFormat, DataStorageFormat, OrderFormat, PillFormat, UserFormat } from "../interfaceFormat";
import {
    initialState, Action, CurrentCache, SET_USER,

} from "./index";

export default function setReducer(state = initialState, action: Action): CurrentCache {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload as UserFormat
            };
        }

        default:
            return state;
    }
}