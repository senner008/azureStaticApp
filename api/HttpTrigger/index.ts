import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import bornYearsAgo from "../src/dateHandler";
import { IPerson } from "../../my-app/src/Components/person";
import { STORED_PROCEDURE_GET_USERS, IUser } from "../src/SQL/PROCEDURES/PROCEDURE_GET_USERS";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    try {
        const users: IUser[] = await STORED_PROCEDURE_GET_USERS();
        const people : IPerson[] = users.map(user => {
            return {name : user.user_name, yearsBornAgo : Math.round(bornYearsAgo(user.user_created_at))}
        }) 
        context.res  = {
            status : 200,
            body : JSON.stringify(people),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
    }
    catch( err ) {
        context.res  = {
            status : err.status,
            body : err.message
        }
    }


   

};

export default httpTrigger;
