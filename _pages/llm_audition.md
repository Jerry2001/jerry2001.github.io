---
layout: page
permalink: /llm_audition/
description: 
nav: false
---

<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">google.load("jquery", "1.3.2");</script>

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width">
  <title>What Do Language Models Hear?</title>
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

#bold {
    font-weight: 600;
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
		width: auto;
		height: 320px;
		border: 0px solid black;
		border-radius: 0px ;
		-moz-border-radius: 0px ;
		-webkit-border-radius: 0px ;
	}

	.image-container {
    display: flex;
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content if necessary */
    gap: 20px; /* Adjusts the space between the images */
	}

	.grid-container {
	  display: grid;
	  grid-template-columns: repeat(2, 1fr); /* Creates two columns */
	  grid-gap: 10px; /* Space between grid items */
	  justify-content: center; /* Centers the grid horizontally */
	  align-items: start; /* Aligns items to the start of the cell vertically */
	  margin: auto; /* Centers the grid in the available horizontal space */
	  width: 80%; /* Adjust the width as needed */
	  max-width: 1000px; /* Maximum width of the grid */
	}

/* You can use the existing .image-container class for the grid items. */
/* Update its properties as needed for the cells. */
	.grid-image-container {
	  border: 0px solid #ccc; /* Example border */
	  border-radius: 0px; /* If you want rounded corners */
	  padding: 10px; /* Space inside the grid items */
	  background-color: #fff; /* White background */
	  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.35); /* Box shadow from your style */
	  /* Other styles from .layered-paper can be used if desired */
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

  <body>
    <br>
    <center>
    <span style="font-size:35px">What Do Language Models Hear?</span>
    <br>
    <span style="font-size:30px">Probing for Auditory Representations in Language Models</span>
	</center>
	<br> 
  	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:24px"><a href='https://jerryngo.com/'>Jerry Ngo</a></span>
		</center>
		</td>
		<td align=center width=100px>
		<center>
		<span style="font-size:24px"><a href='https://people.csail.mit.edu/yoonkim/'>Yoon Kim</a></span>
		</center>
		</td>
	</tr>
	</table>
	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:24px">MIT&nbsp;&nbsp;</span>
		</center>
		</td>
	 </tr>
	</table>

	<table align="center" width="500px" style="margin-top:10px">
		<tbody><tr>
		<td align="center" width="50px">
			<center>
			<span style="font-size:20px"><a href="https://arxiv.org/abs/2402.16998">[Paper]</a></span>
			</center>
		</td>
		<td align="center" width="50px">
			<center>
			<span style="font-size:20px"><a href="">[Code]</a></span>
			</center>
			</td>
		</tr>
	</tbody></table>

	<div class="image-container" style="margin-top:30px">
    <img src="img/main_vis_convex_hull.png" alt="First Image" class="header-img">
    <img src="img/main_vis_35.png" alt="Second Image" class="header-img">
	</div>
	<br>
	<p id="teaser-description" style="text-align: justify;">
    <span id="bold">Does language models learn meaningfully grounded representations of sounds?</span> 
		As a preliminary study, we aligned language and sound representations using Procrustes analysis then visualized via PCA. The language representation is from BERT and the audio representation is from PaSST. On the right, we show a zoomed-in portion of the blue region of the left figure which shows the structural similarities between the language and sound representations for the music category.
  </p>
	<hr>
	<h1 style="margin-top:30px"><center>Abstract</center></h1>
	<p style="text-align: justify;">
		This work explores whether language models encode meaningfully grounded representations of sounds of objects. We learn a linear probe that retrieves the correct text representation of an object given a snippet of audio related to that object, where the sound representation is given by a pretrained audio model.  This probe is trained via a contrastive loss that pushes the language representations and sound representations of an object to be close to one another. After training, the probe is tested on its ability to generalize to objects that were not seen during training. Across different language models and audio models, we find that the probe generalization is above chance in many cases, indicating that despite being trained only on raw text, language models encode grounded knowledge of sounds for some objects.
	</p>
	<hr>
	<h1 style="margin-top:30px"><center>Methodology</center></h1>
	<div class="image-container" style="margin-top:30px">
    <img src="img/main_diagram.png" alt="Second Image" class="header-img">
	</div>
	<br>
	<p style="text-align: justify;">
    We randomly split a set of classes into mutually exclusive train/test sets. On the training set (blue), we use a contrastive loss to  learn linear transformations (i.e., projection heads) of the sound and language representations such that a language representation of a class is close in cosine distance to the sound representation of the same class. After training, we apply the learned probe on audio snippets of classes from the test set, and retrieve the most similar text representation (from classes in both the train and test sets). We then test whether the retrieved class corresponds to the actual class. 
  </p>
  <hr>
	<h1 style="margin-top:30px"><center>Main Results</center></h1>
	<div class="grid-container">
  	<div class="grid-image-container">
	    AudioMAE
	    <img src="img/70_30_ptmae_sem_loc_2.png" alt="Second Image" class="header-img">
	  </div>
	  <div class="grid-image-container">
	    AudioMAE-FT
	   	<img src="img/70_30_mae_sem.png" alt="Second Image" class="header-img">
	  </div>
	  <div class="grid-image-container">
	    PaSST
	    <img src="img/70_30_passt_sem.png" alt="Second Image" class="header-img">
	    <!-- Content for the third cell -->
	  </div>
	  <div class="grid-image-container">
	    PANN
	    <img src="img/70_30_cnn14_sem.png" alt="Second Image" class="header-img">
	    <!-- Content for the fourth cell -->
	  </div>
	</div>
	<p style="text-align: justify;">
   Our main results measure the linear probe accuracy@3 performance for the different language/sound representation combinations. Green bars show the accuracy of the permuted embedding control task, where the text representations are randomly permuted. Error bars show standard error of the mean across 5 runs. Dotted line shows random chance performance, which is 2.08%. We can see that most language models perform well above chance.
  </p>
	<hr>
	<h1 style="margin-top:30px"><center>Acknowledgments</center></h1>
	<p style="text-align: justify;">
		This study was partially supported by funds from the MIT-IBM Watson AI Lab.
	</p>
	<hr>
	<h1 style="margin-top:30px"><center>Bibtex</center></h1>
	<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;max-width:
 100%">
<pre style="font-size: 10pt; margin: .3em 0px;text-align: left;
      white-space: pre-wrap;       /* Since CSS 2.1 */
      white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
      white-space: -pre-wrap;      /* Opera 4-6 */
      white-space: -o-pre-wrap;    /* Opera 7 */
      word-wrap: break-word;       /* Internet Explorer 5.5+ */">@article{ngo_what_2024,
  title={What Do Language Models Hear? Probing for Auditory Representations in Language Models},
  journal={arXiv:2402.16998}
  author={Jerry Ngo, Yoon Kim},
  year={2024}
}
</pre>

</div>
</body>
</html>