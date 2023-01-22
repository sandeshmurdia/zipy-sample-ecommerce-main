export async function throwerror(status) {
  try {
    const response = await fetch(`http://localhost:4000/api/error/${status}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        token: "kjbdfhdh.djbr.scrff",
      },
      
    });
    window.zipy.logError('API FETCH', `${status}`)
    return response;
  } catch (e) {
   
    console.error(e);
  }
}

export async function fetchProduct() {
  const product = await fetch(
    'https://ecommerce.com/fetch-products?itype="goods"&limit="10"',
    {
      headers: {
        "Content-type": "application/json",
        token: "kjbdfhdvvdvhvhdh.ncjdooeoks.ccd",
      },
    }
  );
  return product;
}
export async function buyProduct() {
  try {
    const response = await fetch(
      'https://ecommerce.com/buy-products?count="10"&price="premium"',
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: "kjbdfhdvvdvhvhdh.djbr.scrff",
        },
      }
    );
    return response;
  } catch (e) {

    console.error(e);
  }
}
export async function incrementProduct() {
  try {
    const data = JSON.stringify({
      query: ` {
              users  {
                  id
                  email
                  name
              }
          }`,
    });
    const response = fetch("https://api.mocki.io/v2/c4d7a195/graphql", {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}
export async function SignIn() {
  try {
    const data = JSON.stringify({
      query: ` {
              users  {
                  id
                  email
                  name
              }
          }`,
    });
    const response = fetch("https://api.mocki.io/v2/c4d7a195/graphql", {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}
export async function cartcheckout() {
  try {
    const response = await fetch(
      'https://ecommerce.com/buy-products?count="10"&price="premium"',
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: "kjbdfhdh.djbr.scrff",
        },
      }
    );
    return response;
  } catch (e) {
    console.error(e);
  }
}
export async function cartclear() {
  try {
    const response = fetch("https://api.mocki.io/v2/c4195/graphql", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response != 200) {
      window.zipy.logError("hello2", "Backend N/W End Error", "NE");
      window.zipy.identify("76583241", {
        firstName: "John",
        lastName: "Doe",
        email: "jdoe@yourcompany.com",
        customerName: "zipy",
        age: "34",
        city: "Los Angeles",
        state: "California",
        country: "United States of America",
      });
    }
    return response;
  } catch (e) {
    console.error(e);
  }
}
