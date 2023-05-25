const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

const loadPerson = (persons) => {
    const totalPersonElement = document.getElementById('total-person');
    totalPersonElement.innerText = persons.message;
    const persorArray = persons.result;
    console.log(persorArray)
    const personWrap = document.getElementById('personWrap');
    persorArray.forEach(person => {
        const createEle = document.createElement('div');
        const className = ['col-md-6'];
        createEle.classList.add(...className);
        createEle.innerHTML = `
        <div class="card">
        <h5 class="card-header">Person Name: ${person.name.common}</h5>
        <div class="card-body">
          <p5 class="card-title">Age: ${person.age}</p5>
          <p class="card-text">Street: ${person.address.street}, House no:${person.address.house} </p>
        </div>
      </div>
        `
        personWrap.appendChild(createEle);

    });

}

loadPerson(person);

