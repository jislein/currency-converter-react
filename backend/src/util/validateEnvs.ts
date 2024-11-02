
// We are using envalid to ensure that our environment variables does not trigger
// any type errors and, in case of error happening, have a better description of what went wrong.
import { cleanEnv, port, str } from "envalid";
// The cleanEnv() method returns a environment object with only the variables.
export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(), // We could have used a number or string type but by using port() we ensure that the value stays between the vaild port standars.
});