export const transactionSend=()=>{
    window.ethereum.request({method: 'eth_requestAccounts'}).then((acc:any)=>{
        console.log(acc)
    })
}