import ApiUtils from './ApiUtils';
var base_url = "http://192.168.122.1:1337";

var _httpGet = function(url) {
  var final_url = base_url + url;
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  if(ret.token) {
    headers.authorization = ret.token;
  }
  return fetch(final_url, {
    method: 'GET',
    headers: headers
  })
  .then(function(response) {
    return ApiUtils.checkStatus(response);
  })
  .then(function(resp) {
    return resp.json();
  })
  .catch(function(err) {
    throw err;
  });
};

var  _httpPost = function(url, data) {
  var final_url = base_url + url;

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(final_url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({data})
    })
    // .then(function(response) {
    //   console.log('response', response);
    //   return ApiUtils.checkStatus(response);
    // })
    .then(function(resp) {
      console.log('resp', resp);
      return resp.json();
    })
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
  // });
};
var  _httpPostToken = function(url, data,token) {
  var final_url = base_url + url;

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':token
    };

    return fetch(final_url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({data})
    })
    // .then(function(response) {
    //   console.log('response', response);
    //   return ApiUtils.checkStatus(response);
    // })
    .then(function(resp) {
      console.log('resp', resp);
      return resp.json();
    })
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
  // });
};

export {
  _httpPost as httpPost,
  _httpGet as httpGet,
    _httpPostToken as httpPostToken,
};
