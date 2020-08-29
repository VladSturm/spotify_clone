

export const initialState = {
    user: null,
    playkist: [],
    playing: false,
    item: null,
    //token: "BQDUT2sudlTdawdlrv34caH2ZSyvi6ghQET8UK8tedxGrWeZQ8FPbAtIKdBUJdgnz5Zftqz0jf_2emdfFK7L2NRfq3NSkupvaih8O46fqgTbshTGuzF1k9wdf9ozKK7MltlpjI005gWZW7ALhh-_BFFNA4kO72ZT446zSWsI_BG6qZHf"
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        };
        case 'SET_TOKEN':
        return {
           ...state,
           token: action.token
        };

        case 'SET_PLAYLIST':
        return {
           ...state,
           palylist: action.playlists
        };

        default: 
        return state;

    }
}

export default reducer