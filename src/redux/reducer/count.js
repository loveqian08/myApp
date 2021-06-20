const baseStore = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'less':
            return state - 1;
        default:
            return '梅赛德斯奔驰';
    }
}

export default baseStore;