const ConstantRPC = require('../constant-rpc/constant_rpc');
var assert = require('assert');
const ConstantValue = require('../common/constant');
!(async function () {
  const shard0 = new ConstantRPC("127.0.0.1", 9334);
  const shard1 = new ConstantRPC("127.0.0.1", 9338);
  // Shard 0 
  for (i = 0; i < 4; i++) {
    const sendTxResult = await shard0.CreateAndSendTransaction("112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh", {
      "1Uv3VB24eUszt5xqVfB87ninDu7H43gGxdjAUxs9j9JzisBJcJr7bAJpAhxBNvqe8KNjM5G9ieS1iC944YhPWKs3H2US2qSqTyyDNS4Ba": 2
    }, 100, 0)
    console.log("Transaction Shard 0", sendTxResult.Response.Result.TxID)
  }
  //Shard 1
  // for (i = 0; i < 5; i++) {
  //   const sendTxResult = await shard1.CreateAndSendTransaction("112t8s2UkZEwS7JtqLHFruRrh4Drj53UzH4A6DrairctKutxVb8Vw2DMzxCReYsAZkXi9ycaSNRHEcB7TJaTwPhyPvqRzu5NnUgTMN9AEKwo", {
  //     "1Uv25dvj8HnfGNYAcY9c1wg5uJ2XoZe3MCUv3MBrbTS15tykLL1i3r1ko7VLv5zhB9acCs5JS7U4X9tKexbneumEje6o9rHZqVeihxZW7": 10
  //   }, 0, 0)
  //   console.log("Transaction Shard 1", sendTxResult.Response.Result.TxID)
  // }
})()