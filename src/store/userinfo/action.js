import * as actionTypes from './action-type'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}