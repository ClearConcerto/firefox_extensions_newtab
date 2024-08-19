document.addEventListener('DOMContentLoaded', function() {
  var urlInput = document.getElementById('url');
  var saveButton = document.getElementById('save');

  // Load the saved URL from storage
  browser.storage.local.get('newTabUrl').then(function(result) {
    urlInput.value = result.newTabUrl || '';
  });

  // Save the URL when the Save button is clicked
  saveButton.addEventListener('click', function() {
    var url = urlInput.value;
    browser.storage.local.set({ newTabUrl: url }).then(function() {
      console.log('URL saved:', url);
    });
  });
});
