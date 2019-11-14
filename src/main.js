
import { Haiku} from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#userInterface").submit(function(event) {
    event.preventDefault();
    let string1 = $("#haikuAdd1").val();
    let string2 = $("#haikuAdd2").val();
    let string3 = $("#haikuAdd3").val();
    let haiku = new Haiku (string1, string2, string3);
    console.log(haiku);
  });
});

//
// class Haiku {
//   constructor(line1, line2, line3) {
//     this.line1 = line1;
//     this.line2 = line2;
//     this.line3 = line3;
//   }
//   Haiku.prototype.
// }
