
    window.onload = function() {
        html2canvas(document.getElementById("imagewrap"), {
          onrendered: function(canvas) {
            canvas.className = "html2canvas";
            document.getElementById("canvasWrapper").appendChild(canvas);
            var image = canvas.toDataURL("image/png");
            document.getElementById("downloadLink").href = image;
          },
          useCORS: true
        });
      }