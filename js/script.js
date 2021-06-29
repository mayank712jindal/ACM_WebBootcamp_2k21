// // 1. test()

// let pass = document.getElementById('inputPassword');
// pass.addEventListener('change',function(){
//     let regex = /AcmBootcamp/i;
//     console.log(pass.value);
//     console.log(regex.test(pass.value));
// })


// // 2. exec()
// let pass = document.getElementById('inputPassword');
// pass.addEventListener('change',function(){
//     let regex = /AcmBootcamp/i;
//     console.log(pass.value);
//     console.log(regex.exec(pass.value));
// })

// // 3. match() require global flag for multiple value
// let pass = document.getElementById('inputPassword');
// pass.addEventListener('change',function(){
//     let regex = /AcmBootcamp/ig;
//     console.log(pass.value);
//     console.log(pass.value.match(regex));
// })

// // 4. search() return integer
// let pass = document.getElementById('inputPassword');
// pass.addEventListener('change',function(){
//     let regex = /AcmBootcamp/ig;
//     console.log(pass.value);
//     console.log(pass.value.search(regex));
// })

// // 4. search() return integer
// let pass = document.getElementById('inputPassword');
// pass.addEventListener('change',function(){
//     let regex = /AcmBootcamp/ig;
//     console.log(regex.source);
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Metacharacter Symbol
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

* - 0 more than 1
. exactly 1
^ starting with
$ ending with
+ 1 or more
\ 
*/

let pass = document.getElementById('inputPassword');
pass.addEventListener('change',function(){
    let regex = /A*p/ig;
    // let regex = /Acm.ootcamp/ig;
    // let regex = /^AcmBootcamp/ig;
    // let regex = /AcmBootcamp$/ig;
    // let regex = /AcmBootcamps?/ig;
    // let regex = /AcmBo+tcamp/ig;
    // let regex = /\*AcmBootcamp\*/ig;
    console.log(pass.value);
    console.log(regex.test(pass.value));
})

