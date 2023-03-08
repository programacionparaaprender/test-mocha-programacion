var expect = require('chai').expect;
describe('Strings test', () => {
    const foo = 'bar';
    it ('Es igual al valor del string', () => {
        expect(foo).to.equal('bar');
    });
    it('Es de tipo string', () => {
        expect(foo).to.be.a('string');
        expect(typeof foo).to.equal('string');
    });
    it('Tiene una longitud de 3 carácteres', () => {
        expect(foo.length).to.equal(3);
        expect(foo).to.have.length(3);
    });
    it('Encuentra / Incluye "ba" en la palabra', ()=> {
        expect(foo.substring(0,2)).to.equal('ba');
        expect(foo).to.include('ba');
        expect(foo).to.match(/^ba/);
        expect(foo).to.have.string('ba');
    });
    it('NO incluye "fa" en la palabra', ()=> {
        expect(foo.substring(0, 2)).to.not.contains('fa');
        expect(foo).to.not.include('fa');
        expect(foo).to.not.match(/^fa/);
        expect(foo).to.not.have.string('fa');
    });
});
/* describe.only('Strings test', () => {
    const foo = 'bar';
    it ('Es igual al valor del string', () => {
        expect(foo).to.equal('bar');
    });
    it('Es de tipo string', () => {
        expect(foo).to.be.a('string');
        expect(typeof foo).to.equal('string');
    });
    it('Tiene una longitud de 3 carácteres', () => {
        expect(foo.length).to.equal(3);
        expect(foo).to.have.length(3);
    });
    it('Encuentra / Incluye "ba" en la palabra', ()=> {
        expect(foo.substring(0,2)).to.equal('ba');
        expect(foo).to.include('ba');
        expect(foo).to.match(/^ba/);
        expect(foo).to.have.string('ba');
    });
    it('NO incluye "fa" en la palabra', ()=> {
        expect(foo.substring(0, 2)).to.not.contains('fa');
        expect(foo).to.not.include('fa');
        expect(foo).to.not.match(/^fa/);
        expect(foo).to.not.have.string('fa');
    });
}); */

