/**
 * 这是一个验证数据格式的工具类
 */
var ValidateUtil = {};

/**
 * 判断元素是否合法（或为空）
 * 
 * @returns {Boolean}
 */
ValidateUtil.isValidObj = function(obj) {
	if (typeof (obj) == "undefined" || obj == null || obj == "" || obj.length == 0) {
		return false;
	}
	return true;
};

/**
 * 判断对象是否有某属性
 * 
 * @param obj {object}
 * @param name {string}
 * @param isInherit {boolean}
 * 
 * @return {Boolean}
 */
ValidateUtil.hasProp = function (obj, name, isInherit) {
	if (isInherit) {
		return name in obj;
	} else {
		return obj.hasOwnProperty(name);
	}
};

/**
 * 是否空对象
 * 
 * @param obj
 *            {Object}
 * @return {Boolean}
 */
ValidateUtil.isEmptyObject = function(obj) {
	for ( var name in obj) {
		return false;
	}
	return true;
};

/**
 * 判断是否是方法
 * 
 * @returns {Boolean}
 */
ValidateUtil.isFunction = function(fn) {
	if (typeof fn != "function") {
		return false;
	}
	return true;
};

/**
 * 判断是否字符串
 * 
 * @returns {Boolean}
 */
ValidateUtil.isString = function(str) {
	if (typeof str != "string") {
		return false;
	}
	return true;
};

/**
 * 判断是否JSON格式字符串
 * 
 * @param jsonstr
 *            {String} 字符串参数
 * @return {Boolean} 验证结果
 */
ValidateUtil.isJsonString = function(jsonstr) {
	var flag = false;
	if (ValidateUtil.isValidObj(jsonstr)) {
		try {
			eval("(" + jsonstr + ")");
			flag = true;
		} catch (e) {
			flag = false;
		}
	}
	return flag;
};

/**
 * 判断是否全部是中文
 * 
 * @param str
 * @returns {Boolean}
 */
ValidateUtil.isAllChn = function(str) {
	var reg = /^[\u4E00-\u9FA5]+$/;
	if (!reg.test(str)) {
		return false;
	}
	return true;
};

/**
 * 判断字符是否有中文字符
 * 
 * @param s
 * @returns {Boolean}
 */
ValidateUtil.isHasChn = function(s) {
	var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
	if (!patrn.exec(s)) {
		return false;
	} else {
		return true;
	}
};

/**
 * 判断是否是数字
 * 
 * @param num
 *            {Object}
 * @return {Boolean}
 */
ValidateUtil.isNumber = function(num) {
	return /^\d+$/.test(num);
};

/**
 * 判断是否为正负数
 */
ValidateUtil.isReal = function(num) {
	return /^(-)?[1-9][0-9]*$/.test(num);
};

ValidateUtil.isReal1 = function(num) {
	return /^(-)?[0-9][0-9]*$/.test(num);
};

ValidateUtil.isReal2 = function(num) {
	return /^[1-9][0-9]*$/.test(num);
};

/**
 * 判断是不是IE浏览器
 */
ValidateUtil.isIE = function() {
	return navigator.userAgent.indexOf("MSIE") > 0
			|| navigator.userAgent.indexOf(".NET") > -1;
};

/**
 * 判断是不是Chrome浏览器
 */
ValidateUtil.isChrome = function() {
	return navigator.userAgent.indexOf("Chrome") > 0;
};

/**
 * 判断是不是Opera浏览器
 */
ValidateUtil.isOpera = function() {
	return navigator.userAgent.indexOf("OPR") > 0;
};

/**
 * 是否是IP
 */
ValidateUtil.isIP = function(strIP) {
	var flag = false;
	if (ValidateUtil.isValidObj(strIP)) {
		var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; // 匹配IP地址的正则表达式
		if (re.test(strIP)) {
			if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256
					&& RegExp.$4 < 256)
				flag = true;
		}
	}
	return flag;
};

/**
 * 判断是否手机号码格式
 */
ValidateUtil.isMobile = function(phone) {
	var flag = false;
	if (ValidateUtil.isValidObj(phone)) {
		var re = /(^1[3|5|8][0-9]{9}$)/;
		flag = re.test(phone);
	}
	return flag;
};

