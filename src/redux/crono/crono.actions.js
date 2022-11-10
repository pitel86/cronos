export const INCREMENT_CRONO = 'INCREMENT_CRONO'
export const RESET_CRONO = 'RESET_CRONO'

export const incrementCrono = (num) => (dispatch) => {
    dispatch({
        type: INCREMENT_CRONO,
        payload: num
    })
}


export const resetCrono = () => (dispatch) => {
    dispatch({
        type: RESET_CRONO
    })
}