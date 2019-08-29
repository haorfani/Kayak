var ttn = require("ttn")
var json2csv = require("json2csv").parse
var fs = require("fs")

var appID = "kayak"
var accessKey = "ttn-account-v2.uUwZNiMMF-kXEY_VOOB_FAzrMGhDsH_JTaO5lhk1pt0"

var date = new Date()
var sf

ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      //console.log("Received uplink from ", devID)
      //console.log(JSON.stringify(payload))
      console.log(payload)
      //console.log('\n')
      //console.log(payload.counter)
      //console.log(payload.metadata.data_rate)
      sf = payload.metadata.data_rate

      if (payload.counter == 0) {
      date = new Date()
      }
      //var csv = json2csv(payload)
      //fs.appendFileSync(`./${date.getFullYear() + "-" + (date.getMonth() +1) + "-" +date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds()}.csv`, csv)
      //fs.writeFileSync("./test.csv", '\n')
      fs.appendFileSync(`./${sf}_${date.getFullYear() + "-" + (date.getMonth() +1) + "-" +date.getDate() + "_" + date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds()}.txt`, JSON.stringify(payload) + '\n')
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })
