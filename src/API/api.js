import data from "../data/NewArrivedData";
export async function throwerror(status) {
  try {
    const response = await fetch(`http://localhost:4000/api/error/${status}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        token: "kjbdfhdh.djbr.scrff",
      },
    });
    window.zipy.logError("API FETCH", `Status code ${status}`);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function throwerror201() {
  try {
    const response = await fetch(`http://localhost:4000/api/error/201`, {
      method: "get",

      headers: {
        "Content-type": "application/json",
        token: "abctoken",
        Auth: "12345",
      },
    });
    window.zipy.logError("API FETCH", `Status 201`);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function throwerror202() {
  try {
    const response = await fetch(`http://localhost:4000/api/error/202`, {
      method: "post",

      headers: {
        "Content-type": "application/json",
        token: "abctoken",
        Authkey: "sdk123",
      },
    });
    window.zipy.logError("API FETCH", `Hello this is a sample`);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function throwerror203() {
  try {
    const response = await fetch(`http://localhost:4000/api/error/203`, {
      method: "post",
      body: {
        username: "abc",
        password: "test",
        test: {
          test2: {
            username: "abc",
            password: "test",
          },
          password: "test",
        },
      },

      headers: {
        "Content-type": "application/json",
        token: "abctoken",
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function SignIn() {
  try {
    const response = fetch("https://api.mocki.io/v2/c4d7a195/graphql", {
      method: "post",
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
