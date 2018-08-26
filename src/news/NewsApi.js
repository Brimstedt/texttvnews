import axios from 'axios';
import sanitizeHtml from 'sanitize-html';

export default {
  loadNews: () => {
    return axios.get("http://api.texttv.nu/api/get/188?app=VueNews")
      .then((news) => {
        var items = [];
        for(var item of news.data[0].content) {
          var clean = sanitizeHtml(item, {
            allowedTags: [ 'h1', 'span' ],
            allowedAttributes: {
              'a': [ 'href' ]
            },
            exclusiveFilter: function(frame) {
                return (frame.tag === 'span' && frame.attribs.class.includes('toprow'))
                || (frame.tag === 'span' && frame.attribs.class.includes('W bgB'));
            }
          });
          clean = sanitizeHtml(clean, {
            allowedTags: [ 'h1' ],
            allowedAttributes: {
              'a': [ 'href' ]
            }
          });
          // items.push(item + '      '  + clean );
          items.push(clean);
        }
        return items;
      });
  },
}
