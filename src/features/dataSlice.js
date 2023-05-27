import { createSlice } from '@reduxjs/toolkit';



export const  dataSlice = createSlice({
    name: 'data',
    initialState:{
        datas: null,
        idDocuments:[],
       
    },

    reducers:{
        setDataAction: (state, action) => {  
            state.datas = action.payload.datas;
        },

        setidDocumentAction: (state, action) => {  
            state.idDocuments = action.payload.idDocuments;
        },

      
    },
});


export const { setDataAction, setidDocumentAction } = dataSlice.actions;

export default dataSlice.reducer;