/**
 * 是否是邮箱
 */
ValidateUtil.isEmail = function(str) {
	var myReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if (myReg.test(str))
		return true;
	return false;
};

/**
 * 是否是电话支持带区号
 */
ValidateUtil.isPhone = function(strPhone) {
	var phoneRegWithArea = /^[0][1-9][0-9]{1,2}-[0-9]{5,10}$/;
	var phoneRegWithArea1 = /^[0][1-9][0-9]{1,2}[0-9]{5,10}$/;
	var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
	if (strPhone.length > 9) {
		if (phoneRegWithArea.test(strPhone)) {
			return true;
		} else {
			if (phoneRegWithArea1.test(strPhone)) {
				return true;
			}
			return false;
		}
	} else {
		if (phoneRegNoArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	}
};

/**
 * 判断是否是电话（ (支持区号)固话、移动号码通用）
 * 
 * @param num
 *            {Object}
 * @return {Boolean}
 */
ValidateUtil.isTel = function(num) {
	if (ValidateUtil.isNumber(num)) {// 先判断是否是数字
		if (num.length == 11) {// 如果是11位则为移动电话
			if (ValidateUtil.isMobile(num)) {
				return true;
			} else {
				return false
			}
		} else {// 固话
			if (ValidateUtil.isPhone(num)) {
				return true;
			} else {
				return false
			}
		}
	} else {
		return false;
	}

};

/**
 * 是否是合法身份证
 */
ValidateUtil.isIDCard = function(idCard) {

	idCard = trim(idCard.replace(/ /g, "")); // 去掉字符串头尾空格
	if (idCard.length == 18) {
		var a_idCard = idCard.split(""); // 得到身份证数组
		if (isValidityBrithBy18IdCard(idCard)
				&& isTrueValidateCodeBy18IdCard(a_idCard)) { // 进行18位身份证的基本验证和第18位的验证
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * 
 * @param a_idCard
 *            身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
	var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ]; // 加权因子
	var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]; // 身份证验证位值.10代表X
	var sum = 0; // 声明加权求和变量
	if (a_idCard[17].toLowerCase() == 'x') {
		a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
	}
	for (var i = 0; i < 17; i++) {
		sum += Wi[i] * a_idCard[i]; // 加权求和
	}
	valCodePosition = sum % 11; // 得到验证码所位置
	if (a_idCard[17] == ValideCode[valCodePosition]) {
		return true;
	} else {
		return false;
	}
}

/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * 
 * @param idCard
 *            18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18) {
	var year = idCard18.substring(6, 10);
	var month = idCard18.substring(10, 12);
	var day = idCard18.substring(12, 14);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 这里用getFullYear()获取年份，避免千年虫问题
	if (temp_date.getFullYear() != parseFloat(year)
			|| temp_date.getMonth() != parseFloat(month) - 1
			|| temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 是否是图片文本类型
 */
ValidateUtil.isImage = function(strImage) {
	return (/image/i).test(strImage);
};

/**
 * TODO 待完善 判断特殊字符
 * 
 * @param str
 * @returns
 */
ValidateUtil.isContainSpecialChar = function(str) {
	var rtn = {
		flag : false,
		message : "not"
	};
	var reg = /[~$%^￥]+/;
	if (str != "") {
		if (reg.test(str)) {
			rtn.flag = true;
			rtn.message = "请勿输入：~、$、%、^、￥ 等特殊字符！";
		}
	}
	return rtn;
};

/**
 * 判断起始时间是否合法
 * 
 * @param startTime
 *            endTime
 * @return boolean
 */

ValidateUtil.isProperTime = function(a, b) {

	if (b = null) {
		return true;
	} else {
		if (a > b) {
			jAlert("起始时间不能大于结束时间！", null, null, _waitTime, null, "warn");
			return false;
		} else {
			return true;
		}
	}

}

/**
 * 修改密码校验(两次输入一致)
 */
ValidateUtil.confNewPwd = function(newPwd,confNewPwd){
	var rtn = {
		flag : false,
		message : ""
	}
	
	if(newPwd != confNewPwd){
		rtn.message = "两次密码输入不一致";
		rtn.flag = true;
	}
	return rtn;
};
