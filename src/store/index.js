import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            user_token: null
        }
    },
    actions: {

    },
    mutations: {
        SET_USER_TOKEN: function(state, payload){
            state.user_token = payload.access
        }
    }
})

export default store;