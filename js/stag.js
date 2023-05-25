function $_GET(e,t){return!!(t=t.match(new RegExp(e+"=([^&=]+)")))&&t[1]}
    var getStag = $_GET("stag", window.location.href);
    var stag = "?stag=" + getStag;
    console.log("STAG - " + stag);

    $('.stag').click(function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = 'https://casinokakadu.com/fi' + stag;
    })