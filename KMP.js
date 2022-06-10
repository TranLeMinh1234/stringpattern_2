// thuat toan KMP
var KMP = function(stringPattern,stringAllText)
{
	let lps = computeLPSArray(stringPattern,stringAllText);
	let indexResult = [];
	let indexAllText = 0, indexPattern = 0;
	if(lps && stringPattern.length != 0 && stringAllText.length != 0)
	{
		while(indexAllText < stringAllText.length)
		{
			if(stringAllText[indexAllText] == stringPattern[indexPattern])
			{
				indexPattern++;
				indexAllText++;
			}

			if(indexPattern == stringPattern.length)
			{
				indexResult.push(indexAllText - stringPattern.length);
				indexPattern = lps[indexPattern-1];
			}
			else if(indexAllText < stringAllText.length && stringAllText[indexAllText] != stringPattern[indexPattern])
			{
				if(indexPattern != 0)
					indexPattern = lps[indexPattern -1];
				else 
					indexAllText++;
			}
		}
	}
	return indexResult;
}

function computeLPSArray(stringPattern,stringAllText)
{
	if(stringPattern.length > 0)
	{
		let lps = Array.apply(null, Array(stringPattern.length)).map(function () {return 0;})
		let indexPattern = 1;
		lps[0] = 0;
		let len = 0;
		while(indexPattern < stringPattern.length)
		{
			if(stringPattern[indexPattern] == stringPattern[len])
			{
				len++;
				lps[indexPattern] = len;
				indexPattern++;
			}
			else
			{
				if(len != 0)
				{
					len = lps[len-1];
				}
				else
				{
					lps[indexPattern] = 0;
					indexPattern++;
				}
			}
		}
		return lps;
	}
	return null;
}	


// end KMP

