// 1
function is_array(e){
    if(Array.isArray(e)){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
is_array('W3resource');
is_array([1,2,3,4]);

// 2
function array_clone(e){
    const new_array=e.slice(0);
    console.log(new_array);
}
array_clone([1,2,3,4,6]);

// 3
function first(e,n){
    if(typeof n ==='undefined' ){
        console.log(e[0]);
    }
    else if (typeof n !='undefined' && n>0){
        console.log(e.slice(0,n));
    }
    else{
        console.log([]);
    }
}
first([7, 9, 0, -2]);
first([7, 9, 0, -2],3);
first([],3);
first([7, 9, 0, -2],6);
first([7, 9, 0, -2],-3);

// 4
function array_to_string(e){
    console.log(e.toString());
    console.log(e.join(','));
    console.log(e.join('+'));
}
array_to_string( ["Red", "Green", "White", "Black"]);

// 5
function count(e){
    let ans;
    let countans=-1;
    e.sort();
    console.log(e);
    for(let item of e){
        let sum;
        const s=e.indexOf(item);
        const l=e.lastIndexOf(item);
        sum=l-s+1;
        if(sum>countans){
            countans=sum;
            ans=item;
        }
        
    }
    console.log(ans +" occured "+ countans +" times");
}

count([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);