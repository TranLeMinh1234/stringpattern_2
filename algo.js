const inpPattern = document.querySelector("input[name='pattern']");
const inpAllText = document.querySelector("textarea[name='all_text']");
const kq = document.querySelector('.kq');
const select_Algorithm = document.querySelector('.algorithm-execute');
const complex = document.querySelector('.complexity');
const theory = document.querySelector('.theory');
const doAlgorithm = document.querySelector('.doAlgorithm');


inpPattern.oninput = function(){
    doStringMatch();
}

inpAllText.oninput = function(){
    doStringMatch();
}

select_Algorithm.onchange = function()
{
	doStringMatch();
	fillInformationAlgorithm();
	hlEle();
}


function main()
{
}

function fillInformationAlgorithm()
{
	let objectInfo = selectInforAlgorithm();
	complex.innerHTML = objectInfo.complexity;
	theory.innerHTML = objectInfo.theory;
	doAlgorithm.innerHTML = objectInfo.doAlgorithm;
}


function selectInforAlgorithm()
{
	let enumAlo = select_Algorithm.value;
	switch(parseInt(enumAlo))
	{
		case 1: 
			return informationKMP();
		case 2:
			return informationNaive();
		case 3:
			return informationBoylerMore();
		case 4:
			return infomationKarpRabin();
		case 5:
			return informationSmith();
		case 6:
			return informationHorspool();
		break;
		case 7:
			return informationQuickSearch();
		case 8:
			return informationMorrisPatt();
		case 9:
			return informationSkipSearch();
		case 10:
			return informationNotSoNaive();
		case 11:
			return informationRaita();
		case 12:
			return informationTunedBoyerMoore();
		break;		
	}

	return functionWillExecute;	
}


function selectAlgorithm()
{
	let enumAlo = select_Algorithm.value;
	let functionWillExecute = function(){};
	switch(parseInt(enumAlo))
	{
		case 1: 
			functionWillExecute = KMP;
		break;
		case 2:
			functionWillExecute = naive;
		case 3:
			functionWillExecute = BloyerMore;
		break;
		case 4:
			functionWillExecute = KarpRabin;
		case 5:
			functionWillExecute = Smith;
		case 6:
			functionWillExecute = Horspool;
		break;
		case 7:
			functionWillExecute = QuickSearch;
		case 8:
			functionWillExecute = MorrisPatt;
		case 9:
			functionWillExecute = SkipSearch;
		case 10:
			functionWillExecute = NotSoNaive;
		case 11:
			functionWillExecute = Raita;
		break;
		case 12:
			functionWillExecute = TunedBoyerMoore;
		break;
	}

	return functionWillExecute;		
} 

function doStringMatch()
{
    let algorithm_execute = selectAlgorithm(),
    	stringPattern = inpPattern.value,
		stringAllText = inpAllText.value,
		indexResult = stringPattern.length == 0 ? [] : algorithm_execute(stringPattern,stringAllText);
    htmlResult({indexResult: indexResult, lengthPattern: stringPattern.length},stringPattern,stringAllText)
}

function htmlResult(objectResult,stringPattern,stringAllText)
{
	let indexResult = objectResult.indexResult;
	if(stringPattern != "")
		stringAllText = stringAllText.replaceAllByIndexArray(indexResult,stringPattern, `<span style="background-color: yellow">${stringPattern}</span>`,stringAllText)
	kq.innerHTML = stringAllText;
}

String.prototype.replaceAt = function(index,stringBeReplaced, stringBecome) {
    return this.substring(0, index) + stringBecome + this.substring(index + stringBeReplaced.length);
}

String.prototype.replaceAllByIndexArray = function(indexArray,stringBeReplaced,stringBecome,stringResult)
{
	for(let i = indexArray.length-1; i >= 0;i--)
	{
		stringResult = stringResult.substring(0,indexArray[i]) + stringBecome + stringResult.substring(indexArray[i] + stringBeReplaced.length);
	}

	return stringResult;
}



