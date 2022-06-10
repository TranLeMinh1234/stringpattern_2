var d=0;
var KarpRabin = function(stringPattern, stringAllText)
{
	var hx, hy, i, j, n = stringAllText.length, m = stringPattern.length;
	var arrayResult = [];

	for(d = i = 1; i < m;++i)
	{
		d = (d<<1);
	}

	for(hy = hx = i = 0; i < m; ++i)
	{
		hx = ((hx<<1) + stringPattern.charCodeAt(i));
		hy = ((hy<<1) + stringAllText.charCodeAt(i));
	}


	j = 0;
	while(j <= n-m)
	{
		if(hx == hy)
			arrayResult.push(j);
		j++;
		hy = rehash(stringAllText.charCodeAt(j-1),stringAllText.charCodeAt(j+m-1), hy);
	}

	return arrayResult;
}

var rehash = function(a,b,h)
{
	return ((((h) - (a)*d) << 1) + (b));
}

function infomationKarpRabin()
{
	return {
		complexity: `
Độ phức tạp:
	- Pha tiền xử lý: tính hash của mẫu, hash của m kí tự đầu tiên trong văn bản là O(m) - m là độ dài mẫu, n là độ dài văn bản
	- So khớp trên văn bản: O(n-m)
	=> Tổng: O(n-m) + O(m)
		`,
		theory: `
1. Ý tưởng tổng quát
	- Ta đưa ra 1 công thức hash và dựa vào công thức hash đó để tính ra 1 con số đại diện cho đoạn so khớp, mẫu
	=> nếu 2 con số sau hash trùng nhau thì 2 đoạn so khớp trùng nhau.
	- Công thức hash:
		<img src="./image/hash.jpeg" style="width:50%;height: 100px">
	- Với w[i] (0&lt;=i&lt;m-1) là mã ASII của kí tự
	- công thức tính hash khi đoạn xâu dịch trái 1 kí tự:
	    <img src="./image/hash_change.jpeg" style="width:45%;height: 80px">
	- công thức rehash:
		<img src="./image/rehash.jpeg" style="width:45%;height: 58px">
	- P là giá trị nguyên lớn nhất của ngôn ngữ lập trình
2.Thực hiện thuật toán
- Tính hash của xâu mẫu và m kí tự đầu tiên trong văn bản
- So sánh các hash của các đoạn văn bản với hash mẫu 
=> nếu bằng nhau => ta xác nhận đoạn trùng nhau
=> nếu khác nhau => ta dịch đoạn xâu đang xét trên văn bản sang phải 1 kí tự rồi tính lại hash cho đoạn xâu mới bằng công thức rehash
					=> vì xâu xét tiếp theo trên văn bản chỉ thay đổi 2 kí tự đầu và cuối nên không cần tính lại một đoạn m-2 kí tự ở giữa => lí do dùng công thức rehash
		`,
		doAlgorithm: `
var d=0;
var KarpRabin = function(stringPattern, stringAllText)
{
	var hx, hy, i, j, n = stringAllText.length, m = stringPattern.length;
	var arrayResult = [];

	for(d = i = 1; i < m;++i)
	{
		d = (d<<1);
	}

	for(hy = hx = i = 0; i < m; ++i)
	{
		hx = ((hx<<1) + stringPattern.charCodeAt(i));
		hy = ((hy<<1) + stringAllText.charCodeAt(i));
	}


	j = 0;
	while(j <= n-m)
	{
		if(hx == hy)
			arrayResult.push(j);
		j++;
		hy = rehash(stringAllText.charCodeAt(j-1),stringAllText.charCodeAt(j+m-1), hy);
	}

	return arrayResult;
}

var rehash = function(a,b,h)
{
	return ((((h) - (a)*d) << 1) + (b));
}
		`,
	};
}
