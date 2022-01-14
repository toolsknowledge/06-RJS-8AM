//array
//collection of "indexed" and "hetrogeneous" elements called as "array"
//index starts from "0"
//[]
//we can access array elements with the help of "indexes"


/*
    let arr = [10,20,30,40,50];
    console.log( arr[0], arr[1], arr[4], arr[5], arr[100],arr[-1] );    
    //10 20 50 undefined undefined undefined
*/


/*
    let arr = [10,20,30,40,50];
    console.log( arr.length );                  //5
    arr[99] = 1000;
    console.log( arr.length );                  //100
*/


/*
let arr = [10,20,30,40,50,60,70,80,90,100];
console.log( arr.length );                      //10


arr.length = 5;
console.log( arr[0],arr[1],arr[4],arr[5],arr[9] );          // 10 20 50 undefined undefined                         
*/



/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                              //10

    delete arr[0];
    console.log( arr.length );                              //10


    delete arr[9];
    console.log(arr.length);                                //10

    console.log( arr );                                     //[ <1 empty item>, 20, 30, 40, 50, 60, 70, 80, 90, <1 empty item> ]
*/


/*
console.log(
    [1,2,3,4,5].map( (element,index)=>{
        return element*100;
    } )
);              //[ 100, 200, 300, 400, 500 ]
*/

/*
console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=3;
    })
);              //[ 3, 4, 5 ]
*/


/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);              //15
*/


/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*10;
        }).filter((element,index)=>{
            return element>=40;
        }).reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );          //90
*/


/*
let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.splice(4,3);
console.log( arr1 );                //[10,20,30,40,80,90,100]


arr1.splice(4,1);
console.log( arr1 );                //[ 10, 20, 30, 40, 90, 100 ]

arr1.splice(5,1);
console.log(arr1);                  //[ 10, 20, 30, 40, 90 ]

arr1.splice(1,1);
console.log( arr1 );                //[ 10, 30, 40, 90 ]

arr1.splice(3,0,50,60,70,80);
console.log( arr1 );                //[10, 30, 40, 50, 60, 70, 80, 90]


arr1.splice(1,0,20);
console.log( arr1 );                //[10, 20, 30, 40, 50, 60, 70, 80, 90]


arr1.splice((arr1.length+1),0,100);
console.log(arr1);              //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
*/


/*
let arr = [10,20,30,10,20,30];
arr.forEach((element,index)=>{
    console.log( arr.indexOf(element) );
};              // 0 1 2 0 1 2
*/


/*
    let arr = [10,20,30,10,20,30];
    console.log(
        arr.filter((element,index)=>{
            return arr.indexOf(element) == index;
        })
    );
    //[ 10, 20, 30 ]
*/

/*
    //sort()
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1 - arg2;
        })
    );  
    //[ 1, 2, 3, 4, 5 ]

    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2 - arg1;
        })
    ); 
    //[ 5, 4, 3, 2, 1 ]
*/


/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.slice(4,7) );                          //[ 50, 60, 70 ]
    console.log( arr.slice(0,2) );                          //[ 10, 20 ]
    console.log( arr.slice(7) );                            //[ 80, 90, 100 ]
*/

/*
    let arr = [20,30,40];
    console.log( arr );                                         //[ 20, 30, 40 ]
    arr.push(50);
    console.log( arr );                                         //[ 20, 30, 40, 50 ]
    arr.unshift(10);
    console.log( arr );                                         //[ 10, 20, 30, 40, 50 ]
    arr.pop();
    console.log( arr );                                         //[ 10, 20, 30, 40 ]
    arr.shift();
    console.log( arr );                                         //[ 20, 30, 40 ]
*/


/*
    let arr = [10,20,30,40,50];
    console.log( arr.includes(30) );                //true
    console.log( arr.includes(300) );               //false


    let arr1 = [10,20,30,40,50];
    console.log( 
        arr1.find((element,index)=>{
            return element == 30;
        }) 
    );
    //30

    console.log(
        arr1.find((element,index)=>{
            return element === 300;
        })
    );      //undefined
*/


let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(
    arr.findIndex((element,index)=>{
        return element == 30;
    })
);          //2

console.log(
    arr.findIndex((element,index)=>{
        return element == 80;
    })
);          //7

console.log(
    arr.findIndex((element,index)=>{
        return element == 1000;
    })
);          //-1


arr.splice(arr.findIndex((element,index)=>{
    return element == 40;
}),1);
console.log( arr );     
//[10, 20, 30,  50, 60, 70, 80, 90, 100]



















































































































































































































