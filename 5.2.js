function color(plane) {

    var none = document.getElementsByName("Button"); //#endregion



    // Produce an alert message about the chosen airplane
    var dom = document.getElementById("myForm");
    for (var index = 0; index < dom.Button.length; index++) {
        if (dom.Button[index].checked) {
            plane = dom.Button[index].value;
            break;
        }
    }

    switch (plane) {
        case 152:
          document.body.style.backgroundColor = "red";
          alert("This is my favorite color");
          break;
        case 172:
          document.body.style.backgroundColor = "blue";
          alert("This is my favorite color");
          break;
        case 182:
          document.body.style.backgroundColor = "green";
          alert("This is my favorite color");
          break;
        case 210:
          document.body.style.backgroundColor = "yellow";
          alert("This is my favorite color");
          break;
        case 211:
          document.body.style.backgroundColor = "orange";
          alert("This is my favorite color");
          break;
        default:
          alert("no color");
          break;
      }
    }