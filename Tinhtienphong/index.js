// cac gia tri mac dinh
const giaQuadem=200;
// const gioVao=new Date('2022-04-06 10:00:00');
// const gioRa= new Date('2022-04-07 10:00:00');
const giaGioThem=30;
function tinhGioThem(gioVao, gioRa){
    vao=new Date(gioVao)
    ra=new Date(gioRa)
    var gioThem=0;
    console.log("gio vao:",vao,"\ngio ra:",ra);
    // o day tinh theo gio nen se khong quan tinh theo giay
    // chi tinh tuong trung, chua su dung ham tinh thoi gian chuan xac
    gioThem=ra.getHours()-vao.getHours() + (ra.getDate()-vao.getDate())*24 +(ra.getMonth()-vao.getMonth())*24*30 +(ra.getFullYear()-vao.getFullYear());
    if(gioThem<0){
        gioThem=0;
        console.log('Thoi gian vao va thoi gian ra khong hop le');
        return gioThem;
    }
    if(gioThem<24){
        gioThem=0;
        return gioThem;
    }
    else{
        // vua qua gio da tinh them giothem
        gioThem=gioThem-24;
        return gioThem;
    }
}

function tinhTienPhong(gioVao, gioRa){    
    var tongTien=0;
    var gioThem=tinhGioThem(gioVao,gioRa);
    console.log('gio them:',gioThem)
    if(gioThem>7)
    {
        tongTien= giaQuadem +200;
        return tongTien;
    }
    else{
        tongTien=gioThem*giaGioThem +giaQuadem;
        return tongTien;
    }
    
}
console.log( 'testcase1:',tinhTienPhong('2022-04-06 13:00:00','2023-04-07 11:00:00'))
console.log( 'testcase2:',tinhTienPhong('2022-04-06 13:00:00','2023-04-07 13:00:00'))
console.log( 'testcase3:',tinhTienPhong('2022-04-06 13:00:00','2023-04-07 15:00:00'))
console.log( 'testcase4:',tinhTienPhong('2022-04-06 13:00:00','2023-04-07 20:00:00'))
console.log( 'testcase5:',tinhTienPhong('2022-04-06 10:00:00','2023-04-07 11:00:00'))
