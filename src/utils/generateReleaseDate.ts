import IReleaseDate from "../interface/IReleaseDate";

export function generateReleaseDate(date:IReleaseDate|null){
    if(date==null){
        return "No infomation found."
    }
    var result = new Date(date.date!*1000)
    return result.toLocaleDateString("en-GB");
}