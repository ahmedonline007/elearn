import initialState from './initialState'; 


export default function (state = initialState, action) {
    switch (action.type) {
 
       
        // reduser of DEPARTMENTLIST
        case 'DEPARTMENTLIST':
  
            return {
                ...state,
                listDepartment: action.data
            };

    
        default:
            return {
                ...state
            };
    }
}