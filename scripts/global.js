const devMessage =
`feel free to get a better view of this site / my other projects here!
https://github.com/beetosu/cwalsh.dev
٩(๑❛ᴗ❛๑)۶`;
		console.log(devMessage);

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register("/serviceworker.js");
		}