export const requestSignup = async (uesr) => {
  const response = await fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uesr),
  });

  // response.state === 2000
  return response.ok;
};
