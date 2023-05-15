window.addEventListener('DOMContentLoaded', function() {
    var outputElement = document.querySelector('.console_output');
    var text = outputElement.innerHTML;
    var lines = text.split('\n');
    var currentLine = 0;
    var index = 0;
    var sleepTime = 40;
  
    function typeText() {
      if (currentLine < lines.length) {
        var currentText = lines[currentLine].substr(0, index);
        outputElement.innerHTML = lines.slice(0, currentLine).join('<br>') + '<br>' + currentText + " ▯"; // "▯"を追加
        index++;
  
        if (index <= lines[currentLine].length) {
          setTimeout(typeText, sleepTime);
        } else {
          currentLine++;
          index = 0;
          setTimeout(typeText, sleepTime + 10);
        }
      }
    }
  
    typeText();
});
  