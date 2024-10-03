"use strict";

alert("Draw your space invader here");

signature();
function signature() {
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.rect(50,50,300,300);
context.fillStyle = "#f0f0f0";
context.fill();
context.closePath();


context.beginPath();
context.rect(75,75,50,50);
context.rect(75,175,50,50);
context.rect(75,275,50,50);
context.rect(125,75,50,50);
context.rect(125,125,50,50);
context.rect(125,175,50,50);
context.rect(125,225,50,50);
context.rect(125,275,50,50);
context.rect(175,125,50,50);
context.rect(175,175,50,50);
context.rect(225,75,50,50);
context.rect(225,125,50,50);
context.rect(225,175,50,50);
context.rect(225,225,50,50);
context.rect(225,275,50,50);
context.rect(275,75,50,50);
context.rect(275,175,50,50);
context.rect(275,275,50,50);
context.fillStyle = "#75dad5";
context.fill();
context.closePath();

}