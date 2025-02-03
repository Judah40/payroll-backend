export const handleGenerateEmployeeeId=()=>{
    const randomId = (Math.random()+1).toString(36).substring(7)
    return randomId
}