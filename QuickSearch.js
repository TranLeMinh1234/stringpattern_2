 var QuickSearch = function(stringPattern, stringAllText)
 {
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayQs(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += arrayHr[stringAllText.charCodeAt(i+m)];
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

var preArrayQs = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 256;i++)
	{
		arrayResult[i]= m;
	}

	for(let i = 0; i < m;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)] = m - i;
	}

	return arrayResult;
}

function informationQuickSearch()
{
	return {
		complexity: `
- Đô phức tạp trong trường hợp xấu nhất là O(m.n) - với m là chiều dài xâu mẫu, n là chiều dài văn bản
		`,
		theory: `
- Ý tưởng thuật toán:
	+ Thuật toán có ý tưởng giống với Horspool nhưng thay vị trí ký tự được chọn để tính đoạn dịch không phải là ký tự cuối của xâu vừa được xét 
	mà là ký tự sau kí tự cuối cùng. Lấy kí tự này thuật toán vẫn đúng vì xâu được xét tiếp theo được dịch ít nhất 1 đơn vị và sẽ chứa kí tự đó.
	=> ý tưởng giống với bloyerMore nhưng về cách trình bày code khác, chiều xét mẫu ngược lại.
- VD:
	<img src="./image/QuickSearch.png" style="width:50%;height: 600px">
		`,
		doAlgorithm: `
var QuickSearch = function(stringPattern, stringAllText)
 {
	let arrayResult = [];
	let n = stringAllText.length, m = stringPattern.length;
	arrayHr = preArrayQs(stringPattern);
	let i = 0;
	while( i <= n-m)
	{
		if(compare(stringAllText,stringPattern,i))
		{
			arrayResult.push(i);
		}
		i += arrayHr[stringAllText.charCodeAt(i+m)];
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

var preArrayQs = function(stringPattern)
{
	let arrayResult = [], m = stringPattern.length;
	for(let i = 0; i < 256;i++)
	{
		arrayResult[i]= m;
	}

	for(let i = 0; i < m;i++)
	{
		arrayResult[stringPattern.charCodeAt(i)] = m - i;
	}

	return arrayResult;
}
		`,
	};
}