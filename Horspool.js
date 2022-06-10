var Horspool = function(stringPattern, stringAllText)
{
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayHr(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += arrayHr[stringAllText.charCodeAt(i+m-1)];
	}

	return arrayResult;
}

var compare = function(stringAllText,stringPattern,indexStringAllText)
{
	for(let i = 0; i < stringPattern.length;i++)
	{
		if(stringPattern.charCodeAt(i) != stringAllText.charCodeAt(indexStringAllText++))
			return false;
	}
	return true;
}

var preArrayHr = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 255;i++)
	{
		arrayResult[i]= m;
	}

	for(let i = 0; i < m-1;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)]= m - i - 1;
	}

	return arrayResult;
}

function informationHorspool()
{
	return {
		complexity: `
- Đô phức tạp trong trường hợp xấu nhất là O(m.n) - với m là chiều dài xâu mẫu, n là chiều dài văn bản
		`,
		theory: `
- Ý tưởng thuật toán:
	+ Thuật toán sẽ quét các ký tự của mẫu (pattern) từ phải sang trái bắt đầu ở phần tử cuối cùng. Đối với mẫu x[0..m-1] ta dùng 1 biến chỉ số i 
	chạy từ cuối về đầu, đối với chuỗi y[0..n-1] ta dùng 1 biến j để chốt ở phía đầu. G/s rằng trong quá trình so sánh ta gặp 1 mis-match tai vị 
	trí x[i]=a của mẫu và y[i+j]=b trong khi đang thử khớp tại vị trí j. Phép dịch chuyển bad-character shift sẽ khớp kí tự y[i+j] với 1 ký tự (bên phải nhất)
	 trong đoạn x[0..m-2]. Nếu y[i+j] không xuất hiện trong x, ta thấy ngay rằng không có xuất hiện nào của x trong y mà lại chứa chấp y[i+j], 
	 do đó ta có thể đặt cửa sổ ngay sau y[i+j], tức là y[j+i+1]
	=> ý tưởng giống với bloyerMore nhưng về cách trình bày code khác, chiều xét mẫu ngược lại.
- VD:
	<img src="./image/Horspool.png" style="width:50%;height: 600px">
		`,
		doAlgorithm: `
var Horspool = function()
{
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayHr(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += arrayHr[stringAllText.charCodeAt(i+m-1)];
	}

	return arrayResult;
}

var compare = function(stringAllText,stringPattern,indexStringAllText)
{
	for(let i = 0; i < stringPattern.length;i++)
	{
		if(stringPattern.charCodeAt(i) != stringAllText.charCodeAt(indexStringAllText++))
			return false;
	}
	return true;
}

var preArrayHr = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 255;i++)
	{
		arrayResult[i]= m;
	}

	for(let i = 0; i < m-1;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)]= m - i - 1;
	}

	return arrayResult;
}
		`,
	};
}