import { addedCar } from './compute';

describe('addedCar', () => {
    it('it should return car added', () => {
        expect(addedCar()).toContain('Car Added');
    });

});