import Promise from 'bluebird';



module.exports.handler = (event, context, callback) => {

  return new Promise((resolve, reject)=>{
    resolve(true)
  })
      .then(r=>{
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Validator2 - Go Serverless v1.0! Your function executed successfully!',
            input: event,
          }),
        };

        callback(null, response);
  });




};