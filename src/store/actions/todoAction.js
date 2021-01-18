export const createTodo = (todo) =>{
    return (dispatch, getState,{getFirebase}) =>{
        //make async call to DB

        

        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile
        const authId= getState().firebase.auth.uid
        firestore.collection('todos').add({
            ...todo,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            createdAt: new Date()
        }).then(() =>{
            dispatch({
                type:'CREATE_TODO',
                todo
            })
        }).catch((err)=>{
            dispatch({type:'CREATE_TODO_ERROR', err})
        })
        
    }
};