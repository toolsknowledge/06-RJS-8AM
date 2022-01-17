//callback
//passing one function definition to another function as argument/parameter called as callback function

/*
    function fun_one(param1){
        console.log( param1() );
    }

    fun_one( function fun_two(){
        return "Hello";
    } );

    //Hello
*/


/*
    function fun_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    };
    fun_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    });
    //Hello_1 Hello_2 Hello_3
*/



/*
    function fun_one(param1,param2){
        return param2("Welcome to "+param1);
    };

    fun_one("ReactJS", function result(x){
        console.log( x );
    });

    //Welcome to ReactJS
*/


function add(num,callback){
    return callback(num+5,false);
}


function sub(num,callback){
    return callback(num-3,false);
}

function mul(num,callback){
    return callback(num*2,false);
}

function div(num,callback){
    return callback((num/2)-2, false);
}


add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        });
    }
});   //5














































