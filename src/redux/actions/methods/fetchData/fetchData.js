/* eslint-disable import/no-anonymous-default-export */
export default async (type, method, option) => {
  const url = `https://jsonplaceholder.typicode.com/${method}/${option?.id || ""}`;

  const methods = {
    method: type,
    body: JSON.stringify(option),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }

  let response = {
    request: undefined,
  }

  try {
    let data = await fetch(url, (type === "POST" || type === "PUT") ? methods : null);
    response.request = await data.json()
  } catch (err) {
    console.log(err)
  }
  
  return response;
}