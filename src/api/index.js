const todos = ['Learn React',  'Have a rest', 'Enjoy the life'];

export const getTodosRequest = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 3000);
  });