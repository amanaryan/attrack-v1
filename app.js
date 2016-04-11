var querystring = require('querystring');
var http = require('https');
var cheerio = require('cheerio');
var request = require('request');
var express = require('express');
var path = require('path');
var app = express();
var compress = require('compression');
app.use(compress());
app.set('view engine', 'jade');
app.get('/', function(req,res){

	res.sendFile('index.html', { root: path.join(__dirname) });
  console.log("STEP 1");
});






app.get('/student/', function(req,resf){


//res.json({message:req.query.search});
var input=req.query.search;
console.log("STEP 2");

                            post_data = querystring.stringify({
                              'sharedBy':'srm_university',
                              'searchValue':input,
                              'formCompId':'2727643000007330025',
                              'appnedRows':'false',
                              'noOfRecsInCache':'0',
                              'formAccessType':'1',
                              'Registration_Number':'-Select-',
                              'formid':'2727643000007330021',
                              'formLinkId':'356',
                              'formLinkName':'My_Attendance',
                              'recType':'1',
                              'dateFormat':'dd-MMM-yyyy',
                              'timeZone':'Asia%2FCalcutta',
                              'uiDateFormat':'%25d-%25b-%25Y',
                              'privatelink':'CZSKuVywY4rB5H3bFTQjAAUAhuPDbJD2bByWw40Q6XpFArb9p0JUfPd8mAd8O7En9SDjFN4AzNxa5mKt8Gw4EEA0As52fCJYOxpR',
                              'viewPrivateLink':'',
                              'appLinkName':'attendance-2015-16'
                                });


                                post_options = {
                                    host: 'creator.zohopublic.com',
                                    path: '/LoadLookupValues.do',
                                    method: 'POST',
                                    headers: {'User-Agent':' Someuseragent',
                              'Accept':' */*',
                              'Accept-Language':'en-US,en;q=0.5',
                              'Accept-Encoding': 'text/html',
                              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                              'X-Requested-With': 'XMLHttpRequest',
                              'Referer': '',
                              'Content-Length':post_data.length,
                              'Connection': 'keep-alive',
                              'Pragma':'no-cache',
                              'Cache-Control': 'no-cache'}
                                };

                                // Set up the request
                                var post_req = http.request(post_options, function(res) {

                                    res.setEncoding('utf8');
                                    res.on('data', function (chunk) {
                                    $ = cheerio.load(chunk);
                                    $('tr').each(function() {
                                    var id=$(this).attr('value');
                                    console.log("STEP 3");
                                    //console.log(id);


                              var options = {
                                url: 'https://creator.zohopublic.com/srm_university/attendance-2015-16/view-perma/My_Attendance1/95rw11XtGXFYR4H7wEmendwf6pYKWrbemGGhdumKCZeXQSeA90kbBVnGQJKxBwdK9EX63Tp5S75RzbTGNYfUxxxgT4q5B0e13kVg/studentID='+id,
                                headers: {'User-Agent':' Secure_User',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Language':' en-US,en;q=0.5',
                                        'Accept-Encoding':' gzip, deflate'
                                   },
                                   gzip:true
                              };

              function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                  $ = cheerio.load(body);
                  console.log("STEP 5 , Parsing Begins");
              rn =$('.mainDiv table:nth-child(3) thead tr:nth-child(1) td:nth-child(3)').html();
              name = $('.mainDiv table:nth-child(3) thead tr:nth-child(2) td:nth-child(3)').html();
              branch = $('.mainDiv table:nth-child(3) thead tr:nth-child(4) td:nth-child(3)').html();
              sem = $('.mainDiv table:nth-child(3) thead tr:nth-child(5) td:nth-child(3)').html();

              sub1_code=$('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(2)').text();
              sub1_name = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(3)').text();
              sub1_tname = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(4) ').text();
              sub1_ct = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(5)').text();
              sub1_ca = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(6)').text();
              sub1_atp = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(7)').text();

              sub2_code=$('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(2)').text();
              sub2_name = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(3)').text();
              sub2_tname = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(4) ').text();
              sub2_ct = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(5)').text();
              sub2_ca = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(6)').text();
              sub2_atp = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(7)').text();

              sub3_code=$('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(2)').text();
              sub3_name = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(3)').text();
              sub3_tname = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(4) ').text();
              sub3_ct = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(5)').text();
              sub3_ca = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(6)').text();
              sub3_atp = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(7)').text();

              sub4_code=$('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(2)').text();
              sub4_name = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(3)').text();
              sub4_tname = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(4) ').text();
              sub4_ct = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(5)').text();
              sub4_ca = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(6)').text();
              sub4_atp = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(7)').text();

              sub5_code=$('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(2)').text();
              sub5_name = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(3)').text();
              sub5_tname = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(4) ').text();
              sub5_ct = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(5)').text();
              sub5_ca = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(6)').text();
              sub5_atp = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(7)').text();

              sub6_code=$('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(2)').text();
              sub6_name = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(3)').text();
              sub6_tname = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(4) ').text();
              sub6_ct = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(5)').text();
              sub6_ca = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(6)').text();
              sub6_atp = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(7)').text();

              sub7_code=$('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(2)').text();
              sub7_name = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(3)').text();
              sub7_tname = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(4) ').text();
              sub7_ct = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(5)').text();
              sub7_ca = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(6)').text();
              sub7_atp = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(7)').text();

              sub8_code=$('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(2)').text();
              sub8_name = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(3)').text();
              sub8_tname = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(4) ').text();
              sub8_ct = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(5)').text();
              sub8_ca = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(6)').text();
              sub8_atp = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(7)').text();



  resf.render('stu',{
    sub1_atp:sub1_atp,
    sub1_ca:sub1_ca,
    sub1_ct:sub1_ct,
    sub1_code:sub1_code,
    sub1_name:sub1_name,
    sub2_atp:sub2_atp,
    sub2_ca:sub2_ca,
    sub2_ct:sub2_ct,
    sub2_code:sub2_code,
    sub2_name:sub2_name,
    sub3_atp:sub3_atp,
    sub3_ca:sub3_ca,
    sub3_ct:sub3_ct,
    sub3_code:sub3_code,
    sub3_name:sub3_name,
    sub4_atp:sub4_atp,
    sub4_ca:sub4_ca,
    sub4_ct:sub4_ct,
    sub4_code:sub4_code,
    sub4_name:sub4_name,
    sub5_atp:sub5_atp,
    sub5_ca:sub5_ca,
    sub5_ct:sub5_ct,
    sub5_code:sub5_code,
    sub5_name:sub5_name,
    sub6_atp:sub6_atp,
    sub6_ca:sub6_ca,
    sub6_ct:sub6_ct,
    sub6_code:sub6_code,
    sub6_name:sub6_name,
    sub7_atp:sub7_atp,
    sub7_ca:sub7_ca,
    sub7_ct:sub7_ct,
    sub7_code:sub7_code,
    sub7_name:sub7_name,
    sub8_atp:sub8_atp,
    sub8_ca:sub8_ca,
    sub8_ct:sub8_ct,
    sub8_code:sub8_code,
    sub8_name:sub8_name,

});
console.log("Should be LAST STEP, Sending response to browser");
                }
              }


request(options, callback);


});



      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();






});

app.get('/api/:input', function(req,resf){


//res.json({message:req.query.search});

var input=req.params.input;
console.log(input);
console.log("STEP 2");

                            post_data = querystring.stringify({
                              'sharedBy':'srm_university',
                              'searchValue':input,
                              'formCompId':'2727643000007330025',
                              'appnedRows':'false',
                              'noOfRecsInCache':'0',
                              'formAccessType':'1',
                              'Registration_Number':'-Select-',
                              'formid':'2727643000007330021',
                              'formLinkId':'356',
                              'formLinkName':'My_Attendance',
                              'recType':'1',
                              'dateFormat':'dd-MMM-yyyy',
                              'timeZone':'Asia%2FCalcutta',
                              'uiDateFormat':'%25d-%25b-%25Y',
                              'privatelink':'CZSKuVywY4rB5H3bFTQjAAUAhuPDbJD2bByWw40Q6XpFArb9p0JUfPd8mAd8O7En9SDjFN4AzNxa5mKt8Gw4EEA0As52fCJYOxpR',
                              'viewPrivateLink':'',
                              'appLinkName':'attendance-2015-16'
                                });


                                post_options = {
                                    host: 'creator.zohopublic.com',
                                    path: '/LoadLookupValues.do',
                                    method: 'POST',
                                    headers: {'User-Agent':' Someuseragent',
                              'Accept':' */*',
                              'Accept-Language':'en-US,en;q=0.5',
                              'Accept-Encoding': 'text/html',
                              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                              'X-Requested-With': 'XMLHttpRequest',
                              'Referer': '',
                              'Content-Length':post_data.length,
                              'Connection': 'keep-alive',
                              'Pragma':'no-cache',
                              'Cache-Control': 'no-cache'}
                                };

                                // Set up the request
                                var post_req = http.request(post_options, function(res) {

                                    res.setEncoding('utf8');
                                    res.on('data', function (chunk) {
                                    $ = cheerio.load(chunk);
                                    $('tr').each(function() {
                                    var id=$(this).attr('value');
                                    console.log("STEP 3");
                                    //console.log(id);


                              var options = {
                                url: 'https://creator.zohopublic.com/srm_university/attendance-2015-16/view-perma/My_Attendance1/95rw11XtGXFYR4H7wEmendwf6pYKWrbemGGhdumKCZeXQSeA90kbBVnGQJKxBwdK9EX63Tp5S75RzbTGNYfUxxxgT4q5B0e13kVg/studentID='+id,
                                headers: {'User-Agent':' Secure_User',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Language':' en-US,en;q=0.5',
                                        'Accept-Encoding':' gzip, deflate'
                                   },
                                   gzip:true
                              };

              function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                  $ = cheerio.load(body);
                  console.log("STEP 5 , Parsing Begins");
              rn =$('.mainDiv table:nth-child(3) thead tr:nth-child(1) td:nth-child(3)').html();
              name = $('.mainDiv table:nth-child(3) thead tr:nth-child(2) td:nth-child(3)').html();
              branch = $('.mainDiv table:nth-child(3) thead tr:nth-child(4) td:nth-child(3)').html();
              sem = $('.mainDiv table:nth-child(3) thead tr:nth-child(5) td:nth-child(3)').html();

              sub1_code=$('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(2)').text();
              sub1_name = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(3)').text();
              sub1_tname = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(4) ').text();
              sub1_ct = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(5)').text();
              sub1_ca = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(6)').text();
              sub1_atp = $('.mainDiv table:nth-child(7) tr:nth-child(2) td:nth-child(7)').text();

              sub2_code=$('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(2)').text();
              sub2_name = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(3)').text();
              sub2_tname = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(4) ').text();
              sub2_ct = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(5)').text();
              sub2_ca = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(6)').text();
              sub2_atp = $('.mainDiv table:nth-child(7) tr:nth-child(3) td:nth-child(7)').text();

              sub3_code=$('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(2)').text();
              sub3_name = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(3)').text();
              sub3_tname = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(4) ').text();
              sub3_ct = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(5)').text();
              sub3_ca = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(6)').text();
              sub3_atp = $('.mainDiv table:nth-child(7) tr:nth-child(4) td:nth-child(7)').text();

              sub4_code=$('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(2)').text();
              sub4_name = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(3)').text();
              sub4_tname = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(4) ').text();
              sub4_ct = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(5)').text();
              sub4_ca = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(6)').text();
              sub4_atp = $('.mainDiv table:nth-child(7) tr:nth-child(5) td:nth-child(7)').text();

              sub5_code=$('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(2)').text();
              sub5_name = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(3)').text();
              sub5_tname = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(4) ').text();
              sub5_ct = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(5)').text();
              sub5_ca = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(6)').text();
              sub5_atp = $('.mainDiv table:nth-child(7) tr:nth-child(6) td:nth-child(7)').text();

              sub6_code=$('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(2)').text();
              sub6_name = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(3)').text();
              sub6_tname = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(4) ').text();
              sub6_ct = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(5)').text();
              sub6_ca = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(6)').text();
              sub6_atp = $('.mainDiv table:nth-child(7) tr:nth-child(7) td:nth-child(7)').text();

              sub7_code=$('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(2)').text();
              sub7_name = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(3)').text();
              sub7_tname = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(4) ').text();
              sub7_ct = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(5)').text();
              sub7_ca = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(6)').text();
              sub7_atp = $('.mainDiv table:nth-child(7) tr:nth-child(8) td:nth-child(7)').text();

              sub8_code=$('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(2)').text();
              sub8_name = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(3)').text();
              sub8_tname = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(4) ').text();
              sub8_ct = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(5)').text();
              sub8_ca = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(6)').text();
              sub8_atp = $('.mainDiv table:nth-child(7) tr:nth-child(9) td:nth-child(7)').text();


resf.setHeader('Content-Type', 'application/json');
resf.header("Access-Control-Allow-Origin", "*");
  resf.json({
        studentname:name,
        studentregno:rn,
        studentbranch:branch,
        studentsem:sem,
        sub1code:sub1_code,
 	sub1name:sub1_name,
       sub1frac:sub1_ca+"/"+sub1_ct,
        sub1atp:sub1_atp,
         sub2code:sub2_code,
	sub2name:sub2_name,
        sub2frac:sub2_ca+"/"+sub2_ct,
        sub2atp:sub2_atp,
         sub3code:sub3_code,
sub3name:sub3_name,
        sub3frac:sub3_ca+"/"+sub3_ct,
        sub3atp:sub3_atp,
         sub4code:sub4_code,
sub4name:sub4_name,
        sub4frac:sub4_ca+"/"+sub4_ct,
        sub4atp:sub4_atp,
         sub5code:sub5_code,
sub5name:sub5_name,
        sub5frac:sub5_ca+"/"+sub5_ct,
        sub5atp:sub5_atp,
         sub6code:sub6_code,
sub6name:sub6_name,
        sub6frac:sub6_ca+"/"+sub6_ct,
        sub6atp:sub6_atp,
        sub7code:sub7_code,
sub7name:sub7_name,
        sub7frac:sub7_ca+"/"+sub7_ct,
        sub7atp:sub7_atp,
         sub8code:sub8_code,
sub8name:sub8_name,
        sub8frac:sub8_ca+"/"+sub8_ct,
        sub8atp:sub8_atp

});
console.log("Should be LAST STEP, Sending response to browser");
                }
              }


request(options, callback);


});



      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();






});



app.listen(8080);
