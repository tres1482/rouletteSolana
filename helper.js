const prompt = require("prompt-sync")({ sigint: true });

var bidAmount = undefined;
var stakeRatio = undefined;
exports.MAX_BID_AMOUNT = 1.5;
var MAX_BID_AMOUNT = 1.5;

exports.getReturnAmount = (treasuryBalance) => {
    if(bidAmount){
        if(stakeRatio) {
            while(bidAmount * stakeRatio >= treasuryBalance - 0.000005 || typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                if(bidAmount * stakeRatio >= treasuryBalance - 0.000005) {
                    console.error("The ratio of your staking should be less than " + (treasuryBalance - 0.000005)/bidAmount + " here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
                if(typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                    console.error("The ratio of your staking should be a number here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
            }
            return bidAmount * stakeRatio;
        }
        else {
            stakeRatio = Number(prompt("What is the ratio of your staking? "));
            while(bidAmount * stakeRatio >= treasuryBalance - 0.000005 || typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                if(bidAmount * stakeRatio >= treasuryBalance - 0.000005) {
                    console.error("The ratio of your staking should be less than " + (treasuryBalance - 0.000005)/bidAmount + " here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
                if(typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                    console.error("The ratio of your staking should be a number here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
            }
            return bidAmount * stakeRatio;
        }
    }
    else {
        bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
        while(bidAmount > MAX_BID_AMOUNT || typeof bidAmount !== "number" || isNaN(bidAmount)) {
            if(bidAmount > MAX_BID_AMOUNT) {
                console.error("The Max bidding amount is " + MAX_BID_AMOUNT + " SOL here");
                bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
            }
            if(typeof bidAmount !== "number" || isNaN(bidAmount)) {
                console.error("The bid amount should be a number");
                bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
            }
        }
        if(stakeRatio) {
            while(bidAmount * stakeRatio >= treasuryBalance - 0.000005 || typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                if(bidAmount * stakeRatio >= treasuryBalance - 0.000005) {
                    console.error("The ratio of your staking should be less than " + (treasuryBalance - 0.000005)/bidAmount + " here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
                if(typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                    console.error("The ratio of your staking should be a number here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
            }
            return bidAmount * stakeRatio;
        }
        else {
            stakeRatio = Number(prompt("What is the ratio of your staking? "));
            while(bidAmount * stakeRatio >= treasuryBalance - 0.000005 || typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                if(bidAmount * stakeRatio >= treasuryBalance - 0.000005) {
                    console.error("The ratio of your staking should be less than " + (treasuryBalance - 0.000005)/bidAmount + " here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
                if(typeof stakeRatio !== "number" || isNaN(stakeRatio)) {
                    console.error("The ratio of your staking should be a number here");
                    stakeRatio = Number(prompt("What is the ratio of your staking? "));
                }
            }
            return bidAmount * stakeRatio;
        }
    }

}

exports.totalAmtToBePaid = () => {
    if(bidAmount){
        return bidAmount;
    }
    else {
        bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
        while(bidAmount > MAX_BID_AMOUNT || typeof bidAmount !== "number" || isNaN(bidAmount)) {
            if(bidAmount > MAX_BID_AMOUNT) {
                console.error("The Max bidding amount is " + MAX_BID_AMOUNT + " SOL here");
                bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
            }
            if(typeof bidAmount !== "number" || isNaN(bidAmount)) {
                console.error("The bid amount should be a number");
                bidAmount = Number(prompt("What is the amount of SOL you want to stake? "));
            }
        }
        return bidAmount;
    }
}

exports.randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}