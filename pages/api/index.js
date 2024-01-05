/* export default function handler(request, response) {
    const { name = 'World' } = request.query;
    return response.send(`Hello ${name}!`);
  } */

  export default function handler(request, response) {
    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies:request.cookies,
        index:true,
    })
  }

  export function test(){
    return "soy la funcion test"
  }