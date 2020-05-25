import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import bornYearsAgo from "../src/dateHandler";
import { IPerson } from "../../my-app/src/Components/person";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const user : IPerson = {
        name : "Batman",
        yearsBornAgo : Math.round(bornYearsAgo("02-19-1963"))
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body : JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

export default httpTrigger;
