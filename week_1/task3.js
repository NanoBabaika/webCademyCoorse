//Задача 3. Функции
function calculateTips (orderPrice) {
	let tips = 0;
	if (orderPrice <= 1000) {
		tips = orderPrice * 20 /100;
		console.log(`Cумма чаевых при цене заказа ${orderPrice} руб, составит:` + tips);
		return tips;
	} else if  (orderPrice > 1000 || orderPrice < 3000) {
		tips = orderPrice * 15 /100;
		console.log(`Cумма чаевых при цене заказа ${orderPrice} руб, составит:` + tips);
		return tips;
	} else if (orderPrice >= 3000) {
		tips = orderPrice * 10 /100;
		console.log(`Cумма чаевых при цене заказа ${orderPrice} руб, составит:` +  tips);
		return tips;
	}
}



// Пример работы функции
calculateTips(900);

calculateTips(2450);

calculateTips(7000);
