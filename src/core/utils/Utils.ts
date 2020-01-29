import { Environment, EnvironmentType, UrlQueryParameterCollection } from '@microsoft/sp-core-library';
export default class Utils {
    public static getVersion() {
        var json = require('../../../config/package-solution.json');
        return json["solution"]["version"];
    }

    public static GetParamId(queryString: string):number{    
        let query = new UrlQueryParameterCollection(window.location.href);
        if(query.getValue(queryString)){
          return parseInt(query.getValue(queryString));
        }
        else{
          return 0;
        }
    }

    public static getErrorMsj(err: Error | string): string {
        if(typeof err !== "string") {
             const errorStr = err.toString();
             const jsonInitIndex = errorStr.indexOf("{");
             return jsonInitIndex !== -1 ? 
                    JSON.parse(errorStr.substring(jsonInitIndex))["odata.error"]["message"].value :
                    errorStr;
        }
        else
             return err;
   }
    public static FixWorkbench(){
        if(Environment.type == EnvironmentType.Local || Environment.type == EnvironmentType.SharePoint ){
          require('./t.css');
        }
    }
}

