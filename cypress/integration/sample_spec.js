const appUrl = 'http://localhost:7000';

const fillForm = (data, action = null) => {
  console.log('Fill form with : ', data);
  cy.get('#todo_form_title').type(data.title);
  if (data.completed) {
    cy.get('#todo_form_completed').check();
  } else {
    cy.get('#todo_form_completed').uncheck();
  }
  if (action != null) {
    cy.get('span').contains(action).click();
    console.log(`Then ${action} the data.`);
  }
};

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
    cy.visit(appUrl);
    cy.title('Main Page');
  });
});

describe('Todos', () => {
  it('Can Add Todo', () => {
    cy.visit(appUrl);
    cy.get('a[href="/todos"]').click();
    cy.get('button[title="Add Todo"]').click();

    // cy.get('#todo_form_title').type(`Todo created by CyPress ${new Date().toISOString()}`);
    // cy.get('#todo_form_completed').click();
    // cy.get('span').contains('Create').click();

    fillForm({ title: `Todo created by CyPress ${new Date().toISOString()}`, completed: false }, 'Create');

    cy.wait(1000);
    // cy.get('td[title="hello"]').dblclick();
    // ant-table-tbody data-row-key="1"
    // cy.get('.ant-table-tbody>tr').eq(0).dblclick();
    cy.get('.ant-table-tbody>tr').eq(0).trigger('dblclick');
    
    // cy.get('#todo_form_title').type('hello updated by CyPress ');
    // cy.get('#todo_form_completed').click();
    // cy.get('span').contains('Update').click();
    fillForm({ title: `Todo updated by CyPress ${new Date().toISOString()}`, completed: true }, 'Update');

    cy.wait(1000);
    cy.get('td').contains('hello').dblclick();
    // cy.get('#todo_form_title').type('- updated again by CyPress ');
    // cy.get('#todo_form_completed').click();
    // cy.get('span').contains('Update').click();
    fillForm({ title: '- updated again by CyPress ', completed: false }, 'Update');

    // cy.visit('https://www.google.com/?hl=en');
    // cy.get('input[title="Search"]').type('ravuthz{enter}');
    // cy.wait(500);
    // cy.get('img[alt="Google"]').type('{pagedown}');
    // cy.scrollTo(0, 500);
  });
});
