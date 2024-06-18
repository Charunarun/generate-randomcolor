const colorBox = document.getElementById('colorBox');
    const changeColorBtn = document.getElementById('changeColorBtn');

    
    function generateRandomColor() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      return randomColor;
    }

   
    function setRandomColor() {
      const randomColor = generateRandomColor();
      colorBox.style.backgroundColor = randomColor;
      colorBox.textContent = randomColor; 
    }

    
    changeColorBtn.addEventListener('click', setRandomColor);

    setRandomColor();