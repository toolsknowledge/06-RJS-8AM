console.log("welcome to javascript");               //welcome to javascript
console.log( 10+10 );                               //20
console.log( 10+"10" );                             //1010
console.log(10+ +"10");                             //20
console.log( 10 - "10" );                           //0
console.log( "10" * 10 );                           //100
console.log( "10" / 10 );                           //1
console.log( "10" / "10" );                         //1
console.log( 10 / "A" );                            //NaN
console.log( 10 / "0" );                            //Infinity
console.log( 10>9>8 );                              //false
console.log( 3<2<1 );                               //true
console.log( 10 == "10" );                          //true 
console.log( 10 === "10" );                         //false
console.log( 10 == "ten" );                         //false
console.log( 10 === "ten" );                        //false
//true ---1
//false --- 0
console.log( true + true );                         //2
console.log( true - true );                         //0
console.log( true / true );                         //1
console.log( true / false );                        //Infinity
console.log( 10/true );                             //10
console.log( 0.1+0.2 );                             //0.30000000000000004
console.log( 0.1+0.2 == 0.3 );                      //false
console.log( 0.1+0.2 === 0.3 );                     //false

//BODMAS
//B - Bracket
//O - Of
//D - Division
//M - Multiplication
//A - Addition
//S - Subtraction
console.log( 10 -5/5+10 );                  //19
console.log( (10 -5) / (5+10) );            //0.3333333333333333

// &            ----   if both are "true" then result is "true"
// |            ----   if atleast one value is true then result is true
// ^            ----   if both are opposite then result is true

console.log( 1 & 1 );           //1
console.log( 1 & 0 );           //0
console.log( 0 & 1 );           //0
console.log( 0 & 0 );           //0
console.log( 1 & 1 & 1 );       //1
console.log( 1 & 1 & 0 );       //0


console.log( 1 | 1 );           //1
console.log( 1 | 0 );           //1
console.log( 0 | 1 );           //1
console.log( 0 | 0 );           //0
console.log( (1 & 1) | (1 | 0) );    //1


console.log( 1 ^ 0 );               //1
console.log( 0 ^ 1 );               //1
console.log( 1 ^ 1 );               //0
console.log( 0 ^ 0 );               //0









