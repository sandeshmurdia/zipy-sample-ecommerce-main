export function randomfrontenderror() {
  const arr = [1, 2, 3, 4, 5,6];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const status = arr[randomIndex];

  switch (status) {
    case 1:
        throw  EvalError();

      
    case 2:
        throw  RangeError();

    case 3:
        throw  ReferenceError();


    case 4:
        throw  SyntaxError();


    case 5:
        throw  TypeError();

        case 6:
            throw  URIError();


    default:
        throw  Error()

}
}
