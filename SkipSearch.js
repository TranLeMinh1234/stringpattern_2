var SkipSearch = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let arrayBk = [];
	let m = stringPattern.length, n = stringAllText.length;
	for(let i = 0; i < 256; i++)
	{
		arrayBk[i] = [];
	}

	for(let i = 0;i < stringPattern.length;i++)
	{
		arrayBk[stringPattern.charCodeAt(i)].push(i);
	}

	for(let i = m-1; i < n; i+=m)
	{
		let displayArray = arrayBk[stringAllText.charCodeAt(i)];
		for(let j = 0; j < displayArray.length;j++)
		{
			if(i - displayArray[j] + m <= n && stringPattern == stringAllText.substring(i - displayArray[j],i - displayArray[j] + m))
				arrayResult.push(i - displayArray[j]);
		}
	}

	return arrayResult;
}

function informationSkipSearch()
{
	return {
		complexity: `
- Có pha tiền xử lý mất O(m) - m là chiều dài xâu mẫu.<br>
- Có độ phức tạp bình phương trong trường hợp tồi nhất.<br>
- Có trường hợp nhanh nhất là O(n).<br>
		`,
		theory: `
- Thuật toán thực hiện lưu lại các vị trí xuất hiện các kí tự trên xâu mẫu và chọn ra một kí tự bất kì làm gốc.
Tiếp đó dựa vào mảng chứa các vị trí xuất hiện của kí tự gốc đó, tìm tất cả xâu có chiều dài bằng xâu mẫu có kí
gốc xuất hiện cùng vị trí và so sánh xem có khớp không.
		`,
		doAlgorithm: `
var SkipSearch = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let arrayBk = [];
	let m = stringPattern.length, n = stringAllText.length;
	for(let i = 0; i < 256; i++)
	{
		arrayBk[i] = [];
	}

	for(let i = 0;i < stringPattern.length;i++)
	{
		arrayBk[stringPattern.charCodeAt(i)].push(i);
	}

	for(let i = m-1; i < n; i+=m)
	{
		let displayArray = arrayBk[stringAllText.charCodeAt(i)];
		for(let j = 0; j < displayArray.length;j++)
		{
			console.log(stringPattern, )
			if(i - displayArray[j] + m <= n && stringPattern == stringAllText.substring(i - displayArray[j],i - displayArray[j] + m))
				arrayResult.push(i - displayArray[j]);
		}
	}

	return arrayResult;
}
		`,
	};
}