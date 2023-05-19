import { configureStore }    from '@reduxjs/toolkit'

import transactionSlice from './slices/Tradet'
import userSlice  from './slices/User'
 export const store = configureStore({

    reducer:{
        transactions: transactionSlice,
         users:userSlice,
    
    
    },
    
});