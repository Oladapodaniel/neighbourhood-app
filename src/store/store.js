import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        neighbours: []
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
        //     let changeHobby = state.neighbours.map(neigh => {
        //         return {
        //             name: neigh.name,
        //             hobby: `${neigh.hobby} with dancing`
        //         }
        //     })
        //     return changeHobby
        },
    },
    mutations: {
        mutateNeighbours: (state, payload)=> {
            // setTimeout((state) => {
                // state.neighbours.forEach(neigh => {
                //     neigh.name = payload;
            // })

            // }, 3000)
            state.neighbours = payload
            // console.log(payload)
        },

        addNeighbors: (state, payload) => state.neighbours.push(payload)
    },
    actions: {
        neighbours: async(context, payload) => {
            // setTimeout(()=> {
                await context.commit('mutateNeighbours', payload)
               
            // }, 2000)
        },
        
        // addNeighbours: async(context, payload) => {
        //         await context.commit('addNeighbors', payload)
        // }
    }
})