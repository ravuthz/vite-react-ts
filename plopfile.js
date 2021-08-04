const addInput = (name, message, type = 'HTMLDivElement', other) => {
  return { type, name, message, ...other };
};

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React Component using Typescript',
    prompts: [addInput('name', 'Component Name: ')],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{pascalCase name}}',
        templateFiles: 'plop_templates/component/*.hbs',
        base: 'plop_templates/component',
      },
    ],
  });

  plop.setGenerator('layout', {
    description: 'React Layout using Typescript',
    prompts: [addInput('name', 'Layout Name: ')],
    actions: [
      {
        type: 'addMany',
        destination: 'src/layouts/{{pascalCase name}}',
        templateFiles: 'plop_templates/layout/*.hbs',
        base: 'plop_templates/layout',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'React Page using Typescript',
    prompts: [addInput('name', 'Page Name: ')],
    actions: [
      {
        type: 'addMany',
        destination: 'src/pages/{{pascalCase name}}',
        templateFiles: 'plop_templates/page/*.hbs',
        base: 'plop_templates/page',
      },
    ],
  });

  plop.setGenerator('context', {
    description: 'React ContextAPI using Typescript',
    prompts: [addInput('name', 'Context Name: ')],
    actions: [
      {
        type: 'add',
        path: 'src/contexts/{{pascalCase name}}Context.tsx',
        templateFile: 'plop_templates/context/context.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'React Hook using Typescript',
    prompts: [addInput('name', 'Hook Name: ')],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/use{{pascalCase name}}.tsx',
        templateFile: 'plop_templates/hook/hook.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('util', {
    description: 'React Util using Typescript',
    prompts: [addInput('name', 'Util Name: ')],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{pascalCase name}}.tsx',
        templateFile: 'plop_templates/util/util.tsx.hbs',
      },
    ],
  });
};
