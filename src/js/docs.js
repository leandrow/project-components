(function(){

	// http://tutsplus.github.io/clipboard/
	// Get the 'pre' element.
	var pre = document.getElementsByTagName('pre');

	// Add a copy button in the 'pre' element.
	// which only has the className of 'language-'.
	for (var i = 0; i < pre.length; i++) {
		var isLanguage = pre[i].children[0].className.indexOf('language-');

		if ( isLanguage === 0 ) {
			var button = document.createElement('button');
					button.className = 'btn-copy';
					button.textContent = 'Copy';
					pre[i].appendChild(button);
		}
	}

	// Run Clipboard
	var copyCode = new ClipboardJS('.btn-copy', {
		target: function(trigger) {
			return trigger.previousElementSibling;
		}
	});

	// On success:
	// - Change the "Copy" text to "Copied".
	// - Swap it to "Copy" in 2s.
	copyCode.on('success', function(event) {
		event.clearSelection();
		event.trigger.textContent = 'Copied';
		window.setTimeout(function() {
			event.trigger.textContent = 'Copy';
		}, 2000);
	});

	// On error (Safari):
	// - Change the  "Press Ctrl+C to copy"
	// - Swap it to "Copy" in 2s.
	copyCode.on('error', function(event) {
		event.trigger.textContent = 'Press "Ctrl + C" to copy';
		window.setTimeout(function() {
			event.trigger.textContent = 'Copy';
		}, 5000);
	});


	// Enable tooltips
	var tooltips = $('[data-toggle="tooltip"]');
	if (typeof tooltips.tooltip === 'function') {
		tooltips.tooltip();
	}

	// Show code
	$('.ev-show-code').on('click', function() {
		var sc = $(this).toggleClass('icon-active');
		sc.siblings('.code-block').toggle();
	});

})();
