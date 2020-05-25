

// TODO : setup addition ts-jest settings
// @ts-ignore
jest.setTimeout(14000); // in milliseconds
import { setupTable } from "./src/SQL/db_setup";


// @ts-ignore
global['beforeEach'](async () => {
  await setupTable();
});
