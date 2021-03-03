var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1') {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');



/*
process.argv is an array containing the command line arguments. 
The first element will be 'node', the second element will be the 
name of the JavaScript file. The next elements will be any additional 
command line arguments.
*/