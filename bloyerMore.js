var BloyerMore = function(stringPattern,stringAllText)
{
	var arrayResult = [];
	var n = stringAllText.length;
	var m = stringPattern.length;

	var arrayLastOccurChar = findArrayLastOccurChar(stringPattern);

	var s = 0;

	while(s <= n-m)
	{
		var j = m-1;

		while(j >= 0 && stringPattern[j] == stringAllText[s+j])
			j--;

		if(j<0)
		{
			arrayResult.push(s);

			s+= s+m < n? m-arrayLastOccurChar[stringAllText.charCodeAt(s+m)] : 1;
		}
		else
		{
			s+= Math.max(1,j - arrayLastOccurChar[stringAllText.charCodeAt[s+j]]);
		}
	}

	return arrayResult;
}

var findArrayLastOccurChar = function(stringPattern)
{
	var arrayOccur = [];
	for(let i =0 ; i < 256; i++)
		arrayOccur[i] = -1;

	for(let i = 0;i < stringPattern.length;i++)
	{
		arrayOccur[stringPattern.charCodeAt[i]] = i;
	}

	return arrayOccur;
}

function informationBoylerMore()
{
	return {
		complexity: `Trong trường hợp tốt nhất, độ phức tạp là O(m/n) với n là chiều dài của văn bản, m là chiều dài của mẫu.`,
		theory: `
1. Ý tưởng thuật toán: 
+ Thực hiện tiền xử lý để tìm ra được mảng lưu lại vị trí xuất hiện cuối cùng của kí tự trên mẫu.
+ Kiểm tra các cửa số y[j...j+m-1] nếu không khớp tại vị trí j+i(0 < i < m-1) thì sẽ dựa mảng tìm được bước tiền xử lý để dịch cửa sổ 
thành cửa sổ mới có có kí tự y[j+i] là kí tự xuất hiện cuối cùng trong cửa sổ nếu cửa sổ mới khớp với mẫu.
	<img src="./image/BM1.png" style="width:50%;height: 300px">
	 <img src="./image/BM2.png" style="width:50%;height: 200px">
		`,
		doAlgorithm: `
var BloyerMore = function(stringPattern,stringAllText)
{
	var arrayResult = [];
	var n = stringAllText.length;
	var m = stringPattern.length;

	var arrayLastOccurChar = findArrayLastOccurChar(stringPattern);

	var s = 0;

	while(s <= n-m)
	{
		var j = m-1;

		while(j >= 0 && stringPattern[j] == stringAllText[s+j])
			j--;

		if(j<0)
		{
			arrayResult.push(s);

			s+= s+m < n? m-arrayLastOccurChar[stringAllText.charCodeAt(s+m)] : 1;
		}
		else
		{
			s+= Math.max(1,j - arrayLastOccurChar[stringAllText.charCodeAt[s+j]]);
		}
	}

	return arrayResult;
}

var findArrayLastOccurChar = function(stringPattern)
{
	var arrayOccur = [];
	for(let i =0 ; i < 256; i++)
		arrayOccur[i] = -1;

	for(let i = 0;i < stringPattern.length;i++)
	{
		arrayOccur[stringPattern.charCodeAt[i]] = i;
	}

	return arrayOccur;
}
		`,
	};
}