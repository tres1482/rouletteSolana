var web3 = require("@solana/web3.js");
var prompt = require("prompt-sync")({ sigint: true });

var {getReturnAmount, totalAmtToBePaid, randomNumber, MAX_BID_AMOUNT } = require("./helper");
var { getWalletBalance, transferSOL, airDropSol }=require("./solana");

var treasurySecretKey = [
    186, 232, 254,  54, 105, 201, 230,  74,  91,  14, 167,
    169, 173, 120,  43,  10, 149,  12, 106,  22, 163, 165,
    157, 219, 137, 114,   4, 172, 157, 135, 192, 243,   7,
     12, 224, 206,  89,  39,  22, 118,  39,  36,  12, 142,
    168, 165, 191, 255, 203,  97, 159, 139, 130,  52, 106,
     90,  42, 236,  38,  32, 167,  70, 200, 196
  ];
var runMain = async () => {
    var treasuryWallet = web3.Keypair.fromSecretKey(Uint8Array.from(treasurySecretKey));
    var treasuryPublicKey = treasuryWallet.publicKey;

    var treasuryBalance = await getWalletBalance(treasuryPublicKey);
    console.log("Treasury balance:", treasuryBalance);

    // await airDropSol(treasuryPublicKey);
    // await airDropSol(treasuryPublicKey);

    // treasuryBalance = await getWalletBalance(treasuryPublicKey);
    // console.log("Treasury balance:", treasuryBalance);

    var userWallet = web3.Keypair.generate();
    await airDropSol(userWallet.publicKey);

    var userBalance = await getWalletBalance(userWallet.publicKey);
    console.log("User balance:", userBalance);


    console.log("The Max bidding amount is " + MAX_BID_AMOUNT + " SOL here");

    var bidAmount = totalAmtToBePaid();
    var finalAmount = getReturnAmount(treasuryBalance);

    console.log("You need to pay " + bidAmount + " SOL to move forward");
    console.log("You will get " + finalAmount + " if guessing the number correctly");

    randChosenNumber = prompt("Guess a number between 1 and 5 (both 1, 5 included) ");
    var transactionSign = await transferSOL(userWallet, treasuryWallet, bidAmount)
    console.log("Signature of payment for playing the game",transactionSign);
    if(randChosenNumber==randomNumber(1,5)){
        console.log("Your guess is absolutely correct!!");
        transactionSign = await transferSOL(treasuryWallet, userWallet, finalAmount)
        console.log("Here is the price signature",transactionSign);
        userBalance = await getWalletBalance(userWallet.publicKey);
        console.log("User balance:", userBalance);
    }
    else {
        console.log("Better Luck next time");
    }
}

runMain();