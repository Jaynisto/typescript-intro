function getDiscount(price: number, isMember: boolean): number {
    if (isMember) {
      return price * 0.2; // 20% discount for members
    } else {
      return 0;
    }
  }
  
  const totalPrice: number = 100;
  const isMember: boolean = true;
  
  const discount: number = getDiscount(totalPrice, isMember);
  console.log(`Discount: $${discount}`);
  