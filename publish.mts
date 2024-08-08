import { publish } from "gh-pages";

// TODO: вынести в env переменные папку сборки
publish("dist", (err) => {
    throw err;
});
