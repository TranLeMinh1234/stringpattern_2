var Smith = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayHr(stringPattern);
	arrayQs = preArrayQs(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += Math.max(arrayHr[stringAllText.charCodeAt(i+m-1)],arrayQs[stringAllText.charCodeAt(i+m)]);
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

var preArrayQs = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 255;i++)
	{
		arrayResult[i]= m + 1;
	}

	for(let i = 0; i < m;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)]= m - i;
	}

	return arrayResult;
}

function informationSmith()
{
	return {
		complexity: `
- Đô phức tạp trong trường hợp xấu nhất là O(m.n) - với m là chiều dài xâu mẫu, n là chiều dài văn bản
		`,
		theory: `
- Kết hợp 2 thuật toán QuickSearch và Horspool, tại mỗi bước nhảy sẽ kiểm tra xem nhảy theo QuickSearch hay Horspool xa hơn thì chọn
- VD:
	<img src="./image/Smith.png" style="width:50%;height: 600px">
		`,
		doAlgorithm: `
var Smith = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayHr(stringPattern);
	arrayQs = preArrayQs(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += Math.max(arrayHr[stringAllText.charCodeAt(i+m-1)],arrayQs[stringAllText.charCodeAt(i+m)]);
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

var preArrayQs = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 255;i++)
	{
		arrayResult[i]= m + 1;
	}

	for(let i = 0; i < m;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)]= m - i;
	}

	return arrayResult;
}
		`,
	};
}