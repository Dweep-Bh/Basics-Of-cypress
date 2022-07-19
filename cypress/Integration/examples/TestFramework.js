

describe('The Home Page', () => {
   
  before(function() {

    cy.fixture('example').then(function(data){
      
   //this.data=data;
   globalThis.data=data;

    })

  })

  it('successfully loads', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get('input[name="name"]:nth-child(1)').type("Dweep",globalThis.data.name)

    cy.get('select').select("Male",globalThis.data.gender);

   // cy.get('select').select(JSON.stringify(globalThis.data.gender))
  })
})