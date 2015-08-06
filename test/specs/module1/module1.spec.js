describe('Module1 - Person' , function() {
    var baseSrc = '../../../src/';
    var module3 = require(baseSrc + 'module1/index.js');
    var Person = module3.Person;
    var john;
    
    beforeEach(function() {
        john = new Person('John', 'Box');
    });
   
    describe('Creating a person named "John Box"', function() {
        beforeEach(function() {

        });
        
        it('The name should be "John Box"', function() {
            expect(john.name).toEqual('John Box');
        });

        describe('Modifying the name to "John Travolta"', function() {
            beforeEach(function() {
                john.name = 'John Travolta';
            });
            
            it('The lastName should be "Travolta"', function() {
                expect(john.lastName).toEqual('Travolta');
            });

            it('The firstName should be "John"', function() {
                expect(john.firstName).toEqual('John');
            });

        });

    });
    

});
