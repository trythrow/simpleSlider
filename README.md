simple Slider
============

- "Anything" slider (Images, Text, Videos, HTML)
- Works without any CSS
- 2 sliding features (Up/Down) or (Left/Right)
- Control Sliding speed
- easy to Customize with CSS

How to use
============

Slide Right/Left usage example
-------
<!DOCTYPE html>
<html>
<head>
  <script type='text/javascript' src='http://code.jquery.com/jquery-1.9.1.js'></script>
  <script type='text/javascript' src='js/jquery.simpleslider.js'></script>
</head>

<body>
  <div id="sliders" style="width:1024px; height:365px;">
      <div class="slide"> <img src="images/1.jpg"/> </div>
      <div class="slide"> <img src="images/2.jpg"/> </div>
      <div class="slide"> <img src="images/3.jpg"/> </div> 
</div>

  <script type='text/javascript'>
    $("#sliders").simpleSlider();
  </script>

</body>
</html>

Slide Up/Down usage example
-------
<!DOCTYPE html>
<html>
<head>
  <script type='text/javascript' src='http://code.jquery.com/jquery-1.9.1.js'></script>
  <script type='text/javascript' src='js/jquery.simpleslider.js'></script>
</head>

<body>
  <div id="sliders" style="width:1024px; height:365px;">
      <div class="slide"> <img src="images/1.jpg"/> </div>
      <div class="slide"> <img src="images/2.jpg"/> </div>
      <div class="slide"> <img src="images/3.jpg"/> </div> 
</div>

  <script type='text/javascript'>
    $("#sliders").simpleSlider({ direction: "up" });
  </script>

</body>
</html>

... You can also control the slider speed:

$("#sliders").simpleSlider({ speed: 500, direction: "up" });


Supported browser
-------

Tested on Chrome, Safari, Firefox, IE 9.0.

MIT License
-------

Copyright (C) 2013 Ahmad Said

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
