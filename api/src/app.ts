import { app } from "./server";

const PORT_DEV = "3333";

app.listen(process.env.PORT || PORT_DEV, () =>
  console.log("Server Running port:", process.env.PORT || PORT_DEV)
);
