import schema from '../schemas/index';

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
}

function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            //action.payload.query
            //const list = state.data.categories[2].playlist
            //const results = list.filter((item) => {
            //    return item.author.includes(action.payload.query)
            //})
            let results = []
            if(action.payload.query){
              state.data.categories.map(
                category => {
                   results = results.concat(
                     category.playlist.filter(
                       item => item.author.toLowerCase()
                          .includes( action.payload.query.toLowerCase() )
                     )
                   )
                 }
               )
            }
            return {
                ...state, 
                search: results
            }
        }
        default:
            return state
    }
}

export default data;