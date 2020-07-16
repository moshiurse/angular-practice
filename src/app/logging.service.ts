export class LoggingService {
    logStatus(msg: string, type: string){
        if(type == "active"){
            console.log(msg);
        }else if(type == "hidden"){
            console.warn(msg);
        }else if(type == "inactive"){
            console.error(msg);
        }else{
            console.info(msg);
        }
    }
}