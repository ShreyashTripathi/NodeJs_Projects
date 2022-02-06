const GRAPHQL_ENDPOINT = 'http//:localhost:9000/';

async function fetchHerInfo(GQL_Query) {
    const response = await fetch(GRAPHQL_ENDPOINT,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                query: GQL_Query 
            }
        )
    });

    const responseBody = await response.json();
    console.log(responseBody);
}

fetchHerInfo(`query myQuery {
    name
    id
    marks
  } 
  `);