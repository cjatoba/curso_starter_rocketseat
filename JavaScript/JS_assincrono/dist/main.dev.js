"use strict";

//-------------------------Utilizando XMLHttpRequest
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/cjatoba');
// xhr.send(null);
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText))
//     }
// }
//-------------------------Utilizando XMLHttpRequest
//-------------------------Utilizando Promises
//Promises
// function myPromise(){
//     //o parâmetro resolve é um função e recebe o retorno da requisição caso tenha sucesso
//     //o parâmetro reject é uma função e recebe o retorno da requisição caso tenha falha
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/cjatoba');
//         xhr.send(null);
//         xhr.onreadystatechange = function(){
//             //Verifica o retorno do Ajax
//             if(xhr.readyState === 4){
//                 //Verifica se o retorno do Ajax foi ok (status = 200)
//                 if(xhr.status === 200){
//                    //Converte JSON em um objeto
//                     resolve(JSON.parse(xhr.responseText))
//                 }else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }
// myPromise()
//     //O parâmetro resolve chama o then o then aguarda a finalização da Promise e é executado caso tenha sucesso
//     .then(function(response) {
//         console.log(response);
//     })
//     //O parâmetro rejct chama o catch, o cach aguarda a finalização da Promise e é executado caso haj alguma falha
//     .catch(function(error) {
//         console.warn(error);
//     })
//-------------------------Utilizando Promises
//-------------------------Utilizando Axios
//O axios simplifica a forma de fazer requisição
//Podemos alterar o metódo de get para post, put ou delete
//Se precisar enviar um parâmetro basta usar a virgula após a url e pasaar o próximo parâmetro
axios.get('https://api.github.com/users/cjatoba').then(function (response) {
  console.log(response); //Retorna o avatar por exemplo

  console.log(response.data.avatar_url);
})["catch"](function (error) {
  console.warn(error);
});