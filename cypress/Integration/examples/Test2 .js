//cypress - spec

describe('My second test suit',function(){

 it('My FirstTest case',function()
 {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').should('have.length',4);
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        
    const textveg = $el.find('h4.product-name').text();

    if(textveg.includes('Cashews'))
    {

      cy.get($el) .find('button').click();
    }
        
      })

      cy.get('.cart-icon > img').click();
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();
      
      cy.wait(2000);
      cy.get('select').select('India').should('have.value', 'India');
    
      cy.get('.chkAgree').check().should('be.checked'); 

      cy.get('button').click();

     

})

})