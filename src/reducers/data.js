function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            //action.payload.query
            //const list = state.data.categories[2].playlist
            //const results = list.filter((item) => {
            //    return item.author.includes(action.payload.query)
            //})
            let results = []

            state.data.categories.map( category => {
                results = results.concat(category.playlist)
            })

            results = results.filter( item => {
                const author = item.author.toLowerCase()
                const query = action.payload.query.toLowerCase()
                return author.includes(query)
            })
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