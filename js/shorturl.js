const loadUrl = async(inputUrl) => {
    url =  `https://api.shrtco.de/v2/shorten?url=${inputUrl}`;
    const res = await fetch(url);
    const data = await res.json();
    showUrl(data);
}

const showUrl = (data) => {
    const parentDiv = document.getElementById('parentdiv');
    const createEl = document.createElement('div');
    createEl.innerHTML = `
        <h3>Congratulations! Your short Url Create</h3>
        <a href="${data.result.full_short_link}" target="_blank">${data.result.short_link}</a>
    `
    parentDiv.appendChild(createEl);

}
document.getElementById('btn-short').addEventListener('click',function(){
    const getInput  = document.getElementById('getInput').value;
    loadUrl(getInput);

})

