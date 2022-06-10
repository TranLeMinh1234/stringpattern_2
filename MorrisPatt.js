var MorrisPatt = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let arrayMpNext = preMPNext(stringPattern);
	let n = stringAllText.length, m = stringPattern.length;
	let i = j = 0;
	while(j <= n - m)
	{
		if(stringPattern[i] == stringAllText[j + i])
		{
			i++;

			if(i >= m)
			{
				arrayResult.push(j);
				j = j + m - arrayMpNext[i];
				i = 0;
			}
		}
		else
		{
			j = j + i - arrayMpNext[i];
			if(i > 0)
				i = arrayMpNext[i];
		}
	} 	

	return arrayResult;
}

var preMPNext = function(stringPattern)
{
	let arrayResult = [], m  = stringPattern.length;
	let i = 0, j = -1;
	arrayResult[0] = -1;

	while(i < m)
	{
		while(j > -1 && stringPattern[i] != stringPattern[j])
			j = arrayResult[j];

		arrayResult[++i] = ++j; 
	}

	return arrayResult;
}


function informationMorrisPatt()
{
	return {
		complexity: `
– Pha tiền xử lí có độ phức tạp về không gian và thời gian là O(m)
– Pha tìm kiếm có độ phức tạp về thời gian O(m+n)
– Thực hiện nhiều nhất 2n-1 các so sánh kí tự trong văn bản trong pha
tìm kiếm.
		`,
		theory: `
- Thuật toán được thực hiện với ý tưởng sẽ bỏ qua so sánh đoạn biết chắc chắn sẽ trùng. Ta cùng hiểu về đoạn biết chắc
chắn sẽ trùng qua ví dụ sau:
	+ Gọi xâu mẫu là P, xâu văn bản là T
	+ Có độ dài xâu mẫu là m
	+ độ dài xâu văn bản là n
	+ biến vị trí xâu mẫu là i
	+ biến vị trí xâu văn bản là j
	+ Khi 2 xâu so khớp, xuất hiện vị trí không khớp P[i] khác T[j+i] => ta có đoạn trùng P[0..i-1] = T[j..j+i-1]
	= u. Trong đoạn u ta tìm 1 đoạn v là hậu tố của u nhưng là tiền tố của P có độ dài lớn nhất, đoạn này chính là đoạn
	biết chắc chắn sẽ trùng và ta hoàn toàn có thể bỏ qua đoạn này để so sánh các kí tự còn lại của mẫu bắt đầu từ 
	P[v.length], với văn bản bắt đầu từ T[j + i - v.length] để tìm ra đoạn trùng tiếp theo.
	+ Các đoạn biết chắc chắn sẽ trùng phải đảm bảo 2 tiêu chí:
		(-) là hậu tố của u nhưng là tiền tố của P
		(-) có độ dài lớn nhất
	+ Các đoạn trùng được tìm ra tại bước tiền xử lý: được lưu thành 1 mảng có độ dài m+1 với phần tử 0 có giá trị là -1,
	vị trí i sẽ lưu lại độ dài đoạn biết chắc chắn sẽ trùng có độ dài lớn nhất là i.
<img src="./image/Horspool.png" style="width:60%;height: 600px">
		`,
		doAlgorithm: `
var MorrisPatt = function(stringPattern,stringAllText)
{
	let arrayResult = [];
	let arrayMpNext = preMPNext(stringPattern);
	let n = stringAllText.length, m = stringPattern.length;
	let i = j = 0;
	while(j <= n - m)
	{
		if(stringPattern[i] == stringAllText[j + i])
		{
			i++;

			if(i >= m)
			{
				arrayResult.push(j);
				j = j + m - arrayMpNext[i];
				i = 0;
			}
		}
		else
		{
			j = j + i - arrayMpNext[i];
			if(i > 0)
				i = arrayMpNext[i];
		}
	} 	

	return arrayResult;
}

var preMPNext = function(stringPattern)
{
	let arrayResult = [], m  = stringPattern.length;
	let i = 0, j = -1;
	arrayResult[0] = -1;

	while(i < m)
	{
		while(j > -1 && stringPattern[i] != stringPattern[j])
			j = arrayResult[j];

		arrayResult[++i] = ++j; 
	}

	return arrayResult;
}
		`,
	};
}


