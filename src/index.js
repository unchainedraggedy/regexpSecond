export default function correctNumber(string){
    /^\+/.test(string) ? string : /^8/.test(string) ? string = string.replace(/^8/, '+7') : string 
    string = string.replace(/(?!^.*\+.*)\D/g, '')
    return string
}