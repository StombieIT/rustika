import { publish } from "gh-pages";

// TODO: вынести в env переменные папку сборки
publish("dist", (err) => {
    if (err) {
        console.error("Got the following error during publishing process", err);
        return;
    }

    console.info("Project successfully published");
});
