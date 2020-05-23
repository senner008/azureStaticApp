import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import bornYearsAgo from "../src/dateHandler";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    interface IUser {
        name : string;
        yearsBornAgo : number;

    }

    const user : IUser = {
        name : "Batman",
        yearsBornAgo : Math.round(bornYearsAgo("1963-02-29"))
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
