describe('template spec', () => {

  it('passes', () => {
    const url = `https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frmme3pbx30j/b/AngularAppTest/o/index.html#/login`;  
    const  username = 'qa-user', password = '!!#VLKYm6U6&_/cU';

    cy.visit(url);

    // verifica que la URL    
    cy.url().should('include', '/login');

    // Get an input, type into it
    cy.get('input[formcontrolname=userEmail]').type(username);
    cy.get('input[formcontrolname=userPassword]').type(password);
    
    cy.get('button[type="submit"]').click();

  })
})