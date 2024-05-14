import { romanNumber } from "../src/romanNumber";

describe('RomanNumerals Test', () => {
    it('should return an I when sending 1', () => {
        expect(romanNumber(1)).toBe("I");
    });
    it('should return an II when sending 2', () => {
        expect(romanNumber(2)).toBe("II");
    });
    it('should return an III when sending 3', () => {
        expect(romanNumber(3)).toBe("III");
    });
    it('should return an IV when sending 4', () => {
        expect(romanNumber(3)).toBe("III");
    });
    it('should return an V when sending 5', () => {
        expect(romanNumber(5)).toBe("V");
    });
    it('should return an VII when sending 7', () => {
        expect(romanNumber(7)).toBe("VII");
    });
    it('should return an XXXVIII when sending 38', () => {
        expect(romanNumber(38)).toBe("XXXVIII");
    });
    it('should return an IV when sending 4', () => {
        expect(romanNumber(4)).toBe("IV");
    });
    it('should return an IX when sending 9', () => {
        expect(romanNumber(9)).toBe("IX");
    });
    it('should return an XLII when sending 42', () => {
        expect(romanNumber(42)).toBe("XLII");
    });
    it('should return an L when sending 50', () => {
        expect(romanNumber(50)).toBe("L");
    });
    it('should return an XC when sending 90', () => {
        expect(romanNumber(90)).toBe("XC");
    });
    it('should return an CI when sending 101', () => {
        expect(romanNumber(101)).toBe("CI");
    });
    it('should return an CDIV when sending 404', () => {
        expect(romanNumber(404)).toBe("CDIV");
    });
    it('should return an DCCXXI when sending 721', () => {
        expect(romanNumber(721)).toBe("DCCXXI");
    });
    it('should return an MMCMLVII when sending 2957', () => {
        expect(romanNumber(2957)).toBe("MMCMLVII");
    });
});
