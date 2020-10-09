accounts=[
'alyac_kor',
'kisa118',
'ciscosecure',
'kaspersky',
'SecurityWeek',
'msftsecresponse',
'threatintel',
'WebSecurityNews',
'IntelSecurity',
'AlanOrlikoski',
'skim71',
'DirectoryRanger',
'Unit42_Intel',
'malware_traffic',
'Dinosn'
]



function createsFrame(){var frame = `<div class="twitterInfo"><a class="twitter-timeline" data-lang="ko" data-tweet-limit= 5 href="https://twitter.com/bts_twt"></a></div>`;var doc = document.querySelector(`body`);var first = `<html><script src="./app.js" charset="utf-8"></script><script async src="./widgets.js" charset="utf-8"></script><link href="./widget.css" rel="stylesheet"><head><div class ="titleInfo">트위터 공개정보</div></head><body><div class="intro-container">박재용&lt;scorpion@dgu.ac.kr&gt;<br>정보보호 19-4기</div><div class="twitter-container">`;var second = ``;var third = `</div></body></html>`;for(var i=0; i<accounts.length;i++){second+=`<div class="twitterInfo"><a class="twitter-timeline" data-lang="ko" data-tweet-limit= 5 href="https://twitter.com/${accounts[i]}"></a></div>`;}var final=first+second+third;return final;}function writeRec(){document.write(createsFrame());setTimeout(writeRec,180000)}window.onload=function(){writeRec();}

