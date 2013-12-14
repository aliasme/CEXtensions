// ==UserScript==
// @name       CEX.io en-US tweaks
// @namespace  https://github.com/bitstoned/CEXtensions
// @version    0.1
// @description  Overwrite strings with jQuery
// @match      https://cex.io/
// @match      https://www.cex.io/
// @license    GPLv2
// ==/UserScript==

$('form#buy .btn').text('Bid');
$('form#sell .btn').text('Ask');
$('.chat-head > .head-text').text('Trollbox');