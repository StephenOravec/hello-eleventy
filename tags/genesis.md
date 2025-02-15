---
layout: layouts/post-layout.html
title: "tagged: genesis | Hello, Eleventy!"
---
<ul>
  {% for post in collections.post %}
    {% if post.data.tags contains "genesis" %}
      <li><a href="{{ post.url }}">{{ post.data.heading }}</a></li>
    {% endif %}
  {% endfor %}
</ul>