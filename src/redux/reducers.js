const initState = {

    readNews: []

}

let newsReducer = (prevState = initState, action) => {
    switch (action.type) {
        case 'NEW_ITEM':
            /*return (Object.assign({}, prevState, {
                readNews:[
                    ...action.news
                ]
            }
            ))*/
            return (
                {readNews: [
                    ...prevState.readNews,
                    ...action.news
                ]}
            )
    
        default:
            return prevState
        
    }

};

export default newsReducer