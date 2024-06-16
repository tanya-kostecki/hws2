
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): {themeId: number} => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionsType = ChangeThemeIdActionType
export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
