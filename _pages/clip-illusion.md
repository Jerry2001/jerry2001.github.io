---
layout: page
permalink: /clip-illusion/
description: 
nav: false
---

<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">google.load("jquery", "1.3.2");</script>

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width">
  <title>Project page for Large Vision Language Model is Fooled by Optical Illusions</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script>
  MathJax = {
    loader: {load: ['a11y/semantic-enrich']},
    options: {
      sre: {
        speech: 'shallow'  // one of: 'deep', 'shallow', or 'none'
      },
      renderActions: {
        //
        // Force speech enrichment regardless of the menu settings
        //
        enrich: {'[+]': [
          function (doc) {doc.enrich(true)},
          function (math, doc) {math.enrich(doc, true)}
        ]}
      }
    },
    tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
  };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
</head>

<style type="text/css">
	body {
		font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		font-weight:300;
		font-size:18px;
		margin-left: auto;
		margin-right: auto;
		width: 1000px;
	}

	h1 {
		font-weight:300;
		font-size:24px;
	}

	code {
    font-size: 0.8rem;
    margin: 0 0.1rem;
    padding: 0.1rem 0.1rem;
    white-space: nowrap;
    back

	ground: #efefef;
    border: 1px solid #d3d3d3;
    color: #000000;
    border-radius: 3px;
}

pre > code {
    display: block;
    white-space: pre;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    text-align: left;
}

	.disclaimerbox {
		background-color: #eee;
		border: 1px solid #eeeeee;
		border-radius: 10px ;
		-moz-border-radius: 10px ;
		-webkit-border-radius: 10px ;
		padding: 20px;
	}

	video.header-vid {
		height: 140px;
		border: 1px solid black;
		border-radius: 10px ;
		-moz-border-radius: 10px ;
		-webkit-border-radius: 10px ;
	}

	img.header-img {
		height: 140px;
		border: 1px solid black;
		border-radius: 10px ;
		-moz-border-radius: 10px ;
		-webkit-border-radius: 10px ;
	}

	img.rounded {
		border: 1px solid #eeeeee;
		border-radius: 10px ;
		-moz-border-radius: 10px ;
		-webkit-border-radius: 10px ;
	}

	a:link,a:visited
	{
		color: #1367a7;
		text-decoration: none;
	}
	a:hover {
		color: #208799;
	}

	td.dl-link {
		height: 160px;
		text-align: center;
		font-size: 22px;
	}

	.layered-paper-big { /* modified from: http://css-tricks.com/snippets/css/layered-paper/ */
		box-shadow:
		        0px 0px 1px 1px rgba(0,0,0,0.35), /* The top layer shadow */
		        5px 5px 0 0px #fff, /* The second layer */
		        5px 5px 1px 1px rgba(0,0,0,0.35), /* The second layer shadow */
		        10px 10px 0 0px #fff, /* The third layer */
		        10px 10px 1px 1px rgba(0,0,0,0.35), /* The third layer shadow */
		        15px 15px 0 0px #fff, /* The fourth layer */
		        15px 15px 1px 1px rgba(0,0,0,0.35), /* The fourth layer shadow */
		        20px 20px 0 0px #fff, /* The fifth layer */
		        20px 20px 1px 1px rgba(0,0,0,0.35), /* The fifth layer shadow */
		        25px 25px 0 0px #fff, /* The fifth layer */
		        25px 25px 1px 1px rgba(0,0,0,0.35); /* The fifth layer shadow */
		margin-left: 10px;
		margin-right: 45px;
	}


	.layered-paper { /* modified from: http://css-tricks.com/snippets/css/layered-paper/ */
		box-shadow:
		        0px 0px 1px 1px rgba(0,0,0,0.35), /* The top layer shadow */
		        5px 5px 0 0px #fff, /* The second layer */
		        5px 5px 1px 1px rgba(0,0,0,0.35), /* The second layer shadow */
		        10px 10px 0 0px #fff, /* The third layer */
		        10px 10px 1px 1px rgba(0,0,0,0.35); /* The third layer shadow */
		margin-top: 5px;
		margin-left: 10px;
		margin-right: 30px;
		margin-bottom: 5px;
	}

	.vert-cent {
		position: relative;
	    top: 50%;
	    transform: translateY(-50%);
	}

	hr
	{
		border: 0;
		height: 1.5px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}

	p.small {
		font-size: 12px
	}
	figure{
  display: inline-block;
}

