function slowfunc(callback){
    callback();
};

slowfunc(function a(){
    console.log('A');
});