import { types } from "../types/types";

// const state = {
    // id: 1650584111723
    // name: "Brandon"
    // email: "brandon@gmail.com"
    // password: "123456"
// }


export const authReducer = ( state = {}, action ) =>{

    switch (action.type) {

        case types.login:           
            return{
                ...action.paylod,
                logged: true
            }
            
        case types.logout :            
            return{
                logged: false
            }
    
        default:
            return state
    }

}