var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    const numerouno = 1;
    const boolean1 = true;
    const boolean2 = false;
    it ('El valor true es verdadero', () => {
        expect(boolean1).to.equal(true);
        expect(boolean1).to.be.true;
    });
    it('El valor false es falso', () => {
        expect(boolean2).to.equal(false);
        expect(boolean2).to.be.false;
    })
    it('1 es de tipo número', () => {
        expect(numerouno).to.be.a('number');
        expect(typeof numerouno).to.equal('number');
    });
    it('1 NO es de tipo string', () => {
        expect(numerouno).to.not.be.a('string');
        expect(typeof numerouno).to.not.equal('string');
        expect(typeof numerouno === 'string').to.be.false;
        expect(typeof numerouno == 'string').to.equal(false);
    });
    it('1 NO es de tipo booleano', () => {
        expect(numerouno).to.not.be.a('Boolean');
        expect(typeof numerouno).to.not.equal('Boolean');
        expect(typeof numerouno === 'Boolean').to.be.false;
        expect(typeof numerouno == 'Boolean').to.equal(false);
    });

});

