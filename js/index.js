// content
let resources ={
  s1:{
    title: "Installing community solar panels",
    bodyText: "A solar garden is a system of solar panels that belong to the community and are connected to the homes and offices to supply power for water, heat, and electricity. This helps in decreasing the overall energy expense of the community. Such projects are gaining popularity. They will make up a large part of the market in the future years. Community solar gardens are usually situated on extensive roofs or ground space and supply the produced electricity to the subscribers’ homes and devices. It has many advantage: availability of renewable energy, clean energy generation and contribution to the renewable energy goal. The Community Solar Program funds these gardens and the sales of electricity subscriptions, enable project owners to develop, own and manage these gardens in order to help everyone increase affordability and access of solar power.",
    url: "img/solar-panels.webp",
    alt: "Solar panels in a garden."
    },
  s2: {
    title: "Save money by Tax Credits",
    bodyText: "It involves offering tax exemptions to persons willing to invest and cultivate renewable power sources. This ensures that there is the willingness to adopt resources like solar and wind power.Investments that qualify for this refund credit the clean electricity from renewable energy sources. Electricity storage that does not use fossil energy, and electricity transmission within and between provinces and territories, as well as between Canada and other countries, received a refundable tax credit. A credit facility known as the Refundable Investment Tax Credit, applied in Canada reimburses up to 30% of the cost which the businesses incurred as a way of encouraging the investors to embrace clean energy.",
    url: "img/tax-credits.webp",
    alt: "Person writing on a paper and with TAX written on another."
  },
  s3: {
    title: "Government Funding Initiatives",
    bodyText: "The main focus of government has recently been given to the funding of renewable energy and energy saving facilities. They are intended to minimize energy expenses and improve the welfare of the people. In this way, all of these further relieve people’s financial pressure while at the same time encouraging the use of renewable energy and energy efficient measures. Governments support these projects either directly through funding or make grants and other development programs that help in encouraging sustainable energy projects. It contributes to the economic growth since it enhances employment opportunities in the renewable energy industry. Ultimately, the communities’ quality of life is enhanced and they become economically more stable.",
    url: "img/funds.webp",
    alt: "A happy girl holding cash."
  }
};

let buttons = document.querySelectorAll("#controls button");
let dc = document.getElementById("dynamic-content");
let btns = document.getElementById('controls').children;

function selectPage(ev){
  let currentButton = ev.target;

  //active button styled here
  for (let btn of btns){
    if (btn.id){
      btn.removeAttribute('id');
    }
  }
  currentButton.setAttribute('id','active-button');


  // pushing data into div #dynamic content
  dc.innerHTML = `<h2>${resources[currentButton.className].title}</h2>
  <img src="${resources[currentButton.className].url}" alt="${resources[currentButton.className].alt}">
  <p>${resources[currentButton.className].bodyText}</p>`;
}

for (let button of buttons){
  button.addEventListener('click', selectPage);
}