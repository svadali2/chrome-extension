fetch('http://ipinfo.io?token=0a2a69d103d979').then(r => r.text()).then(str => {
    var response = JSON.parse(str);

    var ip = document.getElementById('ip').innerHTML = "IP: " + response["ip"];
    var address = document.getElementById('address').innerHTML = "Location: " + response.city + ", " + response.region;
    var details = document.getElementById('details').innerHTML = JSON.stringify(response);
})