/* optional, use as required */
figcaption {
  max-width: 100%;
  caption-side: bottom;
}
</style>



<html>
  <head>
		<title>Semantic uncertainty intervals for disentangled latent spaces</title>
  </head>

  <body>
    <br>
    <center>
    <span style="font-size:33px">Large Vision Language Model is Fooled by Optical Illusions</span>
	</center>
	<br> 
  	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:20px"><a href='https://swamiviv.github.io/'>Jerry Ngo<sup>1, 2</sup></a></span>
		</center>
		</td>
		<td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href='https://swamiviv.github.io/'>Swami Sankaranarayanan<sup>2</sup></a></span>
		</center>
		</td>
		<td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href="http://web.mit.edu/phillipi/">Phillip &nbsp; Isola<sup>2</sup></a></span>
		</center>
		</td>
	</tr>
	</table>
	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:20px"><sup>1</sup> Beloit College     &nbsp;&nbsp;</span>
			<span style="font-size:20px"><sup>2</sup> MIT CSAIL   &nbsp;&nbsp;</span>
		</center>
		</td>
	 </tr>
	</table>
	<h1><center>Abstract</center></h1>
	Recent large machine learning models have achieved impressive performance while showing some shared similarities with human biology. In this work, we pose the question of whether big vision language models, specifically, CLIP, are able to capture optical illusion which is tightened to human biology and perception. We measure the effect by presenting a variety of illusions in the form of images and texts to CLIP and observing how the model’s classification score changes under different conditions of the illusion. Our results show that CLIP is able to capture different types of illusions like lightness illusion and geometrical illusion. We also propose a way to calibrate CLIP score to reduce biases.
	<hr>
	<h2>Vasarely Illusion</h2>
	<div class="row">
		<div class="col-sm-5">
			<div class="embed-responsive embed-responsive-1by1">
				<center><iframe class="embed-responsive-item" src="/assets/img/projects/clip_illusion/vasarely/display.mp4"></iframe></center>
			</div>
		</div>
	</div>
	<br>
	<h3>Non-Calibrate:</h3>
	<img src="/assets/img/projects/clip_illusion/vasarely/non_vasarely_effect.png" class="img-fluid">
	<img src="/assets/img/projects/clip_illusion/vasarely/non_vasarely_effect_1.png" class="img-fluid">
	<h3>Calibrate:</h3>
	<img src="/assets/img/projects/clip_illusion/vasarely/vasarely_effect.png" class="img-fluid">
	<img src="/assets/img/projects/clip_illusion/vasarely/vasarely_effect_1.png" class="img-fluid">
	<h2>Ponzo Illusion</h2>
	<div class="row">
		<div class="col-sm-5">
			<div class="embed-responsive embed-responsive-1by1">
				<center><iframe class="embed-responsive-item" src="/assets/img/projects/clip_illusion/ponzo/display.mp4"></iframe></center>
			</div>
		</div>
	</div>
	<br>
	<h3>Non-Calibrate:</h3>
	<img src="/assets/img/projects/clip_illusion/ponzo/non_ponzo_effect.png" class="img-fluid">
	<img src="/assets/img/projects/clip_illusion/ponzo/non_ponzo_effect_1.png" class="img-fluid">
	<h3>Calibrate:</h3>
	<img src="/assets/img/projects/clip_illusion/ponzo/ponzo_effect.png" class="img-fluid">
	<img src="/assets/img/projects/clip_illusion/ponzo/ponzo_effect_1.png" class="img-fluid">
</body>
</html>