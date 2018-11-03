export const CHANGE = '/Home/LabelText/CHANGE'

export function change(newValue) {
    return {
        type: CHANGE,
        payload: newValue
    }
}