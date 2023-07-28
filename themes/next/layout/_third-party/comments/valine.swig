{%- set valine_uri = theme.vendors.valine or '//unpkg.com/valine/dist/Valine.min.js' %}

<script type="module">
import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

NexT.utils.loadComments(document.querySelector('#waline'), () => {
  if (!document.querySelector('#waline')) return;
  init({
    el: '#waline',
    serverURL: 'https://sub-waline.vercel.app/',
  });
});
</script>
