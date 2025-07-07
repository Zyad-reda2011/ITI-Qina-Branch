//Window object in js => BOM Browser Object Model
//window.screen => screen object is object tells information about the size of the screen , width and height of the screen , color Depth and other information
// console.log(window.screen)
// console.log(screen);
// console.log(screen.availHeight); // height of the screen without the taskbar
// console.log(screen.height); // height of the screen
// console.log(screen.availWidth); //width of the screen without the taskbar
// console.log(screen.width); //width of the screen
// console.log(screen.colorDepth); //color Depth of the screen
//============================================================//
//window.navigator => navigator objectt tells information about the navigator of the browser like the name of the browser and the version of the browser the platform of the browser and the language of the browser
//==============================
//window.location => location object tells information about the location of the page like href ,host,protocol and other information
// console.log(window.location);
//location methods
// location.replace("https://www.google.com");
// location.assign("https://www.google.com");
// location.reload();
///================================================================//
//window.history => history object tells information about the history of the browser previous and next page
// console.log(history);
// // history.back();
// // history.forward();
// function backPage() {
//   history.back();
// }
// function forwardPage() {
//   history.forward();
// }

// history.go(2);
//================================================================//
//window.document =>object represnts the document page (HTML) like the head the body and other information
//DOM Document Object Modal according to the DOM everything is a tree of nodes and it works as a bridge between the js and the html
console.log(document);
//dealing with the DOM nodes fall into 6 categories
//1-accessing the node
//2-modifying the node
//3-changing the node style
//4-adding the node
//5-removing the node
//6- add event to the node
