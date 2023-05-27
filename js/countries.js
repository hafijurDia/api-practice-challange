// load countries into select option
const loadAllCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all';
    const res  = await fetch(url);
    const data = await res.json();
    showAllCountries(data);
}

const selcetEle = document.getElementById('selectEle');

//show all countries under slecet dropdown
const showAllCountries = (countries) => {
    console.log(countries);
    const createFirstOpt = document.createElement('option');
    const selected = 1;
    createFirstOpt.setAttribute('value', selected);
   createFirstOpt.innerHTML = 'Filter by Region';
   selcetEle.append(createFirstOpt);
    countries.forEach(country => {
        
        const createOption = document.createElement('option');
        const placeValue = `${country.name.common}`;
        createOption.setAttribute('value', placeValue);
        createOption.innerHTML = `${country.name.common}`;
        
        selcetEle.appendChild(createOption);
        
    });
    document.getElementById("selectEle").options[0].disabled = true;

} 

//filer by country
const filterCountry = async (selectedCountry) => {
    const countryUrl = `https://restcountries.com/v3.1/name/${selectedCountry}`;
    const res = await fetch(countryUrl);
    const data =  await res.json();
    showRegion(data)
}

//show region area
const createELe = document.createElement('p');
createELe.classList.add('pt-3');
createELe.innerText = '';

//show region function
const showRegion = (data) => {
    const showReionEle = document.getElementById('show-region');
    data.forEach(singleCountry => {
        createELe.innerHTML = `
        <p id="region-text" class="pt-2"><b>Region:</b> ${singleCountry.region}</p>
        <p id="capital-text" class="pt-2"><b>Capital:</b> ${singleCountry.capital}</p>
        <p id="language-text" class="pt-2"><b>Language:</b> ${singleCountry.languages.ara}</p>
        `
    });
    
    showReionEle.appendChild(createELe);
}

//select onchange event handler
selcetEle.addEventListener("change", (event) => {
    const selectedCountry = event.target.value;
    filterCountry(selectedCountry);
  });

loadAllCountries();




