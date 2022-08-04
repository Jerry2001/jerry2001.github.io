---
layout: page
permalink: /clip-illusion/
title: clip-illusion
description: 
nav: false
---


# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


# Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```

<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">google.load("jquery", "1.3.2");</script>

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width">
  <title>Project page for semantic uncertainty intervals</title>
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
    <span style="font-size:33px">Semantic uncertainty intervals for disentangled latent spaces</span>
	</center>

	<br> 
  	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:20px"><a href='https://swamiviv.github.io/'>Swami Sankaranarayanan<sup>1</sup></a></span>
		</center>
		</td>

		<td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href="https://people.eecs.berkeley.edu/~angelopoulos/">Anastasios N. Angelopoulos<sup>2</sup></a></span>
		</center>
		</td>

		<td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href="https://stephenbates19.github.io/">Stephen Bates<sup>2</sup></a></span>
		</center>
		</td>

		 <td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href="https://sites.google.com/view/yaniv-romano/">Yaniv Romano<sup>3</sup></a></span>
		</center>
		</td>

		<td align=center width=100px>
		<center>
		<span style="font-size:20px"><a href="http://web.mit.edu/phillipi/">Phillip &nbsp; Isola<sup>1</sup></a></span>
		</center>
		</td>

	 </tr>
	</table>

	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
			<span style="font-size:20px"><sup>1</sup>  MIT CSAIL     &nbsp;&nbsp;</span>
			<span style="font-size:20px"><sup>2</sup> UC berkeley    &nbsp;&nbsp;</span>
			<span style="font-size:20px"><sup>3</sup> Technion IIT, Israel</span>

		</center>
		</center>
		</td>
	 </tr>
	</table>

<!-- 		<br>
	<table align=center width=700px>
  	 <tr>
		<td align=center width=100px>
		<center>
		<span style="font-size:18px">To appear in ICML 2022</span></center>
		</center>
		</td>
	 </tr>
	</table> -->

	<table align=center width=500px style="margin-top:30px">
  	 <tr>