// thông tin KMP
function informationKMP()
{
	return {
		complexity: `Độ phức tạp thời gian của thuật toán KMP là O (n) trong trường hợp xấu nhất - với n
		là độ dài của văn bản`,
		theory: `
1. Ý tưởng tổng quan: 
	- Sẽ không phải so khớp các đoạn mà ta biết chắc chắn chúng sẽ 100% trùng khớp.
	- VD:
		txt = "<strong>AAAA</strong>ABAAABA"
		pat = "<strong>AAAA</strong>"

		+ Ta nhận thấy ngay phần AAAA được bôi đậm là phần đầu tiên khớp.
		+ Nếu làm tiếp theo cách duyệt toàn bộ thì ta sẽ phải so sánh lại từ kí tự đầu tiên đến kí tự cuối
		của xâu mẫu để tìm kiếm xâu khớp tiếp theo. Làm như vậy sẽ rất lâu vì vậy ta áp dụng ý tưởng của 
		thuật toán KMP như sau:

		txt = "AAAA<strong>A</strong>BAAABA"
		pat = " AAA<strong>A</strong>"

		+ Ta thấy rằng 3 kí tự A đầu của xâu mẫu chắc chắn khớp 3 kí tự tương ứng trên văn bản, điều ta 
		cần làm là so sánh kí tự thứ 4. Nếu khớp thì ta đã tìm được thêm 1 xâu khớp mà không cần so sánh 
		lại từ kí tự đầu của xâu mẫu.
2. Các bước thực hiện ý tưởng:
	2.1 Xử lý tìm ra mảng lưu trữ độ dài lớn nhất của xâu khớp tính đến vị trí tương ứng của xâu mẫu khi
	dịch xâu sang trái 1 kí tự.
		-VD: 
		“AAAA” 
		[0, 1, 2, 3]

		“ABCDE”, 
		[0, 0, 0, 0, 0]

		“AABAACAABAA”
		[0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]

		- chi tiết:
			+ Xuất phát với độ dài sâu khớp(len) là 0, duyệt từ phần tử thứ 2(indexPattern = 1) của xâu mẫu(len=0,indexPattern = 1).
			+ (if) Nếu kí tự vị trí [indexPattern] giống với kí tự vị trí [len] ta thực hiện:
				$ tăng độ dài xâu khớp lên 1
				$ lưu độ dài xâu khớp tương ứng với vị trí hiện tại(indexPattern)
				$ tăng indexPattern lên 1
			+ (else) Nếu kí tự vị trí [indexPattern] không giống với kí tự vị trí [indexPattern-1]
				$ (if)Nếu độ dài xâu khớp khác 0 ta gán lại độ dài xâu khớp bằng độ dài xâu khớp tại vị trí [len-1]
				$ (else)Nếu độ dài xâu khớp = 0, ta lưu độ dài xâu khớp tương ứng với vị trí hiện tại(indexPattern) và tăng indexPattern 
				lên 1 
				<strong>$ giải thích cho bước else này: Nó tương ứng nếu xâu trùng khớp bị ngắt quãng tại vị trí đang xét thì độ dài xâu 
				trùng khớp dài nhất tính đến vị trí hiện tại cũng chỉ bằng xâu trùng khớp dài nhất ở các vị trí phía trước.</strong>

	2.2 Dùng xâu chuẩn bị ở bước 2.1 để so khớp xâu, thực hiện ý tưởng bỏ qua việc so khớp các xâu biết chắc chắn sẽ trùng.
		- Ta duyệt lần lượt từ đầu cả 2 xâu mẫu và văn bản.
		- (if) Nếu kí tự đang xét ở 2 xâu trùng khớp(stringAllText[indexAllText] == stringPattern[indexPattern]):
			+ tăng indexAllText lên 1
			+ tăng indexPattern lên 1
		- (if) Nếu toàn bộ xâu mẫu khớp(indexPattern == stringPattern.length):
			+ ta lưu lại vị trí bắt đầu trùng khớp(indexResult.push(indexAllText - stringPattern.length))
		- (else if) Nếu chưa duyệt hết văn bản và hai kí tự 2 xâu đang xét không giống nhau
		(indexAllText < stringAllText.length && stringAllText[indexAllText] != stringPattern[indexPattern])
			+ (if) nếu kí tự ở xâu mẫu có vị trí khác vị trí kí tự đầu tiên(tức không phải so khớp lại từ đầu xâu mẫu), ta tìm ngược vị 
			trí phải so khớp với các phần trước vị trí đó chắc chắn trùng khớp. (indexPattern = lps[indexPattern -1])
			+ (else) nếu phải sơ khớp lại từ đầu, ta tăng vị trí kí tự của văn bản đang xét lên 1.(indexAllText++)			

		- khi duyệt hết, ta được 1 mảng các vị trí bắt đầu trùng khớp.

		`,
		doAlgorithm: `
var KMP = function(stringPattern,stringAllText)
{
	let lps = computeLPSArray(stringPattern,stringAllText);
	let indexResult = [];
	let indexAllText = 0, indexPattern = 0;
	if(lps && stringPattern.length != 0 && stringAllText.length != 0)
	{
		while(indexAllText < stringAllText.length)
		{
			if(stringAllText[indexAllText] == stringPattern[indexPattern])
			{
				indexPattern++;
				indexAllText++;
			}

			if(indexPattern == stringPattern.length)
			{
				indexResult.push(indexAllText - stringPattern.length);
				indexPattern = lps[indexPattern-1];
			}
			else if(indexAllText < stringAllText.length && stringAllText[indexAllText] != stringPattern[indexPattern])
			{
				if(indexPattern != 0)
					indexPattern = lps[indexPattern -1];
				else 
					indexAllText++;
			}
		}
	}
	return indexResult;
}

function computeLPSArray(stringPattern,stringAllText)
{
	if(stringPattern.length > 0)
	{
		let lps = Array.apply(null, Array(stringPattern.length)).map(function () {return 0;})
		let indexPattern = 1;
		lps[0] = 0;
		let len = 0;
		while(indexPattern < stringPattern.length)
		{
			if(stringPattern[indexPattern] == stringPattern[len])
			{
				len++;
				lps[indexPattern] = len;
				indexPattern++;
			}
			else
			{
				if(len != 0)
				{
					len = lps[len-1];
				}
				else
				{
					lps[indexPattern] = 0;
					indexPattern++;
				}
			}
		}
		return lps;
	}
	return null;
}	
		`,
	};
}