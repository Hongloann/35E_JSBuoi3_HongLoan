// Bài tập 1: 
var btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function () {

    //Đầu vào: láy thông tin user nhập
    // var luongNV = 100000;
    const LUONG_NGAY = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value*1;

    //Xử lý:
    var tongLuong = LUONG_NGAY * soNgayLam;
    var currentFormat = new Intl.NumberFormat("VN-vn");

    var ketQua = "<p class='alert alert-success'>Tổng lương là: " + currentFormat.format(tongLuong) + " VND </p>" ; 

    //Đầu ra: 
    document.getElementById("showThongBao").innerHTML = ketQua;  
};


// Bài 2: 

var btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function (){

//Đầu vào: lấy thông tin user nhập
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soThu4 = document.getElementById("soThu4").value * 1;
    var soThu5 = document.getElementById("soThu5").value * 1;

//Xử Lý:
var giaTriTB = ( soThu1 + soThu2 + soThu3 + soThu4 + soThu5 ) / 5;

var ketQua = "<p>Giá trị trung bình là: " + giaTriTB + "</p>";

// Đầu ra:
document.getElementById("showGiaTriTrungBinh").innerHTML = ketQua;
};



// Bài 3: Quy đổi tiền
document.getElementById("doiTien").onclick = function (){
//Đầu vào:
    var USD = document.getElementById("USD").value * 1;
    var tienViet = 23500;

//Xử lý:
    var sauKhiDoi = USD * tienViet;
    var currentFormat = new Intl.NumberFormat("VN-vn");

    var ketQua = "<P>Số tiền sau quy đổi: " + currentFormat.format(sauKhiDoi) + " VND </P>";

// đầu ra:
document.getElementById("showTien").innerHTML = ketQua;
};


// Bài 4: tính chu vi 
document.getElementById("tinh").onclick = function (){

//Đầu vào:
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
//Xử lý:
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong ;
    var ketQua = "<div class='alert alert-success'>";
    ketQua += "<p>Chu Vi là: " + chuVi +  "</p>";
    ketQua += "<p>Diện tích là: " + dienTich + "</p>";
    ketQua += "</div>";
//Đầu ra:
document.getElementById("showKetQua").innerHTML = ketQua;
};


//Bài 5: Tính tổng 2 ký số
document.getElementById("tinhTong").onclick = function (){
//Đầu vào:
    var num_1 = document.getElementById("num_1").value * 1;
//Xử lý:
    var hangChuc = Math.floor(num_1/10);
    var hangDV = num_1 % 10;
    var tong = hangChuc + hangDV;
    var ketQua = "<p>Tổng 2 ký số là: " + tong + "</p>";
//Đầu ra: 
 document.getElementById("showKetQuaTong").innerHTML = ketQua;
};

