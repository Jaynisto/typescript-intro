function getDiscount(price, isMember) {
    if (isMember) {
        return price * 0.2; // 20% discount for members
    }
    else {
        return 0;
    }
}
var totalPrice = 100;
var isMember = true;
var discount = getDiscount(totalPrice, isMember);
console.log("Discount: $".concat(discount));
