
var searchTerm = "nfl";
var yearStar = 2008;
var yearEnd = 2017;

//// ----------- AJAX GET THE API INFO //////////////////////////////////////
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  'api-key': "97465cece832491fa3bc26a21108435b",
  'q': searchTerm,
  'begin_date': yearStar + "0101",
  'end_date': yearEnd + "0101",
  'page': 1
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
//// ----------- CREATES THE OBJECTS  //////////////////////////////////////
function retriveArticle(numart) {
  for (var i= 0; i < numart; i++){
    var articleObject = {
       title:  result.response.docs[i].headline.main,
       by:  result.response.docs[i].byline.original,
       section:   result.response.docs[i].section_name,
       date:  result.response.docs[i].pub_date,
       turl:  result.response.docs[i].web_url
     }

  /// THIS IS YOUR FRONT END INFORMATION //////////////////////////////////////// 
     console.log(articleObject);
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  } // end of the loop
}//end of the retriveArticle


// /////////////////THIS CALL THE FUNCTION /////////////////////////////.
retriveArticle (5);
/// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

}).fail(function(err) {
  throw err;
}); // END OF AJAX STUFF 