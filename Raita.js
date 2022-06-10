var Raita = function (stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length;
    let n = stringAllText.length;
    let preBc = preBcArray(stringPattern);
    let i = 0;
    while (i <= n - m) {
      let c = stringAllText[i + m - 1];
      let first = stringPattern[0];
      let middle = stringPattern[m / 2];
      let last = stringPattern[m - 1];
      if (first == stringAllText[i] && middle == stringAllText[i + m / 2] 
      	&& last == stringAllText[i + m - 1] && cmp(stringPattern, 1, m - 2, stringAllText, i + 1)) {
        arrayResult.push(i);
      }
      i = i + preBc[stringAllText.charCodeAt(i + m - 1)];
    }

    return arrayResult;
}


var preBcArray = function(stringPattern) {
    let bc = [];
    let m = stringPattern.length;
    for (let i = 0; i < 255; i++) {
      bc[i] = m;
    }
    for (let i = 0; i < m - 1; i++) {
      bc[stringPattern.charCodeAt(i)] = m - i - 1;
    }
    return bc;
}

var cmp = function(stringPattern,x1, x2, stringAllText, y1) {
	for (let i = x1; i <= x2; i++) {
  		if (stringPattern[i] != stringAllText[y1++]) {
    		return false;
  		}
	}
	return true;
}

function informationRaita()
{
	return {
		complexity: `
-Độ phức tạp thuật toán là O(m.n)<br>
		`,
		theory: `
-Cải thiện từ thuật toán Horspool, trước khi so sánh 2 mảng với nhau thì ta so sánh 2 kí tự đầu nếu 
giống nhau thì so sánh tiếp 2 kí tự giữa rồi đến 2 kí tự cuối tương ứng của 2 mảng trước
		`,
		doAlgorithm: `var Raita = function (stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length;
	let n = stringAllText.length;
	let preBc = preBcArray(stringPattern);
	let i = 0;
	while (i <= n - m) {
	  let c = stringAllText[i + m - 1];
	  let first = stringPattern[0];
	  let middle = stringPattern[m / 2];
	  let last = stringPattern[m - 1];
	  if (first == stringAllText[i] && middle == stringAllText[i + m / 2] 
	  	&& last == stringAllText[i + m - 1] && cmp(stringPattern, 1, m - 2, stringAllText, i + 1)) {
	    arrayResult.push(i);
	  }
	  i = i + preBc[stringAllText.charCodeAt(i + m - 1)];
	}

	return arrayResult;
}


var preBcArray = function(stringPattern) {
    let bc = [];
    let m = stringPattern.length;
    for (let i = 0; i < 255; i++) {
      bc[i] = m;
    }
    for (let i = 0; i < m - 1; i++) {
      bc[stringPattern.charCodeAt(i)] = m - i - 1;
    }
    return bc;
}

var cmp = function(stringPattern,x1, x2, stringAllText, y1) {
	for (let i = x1; i <= x2; i++) {
  		if (stringPattern[i] != stringAllText[y1++]) {
    		return false;
  		}
	}
	return true;
}
	`,
	};
}