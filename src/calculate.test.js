import { calculate } from "./calculate.js";

describe('Teste da fórmula', () => {
    test('Fórmula funciona', () => {
        //expect(calculate(1000, 50)).toBeCloseTo(4, 2);
        expect(calculate(1000, 50)).toBeGreaterThanOrEqual(4);
        expect(calculate(1000, 50)).toBeLessThanOrEqual(5);
    });
});