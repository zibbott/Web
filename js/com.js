angular.module("myApp", [])
	.controller("myCtrl", ["$scope", function($scope) {
		$scope.account = 18304.09;
	}])
	.filter('amountFtr', amountFtr);

function amountFtr() {
	return function(input) {
		if(input != undefined && input != 0) {
			var strOutput = "",
				strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
			input = Number(input).toString();
			input += "00";
			var intPos = input.indexOf('.');
			if(intPos >= 0) {
				input = input.substring(0, intPos) + input.substr(intPos + 1, 2);
			}
			strUnit = strUnit.substr(strUnit.length - input.length);
			for(var i = 0; i < input.length; i++) {
				strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(input.substr(i, 1), 1) + strUnit.substr(i, 1);
			}
			return strOutput.replace(/^零角零分$/, '').replace(/零角零分$/, '整').replace(/^零元零角/, '').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元").replace(/零角/, '零').replace(/零元/, '').replace(/零分$/, "");
		} else {
			var strOutput = "零元整";
			return strOutput;
		}
		return input;
	};
}