describe('Bubble Sort', function(){

    // ****** DOESN'T WORK ******
    // beforeAll(function () {
    //     spyOn(window, 'bubbleSort').and.callThrough();
    // });
    //   it('', function () {
    //     swap.calls.count();
    //   });
        
        
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it ('handles an unsorted array', function(){
        expect( bubbleSort(['x','a','t']) ).toEqual( ['a','t','x']);
        expect( bubbleSort([99,44,67]) ).toEqual( [44,67,99]);
        expect( bubbleSort([5,1,8,2,9,3]) ).toEqual( [1,2,3,5,8,9] );
        expect( bubbleSort([-5,10,-1]) ).toEqual( [-5,-1,10]);
        // console.log(bubbleSort.calls.count());
    });
});
