
// var obj={a:1,b:2}
// let a= Object.entries(obj)
// console.log(a);


// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// var m=new Map();
// m.set("ahmed",20);
// m.set("soha",50)

// console.log(Object.fromEntries(m));


////////////////////////////////

//proxy


let obj2={
    name:"Ali",
    age:20,
    
}
var handler={
    set:function(target,prop,value){
        if(prop in target){
            if(prop=="name"){
                if(typeof value=="string"){
                    target[prop]=value;
                }
                else{
                    throw `value must be string`
                }
            }else{

            }
        }
        
    },
    get:function (target ,key){
        if(key in target){
            return target[key]
        }else{
            throw `${key} doesn't exist`
        }
        
    }

} 






let p=new Proxy(obj2,handler)
p.name="ahmed"

console.log(p.salary);
