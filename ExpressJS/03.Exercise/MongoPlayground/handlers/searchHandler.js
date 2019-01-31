const Image = require('mongoose').model('Image');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.pathname === '/search') {
   fs.readFile(path.join(__dirname, '../views/results.html'), (err, data) => {
    if (err) {
      throw err;
    }
 
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
 
    let replace = '';
 
    Image.find({})
    .then(images => {
      for (let image of images) {
        replace += `<fieldset id => <legend>${image.imageTitle}:</legend> 
        <img src="${image.url}">
        </img><p>${image.description}<p/>
        <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
        </button> 
        </fieldset>`        
      }
      
      data = data.toString().replace('<div class="replaceMe"></div>', replace);
      res.end(data);
    }).catch(err => {
      console.log(err);
    })
   })
   
  } else {
    return true
  }
}
