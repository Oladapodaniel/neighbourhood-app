import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        neighbours: [],
        currentUser: {}
        // neighbours: [
        //     { name: 'Oladapo Daniel', hobby: 'Worshiping and Coding'},
        //     { name: 'Akin', hobby: 'Worshiping and Druming'},
        //     { name: 'Wale', hobby: 'Worshiping and Playing Bass'},
        //     { name: 'Racheal', hobby: 'Worshiping and Singing'},
        //     { name: 'Mummy', hobby: 'Worshiping and Teaching'}
        // ]
    },
    getters: {
        neighbours: (state) => {
            return state.neighbours
        },
        currentUser: (state) => {
            return state.currentUser
        }
    },
    mutations: {
        mutateNeighbours: (state, payload)=> {
            state.neighbours = payload
        },
        addNeighbors: (state, payload) => {
            return state.neighbours.push(payload)
        },
        setCurrentUser: (state, payload) => {
            return state.currentUser = payload
        }
    },
    actions: {
        neighbours: async(context, payload) => {
                await context.commit('mutateNeighbours', payload)
        },
        setCurrentUser: async(context, payload) => {
            await context.commit('setCurrentUser', payload)
        }
    }
})