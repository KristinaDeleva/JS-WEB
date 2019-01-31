const formidable = require('formidable');
const url = require('url');
const qs = require('querystring');
const Image = require('mongoose').model('Image');


function addImage(req, res) {
  const form = formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if(err) {
      throw err;
    }

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    const tags = fields.tagsId.split(',').reduce((p,c,i,a) => {
      if (p.includes(c) || c.length === 0) {
        return p;
      }else {
        p.push(c);
        return p;
      }
    }, []);

    const image = {
      url: fields.imageUrl,
      description: fields.description,
      tags 
    };

    Image.create(image).then(image => {
      res.writeHead(302, {
        location: '/'
      });
      res.end();
    }).catch(err => {
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.write('500 Server Error!');
      res.end();
    })
  })
}

function deleteImg(req, res) {
  let removeId = req.pathquery.id;

  Image.remove({_id: `${removeId}`}, function (err) {
    if (err) {
      throw err;
    }
  }).then(() => {
    res.writeHead (302, {
      location: '/search'
    });
    res.end();
  }).catch((err) => {
    console.log(err);
  })
}


module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}
