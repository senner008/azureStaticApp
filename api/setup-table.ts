import { setupTable } from "./src/SQL/db_setup";

;(async () => {
    await setupTable();
    process.exit();
})();

