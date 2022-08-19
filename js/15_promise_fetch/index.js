const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'alext@gmail.com',
    name: 'Alex',
    password: '1977',
  };

  console.log(JSON.stringify(user));

  // http request

  // input: string, obj(optional)
  // output: promise
  const httpPromise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      alert('error');
    });

  // const thenRes = httpPromise.then(response => {
  //   // ?
  //   return response.json();
  // });

  // thenRes
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(e => {
  //     alert('error');
  //   });
}

// input: callback(onFullField), callback(onRejected)
// output: Promise
formElem.addEventListener('submit', createUserHandler);
