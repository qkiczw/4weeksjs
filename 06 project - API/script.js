const  generateFace = async () => {
    const url = 'https://face-studio.p.rapidapi.com/generate?gender=female&age=20s&ethnicity=european';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd13b68be67msh24d55e4953bfaeap1ba2e6jsn3e99ac8f7839',
            'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.blob();
        console.log(result);
        const imageURL = URL.createObjectURL(result)
        const imageDOM = document.createElement('img');
        imageDOM.src = imageURL;
        document.querySelector('.result').append(imageDOM);

    } catch (error) {
        console.error(error);
    }
}

document.querySelector('.generate-face-btn').addEventListener('click', function(e) {
e.preventDefault();
console.log('klick dziala')
})

generateFace();