<!--		<td align=center width=50px>-->
<!--		<center>-->
<!--		<span style="font-size:24px"><a href="https://arxiv.org/abs/2203.17274">[Paper]</a></span>-->
<!--		</center>-->
<!--		</td>-->

		<td align=center width=50px>
		<center>
		<span style="font-size:24px"><a href="https://github.com/swamiviv/generative_semantic_uncertainty">[Code]</a></span>
		</center>
		</td>

	 </tr>
	</table>

  		  <br>
  		  <table align=center width=900px>
  			  <tr>
  	              <td width=600px>
  					<center>
  	                	<a href="teaser.png"><img src = "figures/teaser.png" width="900px"></img></href></a><br>
					</center>
  	              </td>
  	          </tr>
  		  </table>

  		  <table align=center width=1000>
			  <center><h1 style="margin-top:30px"><span style="font-size:30px">Abstract</span></h1></center>
  			  <tr>
				  <td>
				  	<br>
			      	  <p style="text-align:justify;margin-top:-30px">
					 Meaningful uncertainty quantification in computer vision requires reasoning about semantic information—
					say, the hair color of the person in a photo or the location of a car on the street. To this end, recent
					breakthroughs in generative modeling allow us to represent semantic information in disentangled latent
					spaces, but providing uncertainties on the semantic latent variables has remained challenging. In this work,
					we provide principled uncertainty intervals that are guaranteed to contain the true semantic factors for
					any underlying generative model. The method does the following: (1) it uses quantile regression to output
					a heuristic uncertainty interval for each element in the latent space (2) calibrates these uncertainties such
					that they contain the true value of the latent for a new, unseen input. The endpoints of these calibrated
					intervals can then be propagated through the generator to produce interpretable uncertainty visualizations
					for each semantic factor. This technique reliably communicates semantically meaningful, principled, and
					instance-adaptive uncertainty in inverse problems like image super-resolution and image completion.
				  </p>
  	              		  </td>
              		  </tr>
  		  </table>

		<hr>
			<!-- <table align=center width=550px> -->
  		  <table align=center width=1000 style="text-align: justify;">
	 		<center><h1><span style="font-size:30px">Summary</h1></center>
  			  <tr>
  			  	<td>
  			  		<img style="height:300px; margin-right: 20px;" src="figures/celeba_output_visualization.png"/>
  			  	<td>
				  Our work addresses the problem of directly giving uncertainty estimates on semantically meaningful
				  image properties. We make progress on this problem by bringing techniques from quantile regression and
				  distribution-free uncertainty quantification together with a disentangled latent space learned by a
				  <em>generative adversarial network</em> (GAN). We call the coordinates of this latent space <em>semantic factors</em>,
				  as each controls one meaningful aspect of the image, like age or hair color. Our method takes a corrupted image input
				  and predicts each semantic factor along with an uncertainty interval that is guaranteed to contain the true semantic factor.
				  When the model is unsure, the intervals are large, and vice-versa. By propagating these intervals through the GAN coordinate-wise,
				  we can visualize uncertainty directly in image-space (shown left) without resorting to per-pixel intervals.
				  The result of our procedure is a rich form of uncertainty quantification directly on the estimates of semantic properties of the image.
  	          </td>
              </tr>
  		  </table>
		  <br>

		<br>
		  <hr>

  		  <table align=center width=1000 style="text-align: justify;">
			  <center><h1><span style="font-size:30px">Method</span></h1></center>
			  <p style="text-align:justify;margin-top:10px">
				  Generative architectures such as StyleGAN and its variants have been shown to contain a disentangled latent space which factors into interpretable features such as hair color, expression etc.
				  We use this feature to obtain semantically meaningful uncertainty in the latent space of a generative model. Since the latent space is disentangled, the uncertainty intervals natually
				  factor into different interpretable dimensions. Thus given an image of a face for instance, we can obtain meaningful uncertainty estimates separately for different aspects of the face such as hair shape / color etc.

				  Our training consists of three core steps:
				  <ul>
			  		<li><em>Sample</em> random latent codes $Z$ and the corresponding generated images $Y$ from the generative model. We apply a corruption model (image super-resolution / image masking)
				  to generate our training data:  $(X,Z)$ pairs where $X$ is the set of corrupted images.</li>
			  			<table align=center width=900px>
						 <tr>
							  <td width=600px>
							<center>
								<a href="training_procedure.png"><img src = "figures/training_procedure.png" width="400px"></img></href></a><br>
							</center>
							  </td>
							 </tr>
					  </table>
			  		<li> <em>Train</em> an encoder network to predict the latent code along with a lower and upper quantile for each dimension of the latent code. The uncertainty intervals around each
						latent dimension can be derived trivially using the lower and upper quantile predictions. </li>

			  		<table align=center width=900px>
						 <tr>
							  <td width=600px>
							<center>
								<a href="intervals_calibration.png"><img src = "figures/intervals_calibration.png" width="400px"></img></href></a><br>
							</center>
							  </td>
							 </tr>
					  </table>

			  		<li> <em>Calibrate</em> the quantile intervals to provide coverage guarantees. The quantile intervals natually provide a notion of uncertainty around each latent dimension.
						However, they is no guarantee of coverage i.e. it is unclear if the underying true latent factor is contained in the predicted interval. The calibration procedure provides
						guarantees this notion of coverage.
					</li>

		  		  </ul>
			  </p>
  		  </table>
		<br>
	    <hr>
  		  <table align=center width=1000 style="text-align: justify;">
			  <center><h1><span style="font-size:30px">Results</span></h1></center>
		  </table>
			<div style='text-align:center'>
				<table align=center width=1000 style="text-align: justify;">
	 		<center><h1><span style="font-size:25px">Producing semantic uncertainties</h1></center>
					<br>
  			  <tr>
  			  	<td>
  			  		<img style="height:300px; margin-right: 40px;" src="figures/clevr_output_viz.png"/>
  			  	<td>
				 The image on the left shows a uncertainty prediction output on a sample drawn from the CLEVR dataset trained
				  generative model. The uncertainty factors naturally into the latent factors, we visualize <em>shape</em> and <em>color</em> here.
				The lower and upper quantile images yield similar colors, which is predictable from the blurry input.
				The model predicts that both a cylinder and sphere would be consistent with this blurry input.
				The calibrated quantiles cover the ground truth color value while the uncalibrated ones do not.
  	          </td>
              </tr>
  		  </table>
				<br>

    <h1>
      Adaptivity to varying input corruption
    </h1>
				<br>

    <table class="image" align="center" >
    <tr>
      <td>
        <img src="figures/superres_uncertainty_viz.png"
               width="80%" border="1"
               alt="none"
        />
		  <figcaption>Image super-resolution</figcaption>
      </td>
      <td>
        <img src="figures/inpainting_uncertainty_viz.png"
               width="79%" border="1"
               alt="none"
        />
		   <figcaption>Image inpainting</figcaption>
      </td>
    </tr>
    </table>
				<br>
				 <p style="text-align:justify;margin-top:10px">
				 For the image super-resolution case, the corruption intensity is varied across each set, the input image in the top row is not corrupted while the input in the bottom row is under-sampled by 16x. In both cases,
		  we can observe that the most diverse prediction is in the bottom row where the input is corrupted the most.
					 <br>
					 <br>
					 For the image inpainting case, a random mask is applied to the same input image in each row. When there is no mask (1st row), both quantiles are extremely close to the pointwise prediction.
		  As we increase the regions that are being masked, the predicted intervals expand, as indicated by the variability on the quantile predictions.

	<br><br>
	<h1>
      Quantitative results: Set sizes and Calibration
    </h1>

    <table class="image" align="center" >
    <tr>
      <td>
        <img src="figures/FFHQ_superres_set_sizes.png"
               width="80%"
               alt="none"
        />
		  <figcaption>Calibrated set sizes adapt to problem difficulty</figcaption>
      </td>
      <td>
        <img src="figures/FFHQ_superres_risk_calibration.png"
               width="80%"
               alt="none"
        />
		   <figcaption>Calibration procedure guarantees desired coverage</figcaption>
      </td>
    </tr>
    </table>

	<br>
				<hr>
				<table align=left width=1000px>
  			  <tr>
  	              <td>
			<left>
				<h1><span style="font-size:30px">Acknowledgements</span></h1>
					SS and PI acknowledge the MIT SuperCloud and Lincoln Laboratory Supercomputing Center for providing HPC resources that have contributed to the research results reported within this paper.
			</left>
		      </td>
		</tr>
		</table>


</body>
</html>