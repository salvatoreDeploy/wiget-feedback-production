import { app } from "./server";

const PORT_DEV = "3333";

app.listen(PORT_DEV, () => console.log("Server Running port:", PORT_DEV));
