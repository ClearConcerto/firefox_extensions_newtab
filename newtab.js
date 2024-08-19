// Load the saved URL from storage and redirect to it
browser.storage.local.get('newTabUrl').then(function(result) {
  var url = result.newTabUrl || 'about:blank';
  window.location.href = url;
});
