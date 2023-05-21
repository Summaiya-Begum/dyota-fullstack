
import { PageNotFound } from "./PageNotFound";
import { Dyota } from "./Dyota";

export const Paths = [
    {
        shortPathName:"",
        longPathName:"/",
        title:"Sliding Division",
        component: <Dyota/>
    },
    {
        shortPathName:"page-not-found",
        longPathName:"/page-not-found",
        title:"Page Not Found",
        component: <PageNotFound/>
    }
]