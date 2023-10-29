import {renderHeader, renderFooter} from "./handle.js"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('#header')
const footer = $('footer')
header.innerHTML = renderHeader();
footer.innerHTML = renderFooter();