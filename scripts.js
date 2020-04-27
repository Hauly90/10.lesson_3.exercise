let myArray = ["Jakub", "Věra", "Jan", "Anakin", "Ředitel"];

$("ul").append("<li>Jakub</li>");
$("ul").append("<li>Věra</li>");
$("ul").append("<li>Jan</li>");
$("ul").append("<li>Anakin</li>");
$("ul").append("<li>Ředitel</li>");

//$("title").text("Added with javascript");

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

if (additionalBlock.title === "Added with javascript") {
  $("h1").append(" Added with javascript");
} else { $("title").append("CodePen - 2. hodina, 6 cviceni");
}

if (additionalBlock.text === "This block was added using JavaScript's jQuery library. How awesome!") {
  $("p").append(" This block was added using JavaScript's jQuery library. How awesome!");
} else { $("title").append("CodePen - 2. hodina, 6 cviceni");
}


//$("ul").append($myArray);
//$("ul").append(document.createTextNode("<li>Jakub</li>"));

/*$("#box-container").append("<div class="box"></div>");
$(".box:last-child").css("background", myArray[0]);
$("#box-container").append("<div class="box"></div>");
$(".box:last-child").css("background", myArray[1]);
$("#box-container").append("<div class="box"></div>");
$(".box:last-child").css("background", myArray[2]);
$("#box-container").append("<div class="box"></div>");
$(".box:last-child").css("background", myArray[3]);
$("#box-container").append("<div class="box"></div>");
$(".box:last-child").css("background", myArray[4]);

myArray.forEach((myArray) => {
    $("#box-container").append("<div class="box"></div>");
    $(".box:last-child").css("background", myArray);
  });*/