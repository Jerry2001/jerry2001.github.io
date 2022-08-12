---
layout: page
title: projects
permalink: /projects/
description: A growing collection of my cool projects.
nav: true
years: [2022, 2021]
display_categories: [work, fun]
horizontal: false
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f projects -q @*[year={{y}}]* %}
{% endfor %}

</div>
