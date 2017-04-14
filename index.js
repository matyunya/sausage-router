var EventEmitter = require('events')
var joinPath = require('path').join

module.exports = function SausageLocation(root) {
	var emitter = new EventEmitter()
	var last = ''
	root = root || ''

	function stateChange(functionName, newPath) {
		if (last !== emitter.get()) {
			history[functionName]({}, '', joinPath('/', root, newPath))
			emitter.emit('hashchange')
		}
	}

	emitter.go = function(newPath) {
		stateChange('pushState', newPath)
	}

	emitter.replace = function(newPath) {
		stateChange('replaceState', newPath)
	}
	emitter.get = get

	return emitter
}

function get() {
	return window.location.pathname + window.location.search
}
