export default function taskReducer(state, action){
    switch (action.type){
        case "create":
            return {...state };
        case "update":
            return {...state, isActive: false };
        case "delete":
            return{...state, };
        default:
            throw new Error();
    }
}