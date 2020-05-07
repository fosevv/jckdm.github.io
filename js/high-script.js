var back = '<div class="back"><a id="myWBtn" class="bha">&#8617;&#xFE0E;</a> <div id="myWModal" class="modal"> <div class="modal-content"> <span class="w_close">&#8617;&#xFE0E; </span><a id="myArcBtn" class="archive">View Full Archive</a> <div class="gap"> </div> <div id="myArcModal" class="modal"> <div class="modal-content"> <span class="arc_close">&#8617;&#xFE0E; </span><a id="myPhBtn" class="galleries">Photography</a> <div class="gap"> </div> <div id="myPhModal" class="modal"> <div class="modal-content"> <span class="ph_close">&#8617;&#xFE0E; </span><a id="myPBtn" class="galleries">Projects</a> <div class="gap"> </div> <div id="myPModal" class="modal"> <div class="modal-content"> <span class="p_close">&#8617;&#xFE0E; </span> <span data-href="doll-house.html" class="galleries">Doll House </span> <div class="gap"> </div> <span data-href="dreaming.html" class="galleries">Dreaming </span> <div class="gap"> </div> <span data-href="eshete-woldeyilma.html" class="galleries">Eshete Woldeyilma </span> <div class="gap"> </div> <span data-href="soy-boricua.html" class="galleries">Soy Boricua </span> <div class="gap"> </div> <span data-href="120.html" class="galleries">120 </span> <div class="gap"> </div> <span data-href="to-come-of-age.html" class="galleries">To Come of Age </span> <div class="medspace"> </div> </div> </div><a id="mySWBtn" class="galleries">Selected Works</a> <div id="mySWModal" class="modal"> <div class="modal-content"> <span class="sw_close">&#8617;&#xFE0E; </span> <span data-href="portraits.html" class="galleries">Portraits </span> <div class="gap"> </div> <span data-href="self-portraits.html" class="galleries">Self-portraits </span> <div class="gap"> </div> <span data-href="fashion.html" class="galleries">Fashion </span> <div class="gap"> </div> <span data-href="still-life.html" class="galleries">Still Life </span> <div class="gap"> </div> <span data-href="street.html" class="galleries">Street </span> <div class="medspace"> </div> </div> </div> <div class="medspace"> </div> </div> </div> <span data-href="painting.html" class="galleries">Painting </span> <div class="gap"> </div> <span data-href="drawing.html" class="galleries">Drawing </span> <div class="gap"> </div> <span data-href="sculpture.html" class="galleries">Sculpture </span> <div class="gap"> </div> <span data-href="digital.html" class="galleries">Digital </span> <div class="gap"> </div> <span data-href="street-art.html" class="galleries">Street Art </span> <div class="gap"> </div> <span data-href="ambiance.html" class="galleries">Ambiance </span> <div class="medspace"> </div> </div> </div> <span class="slash">/</span><span data-href="120_h.html" class="highlite">medium-format film images of urban intimacy</span> <div class="highgap"></div> <span class="slash">/</span><a href="https://jackadam.cc/tianatime" target="_blank" class="highlite">virtual, globalized art exhibition</a> <div class="highgap"></div> <span class="slash">/</span><span data-href="HIV.html" class="highlite">interactive data visualization of trends in HIV</span> <div class="highgap"></div> <span class="slash">/</span><span data-href="chapbook.html" class="highlite">hand-bound, typeset chapbook</span> <div class="highgap"></div> <span class="slash">/</span><span data-href="eshete-woldeyilma_h.html" class="highlite">on-going photo essay exploring community</span> <div class="iSpace"></div> </div> </div> <br> <br> <div id="arrSpace"> </div> <div id="hugespace"> </div> <span data-href="index.html" class="bha" id="backhome">&#8629;&#xFE0E; </span></div>';

$(function() {
  $('body').append(back);

  $('#myWBtn').on('click', function() { $('#myWModal').css('display', 'block'); });
  $('.w_close').first().on('click', function() { $('#myWModal').css('display', 'none'); });

  $('#myArcBtn').on('click', function() { $('#myArcModal').css('display', 'block'); });
  $('.arc_close').first().on('click', function() { $('#myArcModal').css('display', 'none'); });

  $('#myPhBtn').on('click', function() { $('#myPhModal').css('display', 'block'); });
  $('.ph_close').first().on('click', function() { $('#myPhModal').css('display', 'none'); });

  $('#myPBtn').on('click', function() { $('#myPModal').css('display', 'block'); });
  $('.p_close').first().on('click', function() { $('#myPModal').css('display', 'none'); });

  $('#mySWBtn').on('click', function() { $('#mySWModal').css('display', 'block'); });
  $('.sw_close').first().on('click', function() { $('#mySWModal').css('display', 'none'); });
})
