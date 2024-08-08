import { publish } from "gh-pages";

publish("dist", (err) => {
    if (err) {
        console.error("Got the following error during publishing process", err);
        return;
    }

    console.info("Project successfully published");
});
