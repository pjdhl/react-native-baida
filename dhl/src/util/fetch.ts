
const host = "http://172.19.145.1:3000"
const Fetch=(url:string)=>{
    return new Promise(resolve=>{
        fetch(host+url).then(response=>
            response.json()
        ).then((result)=>resolve(result))
    })
}
export default Fetch