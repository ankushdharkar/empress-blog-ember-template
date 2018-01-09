import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Controller.extend({
  blog: service(),

  coverImageStyle: computed('blog.cover_image', function() {
    return htmlSafe(`background-image: url(${get(this, 'blog.cover_image')})`);
  })
})