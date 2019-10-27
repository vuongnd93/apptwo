
const startEndbtn = (state = 'INACTIVE', action) => {
    if (action.type === 'START') return 'PROCESSING';
    if (action.type === 'END') return 'COMPLETED';
  
    return state;
};

export default startEndbtn;