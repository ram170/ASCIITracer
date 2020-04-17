alert("If you're using phone, you can't check the functionality of the site. Try using pc");
var count = 0;
dict = {};

function capture(e) {
    count += 1;
    document.getElementById('trash').innerHTML = "";
    document.getElementById('key').innerHTML = "Key: " + e.key;
    document.getElementById('value').innerHTML = "Value: " + e.which;
    document.getElementById('showPress').innerHTML = "keypress count: " + count; 
    var arr = maxPress(e);
    document.getElementById('showFrequent').innerHTML = "Frequently pressed: " + arr[0] +" is pressed "+arr[1]+" times";
    document.getElementById('totalChar').innerHTML = "Total characters pressed: " + arr[4];
    // console.log(e.which);
}

function maxPress(e) {
    var arr = [];
    if (e.key in dict) {
        dict[e.key] += 1;
    }
    else {
        dict[e.key] = 1;
    }

    var max = -1, keyValueMax, min = 9999999, keyValueMin, len = 0;
    for(var key in dict) {
        len+=1;
        if (dict[key]>max) {
            // console.log(key);
            max = dict[key];
            keyValueMax = key;
        }
        if (dict[key]<=min) {
            min = dict[key];
            keyValueMin = key;
        }
    }
    arr.push(keyValueMax);
    arr.push(max);
    arr.push(keyValueMin);
    arr.push(min);
    arr.push(len);
    return arr;
}

function reset() {
    if(count!=0){
        dict = {};
        count = 0;
        document.getElementById('key').innerHTML = "key: ";
        document.getElementById('value').innerHTML = "Value: ";
        document.getElementById('showPress').innerHTML = "keypress count: -";
        document.getElementById('showFrequent').innerHTML = "Frequently pressed: -";
        document.getElementById('totalChar').innerHTML = "Total characters pressed: -"
    }
}

function desc(i) {
    if (i === 1) {
        document.getElementById('coin').innerHTML = "Simple site which can be used to perform cointoss which randomly generates heads/tails."
        var link = createLink("https://ram170.github.io/");
        document.getElementById("linkCoin").appendChild(link);
    }
    if (i === 2) {
        document.getElementById('todo').innerHTML = "Webpage where you can add your ToDos, pop em after you've done it and reset completely."
        var link = createLink("https://ram170.github.io/ToDoList");
        document.getElementById("linkTodo").appendChild(link);
    }
    if (i === 3) {
        document.getElementById('youtube').innerHTML = "Nothing to show here. Feel free to check out my Youtube channel. I post guitar covers & gameplays."
        var link = createLink("https://www.youtube.com/user/SriramCR7");
        document.getElementById("linkYoutube").appendChild(link);
    }
}

function createLink(url) {
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.appendChild(document.createTextNode("Click to view"));
    return link;
}

document.body.addEventListener('keypress', capture, false);
