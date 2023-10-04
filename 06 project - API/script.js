

const  generateFace = async () => {
    const resultContainer = document.querySelector('.result');
    resultContainer.innerHTML = '';

    const gender = document.querySelector('.gender').value;
    const ethnicity = document.querySelector('.ethnicity').value;
    const age = document.querySelector('.age').value;
    

    const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&${age}=18&ethnicity=${ethnicity}`;
    const options = {
        method: 'GET',
        headers: {
            //Use your api key!!!
            'X-RapidAPI-Key': `USE HERE YOUR API KEY`,
            'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.blob(); // blob returns raw data
        const imageURL = URL.createObjectURL(result);
        const imageDOM = document.createElement('img');
        imageDOM.src = imageURL;
        document.querySelector('.result').append(imageDOM);

    } catch (error) {
        console.error(error);
    }
};

document.querySelector('.generate-face-btn').addEventListener('click', function(e) {
e.preventDefault();
console.log('klick dziala');
generateFace();
});

