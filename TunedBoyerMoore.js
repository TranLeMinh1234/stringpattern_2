var TunedBoyerMoore = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length, n = stringAllText.length;
	let j = 0,k;
	let preBc = preBcArray(stringPattern);
	let shift = preBc[stringPattern.charCodeAt(m-1)];
	preBc[stringPattern.charCodeAt(m-1)] = 0;
	for(let i =0 ;i< m;i++)
	{
		stringAllText+=stringPattern[m-1];
	}
	while(j < n)
	{
		k = preBc[stringAllText.charCodeAt(j+m-1)];
		while(k != 0)
		{
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
		}
		if(stringPattern == stringAllText.substring(j, j+m) && j < n)
			arrayResult.push(j);

		j+=shift;
	}

	return arrayResult;
}

var preBcArray = function(stringPattern)
{
	let arrayResult = [];
	let m = stringPattern.length;
	for(let i = 0; i< 256;i++)
	{
		arrayResult[i] = m;
	}

	for(let i = 0;i < m-1;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)] = m - i - 1;
	}

	return arrayResult;
}

function informationTunedBoyerMoore()
{
	return {
		complexity: ``,
		theory: `
-TunedBoyerMoore là cài đặt đơn giản của thuật toán Boyer-Moore. Chi phí thuật toán string matching thường
 phần nhiều là việc kiểm tra.
-Để tránh việc phải so sánh nhiều lần. Chúng ta có thể thực hiện nhiều bước dịch hơn trước khi thực sự so sánh
xâu. Thuật toán này sẽ sử dụng hàm bad-character xác định bước dịch. Và tìm x[m-1] trong y cho tới khi nào tìm
được. Yêu cầu lưu giá trị preBc[x[m-1]] vào biến shift và đặt lại giá trị preBc[x[m-1]] = 0. Khi ta tìm được vị
trí x[m-1] trong y, thì bước dịch tiếp theo sẽ là shift.
	<img src="./image/TBM2.png" style="width:50%;height: 100px">
	<img src="./image/TBM1.png" style="width:50%;height: 600px">
		`,
		doAlgorithm: `
var TunedBoyerMoore = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length, n = stringAllText.length;
	let j = 0,k;
	let preBc = preBcArray(stringPattern);
	let shift = preBc[stringPattern.charCodeAt(m-1)];
	preBc[stringPattern.charCodeAt(m-1)] = 0;
	for(let i =0 ;i< m;i++)
	{
		stringAllText+=stringPattern[m-1];
	}
	while(j < n)
	{
		k = preBc[stringAllText.charCodeAt(j+m-1)];
		while(k != 0)
		{
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
			j+=k;k = preBc[stringAllText.charCodeAt(j+m-1)];
		}
		if(stringPattern == stringAllText.substring(j, j+m) && j < n)
			arrayResult.push(j);

		j+=shift;
	}

	return arrayResult;
}

var preBcArray = function(stringPattern)
{
	let arrayResult = [];
	let m = stringPattern.length;
	for(let i = 0; i< 256;i++)
	{
		arrayResult[i] = m;
	}

	for(let i = 0;i < m-1;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)] = m - i - 1;
	}

	return arrayResult;
}
		`,
	};
}