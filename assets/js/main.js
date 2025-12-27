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
<p class="p1"><span class="s1">import { setupReveal } from "./motion.js";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function setYear() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const el = document.querySelector("[data-year]");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (el) el.textContent = String(new Date().getFullYear());</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function smoothAnchors() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>document.querySelectorAll('a[href^="#"]').forEach(a =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>a.addEventListener("click", (e) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>const id = a.getAttribute("href");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>const target = document.querySelector(id);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (!target) return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>target.scrollIntoView({ behavior: "smooth", block: "start" });</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">document.addEventListener("DOMContentLoaded", () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>setYear();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>smoothAnchors();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>setupReveal();</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
