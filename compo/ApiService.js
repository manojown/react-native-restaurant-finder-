var Api = require('./Api');

var _submit = function(data) {
console.log(data);
  return Api.httpPost('/customer/get',data);

};
var _Auth = function(mobile,otp) {
var data={

};
data.mobile=mobile;
data.otp=otp;
  return Api.httpPost('/customer/otp',data);

};
var _fetchPendingOrders = function(token){
  var data={};
  return Api.httpPostToken('/deliveryboyapp/getpendingorder',data,token);
};
var _fetchDeliveredOrder = function (token) {
  var data ={};
  return Api.httpPostToken('/deliveryboyapp/getdeliveredorder', data,token);
};

export {
  _submit as submit,
  _Auth as Auth,
  _fetchPendingOrders as fetchPendingOrders,
  _fetchDeliveredOrder as fetchDeliveredOrder

};
