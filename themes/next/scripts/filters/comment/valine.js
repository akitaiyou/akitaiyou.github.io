/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;
  if (!theme.valine.enable) return;

  injects.comment.raw('valine', '<div class="comments" id="waline"></div>', {}, {cache: true});

  injects.bodyEnd.file('valine', path.join(hexo.theme_dir, 'layout/_third-party/comments/valine.swig'));

});

// Add post_meta
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;
  if (!theme.valine.enable) return;
});
