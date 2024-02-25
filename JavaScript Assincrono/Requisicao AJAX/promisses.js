let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

let promisse = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;
        let ajax = new XMLHttpRequest();
        ajax.apen('GET', `https://api.github.com/users/${input.value}`);
        ajax.send(null);
    });
}