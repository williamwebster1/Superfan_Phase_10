var myImages1 = new Array();
myImages1.push("img_01.gif");
myImages1.push("img_02.gif");
myImages1.push("img_03.gif");
myImages1.push("img_04.gif");
myImages1.push("img_05.gif");
myImages1.push("img_06.gif");
myImages1.push("img_07.gif");
myImages1.push("img_08.gif");
myImages1.push("img_09.gif");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}