var line = 'ATTMBQECPD';
var flag = 0;
    var len = line.length;
    var count = len;
    var char = ['A', 'B', 'C', 'D', 'E'];
    for(var i = 0; i<len; i++){
        var newstr = line.slice(i,len)+line.slice(0,i);
        for(var j = 5; j <= len; j++){
            var sub = newstr.slice(0, j);
            if(sub.indexOf('A') !== -1 && sub.indexOf('B') !== -1  && sub.indexOf('C')  !== -1 &&
               sub.indexOf('D') !== -1  && sub.indexOf('E') !== -1 ){
                count = Math.min(count,sub.length);               
            }
        }
    }
    alert(len-count);