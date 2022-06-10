var NotSoNaive = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length, n = stringAllText.length;
	let i = 0;
	if(m >= 2)
	{
		let k = 1,l = 2;
		let x1 = stringPattern.substring(2,m);
		if(stringPattern[0] == stringPattern[1])
		{
			k = 2;
			l = 1;
		}
		while(i <= n - m)
		{
			if(stringPattern[1] != stringAllText[i+1])
				i+=k;
			else
			{
				if(stringPattern[0] == stringAllText[i] && compareRemain(x1,
					stringAllText.substring(i+2,i+m)))
					arrayResult.push(i);

				i+=l;
			}
		}
	}
	else 
	{
		for(;i<n;i++)
		{
			if(stringPattern.charCodeAt(0) == stringAllText.charCodeAt(i))
				arrayResult.push(i);
		}
	}

	return arrayResult;
}

var compareRemain = function(stringPattern,subStringAllText)
{
	if(stringPattern.length!=subStringAllText.length)
	{
		return false;
	}
	for(let i = 0 ;i < stringPattern.length;i++)
	{
		if(stringPattern.charCodeAt(i) != subStringAllText.charCodeAt(i))
			return false;
	}

	return true;
}

function informationNotSoNaive()
{
	return {
		complexity: `
-Độ phức tạp của thuật toán mà O(mn)<br>
-Pha tiền xử lí có độ phức tạp là hằng số
		`,
		theory: `
- Thuật toán là cải tiến của thuật toán Brute Force. Về mặt cơ bản vẫn sẽ duyệt hết tất cả trường hợp từ trái qua phải
xong nếu gặp 2 điều kiện sau thì có bước nhảy là 2 chứ không phải 1:
	+ x[0] = x[1] && x[1] != y[j+1]
	+ x[0] != x[1] && x[1] = y[j+1]
		`,
		doAlgorithm: `
var NotSoNaive = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let m = stringPattern.length, n = stringAllText.length;
	let i = 0;
	if(m >= 2)
	{
		let k = 1,l = 2;
		let x1 = stringPattern.substring(2,m);
		if(stringPattern[0] == stringPattern[1])
		{
			k = 2;
			l = 1;
		}
		while(i <= n - m)
		{
			if(stringPattern[1] != stringAllText[i+1])
				i+=k;
			else
			{
				if(stringPattern[0] == stringAllText[i] && compareRemain(x1,
					stringAllText.substring(i+2,i+m)))
					arrayResult.push(i);

				i+=l;
			}
		}
	}
	else 
	{
		for(;i < n;i++)
		{
			if(stringPattern.charCodeAt(0) == stringAllText.charCodeAt(i))
				arrayResult.push(i);
		}
	}

	return arrayResult;
}

var compareRemain = function(stringPattern,subStringAllText)
{
	if(stringPattern.length!=subStringAllText.length)
	{
		return false;
	}
	for(let i = 0 ;i < stringPattern.length;i++)
	{
		if(stringPattern.charCodeAt(i) != subStringAllText.charCodeAt(i))
			return false;
	}

	return true;
}
		`,
	};
}