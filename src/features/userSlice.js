import { createSlice } from '@reduxjs/toolkit';
import profileIngDefault from '../profileImgDefault.png'



export const  userSlice = createSlice({
    name: 'user',
    initialState:{
        nameUser: '',
        isAuth: false,
        profileImg:profileIngDefault,
        
    },

    reducers:{
        loginAction: (state, action) => {
          
            if( 'nameUser' in action.payload  && 'isAuth' in action.payload){
                state.nameUser = action.payload.nameUser;
                state.isAuth = action.payload.isAuth;
               
            }
        },

        logffAction: state => {
            state.nameUser = '';
            state.isAuth = false;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            
        }
    },
});


export const { logffAction, loginAction} = userSlice.actions;

export default userSlice.reducer;