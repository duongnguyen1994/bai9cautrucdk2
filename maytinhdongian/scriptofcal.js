// nhập giá trị vào input(text)
function val(giatri){
    document.getElementById('result').value+=giatri
}
// lấy giá trị vừa nhập vào, sử dụng hàm eval() để tính toán giá trị có kiểu chuỗi
function solve(){
    let a = document.getElementById('result').value
    let b = eval(a)
    document.getElementById('result').value = b
}
// delete
function clr(){
    document.getElementById('result').value = ''
}