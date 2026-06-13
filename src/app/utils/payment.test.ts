import { describe, it, expect } from "vitest";
import { calculateFee } from "./payment";

describe("ระบบคำนวณเงินจ่าย (Payment Center)", () => {
  it("ถ้ามียอดโอน 100 บาท ค่าธรรมเนียม 5% ต้องได้ 5 บาทเป๊ะๆ", () => {
    const fee = calculateFee(100);
    expect(fee).toBe(5); // คาดหวังว่าผลลัพธ์ต้องได้เป็น 5
  });

  it("กรณีมียอด 0 บาท ค่าธรรมเนียมต้องเป็น 0", () => {
    const fee = calculateFee(0);
    expect(fee).toBe(0);
  });

  it("กรณีโอนเศษสตางค์ เช่น 45.50 บาท ต้องปัดเศษถูก", () => {
    const fee = calculateFee(45.5);
    // 5% ของ 45.50 = 2.275 ปัดเศษตามกฎปกติจะปัดเป็น 2.28
    expect(fee).toBe(2.28);
  });

  it("กรณีโอนยอดเยอะๆ เช่น 10,000 บาท ค่าธรรมเนียมต้องไม่ขาดไม่เกิน 500", () => {
    const fee = calculateFee(10000);
    expect(fee).toBe(500);
  });
});
