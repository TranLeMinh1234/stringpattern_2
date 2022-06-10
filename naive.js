var naive = function(stringPattern, stringAllText)
{
	let lengthPattern = stringPattern.length, lengthAllText = stringAllText.length;

	let indexResult = [], legthALLTextFor = lengthAllText-lengthPattern + 1;

	for(let i = 0; i < legthALLTextFor;i++)
	{
		let j = 0, z = i;
		for(;j < lengthPattern;j++)
		{
			if(stringPattern[j] != stringAllText[z])
				break;
			z++;
		}

		if(j == lengthPattern)
			indexResult.push(z - lengthPattern + 1);
	}

	return indexResult;
}


// thông tin naive
function informationNaive()
{
	return {
		complexity: `Độ phức tạp của thuật toán là O(n.m)-với n là chiều dài của văn bản, m là chiều dài của mẫu`,
		theory: `
- Ý tưởng thuật toán rất đơn giản, ta duyệt từ đầu tới cuối văn bản. Với mỗi vị trí bắt đầu khớp, ta xét m-1 ký tự tiếp theo có khớp không. Nếu khớp ta 
ta ghi nhận vị trí khớp và tăng vị trí xét trên văn bản lên 1, tiếp tục lặp lại cho đến hết văn bản.
		`,
		doAlgorithm: `
var naive = function(stringPattern, stringAllText)
{
	let lengthPattern = stringPattern.length, lengthAllText = stringAllText.length;

	let indexResult = [], legthALLTextFor = lengthAllText-lengthPattern + 1;

	for(let i = 0; i < legthALLTextFor;i++)
	{
		let j = 0, z = i;
		for(;j < lengthPattern;j++)
		{
			if(stringPattern[j] != stringAllText[z])
				break;
			z++;
		}

		if(j == lengthPattern)
			indexResult.push(z - lengthPattern + 1);
	}

	return indexResult;
}`,
	};
}