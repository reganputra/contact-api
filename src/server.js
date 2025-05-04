import {app} from "./application/web.js";
import {logger} from "./application/logging.js";

app.listen(5000, () => {
    logger.info("Server is running on port 5000.");
})