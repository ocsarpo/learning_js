/**
 * Document Object Model.
 */

// DOCUMENT_TYPE_NODE : 10
// DOCUMENT_NODE : 9 : document
// ELEMENT_NODE : 1 : html, head, body, title, h1
// ATTRIBUTE_NODE : 2 : id, class, style, href, src
// TEXT_NODE : 3 : 엔터, 글자 같은 순수 text의 노드
// COMMENT_NODE : 8 : <!-- comment -->

/**
 * DOM 접근.
 */
// element node 접근.
const title = document.getElementById("title"); // 첫번째 요소만 반환.
const descriptions = document.getElementsByClassName("description"); // 유사배열객체
const links = document.getElementsByTagName("a"); // 유사배열객체
const title2 = document.querySelector("#title"); // 첫번째 요소만 반환.
const descriptions2 = document.querySelectorAll(".description"); // 유사배열객체
const siblings = document.querySelectorAll(".description + a"); // 유사배열객체

console.log(title);
console.log(descriptions);
console.log(links);
console.log(title2);
console.log(descriptions2);
console.log(siblings);

// 노드 사이의 관계를 통한 접근.
const parent = document.getElementById("parent");
const children = parent.children;
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = parent.nextElementSibling; // 중간에 있는 공백 주석 등 이런거 제외하고 태그만 찾아서 반환함
const previousSibling = parent.previousElementSibling;

console.log(`parent: ${parent}`);
console.log(`children: ${children}`);
console.log(`children[0].parentElement: ${children[0].parentElement}`);
console.log(`parent.firstElementChild: ${firstChild}`);
console.log(`parent.firstChild: ${parent.firstChild}`);
console.log(`parent.lastElementChild: ${lastChild}`);
console.log(`parent.lastChild: ${parent.lastChild}`);
console.log(`parent.nextElementSibling: ${nextSibling}`);
console.log(`parent.nextSibling: ${parent.nextSibling}`); // 줄바꿈 띄어쓰기 등 text node로 인식해서 그것 반환
console.log(`parent.previousElementSibling: ${previousSibling}`);
console.log(`parent.previousSibling: ${parent.previousSibling}`);

// body 노드 바로 접근
console.log(document.body);
// head 노드 바로 접근
console.log(document.head);
// 그 외 forms, links, images, title 등 바로 접근 가능.
console.log(document.title);

// form 노드 접근
console.log(document.forms);
// name 붙은 form 접근
console.log(document.loginForm);
// name 붙은 form 의 input 접근
console.log(document.loginForm.id);
console.log(document.loginForm.password);
