$(() => {
  const x = {
    portraits: 9, selfportraits: 8, fashion: 6, stilllife: 15, street: 10,
    dollhouse: 20, dreaming: 12, eshetewoldeyilma: 13, soyboricua: 11, _120: 9, tocomeofage: 3,
    painting: 9, drawing: 8, sculpture: 4, digital: 6, streetart: 8,
    chapbook: 6
  };

  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0"/> <link rel="apple-touch-icon" sizes="180x180" href="pics/apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="16x16" href="pics/favicon-16x16.png"> <link rel="icon" type="image/png" sizes="32x32" href="pics/favicon-32x32.png"> <link rel="manifest" href="pics/site.webmanifest"> <link rel="mask-icon" href="pics/safari-pinned-tab.svg" color="#000000"> <meta name="msapplication-TileColor" content="#2b5797"> <meta name="theme-color" content="#ffffff">');

  let path = window.location.pathname;
  const filename = path.split('/').pop();

  // comment out this line
  if (filename.slice(-5) == '.html') { window.location.replace(path.slice(0, -5)); }
  // switch definitions of name
  let name = filename.=.replace(/-/g, '');
  // let name = filename.slice(0,-5).replace(/-/g, '');

  path = 'img/' + name + '/';

  if (name == "120") { name = '_' + name; }
  const l = x[name];

  const sculpture1 = '<i>Fixing a Hole</i> <br> <br> 2019 <br> <br> 48 x 16 in. <br> <br> Candle wax on wood';
  const sculpture2 = '<i>Cerulean (Light)</i> <br> <br> 2019 <br> <br> 33 x 22 in. <br> <br> Acrylic, wall paint, spray paint, raw canvas, thread, nails, superglue on canvas';
  const sculpture3 = '<i>Sidetable</i> <br> <br> 2019 <br> <br> Pine, ash, brass, resin';
  const sculpture4 = '<i>Solar Storm Above the Spanish Empire</i> <br> <br> 2018 <br> <br> 49 x 14 in. <br> <br> Dye, embroidery, blood, paper ticket on unprimed canvas';

  const painting1 = '<i> After Keith Haring </i> <br> <br> 2019 <br> <br> 30 x 30 in. <br> <br> Acrylic on canvas <br> <br> <br> <a href="pics/dearkeith.pdf" class="statement" target="_blank">STATEMENT</a>';
  const painting2 = '<i>Lovers</i> <br> <br> 2019 <br> <br> 22 x 29 in. <br> <br> Acrylic, ink on foam board';
  const painting3 = '<i>Evidence for a Large Exomoon Orbiting Kepler-1625b</i> <br> <br> 2018–2019 <br> <br> 35 x 47 in. (each 35 x 23.5 in.) <br> <br> Wall paint, acrylic paint on wood panels';
  const painting4 = '<i> A Flag Belongs </i> <br> <br> 2018 <br> <br> 26 x 45 in. <br> <br> Paper, ink, embroidery on unprimed canvas';
  const painting5 = '2018 <br> <br> 16 x 12 in. <br> <br> Ink with bamboo pen on cardstock';
  const painting6 = '<i>Birth</i> <br> <br> 2017 <br> <br> 30 x 24 in. <br> <br> Acrylic paint, ink, paper, spray paint, oil on canvas';
  const painting7 = '2016 <br> <br> 20 x 14 in. <br> <br> Ink with bamboo pen on cardstock';
  const painting8 = '<i>Charlie-Gibbs Fracture Zone</i> <br> <br> 2018 <br> <br> 23 x 29 in. <br> <br> Wall paint, spray paint, acrylic paint on wood panel';
  const painting9 = '<i>El techo de tu cuarto</i> <br> <br> 2018 <br> <br> 18 x 48 in. <br> <br> Glass paint and block printing ink on paper';

  const c = (name == "sculpture" || name == "painting") ? '<div class="paintsculpt"></div>' : '<div class="websiteImages"></div>';
  $('body').prepend('<div class="images">' + c + '<div class="endspace"></div> </div>');

  for (let i = 1; i <= l; i++) {
    if (name == "sculpture" || name == "painting") {
      $('.paintsculpt').append('<div class="container"> <img class="hoverables" src="' + path + i + '.jpg"></img> <div class="overlay"> <div class="text">'
      + eval(name + i) + '</div> </div> </div> <div class="iSpace"></div>');
    }
    else if (name == "digital" && i == l) {
      $('.websiteImages').append('<iframe width="100%" frameborder="0" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303889451&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> <div class="iSpace"></div> <iframe width="100%" frameborder="0" src="https://player.vimeo.com/video/198531171?color=ffffff&byline=0&portrait=0" allowfullscreen></iframe>');
    }
    else { $('.websiteImages').append('<img class="reg-images" src="' + path + i + '.jpg"></img> <div class="iSpace"></div>'); }
  }

	$('.websiteImages').click((e) => {
		if (e.target.tagName === 'IMG') {
			$('body').append('<div id="overlay"></div>');
			$('#overlay').append('<img id="popimage" src="' + e.target.src + '"></div>');
			$('#overlay').click(() => document.body.removeChild(overlay))
		}
	});
})
