var btnTranslate = document.getElementById("btnTranslate");
var txtAreaOne = document.getElementById("txtAreaOne");
var txtAreaTwo = document.getElementById("txtAreaTwo");
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";
btnTranslate.addEventListener("click", clickHandler);
function getTranslatedUrl(text) {
  return serverUrl + "?" + "text=" + text;
}
function errorHandler(error) {
  alert("Something wrong with the server,try again later :)");
}
function clickHandler() {
  var inputText = txtAreaOne.value;
  fetch(getTranslatedUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      txtAreaTwo.innerText = translatedText;
    })
    .catch(errorHandler);
}
