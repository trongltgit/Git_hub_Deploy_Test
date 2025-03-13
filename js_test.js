function findMax() {
    let a = document.getElementById("a").value.trim();
    let b = document.getElementById("b").value.trim();
    let c = document.getElementById("c").value.trim();
    let resultDiv = document.getElementById("result");

    if (a === "" || b === "" || c === "") {
        resultDiv.innerHTML = "<span style='color: red;'>Vui lòng nhập đầy đủ cả ba số!</span>";
        return;
    }

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = "<span style='color: red;'>Giá trị nhập vào phải là số!</span>";
        return;
    }

    let max = Math.max(a, b, c);
    let maxVar = (max === a) ? 'a' : (max === b) ? 'b' : 'c';

    resultDiv.innerHTML = `<span style='font-size: 40px; color: red;'>${max}</span> <br> (Biến ${maxVar})`;
}
