
const defaultDataKake= [
    {
           Oder_id : 'ORDS01', Odertime : '08:30:2019', status :'PROCESSING', total :'50$',
       oder_detail: 
           {Order : 'HC0012', namecustom :'Hoàng Speed', SĐT:'0365725858', address : 'Số 15-ngõ 205-Xuẩn Đỉnh-Hà Nội',
           thanhtoan :'Chưa Thanh Toán' },
           // {Order : 'hc0012', namecustom :'Ngoc Linh', SĐT:'0365725858', address : 'Số 15-ngõ 205-Xuẩn Đỉnh-Hà Nội',
           // thanhtoan :'Chưa Thanh Toán'},
         
   },
   
     {
           Oder_id : 'ORDS05', Odertime : '09:30:2019', status :'PROCESSING', total :'60$',
       oder_detail: {Order : 'HC0014', namecustom :'VuongDanny', SĐT:'0395888385', address : 'Số 17 Khương Trung- Hà Nội',
       thanhtoan :'Đã thanh toán tại quầy'}  
     },
       {
           Oder_id : 'ORDS08', Odertime : '11:30:2019', status :'COMPLETED', total :'80$',
       oder_detail:  
           {Order : 'HC0020', namecustom :'Hoàng Mạnh Tuấn', SĐT:'0243754874', address : 'Số 17-Nguyễn Khánh Toàn - Hà Nội',
           thanhtoan :'Đã thanh toán tại quầy'},     
           // { Order : 'hc0020', namecustom :'Hoàng Mạnh Tuấn', SĐT:'0243754874', address : 'Số 17-Nguyễn Khánh Toàn - Hà Nội',
           //  thanhtoan :'Đã thanh toán tại quầy' },
       
     },
       {Oder_id : 'ORDS11', Odertime : '15:30:2019', status :'PROCESSING', total :'100$',
       oder_detail: {
         Order : 'HC00199', namecustom :'Lê Văn Luyện', SĐT:'0243754874', address : 'Số 17-Nguyễn Khánh Toàn - Bắc Giang',
         thanhtoan :'Chưa thanh toán'
       }
     },  
   
   ];
   
   
const dataJakeReducer = (state = defaultDataKake, action) => {
if (action.type === 'TOGGLE_MEMORIZED') {
    return state.map(e => {
        if (e.id !== action.id) return e;
        return { ...e, memorized: !e.memorized };
    });
}
if (action.type === 'TOGGLE_SHOW') {
    return state.map(e => {
        if (e.id !== action.id) return e;
        return { ...e, isShow: !e.isShow };
    });
}
if (action.type === 'ADD_WORD') {
    return [{
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false,
        isShow: false
    }].concat(state);
}
return state;
};

export default  dataJakeReducer;