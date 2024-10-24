// ********************************************
// RJC - RESTful Job Control 
//
// This is a map of the base classes for RJC
// ********************************************


exports.job = function() {
 
  var tasks = [];
  
  var id = "";
  var url = "";
  var stat = "";
  var description = "";
  var messages = [];

  var cancelURL = "";
  var rerunURL = "";
  var rollbackURL = "";
  var startURL = "";

  var dateTimeStart = "";
  var dateTimeStop = "";
  var maxTTL = "";

  function cancel() {
    return 'cancel';
  }

  function create() {
    return 'create';
  }

  function failed() {
    return 'failed';
  }

  function proceed() {
    return 'proceed';
  }

  function remove() {
    return 'remove';
  }

  function restart() {
    return 'restart';
  }

  function success() {
    return 'success'
  }

  function update() {
    return 'update'
  }

  that = {};
  
  that.tasks = tasks;

  that.cancel = cancel;
  that.create = create;
  that.failed = failed;
  that.proceed = proceed;
  that.remove = remove;
  that.restart = restart;
  that.success = success;
  that.update = update;
 
  return that;

}

exports.task = function() {

  var id = "";
  var URL = "";
  var stat = "";
  var description = "";
  var messages = [];

  var cancelURL = "";
  var rerunURL = "";
  var rollbackURL = "";
  var startURL = "";

  var dateTimeStart = "";
  var dateTimeStop = "";
  var maxTTL = "";

 function cancel() {
    return 'cancel';
  }

  function rerun() {
    return 'rerun';
  }

  function rollback() {
    return 'rollback';
  }

  function start() {
    return 'start';
  }

  function update() {
    return `update`;
  }

  that = {};

  that.id = id;
  that.URL = URL;
  that.stat = stat;
  that.description = description;
  that.messages = messages;

  that.cancelURL = cancelURL;
  that.rerunURL = rerunURL;
  that.rollbackURL = rollbackURL;
  that.startURL = startURL;

  that.dateTimeStart = dateTimeStart;
  that.dateTimeStop = dateTimeStop;
  that.maxTTL = maxTTL;

  that.cancel = cancel;
  that.rerun = rerun;
  that.rollback = rollback;
  that.start = start;
  that.update = update;

  return that;

}




