// JS/facebook.js
const token = "7bd3a0bc6e56a937ec76d42c13337d4a";

async function getEmployeeStatus(fbId) {
  const response = await fetch(`https://graph.facebook.com/${fbId}?fields=online_presence&access_token=${token}`);
  const data = await response.json();
  return data.online_presence;
}
