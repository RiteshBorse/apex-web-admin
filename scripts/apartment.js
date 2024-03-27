
let data = JSON.parse(localStorage.getItem("apartment-data"));


setTimeout(() => {
    document.querySelector('.js-main1')
        .innerHTML = `
        <h1>Apartment Details</h1>
        <div class="apartment-card js-apartment-card">
        <p class="full">${data.apartmentName}</p>
        <p>${data.street}, ${data.district} , ${data.state} , ${data.country}</p>
        <p>${data.pincode}</p>
        <p class="mid">No of Flats : ${data.flats}</p>
        <p class="mid">No of Residents : ${data.residents}</p>
        <p class="mid">No of Shops : ${data.shops}</p>
        <p class="mid">Registrant : ${data.firstName} ${data.middleName} ${data.lastName}</p>
        </div>
`;
}, 700);
