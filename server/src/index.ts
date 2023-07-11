import { initServer } from "./app";

async function init() {
  const app = await initServer();
  const Port = 8000;
  app.listen(Port, () => console.log(`server is started at PORT:${Port}`));
}
init();
