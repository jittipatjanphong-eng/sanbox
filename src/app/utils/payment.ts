export function calculateFee(amount: number): number {
  const rawFee = amount * 0.05;

  // 💡 ใช้สูตรปัดเศษทศนิยม 2 ตำแหน่งให้ถูกต้องตามหลักคณิตศาสตร์การเงิน
  return Math.round(rawFee * 100) / 100;
}
