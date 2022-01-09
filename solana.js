const web3 = require("@solana/web3.js");

exports.transferSOL=async (from,to,transferAmt)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const transaction=new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey:new web3.PublicKey(from.publicKey.toString()),
                toPubkey:new web3.PublicKey(to.publicKey.toString()),
                lamports:transferAmt*web3.LAMPORTS_PER_SOL
            })
        )
        const signature=await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        )
        return signature;
    }catch(err){
        console.log(err);
    }
}

exports.getWalletBalance=async (pubk)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const balance=await connection.getBalance(new web3.PublicKey(pubk));
        return balance/web3.LAMPORTS_PER_SOL;
    }catch(err){
        console.log(err);
    }
}

exports.airDropSol = async(pubk) => {
    try {
        const connection = new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const fromAirDropSignature = await connection.requestAirdrop(
            pubk,
            2*web3.LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    }catch(err) {
        console.error(err);
    }
}