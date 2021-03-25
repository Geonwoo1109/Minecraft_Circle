const scriptName = "Minecraft Circle";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith(".마크 원 ")) {
    var r = msg.substr(6)*1;
    var result = [];
    for (i=1; i<r+1; i++) result.push(i +","+Math.pow(Math.pow(r,2) - Math.pow(i,2),1/2).toFixed(0));
    replier.reply(result.join("\n"));
  }
}
