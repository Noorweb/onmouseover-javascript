<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
	<script src = "index.js"></script>
    <title>JS homework</title>
</head>
<body>
        <div id = "message">
            Hover over the images.
        </div>
        
        <img class = "preview" alt = "king of Saudi Arabia" src = "images (2).jpg" onmouseover = "showProperties(this)" onmouseleave = "document.getElementById('message').innerHTML='Hover over the images';">
         
        <img class = "preview" alt = "Train of Riyadh" src = "images (3).jpg" onmouseover = "showProperties(this)" onmouseleave =  "document.getElementById('message').innerHTML='Hover over the images';">
        
        <img class = "preview" src = "download (9).jpg" alt = "Green Riyadh" onmouseover = "showProperties(this)" onmouseleave =  "document.getElementById('message').innerHTML='Hover over the images';">
        
</body>
</html>