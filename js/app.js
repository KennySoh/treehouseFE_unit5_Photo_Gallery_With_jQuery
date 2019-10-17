var imageCaption={
  '01':"I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  '02':"The lake was so calm today. We had a great view of the snow on the mountains from here.",
  '03':"I hiked to the top of the mountain and got this picture of the canyon and trees below.",
  '04':"It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ",
  '05':"The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  '06':"Fall is coming, I love when the leaves on the trees start to change color.",
  '07':"I drove past this plantation yesterday, everything is so green!",
  '08':"My summer vacation to the Oregon Coast. I love the sandy dunes!",
  '09':"We enjoyed a quiet stroll down this countryside lane.",
  '10':"Sunset at the coast! The sky turned a lovely shade of orange.",
  '11':"I did a tour of a cave today and the view of the landscape below was breathtaking.",
  '12':"I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
  };

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      tCounter: ''
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return imageCaption[item.el.attr('title')];
      },
      markup: '<div class="mfp-figure">'+
                '<div class="mfp-img"></div>'+
                '<div class="mfp-bottom-bar">'+
                  '<div class="mfp-title"></div>'+
                '</div>'+
              '</div>',
    }
  });
});

/*--------------
Search Filter for images captions, Hide image caption that does not match
Input: dictionary of imageCaption, listOfA in #popup-gallery1, input in #myInput
Output: Changes display of filtered a to none;
-----------------*/
function myFunction(imageCaption) {
  // Declare variables
  var input,filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  listOfA = document.getElementById("popup-gallery1").getElementsByTagName("a");;

  // Loop through all image captions, hide those that doesnt fit
  for (i = 0; i < listOfA.length; i++) {
    if(imageCaption[listOfA[i].title].toUpperCase().includes(filter)){
        listOfA[i].style.display = "";
    } else {
        listOfA[i].style.display = "none";
    }
  }
  return null;
}

//calling Search filter on input event change
$('#myInput').on('input', function() {
    myFunction(imageCaption);
});
