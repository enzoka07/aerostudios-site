<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// AeroStudios — Motion helpers (no dependencies)</span></p>
<p class="p1"><span class="s1">export function setupReveal() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const els = document.querySelectorAll(".reveal");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (!("IntersectionObserver" in window)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>els.forEach(el =&gt; el.classList.add("is-visible"));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const io = new IntersectionObserver((entries) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (const e of entries) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (e.isIntersecting) e.target.classList.add("is-visible");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}, { threshold: 0.15 });</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>els.forEach(el =&gt; io.observe(el));</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
