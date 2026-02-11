module.exports = [
"[project]/propertydrone/propertydrone_fe/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/propertydrone/propertydrone_fe/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce);
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData.prototype, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = (()=>{
                const e = new Error("Cannot find module 'debug'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })()("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/tippy.js/dist/tippy.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateFill",
    ()=>animateFill,
    "createSingleton",
    ()=>createSingleton,
    "default",
    ()=>__TURBOPACK__default__export__,
    "delegate",
    ()=>delegate,
    "followCursor",
    ()=>followCursor,
    "hideAll",
    ()=>hideAll,
    "inlinePositioning",
    ()=>inlinePositioning,
    "roundArrow",
    ()=>ROUND_ARROW,
    "sticky",
    ()=>sticky
]);
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/@popperjs/core/lib/popper.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__applyStyles$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-ssr] (ecmascript) <export default as applyStyles>");
;
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function hasOwnProperty(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function isType(value, type) {
    var str = ({}).toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
        return fn;
    }
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
    return [].concat(value);
}
function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
        arr.push(value);
    }
}
function unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
function arrayFrom(value) {
    return [].slice.call(value);
}
function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
function div() {
    return document.createElement('div');
}
function isElement(value) {
    return [
        'Element',
        'Fragment'
    ].some(function(type) {
        return isType(value, type);
    });
}
function isNodeList(value) {
    return isType(value, 'NodeList');
}
function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
    if (isElement(value)) {
        return [
            value
        ];
    }
    if (isNodeList(value)) {
        return arrayFrom(value);
    }
    if (Array.isArray(value)) {
        return value;
    }
    return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) {
            el.style.transitionDuration = value + "ms";
        }
    });
}
function setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) {
            el.setAttribute('data-state', state);
        }
    });
}
function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) {
            return true;
        }
        var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
        var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        'transitionend',
        'webkitTransitionEnd'
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) {
            return true;
        }
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var currentInput = {
    isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function onDocumentTouchStart() {
    if (currentInput.isTouch) {
        return;
    }
    currentInput.isTouch = true;
    if (window.performance) {
        document.addEventListener('mousemove', onDocumentMouseMove);
    }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) {
            activeElement.blur();
        }
    }
}
function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur);
}
var isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof document !== 'undefined';
var isIE11 = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
function createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        'indicates a potential memory leak.'
    ].join(' ');
}
function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}
function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
    return [
        getDevMessage(message),
        'color: #00C584; font-size: 1.3em; font-weight: bold;',
        'line-height: 1.5',
        'color: #a6a095;'
    ];
} // Assume warnings and errors never have the same message
var visitedMessages;
if ("TURBOPACK compile-time truthy", 1) {
    resetVisitedMessages();
}
function resetVisitedMessages() {
    visitedMessages = new Set();
}
function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console;
        visitedMessages.add(message);
        (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
}
function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console2;
        visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
}
function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    errorWhen(didPassFalsyValue, [
        'tippy() was passed',
        '`' + String(targets) + '`',
        'as its targets (first) argument. Valid types are: String, Element,',
        'Element[], or NodeList.'
    ].join(' '));
    errorWhen(didPassPlainObject, [
        'tippy() was passed a plain object which is not supported as an argument',
        'for virtual positioning. Use props.getReferenceClientRect instead.'
    ].join(' '));
}
var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
};
var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: 'auto',
        expanded: 'auto'
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        validateProps(partialProps, []);
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        defaultProps[key] = partialProps[key];
    });
};
function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
        if (!valueAsString) {
            return acc;
        }
        if (key === 'content') {
            acc[key] = valueAsString;
        } else {
            try {
                acc[key] = JSON.parse(valueAsString);
            } catch (e) {
                acc[key] = valueAsString;
            }
        }
        return acc;
    }, {});
    return props;
}
function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
        content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
}
function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
        partialProps = {};
    }
    if (plugins === void 0) {
        plugins = [];
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
        var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) {
            didPassUnknownProp = plugins.filter(function(plugin) {
                return plugin.name === prop;
            }).length === 0;
        }
        warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            'a plugin, forgot to pass it in an array as props.plugins.',
            '\n\n',
            'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n',
            'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'
        ].join(' '));
    });
}
var innerHTML = function innerHTML() {
    return 'innerHTML';
};
function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
}
function createArrowElement(value) {
    var arrow = div();
    if (value === true) {
        arrow.className = ARROW_CLASS;
    } else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) {
            arrow.appendChild(value);
        } else {
            dangerouslySetInnerHTML(arrow, value);
        }
    }
    return arrow;
}
function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, '');
        content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
        if (props.allowHTML) {
            dangerouslySetInnerHTML(content, props.content);
        } else {
            content.textContent = props.content;
        }
    }
}
function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        })
    };
}
function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) {
            box.setAttribute('data-theme', nextProps.theme);
        } else {
            box.removeAttribute('data-theme');
        }
        if (typeof nextProps.animation === 'string') {
            box.setAttribute('data-animation', nextProps.animation);
        } else {
            box.removeAttribute('data-animation');
        }
        if (nextProps.inertia) {
            box.setAttribute('data-inertia', '');
        } else {
            box.removeAttribute('data-inertia');
        }
        box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) {
            box.setAttribute('role', nextProps.role);
        } else {
            box.removeAttribute('role');
        }
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
            setContent(content, instance.props);
        }
        if (nextProps.arrow) {
            if (!arrow) {
                box.appendChild(createArrowElement(nextProps.arrow));
            } else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow) {
            box.removeChild(arrow);
        }
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`
var mountedInstances = [];
function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance = {
        // properties
        id: id,
        reference: reference,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) {
        if ("TURBOPACK compile-time truthy", 1) {
            errorWhen(true, 'render() function has not been supplied.');
        }
        return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [
        instance
    ]);
    if (props.showOnCreate) {
        scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper.addEventListener('mouseenter', function() {
        if (instance.props.interactive && instance.state.isVisible) {
            instance.clearDelayTimeouts();
        }
    });
    popper.addEventListener('mouseleave', function() {
        if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
            getDocument().addEventListener('mousemove', debouncedOnMouseMove);
        }
    });
    return instance; // ===========================================================================
    //TURBOPACK unreachable
    ;
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === 'hold';
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
            return 0;
        }
        return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) {
            fromHide = false;
        }
        popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
        popper.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) {
            shouldInvokePropsHook = true;
        }
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) {
                pluginHooks[hook].apply(pluginHooks, args);
            }
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance.props.aria;
        if (!aria.content) {
            return;
        }
        var attr = "aria-" + aria.content;
        var id = popper.id;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) {
                node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            } else {
                var nextValue = currentValue && currentValue.replace(id, '').trim();
                if (nextValue) {
                    node.setAttribute(attr, nextValue);
                } else {
                    node.removeAttribute(attr);
                }
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance.props.aria.expanded) {
            return;
        }
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance.props.interactive) {
                node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
            } else {
                node.removeAttribute('aria-expanded');
            }
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if (currentInput.isTouch) {
            if (didTouchMove || event.type === 'mousedown') {
                return;
            }
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance.props.interactive && actualContains(popper, actualTarget)) {
            return;
        } // Clicked on the event listeners target
        if (normalizeToArray(instance.props.triggerTarget || reference).some(function(el) {
            return actualContains(el, actualTarget);
        })) {
            if (currentInput.isTouch) {
                return;
            }
            if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
                return;
            }
        } else {
            invokeHook('onClickOutside', [
                instance,
                event
            ]);
        }
        if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance.state.isMounted) {
                removeDocumentPress();
            }
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener('mousedown', onDocumentPress, true);
        doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener('mousedown', onDocumentPress, true);
        doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
                callback();
            }
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, 'remove', listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) {
            return callback();
        }
        updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
        updateTransitionEndListener(box, 'add', listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) {
            options = false;
        }
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on('touchstart', onTrigger, {
                passive: true
            });
            on('touchend', onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance.props.trigger).forEach(function(eventType) {
            if (eventType === 'manual') {
                return;
            }
            on(eventType, onTrigger);
            switch(eventType){
                case 'mouseenter':
                    on('mouseleave', onMouseLeave);
                    break;
                case 'focus':
                    on(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'blur', onBlurOrFocusOut);
                    break;
                case 'focusin':
                    on('focusout', onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
            return;
        }
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance.state.isVisible && isMouseEvent(event)) {
            // If scrolling, `mouseenter` events can be fired if the cursor lands
            // over a new target, but `mousemove` events don't get fired. This
            // causes interactive tooltips to get stuck open until the cursor is
            // moved
            mouseMoveListeners.forEach(function(listener) {
                return listener(event);
            });
        } // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
            shouldScheduleClickHide = true;
        } else {
            scheduleShow(event);
        }
        if (event.type === 'click') {
            isVisibleFromClick = !shouldScheduleClickHide;
        }
        if (shouldScheduleClickHide && !wasFocused) {
            scheduleHide(event);
        }
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
        if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
            return;
        }
        var popperTreeData = getNestedPopperTree().concat(popper).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) {
                return {
                    popperRect: popper.getBoundingClientRect(),
                    popperState: state,
                    props: props
                };
            }
            return null;
        }).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
        if (shouldBail) {
            return;
        }
        if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
            return;
        } // If focus was moved to within the popper
        if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
            return;
        }
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: '$$tippy',
            enabled: true,
            phase: 'beforeWrite',
            requires: [
                'computeStyles'
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        'placement',
                        'reference-hidden',
                        'escaped'
                    ].forEach(function(attr) {
                        if (attr === 'placement') {
                            box.setAttribute('data-placement', state.placement);
                        } else {
                            if (state.attributes.popper["data-popper-" + attr]) {
                                box.setAttribute("data-" + attr, '');
                            } else {
                                box.removeAttribute("data-" + attr);
                            }
                        }
                    });
                    state.attributes.popper = {};
                }
            }
        };
        var modifiers = [
            {
                name: 'offset',
                options: {
                    offset: offset
                }
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: 'flip',
                options: {
                    padding: 5
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) {
            modifiers.push({
                name: 'arrow',
                options: {
                    element: arrow,
                    padding: 3
                }
            });
        }
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance.popperInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"])(computedReference, popper, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
            parentNode = node.parentNode;
        } else {
            parentNode = invokeWithArgsOrReturn(appendTo, [
                node
            ]);
        } // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper)) {
            parentNode.appendChild(popper);
        }
        instance.state.isMounted = true;
        createPopperInstance();
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            // Accessibility check
            warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, [
                'Interactive tippy element may not be accessible via keyboard',
                'navigation because it is not directly after the reference element',
                'in the DOM source order.',
                '\n\n',
                'Using a wrapper <div> or <span> tag around the reference element',
                'solves this by creating a new parentNode context.',
                '\n\n',
                'Specifying `appendTo: document.body` silences this warning, but it',
                'assumes you are using a focus management solution to handle',
                'keyboard navigation.',
                '\n\n',
                'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'
            ].join(' '));
        }
    }
    function getNestedPopperTree() {
        return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
    }
    function scheduleShow(event) {
        instance.clearDelayTimeouts();
        if (event) {
            invokeHook('onTrigger', [
                instance,
                event
            ]);
        }
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
            delay = touchDelay;
        }
        if (delay) {
            showTimeout = setTimeout(function() {
                instance.show();
            }, delay);
        } else {
            instance.show();
        }
    }
    function scheduleHide(event) {
        instance.clearDelayTimeouts();
        invokeHook('onUntrigger', [
            instance,
            event
        ]);
        if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && [
            'mouseleave',
            'mousemove'
        ].indexOf(event.type) >= 0 && isVisibleFromClick) {
            return;
        }
        var delay = getDelay(false);
        if (delay) {
            hideTimeout = setTimeout(function() {
                if (instance.state.isVisible) {
                    instance.hide();
                }
            }, delay);
        } else {
            // Fixes a `transitionend` problem when it fires 1 frame too
            // late sometimes, we don't want hide() to be called.
            scheduleHideAnimationFrame = requestAnimationFrame(function() {
                instance.hide();
            });
        }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance.hide();
        instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
        }
        if (instance.state.isDestroyed) {
            return;
        }
        invokeHook('onBeforeUpdate', [
            instance,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance.props;
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) {
            normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
                node.removeAttribute('aria-expanded');
            });
        } else if (nextProps.triggerTarget) {
            reference.removeAttribute('aria-expanded');
        }
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) {
            onUpdate(prevProps, nextProps);
        }
        if (instance.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook('onAfterUpdate', [
            instance,
            partialProps
        ]);
    }
    function setContent(content) {
        instance.setProps({
            content: content
        });
    }
    function show() {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
        } // Early bail-out
        var isAlreadyVisible = instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
            return;
        } // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute('disabled')) {
            return;
        }
        invokeHook('onShow', [
            instance
        ], false);
        if (instance.props.onShow(instance) === false) {
            return;
        }
        instance.state.isVisible = true;
        if (getIsDefaultRenderFn()) {
            popper.style.visibility = 'visible';
        }
        handleStyles();
        addDocumentPress();
        if (!instance.state.isMounted) {
            popper.style.transition = 'none';
        } // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) {
                return;
            }
            ignoreOnFirstUpdate = true; // reflow
            void popper.offsetHeight;
            popper.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([
                    _box,
                    _content
                ], duration);
                setVisibilityState([
                    _box,
                    _content
                ], 'visible');
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook('onMount', [
                instance
            ]);
            if (instance.props.animation && getIsDefaultRenderFn()) {
                onTransitionedIn(duration, function() {
                    instance.state.isShown = true;
                    invokeHook('onShown', [
                        instance
                    ]);
                });
            }
        };
        mount();
    }
    function hide() {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
        } // Early bail-out
        var isAlreadyHidden = !instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) {
            return;
        }
        invokeHook('onHide', [
            instance
        ], false);
        if (instance.props.onHide(instance) === false) {
            return;
        }
        instance.state.isVisible = false;
        instance.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) {
            popper.style.visibility = 'hidden';
        }
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
                setTransitionDuration([
                    box,
                    content
                ], duration);
                setVisibilityState([
                    box,
                    content
                ], 'hidden');
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance.props.animation) {
            if (getIsDefaultRenderFn()) {
                onTransitionedOut(duration, instance.unmount);
            }
        } else {
            instance.unmount();
        }
    }
    function hideWithInteractivity(event) {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
        }
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
        }
        if (instance.state.isVisible) {
            instance.hide();
        }
        if (!instance.state.isMounted) {
            return;
        }
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper.parentNode) {
            popper.parentNode.removeChild(popper);
        }
        mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance;
        });
        instance.state.isMounted = false;
        invokeHook('onHidden', [
            instance
        ]);
    }
    function destroy() {
        /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
            warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
        }
        if (instance.state.isDestroyed) {
            return;
        }
        instance.clearDelayTimeouts();
        instance.unmount();
        removeListeners();
        delete reference._tippy;
        instance.state.isDestroyed = true;
        invokeHook('onDestroy', [
            instance
        ]);
    }
}
function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
        optionalProps = {};
    }
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        validateTargets(targets);
        validateProps(optionalProps, plugins);
    }
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        var isSingleContentElement = isElement(passedProps.content);
        var isMoreThanOneReferenceElement = elements.length > 1;
        warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, [
            'tippy() was passed an Element as the `content` prop, but more than',
            'one tippy instance was created by this invocation. This means the',
            'content element will only be appended to the last tippy instance.',
            '\n\n',
            'Instead, pass the .innerHTML of the element, or use a function that',
            'returns a cloned version of the element instead.',
            '\n\n',
            '1) content: element.innerHTML\n',
            '2) content: () => element.cloneNode(true)'
        ].join(' '));
    }
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) {
            acc.push(instance);
        }
        return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) {
            isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        }
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) {
                instance.setProps({
                    duration: originalDuration
                });
            }
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__applyStyles$3e$__["applyStyles"], {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
        } // intentionally return no cleanup function
    // return () => { ... }
    }
});
var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) {
        optionalProps = {};
    }
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        errorWhen(!Array.isArray(tippyInstances), [
            'The first argument passed to createSingleton() must be an array of',
            'tippy instances. The passed value was',
            String(tippyInstances)
        ].join(' '));
    }
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) {
                instance.enable();
            } else {
                instance.disable();
            }
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) {
                    singleton.setProps(props);
                }
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) {
            return;
        }
        currentTarget = target;
        var overrideProps = (overrides || []).concat('content').reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {});
        singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, [
        'overrides'
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton.show;
    singleton.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) {
            return prepareInstance(singleton, references[0]);
        } // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) {
            return;
        } // target is index of instance
        if (typeof target === 'number') {
            return references[target] && prepareInstance(singleton, references[target]);
        } // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) {
            return prepareInstance(singleton, target);
        }
    };
    singleton.showNext = function() {
        var first = references[0];
        if (!currentTarget) {
            return singleton.show(0);
        }
        var index = references.indexOf(currentTarget);
        singleton.show(references[index + 1] || first);
    };
    singleton.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) {
            return singleton.show(last);
        }
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton.show(target);
    };
    var originalSetProps = singleton.setProps;
    singleton.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps(props);
    };
    singleton.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton);
        singleton.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
};
var BUBBLING_EVENTS_MAP = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function delegate(targets, props) {
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        errorWhen(!(props && props.target), [
            'You must specity a `target` prop indicating a CSS selector string matching',
            'the target elements that should receive a tippy.'
        ].join(' '));
    }
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, [
        'target'
    ]);
    var parentProps = Object.assign({}, nativeProps, {
        trigger: 'manual',
        touch: false
    });
    var childProps = Object.assign({
        touch: defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) {
            return;
        }
        var targetNode = event.target.closest(target);
        if (!targetNode) {
            return;
        } // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) {
            return;
        }
        if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
            return;
        }
        if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
            return;
        }
        var instance = tippy(targetNode, childProps);
        if (instance) {
            childTippyInstances = childTippyInstances.concat(instance);
        }
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) {
            options = false;
        }
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
        on(reference, 'mouseover', onTrigger);
        on(reference, 'focusin', onTrigger);
        on(reference, 'click', onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance) {
        var originalDestroy = instance.destroy;
        var originalEnable = instance.enable;
        var originalDisable = instance.disable;
        instance.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) {
                shouldDestroyChildInstances = true;
            }
            if (shouldDestroyChildInstances) {
                childTippyInstances.forEach(function(instance) {
                    instance.destroy();
                });
            }
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var animateFill = {
    name: 'animateFill',
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            if ("TURBOPACK compile-time truthy", 1) {
                errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
            }
            return {};
        }
        var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute('data-animatefill', '');
                    box.style.overflow = 'hidden';
                    instance.setProps({
                        arrow: false,
                        animation: 'shift-away'
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    setVisibilityState([
                        backdrop
                    ], 'visible');
                }
            },
            onShow: function onShow() {
                if (backdrop) {
                    backdrop.style.transitionDuration = '0ms';
                }
            },
            onHide: function onHide() {
                if (backdrop) {
                    setVisibilityState([
                        backdrop
                    ], 'hidden');
                }
            }
        };
    }
};
function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([
        backdrop
    ], 'hidden');
    return backdrop;
}
var mouseCoords = {
    clientX: 0,
    clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function addMouseCoordsListener(doc) {
    doc.addEventListener('mousemove', storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
    doc.removeEventListener('mousemove', storeMouseCoords);
}
var followCursor = {
    name: 'followCursor',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === 'initial' && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener('mousemove', onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener('mousemove', onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect = reference.getBoundingClientRect();
            var relativeX = clientX - rect.left;
            var relativeY = clientY - rect.top;
            if (isCursorOverReference || !instance.props.interactive) {
                instance.setProps({
                    // @ts-ignore - unneeded DOMRect properties
                    getReferenceClientRect: function getReferenceClientRect() {
                        var rect = reference.getBoundingClientRect();
                        var x = clientX;
                        var y = clientY;
                        if (followCursor === 'initial') {
                            x = rect.left + relativeX;
                            y = rect.top + relativeY;
                        }
                        var top = followCursor === 'horizontal' ? rect.top : y;
                        var right = followCursor === 'vertical' ? rect.right : x;
                        var bottom = followCursor === 'horizontal' ? rect.bottom : y;
                        var left = followCursor === 'vertical' ? rect.left : x;
                        return {
                            width: right - left,
                            height: bottom - top,
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left
                        };
                    }
                });
            }
        }
        function create() {
            if (instance.props.followCursor) {
                activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            activeInstances = activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if (activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) {
                removeMouseCoordsListener(doc);
            }
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor = _ref2.followCursor;
                if (isInternalUpdate) {
                    return;
                }
                if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
                    destroy();
                    if (followCursor) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
                            addListener();
                        }
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove(mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) {
                        addListener();
                    }
                }
            },
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    mouseCoords = {
                        clientX: event.clientX,
                        clientY: event.clientY
                    };
                }
                wasFocusEvent = event.type === 'focus';
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var inlinePositioning = {
    name: 'inlinePositioning',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: 'tippyInlinePositioning',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) {
                        triedPlacements = [];
                    }
                    if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) {
                setInternalProps(getProps(instance.props, modifier));
            }
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    var rects = arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) {
        return boundingRect;
    } // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
        return clientRects[cursorRectIndex] || boundingRect;
    }
    switch(currentBasePlacement){
        case 'top':
        case 'bottom':
            {
                var firstRect = clientRects[0];
                var lastRect = clientRects[clientRects.length - 1];
                var isTop = currentBasePlacement === 'top';
                var top = firstRect.top;
                var bottom = lastRect.bottom;
                var left = isTop ? firstRect.left : lastRect.left;
                var right = isTop ? firstRect.right : lastRect.right;
                var width = right - left;
                var height = bottom - top;
                return {
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    width: width,
                    height: height
                };
            }
        case 'left':
        case 'right':
            {
                var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                    return rects.left;
                }));
                var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                    return rects.right;
                }));
                var measureRects = clientRects.filter(function(rect) {
                    return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
                });
                var _top = measureRects[0].top;
                var _bottom = measureRects[measureRects.length - 1].bottom;
                var _left = minLeft;
                var _right = maxRight;
                var _width = _right - _left;
                var _height = _bottom - _top;
                return {
                    top: _top,
                    bottom: _bottom,
                    left: _left,
                    right: _right,
                    width: _width,
                    height: _height
                };
            }
        default:
            {
                return boundingRect;
            }
    }
}
var sticky = {
    name: 'sticky',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) {
                    instance.popperInstance.update();
                }
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) {
                requestAnimationFrame(updatePosition);
            }
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) {
                    updatePosition();
                }
            }
        };
    }
};
function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) {
        return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    }
    return true;
}
tippy.setDefaultProps({
    render: render
});
const __TURBOPACK__default__export__ = tippy;
;
 //# sourceMappingURL=tippy.esm.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/proxy-compare/dist/index.modern.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "affectedToPathList",
    ()=>w,
    "createProxy",
    ()=>a,
    "getUntracked",
    ()=>y,
    "isChanged",
    ()=>p,
    "markToTrack",
    ()=>h,
    "replaceNewProxy",
    ()=>O,
    "trackMemo",
    ()=>g
]);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = (e)=>{
    if (Array.isArray(e)) return Array.from(e);
    const t = Object.getOwnPropertyDescriptors(e);
    return Object.values(t).forEach((e)=>{
        e.configurable = !0;
    }), Object.create(s(e), t);
}, u = (e)=>e[t] || e, a = (s, c, f, p)=>{
    if (!l(s)) return s;
    let g = p && p.get(s);
    if (!g) {
        const e = u(s);
        g = ((e)=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.configurable && !e.writable))(e) ? [
            e,
            i(e)
        ] : [
            e
        ], null == p || p.set(s, g);
    }
    const [y, h] = g;
    let w = f && f.get(y);
    return w && w[1].f === !!h || (w = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), a(Reflect.get(e, n), c[r], c.c, c.t)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, !!h), w[1].p = o(h || y, w[0]), f && f.set(y, w)), w[1][r] = c, w[1].c = f, w[1].t = p, w[1].p;
}, p = (e, t, r, o, s = Object.is)=>{
    if (s(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const c = r.get(u(e));
    if (!c) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let l = null;
    try {
        for (const r of c.h || [])if (l = Reflect.has(e, r) !== Reflect.has(t, r), l) return l;
        if (!0 === c[n]) {
            if (l = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), l) return l;
        } else for (const r of c.o || [])if (l = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), l) return l;
        for (const n of c.k || [])if (l = p(e[n], t[n], r, o, s), l) return l;
        return null === l && (l = !0), l;
    } finally{
        o && o.set(e, {
            n: t,
            g: l
        });
    }
}, g = (t)=>!!l(t) && e in t, y = (e)=>l(e) && e[t] || null, h = (e, t = !0)=>{
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(u(e));
        if (i) {
            var a, p;
            if (null == (a = i.h) || a.forEach((e)=>{
                const t = `:has(${String(e)})`;
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var g;
                null == (g = i.o) || g.forEach((e)=>{
                    const t = `:hasOwn(${String(e)})`;
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/valtio/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion,
    "proxy",
    ()=>proxy,
    "ref",
    ()=>ref,
    "snapshot",
    ()=>snapshot,
    "subscribe",
    ()=>subscribe,
    "unstable_buildProxyFunction",
    ()=>unstable_buildProxyFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/proxy-compare/dist/index.modern.js [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("propertydrone/propertydrone_fe/node_modules/valtio/esm/vanilla.mjs")}`;
    }
};
;
const isObject = (x)=>typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler)=>new Proxy(target, handler), canProxy = (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise)=>{
    switch(promise.status){
        case "fulfilled":
            return promise.value;
        case "rejected":
            throw promise.reason;
        default:
            throw promise;
    }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise)=>{
    const cache = snapCache.get(target);
    if ((cache == null ? void 0 : cache[0]) === version) {
        return cache[1];
    }
    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markToTrack"])(snap, true);
    snapCache.set(target, [
        version,
        snap
    ]);
    Reflect.ownKeys(target).forEach((key)=>{
        if (Object.getOwnPropertyDescriptor(snap, key)) {
            return;
        }
        const value = Reflect.get(target, key);
        const { enumerable } = Reflect.getOwnPropertyDescriptor(target, key);
        const desc = {
            value,
            enumerable,
            // This is intentional to avoid copying with proxy-compare.
            // It's still non-writable, so it avoids assigning a value.
            configurable: true
        };
        if (refSet.has(value)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markToTrack"])(value, false);
        } else if (value instanceof Promise) {
            delete desc.value;
            desc.get = ()=>handlePromise(value);
        } else if (proxyStateMap.has(value)) {
            const [target2, ensureVersion] = proxyStateMap.get(value);
            desc.value = createSnapshot(target2, ensureVersion(), handlePromise);
        }
        Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [
    1,
    1
], proxyFunction = (initialObject)=>{
    if (!isObject(initialObject)) {
        throw new Error("object required");
    }
    const found = proxyCache.get(initialObject);
    if (found) {
        return found;
    }
    let version = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0])=>{
        if (version !== nextVersion) {
            version = nextVersion;
            listeners.forEach((listener)=>listener(op, nextVersion));
        }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1])=>{
        if (checkVersion !== nextCheckVersion && !listeners.size) {
            checkVersion = nextCheckVersion;
            propProxyStates.forEach(([propProxyState])=>{
                const propVersion = propProxyState[1](nextCheckVersion);
                if (propVersion > version) {
                    version = propVersion;
                }
            });
        }
        return version;
    };
    const createPropListener = (prop)=>(op, nextVersion)=>{
            const newOp = [
                ...op
            ];
            newOp[1] = [
                prop,
                ...newOp[1]
            ];
            notifyUpdate(newOp, nextVersion);
        };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propProxyState)=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
            throw new Error("prop listener already exists");
        }
        if (listeners.size) {
            const remove = propProxyState[3](createPropListener(prop));
            propProxyStates.set(prop, [
                propProxyState,
                remove
            ]);
        } else {
            propProxyStates.set(prop, [
                propProxyState
            ]);
        }
    };
    const removePropListener = (prop)=>{
        var _a;
        const entry = propProxyStates.get(prop);
        if (entry) {
            propProxyStates.delete(prop);
            (_a = entry[1]) == null ? void 0 : _a.call(entry);
        }
    };
    const addListener = (listener)=>{
        listeners.add(listener);
        if (listeners.size === 1) {
            propProxyStates.forEach(([propProxyState, prevRemove], prop)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && prevRemove) {
                    throw new Error("remove already exists");
                }
                const remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            });
        }
        const removeListener = ()=>{
            listeners.delete(listener);
            if (listeners.size === 0) {
                propProxyStates.forEach(([propProxyState, remove], prop)=>{
                    if (remove) {
                        remove();
                        propProxyStates.set(prop, [
                            propProxyState
                        ]);
                    }
                });
            }
        };
        return removeListener;
    };
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    const handler = {
        deleteProperty (target, prop) {
            const prevValue = Reflect.get(target, prop);
            removePropListener(prop);
            const deleted = Reflect.deleteProperty(target, prop);
            if (deleted) {
                notifyUpdate([
                    "delete",
                    [
                        prop
                    ],
                    prevValue
                ]);
            }
            return deleted;
        },
        set (target, prop, value, receiver) {
            const hasPrevValue = Reflect.has(target, prop);
            const prevValue = Reflect.get(target, prop, receiver);
            if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
                return true;
            }
            removePropListener(prop);
            if (isObject(value)) {
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUntracked"])(value) || value;
            }
            let nextValue = value;
            if (value instanceof Promise) {
                value.then((v)=>{
                    value.status = "fulfilled";
                    value.value = v;
                    notifyUpdate([
                        "resolve",
                        [
                            prop
                        ],
                        v
                    ]);
                }).catch((e)=>{
                    value.status = "rejected";
                    value.reason = e;
                    notifyUpdate([
                        "reject",
                        [
                            prop
                        ],
                        e
                    ]);
                });
            } else {
                if (!proxyStateMap.has(value) && canProxy(value)) {
                    nextValue = proxyFunction(value);
                }
                const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                if (childProxyState) {
                    addPropListener(prop, childProxyState);
                }
            }
            Reflect.set(target, prop, nextValue, receiver);
            notifyUpdate([
                "set",
                [
                    prop
                ],
                value,
                prevValue
            ]);
            return true;
        }
    };
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    const proxyState = [
        baseObject,
        ensureVersion,
        createSnapshot,
        addListener
    ];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(initialObject).forEach((key)=>{
        const desc = Object.getOwnPropertyDescriptor(initialObject, key);
        if ("value" in desc) {
            proxyObject[key] = initialObject[key];
            delete desc.value;
            delete desc.writable;
        }
        Object.defineProperty(baseObject, key, desc);
    });
    return proxyObject;
})=>[
        // public functions
        proxyFunction,
        // shared state
        proxyStateMap,
        refSet,
        // internal things
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
const [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
    return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
    const proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op)=>{
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) {
            promise = Promise.resolve().then(()=>{
                promise = void 0;
                if (isListenerActive) {
                    callback(ops.splice(0));
                }
            });
        }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return ()=>{
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
const unstable_buildProxyFunction = buildProxyFunction;
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/valtio/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSnapshot",
    ()=>useSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/proxy-compare/dist/index.modern.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/valtio/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/valtio/esm/vanilla.mjs [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("propertydrone/propertydrone_fe/node_modules/valtio/esm/react.mjs")}`;
    }
};
;
;
;
;
const { use } = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const { useSyncExternalStore } = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const useAffectedDebugValue = (state, affected)=>{
    const pathList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        pathList.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["affectedToPathList"])(state, affected, true);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(pathList.current);
};
const targetCache = /* @__PURE__ */ new WeakMap();
function useSnapshot(proxyObject, options) {
    const notifyInSync = options == null ? void 0 : options.sync;
    const lastSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const lastAffected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    let inRender = true;
    const currSnapshot = useSyncExternalStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, callback, notifyInSync);
        callback();
        return unsub;
    }, [
        proxyObject,
        notifyInSync
    ]), ()=>{
        const nextSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject, use);
        try {
            if (!inRender && lastSnapshot.current && lastAffected.current && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isChanged"])(lastSnapshot.current, nextSnapshot, lastAffected.current, /* @__PURE__ */ new WeakMap())) {
                return lastSnapshot.current;
            }
        } catch (e) {}
        return nextSnapshot;
    }, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject, use));
    inRender = false;
    const currAffected = /* @__PURE__ */ new WeakMap();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        lastSnapshot.current = currSnapshot;
        lastAffected.current = currAffected;
    });
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        useAffectedDebugValue(currSnapshot, currAffected);
    }
    const proxyCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>/* @__PURE__ */ new WeakMap(), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProxy"])(currSnapshot, currAffected, proxyCache, targetCache);
}
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/valtio/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
            ;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        // dispatch for CommonJS interop named imports.
        var useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
        // because of a very particular set of implementation details and assumptions
        // -- change any one of them and it will break. The most important assumption
        // is that updates are always synchronous, because concurrent rendering is
        // only available in versions of React that also have a built-in
        // useSyncExternalStore API. And we only use this shim when the built-in API
        // does not exist.
        //
        // Do not assume that the clever hacks used by this hook also work in general.
        // The point of this shim is to replace the need for hacks by other libraries.
        function useSyncExternalStore(subscribe, getSnapshot, // React do not expose a way to check if we're hydrating. So users of the shim
        // will need to track that themselves and return the correct value
        // from `getSnapshot`.
        getServerSnapshot) {
            {
                if (!didWarnOld18Alpha) {
                    if (React.startTransition !== undefined) {
                        didWarnOld18Alpha = true;
                        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
                    }
                }
            }
            // breaks the rules of React, and only works here because of specific
            // implementation details, most importantly that updates are
            // always synchronous.
            var value = getSnapshot();
            {
                if (!didWarnUncachedGetSnapshot) {
                    var cachedValue = getSnapshot();
                    if (!objectIs(value, cachedValue)) {
                        error('The result of getSnapshot should be cached to avoid an infinite loop');
                        didWarnUncachedGetSnapshot = true;
                    }
                }
            }
            // re-render whenever the subscribed state changes by updating an some
            // arbitrary useState hook. Then, during render, we call getSnapshot to read
            // the current value.
            //
            // Because we don't actually use the state returned by the useState hook, we
            // can save a bit of memory by storing other stuff in that slot.
            //
            // To implement the early bailout, we need to track some things on a mutable
            // object. Usually, we would put that in a useRef hook, but we can stash it in
            // our useState hook instead.
            //
            // To force a re-render, we call forceUpdate({inst}). That works because the
            // new object always fails an equality check.
            var _useState = useState({
                inst: {
                    value: value,
                    getSnapshot: getSnapshot
                }
            }), inst = _useState[0].inst, forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
            // in the layout phase so we can access it during the tearing check that
            // happens on subscribe.
            useLayoutEffect(function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
                // commit phase if there was an interleaved mutation. In concurrent mode
                // this can happen all the time, but even in synchronous mode, an earlier
                // effect may have mutated the store.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({
                        inst: inst
                    });
                }
            }, [
                subscribe,
                value,
                getSnapshot
            ]);
            useEffect(function() {
                // Check for changes right before subscribing. Subsequent changes will be
                // detected in the subscription handler.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({
                        inst: inst
                    });
                }
                var handleStoreChange = function() {
                    // TODO: Because there is no cross-renderer API for batching updates, it's
                    // up to the consumer of this library to wrap their subscription event
                    // with unstable_batchedUpdates. Should we try to detect when this isn't
                    // the case and print a warning in development?
                    // The store changed. Check if the snapshot changed since the last time we
                    // read from the store.
                    if (checkIfSnapshotChanged(inst)) {
                        // Force a re-render.
                        forceUpdate({
                            inst: inst
                        });
                    }
                }; // Subscribe to the store and return a clean-up function.
                return subscribe(handleStoreChange);
            }, [
                subscribe
            ]);
            useDebugValue(value);
            return value;
        }
        function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
                var nextValue = latestGetSnapshot();
                return !objectIs(prevValue, nextValue);
            } catch (error) {
                return true;
            }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            // Note: The shim does not use getServerSnapshot, because pre-18 versions of
            // React do not expose a way to check if we're hydrating. So users of the shim
            // will need to track that themselves and return the correct value
            // from `getSnapshot`.
            return getSnapshot();
        }
        var canUseDOM = !!(("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
        var isServerEnvironment = !canUseDOM;
        var shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
        var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/valtio/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/valtio/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
        var selection = window.getSelection();
        var anchorNode = selection && selection.anchorNode;
        var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
        if (isTouchingSelection) {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/propertydrone/propertydrone_fe/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-image-crop/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>S,
    "ReactCrop",
    ()=>S,
    "areCropsEqual",
    ()=>X,
    "centerCrop",
    ()=>L,
    "clamp",
    ()=>b,
    "cls",
    ()=>H,
    "containCrop",
    ()=>k,
    "convertToPercentCrop",
    ()=>v,
    "convertToPixelCrop",
    ()=>D,
    "default",
    ()=>S,
    "defaultCrop",
    ()=>E,
    "makeAspectCrop",
    ()=>B,
    "nudgeCrop",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _ = Object.defineProperty;
var $ = (a, h, e)=>h in a ? _(a, h, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : a[h] = e;
var m = (a, h, e)=>$(a, typeof h != "symbol" ? h + "" : h, e);
;
const E = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    unit: "px"
}, b = (a, h, e)=>Math.min(Math.max(a, h), e), H = (...a)=>a.filter((h)=>h && typeof h == "string").join(" "), X = (a, h)=>a === h || a.width === h.width && a.height === h.height && a.x === h.x && a.y === h.y && a.unit === h.unit;
function B(a, h, e, n) {
    const t = D(a, e, n);
    return a.width && (t.height = t.width / h), a.height && (t.width = t.height * h), t.y + t.height > n && (t.height = n - t.y, t.width = t.height * h), t.x + t.width > e && (t.width = e - t.x, t.height = t.width / h), a.unit === "%" ? v(t, e, n) : t;
}
function L(a, h, e) {
    const n = D(a, h, e);
    return n.x = (h - n.width) / 2, n.y = (e - n.height) / 2, a.unit === "%" ? v(n, h, e) : n;
}
function v(a, h, e) {
    return a.unit === "%" ? {
        ...E,
        ...a,
        unit: "%"
    } : {
        unit: "%",
        x: a.x ? a.x / h * 100 : 0,
        y: a.y ? a.y / e * 100 : 0,
        width: a.width ? a.width / h * 100 : 0,
        height: a.height ? a.height / e * 100 : 0
    };
}
function D(a, h, e) {
    return a.unit ? a.unit === "px" ? {
        ...E,
        ...a,
        unit: "px"
    } : {
        unit: "px",
        x: a.x ? a.x * h / 100 : 0,
        y: a.y ? a.y * e / 100 : 0,
        width: a.width ? a.width * h / 100 : 0,
        height: a.height ? a.height * e / 100 : 0
    } : {
        ...E,
        ...a,
        unit: "px"
    };
}
function k(a, h, e, n, t, d = 0, r = 0, o = n, w = t) {
    const i = {
        ...a
    };
    let s = Math.min(d, n), c = Math.min(r, t), g = Math.min(o, n), p = Math.min(w, t);
    h && (h > 1 ? (s = r ? r * h : s, c = s / h, g = o * h) : (c = d ? d / h : c, s = c * h, p = w / h)), i.y < 0 && (i.height = Math.max(i.height + i.y, c), i.y = 0), i.x < 0 && (i.width = Math.max(i.width + i.x, s), i.x = 0);
    const l = n - (i.x + i.width);
    l < 0 && (i.x = Math.min(i.x, n - s), i.width += l);
    const C = t - (i.y + i.height);
    if (C < 0 && (i.y = Math.min(i.y, t - c), i.height += C), i.width < s && ((e === "sw" || e == "nw") && (i.x -= s - i.width), i.width = s), i.height < c && ((e === "nw" || e == "ne") && (i.y -= c - i.height), i.height = c), i.width > g && ((e === "sw" || e == "nw") && (i.x -= g - i.width), i.width = g), i.height > p && ((e === "nw" || e == "ne") && (i.y -= p - i.height), i.height = p), h) {
        const y = i.width / i.height;
        if (y < h) {
            const f = Math.max(i.width / h, c);
            (e === "nw" || e == "ne") && (i.y -= f - i.height), i.height = f;
        } else if (y > h) {
            const f = Math.max(i.height * h, s);
            (e === "sw" || e == "nw") && (i.x -= f - i.width), i.width = f;
        }
    }
    return i;
}
function I(a, h, e, n) {
    const t = {
        ...a
    };
    return h === "ArrowLeft" ? n === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n === "w" ? (t.x -= e, t.width += e) : n === "sw" ? (t.x -= e, t.width += e, t.height += e) : n === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n === "e" ? t.width -= e : n === "se" && (t.width -= e, t.height -= e) : h === "ArrowRight" && (n === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n === "w" ? (t.x += e, t.width -= e) : n === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n === "ne" ? (t.y -= e, t.width += e, t.height += e) : n === "e" ? t.width += e : n === "se" && (t.width += e, t.height += e)), h === "ArrowUp" ? n === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n === "n" ? (t.y -= e, t.height += e) : n === "ne" ? (t.y -= e, t.width += e, t.height += e) : n === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n === "s" ? t.height -= e : n === "se" && (t.width -= e, t.height -= e) : h === "ArrowDown" && (n === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n === "n" ? (t.y += e, t.height -= e) : n === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n === "sw" ? (t.x -= e, t.width += e, t.height += e) : n === "s" ? t.height += e : n === "se" && (t.width += e, t.height += e)), t;
}
const M = {
    capture: !0,
    passive: !1
};
let N = 0;
const x = class x extends __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    constructor(){
        super(...arguments);
        m(this, "docMoveBound", !1);
        m(this, "mouseDownOnCrop", !1);
        m(this, "dragStarted", !1);
        m(this, "evData", {
            startClientX: 0,
            startClientY: 0,
            startCropX: 0,
            startCropY: 0,
            clientX: 0,
            clientY: 0,
            isResize: !0
        });
        m(this, "componentRef", (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])());
        m(this, "mediaRef", (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])());
        m(this, "resizeObserver");
        m(this, "initChangeCalled", !1);
        m(this, "instanceId", `rc-${N++}`);
        m(this, "state", {
            cropIsActive: !1,
            newCropIsBeingDrawn: !1
        });
        m(this, "onCropPointerDown", (e)=>{
            const { crop: n, disabled: t } = this.props, d = this.getBox();
            if (!n) return;
            const r = D(n, d.width, d.height);
            if (t) return;
            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                preventScroll: !0
            });
            const o = e.target.dataset.ord, w = !!o;
            let i = e.clientX, s = e.clientY, c = r.x, g = r.y;
            if (o) {
                const p = e.clientX - d.x, l = e.clientY - d.y;
                let C = 0, y = 0;
                o === "ne" || o == "e" ? (C = p - (r.x + r.width), y = l - r.y, c = r.x, g = r.y + r.height) : o === "se" || o === "s" ? (C = p - (r.x + r.width), y = l - (r.y + r.height), c = r.x, g = r.y) : o === "sw" || o == "w" ? (C = p - r.x, y = l - (r.y + r.height), c = r.x + r.width, g = r.y) : (o === "nw" || o == "n") && (C = p - r.x, y = l - r.y, c = r.x + r.width, g = r.y + r.height), i = c + d.x + C, s = g + d.y + y;
            }
            this.evData = {
                startClientX: i,
                startClientY: s,
                startCropX: c,
                startCropY: g,
                clientX: e.clientX,
                clientY: e.clientY,
                isResize: w,
                ord: o
            }, this.mouseDownOnCrop = !0, this.setState({
                cropIsActive: !0
            });
        });
        m(this, "onComponentPointerDown", (e)=>{
            const { crop: n, disabled: t, locked: d, keepSelection: r, onChange: o } = this.props, w = this.getBox();
            if (t || d || r && n) return;
            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                preventScroll: !0
            });
            const i = e.clientX - w.x, s = e.clientY - w.y, c = {
                unit: "px",
                x: i,
                y: s,
                width: 0,
                height: 0
            };
            this.evData = {
                startClientX: e.clientX,
                startClientY: e.clientY,
                startCropX: i,
                startCropY: s,
                clientX: e.clientX,
                clientY: e.clientY,
                isResize: !0
            }, this.mouseDownOnCrop = !0, o(D(c, w.width, w.height), v(c, w.width, w.height)), this.setState({
                cropIsActive: !0,
                newCropIsBeingDrawn: !0
            });
        });
        m(this, "onDocPointerMove", (e)=>{
            const { crop: n, disabled: t, onChange: d, onDragStart: r } = this.props, o = this.getBox();
            if (t || !n || !this.mouseDownOnCrop) return;
            e.cancelable && e.preventDefault(), this.dragStarted || (this.dragStarted = !0, r && r(e));
            const { evData: w } = this;
            w.clientX = e.clientX, w.clientY = e.clientY;
            let i;
            w.isResize ? i = this.resizeCrop() : i = this.dragCrop(), X(n, i) || d(D(i, o.width, o.height), v(i, o.width, o.height));
        });
        m(this, "onComponentKeyDown", (e)=>{
            const { crop: n, disabled: t, onChange: d, onComplete: r } = this.props;
            if (t) return;
            const o = e.key;
            let w = !1;
            if (!n) return;
            const i = this.getBox(), s = this.makePixelCrop(i), g = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x.nudgeStepLarge : e.shiftKey ? x.nudgeStepMedium : x.nudgeStep;
            if (o === "ArrowLeft" ? (s.x -= g, w = !0) : o === "ArrowRight" ? (s.x += g, w = !0) : o === "ArrowUp" ? (s.y -= g, w = !0) : o === "ArrowDown" && (s.y += g, w = !0), w) {
                e.cancelable && e.preventDefault(), s.x = b(s.x, 0, i.width - s.width), s.y = b(s.y, 0, i.height - s.height);
                const p = D(s, i.width, i.height), l = v(s, i.width, i.height);
                d(p, l), r && r(p, l);
            }
        });
        m(this, "onHandlerKeyDown", (e, n)=>{
            const { aspect: t = 0, crop: d, disabled: r, minWidth: o = 0, minHeight: w = 0, maxWidth: i, maxHeight: s, onChange: c, onComplete: g } = this.props, p = this.getBox();
            if (r || !d) return;
            if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") e.stopPropagation(), e.preventDefault();
            else return;
            const C = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x.nudgeStepLarge : e.shiftKey ? x.nudgeStepMedium : x.nudgeStep, y = D(d, p.width, p.height), f = I(y, e.key, C, n), R = k(f, t, n, p.width, p.height, o, w, i, s);
            if (!X(d, R)) {
                const Y = v(R, p.width, p.height);
                c(R, Y), g && g(R, Y);
            }
        });
        m(this, "onDocPointerDone", (e)=>{
            const { crop: n, disabled: t, onComplete: d, onDragEnd: r } = this.props, o = this.getBox();
            this.unbindDocMove(), !(t || !n) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, r && r(e), d && d(D(n, o.width, o.height), v(n, o.width, o.height)), this.setState({
                cropIsActive: !1,
                newCropIsBeingDrawn: !1
            }));
        });
        m(this, "onDragFocus", ()=>{
            var e;
            (e = this.componentRef.current) == null || e.scrollTo(0, 0);
        });
    }
    get document() {
        return document;
    }
    // We unfortunately get the bounding box every time as x+y changes
    // due to scrolling.
    getBox() {
        const e = this.mediaRef.current;
        if (!e) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        const { x: n, y: t, width: d, height: r } = e.getBoundingClientRect();
        return {
            x: n,
            y: t,
            width: d,
            height: r
        };
    }
    componentDidUpdate(e) {
        const { crop: n, onComplete: t } = this.props;
        if (t && !e.crop && n) {
            const { width: d, height: r } = this.getBox();
            d && r && t(D(n, d, r), v(n, d, r));
        }
    }
    componentWillUnmount() {
        this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
    }
    bindDocMove() {
        this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, M), this.document.addEventListener("pointerup", this.onDocPointerDone, M), this.document.addEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = !0);
    }
    unbindDocMove() {
        this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, M), this.document.removeEventListener("pointerup", this.onDocPointerDone, M), this.document.removeEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = !1);
    }
    getCropStyle() {
        const { crop: e } = this.props;
        if (e) return {
            top: `${e.y}${e.unit}`,
            left: `${e.x}${e.unit}`,
            width: `${e.width}${e.unit}`,
            height: `${e.height}${e.unit}`
        };
    }
    dragCrop() {
        const { evData: e } = this, n = this.getBox(), t = this.makePixelCrop(n), d = e.clientX - e.startClientX, r = e.clientY - e.startClientY;
        return t.x = b(e.startCropX + d, 0, n.width - t.width), t.y = b(e.startCropY + r, 0, n.height - t.height), t;
    }
    getPointRegion(e, n, t, d) {
        const { evData: r } = this, o = r.clientX - e.x, w = r.clientY - e.y;
        let i;
        d && n ? i = n === "nw" || n === "n" || n === "ne" : i = w < r.startCropY;
        let s;
        return t && n ? s = n === "nw" || n === "w" || n === "sw" : s = o < r.startCropX, s ? i ? "nw" : "sw" : i ? "ne" : "se";
    }
    resolveMinDimensions(e, n, t = 0, d = 0) {
        const r = Math.min(t, e.width), o = Math.min(d, e.height);
        return !n || !r && !o ? [
            r,
            o
        ] : n > 1 ? r ? [
            r,
            r / n
        ] : [
            o * n,
            o
        ] : o ? [
            o * n,
            o
        ] : [
            r,
            r / n
        ];
    }
    resizeCrop() {
        const { evData: e } = this, { aspect: n = 0, maxWidth: t, maxHeight: d } = this.props, r = this.getBox(), [o, w] = this.resolveMinDimensions(r, n, this.props.minWidth, this.props.minHeight);
        let i = this.makePixelCrop(r);
        const s = this.getPointRegion(r, e.ord, o, w), c = e.ord || s;
        let g = e.clientX - e.startClientX, p = e.clientY - e.startClientY;
        (o && c === "nw" || c === "w" || c === "sw") && (g = Math.min(g, -o)), (w && c === "nw" || c === "n" || c === "ne") && (p = Math.min(p, -w));
        const l = {
            unit: "px",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        s === "ne" ? (l.x = e.startCropX, l.width = g, n ? (l.height = l.width / n, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY - l.height)) : s === "se" ? (l.x = e.startCropX, l.y = e.startCropY, l.width = g, n ? l.height = l.width / n : l.height = p) : s === "sw" ? (l.x = e.startCropX + g, l.y = e.startCropY, l.width = Math.abs(g), n ? l.height = l.width / n : l.height = p) : s === "nw" && (l.x = e.startCropX + g, l.width = Math.abs(g), n ? (l.height = l.width / n, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY + p));
        const C = k(l, n, s, r.width, r.height, o, w, t, d);
        return n || x.xyOrds.indexOf(c) > -1 ? i = C : x.xOrds.indexOf(c) > -1 ? (i.x = C.x, i.width = C.width) : x.yOrds.indexOf(c) > -1 && (i.y = C.y, i.height = C.height), i.x = b(i.x, 0, r.width - i.width), i.y = b(i.y, 0, r.height - i.height), i;
    }
    renderCropSelection() {
        const { ariaLabels: e = x.defaultProps.ariaLabels, disabled: n, locked: t, renderSelectionAddon: d, ruleOfThirds: r, crop: o } = this.props, w = this.getCropStyle();
        if (o) return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: w,
            className: "ReactCrop__crop-selection",
            onPointerDown: this.onCropPointerDown,
            "aria-label": e.cropArea,
            tabIndex: 0,
            onKeyDown: this.onComponentKeyDown,
            role: "group"
        }, !n && !t && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-elements",
            onFocus: this.onDragFocus
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-n",
            "data-ord": "n"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-e",
            "data-ord": "e"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-s",
            "data-ord": "s"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-w",
            "data-ord": "w"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": e.nwDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "nw"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": e.nDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "n"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": e.neDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "ne"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": e.eDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "e"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": e.seDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "se"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": e.sDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "s"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": e.swDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "sw"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": e.wDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "w"),
            role: "button"
        })), d && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__selection-addon",
            onPointerDown: (i)=>i.stopPropagation()
        }, d(this.state)), r && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__rule-of-thirds-hz"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__rule-of-thirds-vt"
        })));
    }
    makePixelCrop(e) {
        const n = {
            ...E,
            ...this.props.crop || {}
        };
        return D(n, e.width, e.height);
    }
    render() {
        const { aspect: e, children: n, circularCrop: t, className: d, crop: r, disabled: o, locked: w, style: i, ruleOfThirds: s } = this.props, { cropIsActive: c, newCropIsBeingDrawn: g } = this.state, p = r ? this.renderCropSelection() : null, l = H("ReactCrop", d, c && "ReactCrop--active", o && "ReactCrop--disabled", w && "ReactCrop--locked", g && "ReactCrop--new-crop", r && e && "ReactCrop--fixed-aspect", r && t && "ReactCrop--circular-crop", r && s && "ReactCrop--rule-of-thirds", !this.dragStarted && r && !r.width && !r.height && "ReactCrop--invisible-crop", t && "ReactCrop--no-animate");
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.componentRef,
            className: l,
            style: i
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.mediaRef,
            className: "ReactCrop__child-wrapper",
            onPointerDown: this.onComponentPointerDown
        }, n), r ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            className: "ReactCrop__crop-mask",
            width: "100%",
            height: "100%"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("mask", {
            id: `hole-${this.instanceId}`
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            width: "100%",
            height: "100%",
            fill: "white"
        }), t ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("ellipse", {
            cx: `${r.x + r.width / 2}${r.unit}`,
            cy: `${r.y + r.height / 2}${r.unit}`,
            rx: `${r.width / 2}${r.unit}`,
            ry: `${r.height / 2}${r.unit}`,
            fill: "black"
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            x: `${r.x}${r.unit}`,
            y: `${r.y}${r.unit}`,
            width: `${r.width}${r.unit}`,
            height: `${r.height}${r.unit}`,
            fill: "black"
        }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            fill: "black",
            fillOpacity: 0.5,
            width: "100%",
            height: "100%",
            mask: `url(#hole-${this.instanceId})`
        })) : void 0, p);
    }
};
m(x, "xOrds", [
    "e",
    "w"
]), m(x, "yOrds", [
    "n",
    "s"
]), m(x, "xyOrds", [
    "nw",
    "ne",
    "se",
    "sw"
]), m(x, "nudgeStep", 1), m(x, "nudgeStepMedium", 10), m(x, "nudgeStepLarge", 100), m(x, "defaultProps", {
    ariaLabels: {
        cropArea: "Use the arrow keys to move the crop selection area",
        nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
        nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
        neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
        eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
        seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
        sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
        swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
        wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
    }
});
let S = x;
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/compute-scroll-into-view/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compute",
    ()=>r
]);
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, n = (t, n)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const o = getComputedStyle(t, null);
        return e(o.overflowY, n) || e(o.overflowX, n) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, o = (t, e, n, o, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
}, r = (e, r)=>{
    var i, s, d, h;
    if ("undefined" == typeof document) return [];
    const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
        if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: n } = e;
            B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/scroll-into-view-if-needed/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/compute-scroll-into-view/dist/index.js [app-ssr] (ecmascript)");
;
const o = (t)=>!1 === t ? {
        block: "end",
        inline: "nearest"
    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
        block: "start",
        inline: "nearest"
    };
function e(e, r) {
    if (!e.isConnected || !((t)=>{
        let o = t;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(e)) return;
    const n = ((t)=>{
        const o = window.getComputedStyle(t);
        return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
        };
    })(e);
    if (((t)=>"object" == typeof t && "function" == typeof t.behavior)(r)) return r.behavior((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compute"])(e, r));
    const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
    for (const { el: a, top: i, left: s } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compute"])(e, o(r))){
        const t = i - n.top + n.bottom, o = s - n.left + n.right;
        a.scroll({
            top: t,
            left: o,
            behavior: l
        });
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/bmp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isBMP(buffer) {
    return 'BM' === buffer.toString('ascii', 0, 2);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt32LE(18),
        'height': Math.abs(buffer.readInt32LE(22))
    };
}
module.exports = {
    'detect': isBMP,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/ico.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var TYPE_ICON = 1;
/**
 * ICON Header
 *
 * | Offset | Size | Purpose                                                                                   |
 * | 0	    | 2    | Reserved. Must always be 0.                                                               |
 * | 2      | 2    | Image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. |
 * | 4      | 2    | Number of images in the file.                                                             |
 *
 **/ var SIZE_HEADER = 2 + 2 + 2; // 6
/**
 * Image Entry
 *
 * | Offset | Size | Purpose                                                                                          |
 * | 0	    | 1    | Image width in pixels. Can be any number between 0 and 255. Value 0 means width is 256 pixels.   |
 * | 1      | 1    | Image height in pixels. Can be any number between 0 and 255. Value 0 means height is 256 pixels. |
 * | 2      | 1    | Number of colors in the color palette. Should be 0 if the image does not use a color palette.    |
 * | 3      | 1    | Reserved. Should be 0.                                                                           |
 * | 4      | 2    | ICO format: Color planes. Should be 0 or 1.                                                      |
 * |        |      | CUR format: The horizontal coordinates of the hotspot in number of pixels from the left.         |
 * | 6      | 2    | ICO format: Bits per pixel.                                                                      |
 * |        |      | CUR format: The vertical coordinates of the hotspot in number of pixels from the top.            |
 * | 8      | 4    | The size of the image's data in bytes                                                            |
 * | 12     | 4    | The offset of BMP or PNG data from the beginning of the ICO/CUR file                             |
 *
 **/ var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4; // 16
function isICO(buffer) {
    var type;
    if (buffer.readUInt16LE(0) !== 0) {
        return false;
    }
    type = buffer.readUInt16LE(2);
    return type === TYPE_ICON;
}
function getSizeFromOffset(buffer, offset) {
    var value = buffer.readUInt8(offset);
    return value === 0 ? 256 : value;
}
function getImageSize(buffer, imageIndex) {
    var offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        'width': getSizeFromOffset(buffer, offset),
        'height': getSizeFromOffset(buffer, offset + 1)
    };
}
function calculate(buffer) {
    var nbImages = buffer.readUInt16LE(4), result = getImageSize(buffer, 0), imageIndex;
    if (nbImages === 1) {
        return result;
    }
    result.images = [
        {
            width: result.width,
            height: result.height
        }
    ];
    for(imageIndex = 1; imageIndex < nbImages; imageIndex += 1){
        result.images.push(getImageSize(buffer, imageIndex));
    }
    return result;
}
module.exports = {
    'detect': isICO,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/cur.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var TYPE_CURSOR = 2;
function isCUR(buffer) {
    var type;
    if (buffer.readUInt16LE(0) !== 0) {
        return false;
    }
    type = buffer.readUInt16LE(2);
    return type === TYPE_CURSOR;
}
module.exports = {
    'detect': isCUR,
    'calculate': __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/ico.js [app-ssr] (ecmascript)").calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/dds.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isDDS(buffer) {
    return buffer.readUInt32LE(0) === 0x20534444;
}
function calculate(buffer) {
    // read file resolution metadata
    return {
        'height': buffer.readUInt32LE(12),
        'width': buffer.readUInt32LE(16)
    };
}
module.exports = {
    'detect': isDDS,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/gif.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var gifRegexp = /^GIF8[79]a/;
function isGIF(buffer) {
    var signature = buffer.toString('ascii', 0, 6);
    return gifRegexp.test(signature);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt16LE(6),
        'height': buffer.readUInt16LE(8)
    };
}
module.exports = {
    'detect': isGIF,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/jpg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// NOTE: we only support baseline and progressive JPGs here
// due to the structure of the loader class, we only get a buffer
// with a maximum size of 4096 bytes. so if the SOF marker is outside
// if this range we can't detect the file size correctly.
function isJPG(buffer) {
    var SOIMarker = buffer.toString('hex', 0, 2);
    return 'ffd8' === SOIMarker;
}
function extractSize(buffer, i) {
    return {
        'height': buffer.readUInt16BE(i),
        'width': buffer.readUInt16BE(i + 2)
    };
}
function validateBuffer(buffer, i) {
    // index should be within buffer limits
    if (i > buffer.length) {
        throw new TypeError('Corrupt JPG, exceeded buffer limits');
    }
    // Every JPEG block must begin with a 0xFF
    if (buffer[i] !== 0xFF) {
        throw new TypeError('Invalid JPG, marker table corrupted');
    }
}
function calculate(buffer) {
    // Skip 4 chars, they are for signature
    buffer = buffer.slice(4);
    var i, next;
    while(buffer.length){
        // read length of the next block
        i = buffer.readUInt16BE(0);
        // ensure correct format
        validateBuffer(buffer, i);
        // 0xFFC0 is baseline standard(SOF)
        // 0xFFC1 is baseline optimized(SOF)
        // 0xFFC2 is progressive(SOF2)
        next = buffer[i + 1];
        if (next === 0xC0 || next === 0xC1 || next === 0xC2) {
            return extractSize(buffer, i + 5);
        }
        // move to the next block
        buffer = buffer.slice(i + 2);
    }
    throw new TypeError('Invalid JPG, no size found');
}
module.exports = {
    'detect': isJPG,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/png.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var pngSignature = 'PNG\r\n\x1a\n';
var pngImageHeaderChunkName = 'IHDR';
// Used to detect "fried" png's: http://www.jongware.com/pngdefry.html
var pngFriedChunkName = 'CgBI';
function isPNG(buffer) {
    if (pngSignature === buffer.toString('ascii', 1, 8)) {
        var chunkName = buffer.toString('ascii', 12, 16);
        if (chunkName === pngFriedChunkName) {
            chunkName = buffer.toString('ascii', 28, 32);
        }
        if (chunkName !== pngImageHeaderChunkName) {
            throw new TypeError('invalid png');
        }
        return true;
    }
}
function calculate(buffer) {
    if (buffer.toString('ascii', 12, 16) === pngFriedChunkName) {
        return {
            'width': buffer.readUInt32BE(32),
            'height': buffer.readUInt32BE(36)
        };
    }
    return {
        'width': buffer.readUInt32BE(16),
        'height': buffer.readUInt32BE(20)
    };
}
module.exports = {
    'detect': isPNG,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/psd.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isPSD(buffer) {
    return '8BPS' === buffer.toString('ascii', 0, 4);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt32BE(18),
        'height': buffer.readUInt32BE(14)
    };
}
module.exports = {
    'detect': isPSD,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var svgReg = /<svg[^>]+[^>]*>/;
function isSVG(buffer) {
    return svgReg.test(buffer);
}
var extractorRegExps = {
    'root': /<svg\s[^>]+>/,
    'width': /\bwidth=(['"])([^%]+?)\1/,
    'height': /\bheight=(['"])([^%]+?)\1/,
    'viewbox': /\bviewBox=(['"])(.+?)\1/
};
function parseViewbox(viewbox) {
    var bounds = viewbox.split(' ');
    return {
        'width': parseInt(bounds[2], 10),
        'height': parseInt(bounds[3], 10)
    };
}
function parseAttributes(root) {
    var width = root.match(extractorRegExps.width);
    var height = root.match(extractorRegExps.height);
    var viewbox = root.match(extractorRegExps.viewbox);
    return {
        'width': width && parseInt(width[2], 10),
        'height': height && parseInt(height[2], 10),
        'viewbox': viewbox && parseViewbox(viewbox[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        'width': attrs.width,
        'height': attrs.height
    };
}
function calculateByViewbox(attrs) {
    var ratio = attrs.viewbox.width / attrs.viewbox.height;
    if (attrs.width) {
        return {
            'width': attrs.width,
            'height': Math.floor(attrs.width / ratio)
        };
    }
    if (attrs.height) {
        return {
            'width': Math.floor(attrs.height * ratio),
            'height': attrs.height
        };
    }
    return {
        'width': attrs.viewbox.width,
        'height': attrs.viewbox.height
    };
}
function calculate(buffer) {
    var root = buffer.toString('utf8').match(extractorRegExps.root);
    if (root) {
        var attrs = parseAttributes(root[0]);
        if (attrs.width && attrs.height) {
            return calculateByDimensions(attrs);
        }
        if (attrs.viewbox) {
            return calculateByViewbox(attrs);
        }
    }
    throw new TypeError('invalid svg');
}
module.exports = {
    'detect': isSVG,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/webp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// based on https://developers.google.com/speed/webp/docs/riff_container
function isWebP(buffer) {
    var riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
    var webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
    var vp8Header = 'VP8' === buffer.toString('ascii', 12, 15);
    return riffHeader && webpHeader && vp8Header;
}
function calculate(buffer) {
    var chunkHeader = buffer.toString('ascii', 12, 16);
    buffer = buffer.slice(20, 30);
    // Extended webp stream signature
    if (chunkHeader === 'VP8X') {
        var extendedHeader = buffer[0];
        var validStart = (extendedHeader & 0xc0) === 0;
        var validEnd = (extendedHeader & 0x01) === 0;
        if (validStart && validEnd) {
            return calculateExtended(buffer);
        } else {
            return false;
        }
    }
    // Lossless webp stream signature
    if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
        return calculateLossy(buffer);
    }
    // Lossy webp stream signature
    var signature = buffer.toString('hex', 3, 6);
    if (chunkHeader === 'VP8L' && signature !== '9d012a') {
        return calculateLossless(buffer);
    }
    return false;
}
function calculateExtended(buffer) {
    return {
        'width': 1 + buffer.readUIntLE(4, 3),
        'height': 1 + buffer.readUIntLE(7, 3)
    };
}
function calculateLossless(buffer) {
    return {
        'width': 1 + ((buffer[2] & 0x3F) << 8 | buffer[1]),
        'height': 1 + ((buffer[4] & 0xF) << 10 | buffer[3] << 2 | (buffer[2] & 0xC0) >> 6)
    };
}
function calculateLossy(buffer) {
    // `& 0x3fff` returns the last 14 bits
    // TO-DO: include webp scaling in the calculations
    return {
        'width': buffer.readInt16LE(6) & 0x3fff,
        'height': buffer.readInt16LE(8) & 0x3fff
    };
}
module.exports = {
    'detect': isWebP,
    'calculate': calculate
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// load all available handlers for browserify support
var typeHandlers = {
    bmp: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/bmp.js [app-ssr] (ecmascript)"),
    cur: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/cur.js [app-ssr] (ecmascript)"),
    dds: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/dds.js [app-ssr] (ecmascript)"),
    gif: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/gif.js [app-ssr] (ecmascript)"),
    ico: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/ico.js [app-ssr] (ecmascript)"),
    jpg: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/jpg.js [app-ssr] (ecmascript)"),
    png: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/png.js [app-ssr] (ecmascript)"),
    psd: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/psd.js [app-ssr] (ecmascript)"),
    svg: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/svg.js [app-ssr] (ecmascript)"),
    webp: __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types/webp.js [app-ssr] (ecmascript)")
};
module.exports = typeHandlers;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/detector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var typeHandlers = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types.js [app-ssr] (ecmascript)");
module.exports = function(buffer) {
    var type, result;
    for(type in typeHandlers){
        result = typeHandlers[type].detect(buffer);
        if (result) {
            return type;
        }
    }
};
}),
"[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var typeHandlers = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/types.js [app-ssr] (ecmascript)");
var detector = __turbopack_context__.r("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/detector.js [app-ssr] (ecmascript)");
/**
 * Return size information based on a buffer
 *
 * @param {Buffer} buffer
 * @returns {Object}
 */ function lookup(buffer) {
    // detect the file type.. don't rely on the extension
    var type = detector(buffer);
    // find an appropriate handler for this file type
    if (type in typeHandlers) {
        var size = typeHandlers[type].calculate(buffer);
        if (size !== false) {
            size.type = type;
            return size;
        }
    }
    // throw up, if we don't understand the file
    throw new TypeError('unsupported file type: ' + type);
}
/**
 * @param {Buffer|string} input - buffer or relative/absolute path of the image file
 */ module.exports = function(input) {
    // Handle buffer input
    if (Buffer.isBuffer(input)) {
        return lookup(input);
    }
    // input should be a buffer at this point
    throw new TypeError('expecting only a buffer as input');
};
module.exports.types = Object.keys(typeHandlers);
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/numbering.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNumbering",
    ()=>createNumbering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/docx/build/index.mjs [app-ssr] (ecmascript)");
;
function basicIndentStyle(indent) {
    return {
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentType"].START,
        style: {
            paragraph: {
                indent: {
                    left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertInchesToTwip"])(indent),
                    hanging: (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertInchesToTwip"])(0.18)
                }
            }
        }
    };
}
const numbered = Array(3).fill([
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LevelFormat"].DECIMAL,
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LevelFormat"].LOWER_LETTER,
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LevelFormat"].LOWER_ROMAN
]).flat().map((format, level)=>Object.assign({
        level,
        format,
        text: `%${level + 1}.`
    }, basicIndentStyle((level + 1) / 2)));
const bullets = Array(3).fill([
    '●',
    '○',
    '■'
]).flat().map((text, level)=>Object.assign({
        level,
        format: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LevelFormat"].BULLET,
        text
    }, basicIndentStyle((level + 1) / 2)));
const styles = {
    numbered,
    bullets
};
function createNumbering(reference, style) {
    return {
        reference,
        levels: styles[style]
    };
} //# sourceMappingURL=numbering.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocFromState",
    ()=>createDocFromState,
    "createShortId",
    ()=>createShortId,
    "getLatexFromNode",
    ()=>getLatexFromNode,
    "writeDocx",
    ()=>writeDocx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/docx/build/index.mjs [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
function createShortId() {
    return Math.random().toString(36).substr(2, 9);
}
function createDocFromState(state) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        footnotes: state.footnotes,
        numbering: {
            config: state.numbering
        },
        sections: [
            {
                properties: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionType"].CONTINUOUS
                },
                children: state.children
            }
        ]
    });
    return doc;
}
function writeDocx(doc, write) {
    return __awaiter(this, void 0, void 0, function*() {
        const buffer = yield __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
        return write(buffer);
    });
}
function getLatexFromNode(node) {
    let math = '';
    node.forEach((child)=>{
        if (child.isText) math += child.text;
    // TODO: improve this as we may have other things in the future
    });
    return math;
} //# sourceMappingURL=utils.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/serializer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocxSerializer",
    ()=>DocxSerializer,
    "DocxSerializerState",
    ()=>DocxSerializerState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/docx/build/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/buffer-image-size/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$numbering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/numbering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const MAX_IMAGE_WIDTH = 600;
function createReferenceBookmark(id, kind, before, after) {
    const textBefore = before ? [
        new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](before)
    ] : [];
    const textAfter = after ? [
        new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](after)
    ] : [];
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bookmark"]({
        id,
        children: [
            ...textBefore,
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SequentialIdentifier"](kind),
            ...textAfter
        ]
    });
}
class DocxSerializerState {
    constructor(nodes, marks, options){
        this.footnotes = {};
        this.current = [];
        // not sure what this actually is, seems to be close for 8.5x11
        this.maxImageWidth = MAX_IMAGE_WIDTH;
        this.$footnoteCounter = 0;
        this.nodes = nodes;
        this.marks = marks;
        this.options = options !== null && options !== void 0 ? options : {};
        this.children = [];
        this.numbering = [];
    }
    renderContent(parent, opts) {
        parent.forEach((node, _, i)=>{
            if (opts) this.addParagraphOptions(opts);
            this.render(node, parent, i);
        });
    }
    render(node, parent, index) {
        if (typeof parent === 'number') throw new Error('!');
        if (!this.nodes[node.type.name]) throw new Error(`Token type \`${node.type.name}\` not supported by Word renderer`);
        this.nodes[node.type.name](this, node, parent, index);
    }
    renderMarks(node, marks) {
        return marks.map((mark)=>{
            var _a, _b;
            return (_b = (_a = this.marks)[mark.type.name]) === null || _b === void 0 ? void 0 : _b.call(_a, this, node, mark);
        }).reduce((a, b)=>Object.assign(Object.assign({}, a), b), {});
    }
    renderInline(parent) {
        // Pop the stack over to this object when we encounter a link, and closeLink restores it
        let currentLink;
        const closeLink = ()=>{
            if (!currentLink) return;
            const hyperlink = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalHyperlink"]({
                link: currentLink.link,
                // child: this.current[0],
                children: this.current
            });
            this.current = [
                ...currentLink.stack,
                hyperlink
            ];
            currentLink = undefined;
        };
        const openLink = (href)=>{
            const sameLink = href === (currentLink === null || currentLink === void 0 ? void 0 : currentLink.link);
            this.addRunOptions({
                style: 'Hyperlink'
            });
            // TODO: https://github.com/dolanmiu/docx/issues/1119
            // Remove the if statement here and oneLink!
            const oneLink = true;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                if (currentLink && sameLink) return;
                if (currentLink && !sameLink) {
                    // Close previous, and open a new one
                    closeLink();
                }
            }
            currentLink = {
                link: href,
                stack: this.current
            };
            this.current = [];
        };
        const progress = (node, offset, index)=>{
            const links = node.marks.filter((m)=>m.type.name === 'link');
            const hasLink = links.length > 0;
            if (hasLink) {
                openLink(links[0].attrs.href);
            } else if (!hasLink && currentLink) {
                closeLink();
            }
            if (node.isText) {
                this.text(node.text, this.renderMarks(node, [
                    ...node.marks
                ]));
            } else {
                this.render(node, parent, index);
            }
        };
        parent.forEach(progress);
        // Must call close at the end of everything, just in case
        closeLink();
    }
    renderList(node, style) {
        if (!this.currentNumbering) {
            const nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createShortId"])();
            this.numbering.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$numbering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNumbering"])(nextId, style));
            this.currentNumbering = {
                reference: nextId,
                level: 0
            };
        } else {
            const { reference, level } = this.currentNumbering;
            this.currentNumbering = {
                reference,
                level: level + 1
            };
        }
        this.renderContent(node);
        if (this.currentNumbering.level === 0) {
            delete this.currentNumbering;
        } else {
            const { reference, level } = this.currentNumbering;
            this.currentNumbering = {
                reference,
                level: level - 1
            };
        }
    }
    // This is a pass through to the paragraphs, etc. underneath they will close the block
    renderListItem(node) {
        if (!this.currentNumbering) throw new Error('Trying to create a list item without a list?');
        this.addParagraphOptions({
            numbering: this.currentNumbering
        });
        this.renderContent(node);
    }
    addParagraphOptions(opts) {
        this.nextParentParagraphOpts = Object.assign(Object.assign({}, this.nextParentParagraphOpts), opts);
    }
    addRunOptions(opts) {
        this.nextRunOpts = Object.assign(Object.assign({}, this.nextRunOpts), opts);
    }
    text(text, opts) {
        if (!text) return;
        this.current.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](Object.assign(Object.assign({
            text
        }, this.nextRunOpts), opts)));
        delete this.nextRunOpts;
    }
    math(latex, opts = {
        inline: true
    }) {
        var _a;
        if (opts.inline || !opts.numbered) {
            this.current.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Math"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathRun"](latex)
                ]
            }));
            return;
        }
        const id = (_a = opts.id) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createShortId"])();
        this.current = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]('\t'),
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Math"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathRun"](latex)
                ]
            }),
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]('\t('),
            createReferenceBookmark(id, 'Equation'),
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](')')
        ];
        this.addParagraphOptions({
            tabStops: [
                {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabStopType"].CENTER,
                    position: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabStopPosition"].MAX / 2
                },
                {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabStopType"].RIGHT,
                    position: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabStopPosition"].MAX
                }
            ]
        });
    }
    image(src, widthPercent = 70, align = 'center', imageRunOpts) {
        const buffer = this.options.getImageBuffer(src);
        const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(buffer);
        const aspect = dimensions.height / dimensions.width;
        const width = this.maxImageWidth * (widthPercent / 100);
        this.current.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageRun"](Object.assign(Object.assign({}, imageRunOpts), {
            data: buffer,
            // Assume that the file extension is a valid docx image type.
            type: src.replace(/.*\./, '').toLowerCase(),
            transformation: Object.assign(Object.assign({}, (imageRunOpts === null || imageRunOpts === void 0 ? void 0 : imageRunOpts.transformation) || {}), {
                width,
                height: width * aspect
            })
        })));
        let alignment;
        switch(align){
            case 'right':
                alignment = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentType"].RIGHT;
                break;
            case 'left':
                alignment = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentType"].LEFT;
                break;
            default:
                alignment = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentType"].CENTER;
        }
        this.addParagraphOptions({
            // TODO: fix
            alignment: alignment
        });
    }
    table(node, opts = {}) {
        const { getCellOptions, getRowOptions, tableOptions } = opts;
        const actualChildren = this.children;
        const rows = [];
        node.content.forEach((row)=>{
            const cells = [];
            // Check if all cells are headers in this row
            let tableHeader = true;
            row.content.forEach((cell)=>{
                if (cell.type.name !== 'table_header') {
                    tableHeader = false;
                }
            });
            // This scales images inside of tables
            this.maxImageWidth = MAX_IMAGE_WIDTH / row.content.childCount;
            row.content.forEach((cell)=>{
                var _a, _b;
                this.children = [];
                this.renderContent(cell);
                const tableCellOpts = {
                    children: this.children
                };
                const colspan = (_a = cell.attrs.colspan) !== null && _a !== void 0 ? _a : 1;
                const rowspan = (_b = cell.attrs.rowspan) !== null && _b !== void 0 ? _b : 1;
                if (colspan > 1) tableCellOpts.columnSpan = colspan;
                if (rowspan > 1) tableCellOpts.rowSpan = rowspan;
                cells.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"](Object.assign(Object.assign({}, tableCellOpts), (getCellOptions === null || getCellOptions === void 0 ? void 0 : getCellOptions(cell)) || {})));
            });
            rows.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"](Object.assign(Object.assign({}, (getRowOptions === null || getRowOptions === void 0 ? void 0 : getRowOptions(row)) || {}), {
                children: cells,
                tableHeader
            })));
        });
        this.maxImageWidth = MAX_IMAGE_WIDTH;
        const table = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"](Object.assign(Object.assign({}, tableOptions), {
            rows
        }));
        actualChildren.push(table);
        // If there are multiple tables, this seperates them
        actualChildren.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](''));
        this.children = actualChildren;
    }
    captionLabel(id, kind, { suffix } = {
        suffix: ': '
    }) {
        this.current.push(...[
            createReferenceBookmark(id, kind, `${kind} `),
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](suffix)
        ]);
    }
    footnote(node) {
        const { current, nextRunOpts } = this;
        // Delete everything and work with the footnote inline on the current
        this.current = [];
        delete this.nextRunOpts;
        this.$footnoteCounter += 1;
        this.renderInline(node);
        this.footnotes[this.$footnoteCounter] = {
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                    children: this.current
                })
            ]
        };
        this.current = current;
        this.nextRunOpts = nextRunOpts;
        this.current.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteReferenceRun"](this.$footnoteCounter));
    }
    closeBlock(node, props) {
        const paragraph = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](Object.assign(Object.assign({
            children: this.current
        }, this.nextParentParagraphOpts), props));
        this.current = [];
        delete this.nextParentParagraphOpts;
        this.children.push(paragraph);
    }
    createReference(id, before, after) {
        const children = [];
        if (before) children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](before));
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleField"](`REF ${id} \\h`));
        if (after) children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"](after));
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalHyperlink"]({
            anchor: id,
            children
        });
        this.current.push(ref);
    }
}
class DocxSerializer {
    constructor(nodes, marks){
        this.nodes = nodes;
        this.marks = marks;
    }
    serialize(content, options) {
        const state = new DocxSerializerState(this.nodes, this.marks, options);
        state.renderContent(content);
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDocFromState"])(state);
        return doc;
    }
} //# sourceMappingURL=serializer.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultDocxSerializer",
    ()=>defaultDocxSerializer,
    "defaultMarks",
    ()=>defaultMarks,
    "defaultNodes",
    ()=>defaultNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/docx/build/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
const defaultNodes = {
    text (state, node) {
        var _a;
        state.text((_a = node.text) !== null && _a !== void 0 ? _a : '');
    },
    paragraph (state, node) {
        state.renderInline(node);
        state.closeBlock(node);
    },
    heading (state, node) {
        state.renderInline(node);
        const heading = [
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1,
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_3,
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_4,
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_5,
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_6
        ][node.attrs.level - 1];
        state.closeBlock(node, {
            heading
        });
    },
    blockquote (state, node) {
        state.renderContent(node, {
            style: 'IntenseQuote'
        });
    },
    code_block (state, node) {
        // TODO: something for code
        state.renderContent(node);
        state.closeBlock(node);
    },
    horizontal_rule (state, node) {
        // Kinda hacky, but this works to insert two paragraphs, the first with a break
        state.closeBlock(node, {
            thematicBreak: true
        });
        state.closeBlock(node);
    },
    hard_break (state) {
        state.addRunOptions({
            break: 1
        });
    },
    ordered_list (state, node) {
        state.renderList(node, 'numbered');
    },
    bullet_list (state, node) {
        state.renderList(node, 'bullets');
    },
    list_item (state, node) {
        state.renderListItem(node);
    },
    // Presentational
    image (state, node) {
        const { src } = node.attrs;
        state.image(src);
        state.closeBlock(node);
    },
    // Technical
    math (state, node) {
        state.math((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLatexFromNode"])(node), {
            inline: true
        });
    },
    equation (state, node) {
        const { id, numbered } = node.attrs;
        state.math((0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLatexFromNode"])(node), {
            inline: false,
            numbered,
            id
        });
        state.closeBlock(node);
    },
    table (state, node) {
        state.table(node);
    }
};
const defaultMarks = {
    em () {
        return {
            italics: true
        };
    },
    strong () {
        return {
            bold: true
        };
    },
    italic () {
        return {
            italics: true
        };
    },
    bold () {
        return {
            bold: true
        };
    },
    link () {
        // Note, this is handled specifically in the serializer
        // Word treats links more like a Node rather than a mark
        return {};
    },
    code () {
        return {
            font: {
                name: 'Monospace'
            },
            color: '000000',
            shading: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$docx$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadingType"].SOLID,
                color: 'D2D3D2',
                fill: 'D2D3D2'
            }
        };
    },
    abbr () {
        // TODO: abbreviation
        return {};
    },
    subscript () {
        return {
            subScript: true
        };
    },
    superscript () {
        return {
            superScript: true
        };
    },
    strikethrough () {
        // doubleStrike!
        return {
            strike: true
        };
    },
    underline () {
        return {
            underline: {}
        };
    },
    smallcaps () {
        return {
            smallCaps: true
        };
    },
    allcaps () {
        return {
            allCaps: true
        };
    }
};
const defaultDocxSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocxSerializer"](defaultNodes, defaultMarks); //# sourceMappingURL=schema.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$docx$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-docx/dist/esm/utils.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/re-resizable/lib/resizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resizer",
    ()=>Resizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
var rowSizeBase = {
    width: '100%',
    height: '10px',
    top: '0px',
    left: '0px',
    cursor: 'row-resize'
};
var colSizeBase = {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '0px',
    cursor: 'col-resize'
};
var edgeBase = {
    width: '20px',
    height: '20px',
    position: 'absolute',
    zIndex: 1
};
var styles = {
    top: __assign(__assign({}, rowSizeBase), {
        top: '-5px'
    }),
    right: __assign(__assign({}, colSizeBase), {
        left: undefined,
        right: '-5px'
    }),
    bottom: __assign(__assign({}, rowSizeBase), {
        top: undefined,
        bottom: '-5px'
    }),
    left: __assign(__assign({}, colSizeBase), {
        left: '-5px'
    }),
    topRight: __assign(__assign({}, edgeBase), {
        right: '-10px',
        top: '-10px',
        cursor: 'ne-resize'
    }),
    bottomRight: __assign(__assign({}, edgeBase), {
        right: '-10px',
        bottom: '-10px',
        cursor: 'se-resize'
    }),
    bottomLeft: __assign(__assign({}, edgeBase), {
        left: '-10px',
        bottom: '-10px',
        cursor: 'sw-resize'
    }),
    topLeft: __assign(__assign({}, edgeBase), {
        left: '-10px',
        top: '-10px',
        cursor: 'nw-resize'
    })
};
var Resizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    var onResizeStart = props.onResizeStart, direction = props.direction, children = props.children, replaceStyles = props.replaceStyles, className = props.className;
    var onMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        onResizeStart(e, direction);
    }, [
        onResizeStart,
        direction
    ]);
    var onTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        onResizeStart(e, direction);
    }, [
        onResizeStart,
        direction
    ]);
    var style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return __assign(__assign({
            position: 'absolute',
            userSelect: 'none'
        }, styles[direction]), replaceStyles !== null && replaceStyles !== void 0 ? replaceStyles : {});
    }, [
        replaceStyles,
        direction
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: className || undefined,
        style: style,
        onMouseDown: onMouseDown,
        onTouchStart: onTouchStart,
        children: children
    });
});
}),
"[project]/propertydrone/propertydrone_fe/node_modules/re-resizable/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resizable",
    ()=>Resizable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$re$2d$resizable$2f$lib$2f$resizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/re-resizable/lib/resizer.js [app-ssr] (ecmascript)");
var __extends = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
;
;
var DEFAULT_SIZE = {
    width: 'auto',
    height: 'auto'
};
var clamp = function(n, min, max) {
    return Math.max(Math.min(n, max), min);
};
var snap = function(n, size, gridGap) {
    var v = Math.round(n / size);
    return v * size + gridGap * (v - 1);
};
var hasDirection = function(dir, target) {
    return new RegExp(dir, 'i').test(target);
};
// INFO: In case of window is a Proxy and does not porxy Events correctly, use isTouchEvent & isMouseEvent to distinguish event type instead of `instanceof`.
var isTouchEvent = function(event) {
    return Boolean(event.touches && event.touches.length);
};
var isMouseEvent = function(event) {
    return Boolean((event.clientX || event.clientX === 0) && (event.clientY || event.clientY === 0));
};
var findClosestSnap = function(n, snapArray, snapGap) {
    if (snapGap === void 0) {
        snapGap = 0;
    }
    var closestGapIndex = snapArray.reduce(function(prev, curr, index) {
        return Math.abs(curr - n) < Math.abs(snapArray[prev] - n) ? index : prev;
    }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n;
};
var getStringSize = function(n) {
    n = n.toString();
    if (n === 'auto') {
        return n;
    }
    if (n.endsWith('px')) {
        return n;
    }
    if (n.endsWith('%')) {
        return n;
    }
    if (n.endsWith('vh')) {
        return n;
    }
    if (n.endsWith('vw')) {
        return n;
    }
    if (n.endsWith('vmax')) {
        return n;
    }
    if (n.endsWith('vmin')) {
        return n;
    }
    return "".concat(n, "px");
};
var getPixelSize = function(size, parentSize, innerWidth, innerHeight) {
    if (size && typeof size === 'string') {
        if (size.endsWith('px')) {
            return Number(size.replace('px', ''));
        }
        if (size.endsWith('%')) {
            var ratio = Number(size.replace('%', '')) / 100;
            return parentSize * ratio;
        }
        if (size.endsWith('vw')) {
            var ratio = Number(size.replace('vw', '')) / 100;
            return innerWidth * ratio;
        }
        if (size.endsWith('vh')) {
            var ratio = Number(size.replace('vh', '')) / 100;
            return innerHeight * ratio;
        }
    }
    return size;
};
var calculateNewMax = function(parentSize, innerWidth, innerHeight, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth, innerHeight);
    maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth, innerHeight);
    minWidth = getPixelSize(minWidth, parentSize.width, innerWidth, innerHeight);
    minHeight = getPixelSize(minHeight, parentSize.height, innerWidth, innerHeight);
    return {
        maxWidth: typeof maxWidth === 'undefined' ? undefined : Number(maxWidth),
        maxHeight: typeof maxHeight === 'undefined' ? undefined : Number(maxHeight),
        minWidth: typeof minWidth === 'undefined' ? undefined : Number(minWidth),
        minHeight: typeof minHeight === 'undefined' ? undefined : Number(minHeight)
    };
};
/**
 * transform T | [T, T] to [T, T]
 * @param val
 * @returns
 */ // tslint:disable-next-line
var normalizeToPair = function(val) {
    return Array.isArray(val) ? val : [
        val,
        val
    ];
};
var definedProps = [
    'as',
    'ref',
    'style',
    'className',
    'grid',
    'gridGap',
    'snap',
    'bounds',
    'boundsByDirection',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap'
];
// HACK: This class is used to calculate % size.
var baseClassName = '__resizable_base__';
var Resizable = function(_super) {
    __extends(Resizable, _super);
    function Resizable(props) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        // For parent boundary
        _this.parentLeft = 0;
        _this.parentTop = 0;
        // For boundary
        _this.resizableLeft = 0;
        _this.resizableRight = 0;
        _this.resizableTop = 0;
        _this.resizableBottom = 0;
        // For target boundary
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.delta = {
            width: 0,
            height: 0
        };
        _this.appendBase = function() {
            if (!_this.resizable || !_this.window) {
                return null;
            }
            var parent = _this.parentNode;
            if (!parent) {
                return null;
            }
            var element = _this.window.document.createElement('div');
            element.style.width = '100%';
            element.style.height = '100%';
            element.style.position = 'absolute';
            element.style.transform = 'scale(0, 0)';
            element.style.left = '0';
            element.style.flex = '0 0 100%';
            if (element.classList) {
                element.classList.add(baseClassName);
            } else {
                element.className += baseClassName;
            }
            parent.appendChild(element);
            return element;
        };
        _this.removeBase = function(base) {
            var parent = _this.parentNode;
            if (!parent) {
                return;
            }
            parent.removeChild(base);
        };
        _this.state = {
            isResizing: false,
            width: (_b = (_a = _this.propsSize) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 'auto',
            height: (_d = (_c = _this.propsSize) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 'auto',
            direction: 'right',
            original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            backgroundStyle: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'auto',
                opacity: 0,
                position: 'fixed',
                zIndex: 9999,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0'
            },
            flexBasis: undefined
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Object.defineProperty(Resizable.prototype, "parentNode", {
        get: function() {
            if (!this.resizable) {
                return null;
            }
            return this.resizable.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "window", {
        get: function() {
            if (!this.resizable) {
                return null;
            }
            if (!this.resizable.ownerDocument) {
                return null;
            }
            return this.resizable.ownerDocument.defaultView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "propsSize", {
        get: function() {
            return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "size", {
        get: function() {
            var width = 0;
            var height = 0;
            if (this.resizable && this.window) {
                var orgWidth = this.resizable.offsetWidth;
                var orgHeight = this.resizable.offsetHeight;
                // HACK: Set position `relative` to get parent size.
                //       This is because when re-resizable set `absolute`, I can not get base width correctly.
                var orgPosition = this.resizable.style.position;
                if (orgPosition !== 'relative') {
                    this.resizable.style.position = 'relative';
                }
                // INFO: Use original width or height if set auto.
                width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
                height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
                // Restore original position
                this.resizable.style.position = orgPosition;
            }
            return {
                width: width,
                height: height
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "sizeStyle", {
        get: function() {
            var _this = this;
            var size = this.props.size;
            var getSize = function(key) {
                var _a;
                if (typeof _this.state[key] === 'undefined' || _this.state[key] === 'auto') {
                    return 'auto';
                }
                if (_this.propsSize && _this.propsSize[key] && ((_a = _this.propsSize[key]) === null || _a === void 0 ? void 0 : _a.toString().endsWith('%'))) {
                    if (_this.state[key].toString().endsWith('%')) {
                        return _this.state[key].toString();
                    }
                    var parentSize = _this.getParentSize();
                    var value = Number(_this.state[key].toString().replace('px', ''));
                    var percent = value / parentSize[key] * 100;
                    return "".concat(percent, "%");
                }
                return getStringSize(_this.state[key]);
            };
            var width = size && typeof size.width !== 'undefined' && !this.state.isResizing ? getStringSize(size.width) : getSize('width');
            var height = size && typeof size.height !== 'undefined' && !this.state.isResizing ? getStringSize(size.height) : getSize('height');
            return {
                width: width,
                height: height
            };
        },
        enumerable: false,
        configurable: true
    });
    Resizable.prototype.getParentSize = function() {
        if (!this.parentNode) {
            if (!this.window) {
                return {
                    width: 0,
                    height: 0
                };
            }
            return {
                width: this.window.innerWidth,
                height: this.window.innerHeight
            };
        }
        var base = this.appendBase();
        if (!base) {
            return {
                width: 0,
                height: 0
            };
        }
        // INFO: To calculate parent width with flex layout
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        if (wrap !== 'wrap') {
            wrapChanged = true;
            this.parentNode.style.flexWrap = 'wrap';
        // HACK: Use relative to get parent padding size
        }
        base.style.position = 'relative';
        base.style.minWidth = '100%';
        base.style.minHeight = '100%';
        var size = {
            width: base.offsetWidth,
            height: base.offsetHeight
        };
        if (wrapChanged) {
            this.parentNode.style.flexWrap = wrap;
        }
        this.removeBase(base);
        return size;
    };
    Resizable.prototype.bindEvents = function() {
        if (this.window) {
            this.window.addEventListener('mouseup', this.onMouseUp);
            this.window.addEventListener('mousemove', this.onMouseMove);
            this.window.addEventListener('mouseleave', this.onMouseUp);
            this.window.addEventListener('touchmove', this.onMouseMove, {
                capture: true,
                passive: false
            });
            this.window.addEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.unbindEvents = function() {
        if (this.window) {
            this.window.removeEventListener('mouseup', this.onMouseUp);
            this.window.removeEventListener('mousemove', this.onMouseMove);
            this.window.removeEventListener('mouseleave', this.onMouseUp);
            this.window.removeEventListener('touchmove', this.onMouseMove, true);
            this.window.removeEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.componentDidMount = function() {
        if (!this.resizable || !this.window) {
            return;
        }
        var computedStyle = this.window.getComputedStyle(this.resizable);
        this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: computedStyle.flexBasis !== 'auto' ? computedStyle.flexBasis : undefined
        });
    };
    Resizable.prototype.componentWillUnmount = function() {
        if (this.window) {
            this.unbindEvents();
        }
    };
    Resizable.prototype.createSizeForCssProperty = function(newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === 'auto' && this.state.original[kind] === newSize && (typeof propsSize === 'undefined' || propsSize === 'auto') ? 'auto' : newSize;
    };
    Resizable.prototype.calculateNewMaxFromBoundary = function(maxWidth, maxHeight) {
        var boundsByDirection = this.props.boundsByDirection;
        var direction = this.state.direction;
        var widthByDirection = boundsByDirection && hasDirection('left', direction);
        var heightByDirection = boundsByDirection && hasDirection('top', direction);
        var boundWidth;
        var boundHeight;
        if (this.props.bounds === 'parent') {
            var parent_1 = this.parentNode;
            if (parent_1) {
                boundWidth = widthByDirection ? this.resizableRight - this.parentLeft : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
                boundHeight = heightByDirection ? this.resizableBottom - this.parentTop : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
            }
        } else if (this.props.bounds === 'window') {
            if (this.window) {
                boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
                boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
            }
        } else if (this.props.bounds) {
            boundWidth = widthByDirection ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
            boundHeight = heightByDirection ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
        }
        if (boundWidth && Number.isFinite(boundWidth)) {
            maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
        }
        if (boundHeight && Number.isFinite(boundHeight)) {
            maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return {
            maxWidth: maxWidth,
            maxHeight: maxHeight
        };
    };
    Resizable.prototype.calculateNewSizeFromDirection = function(clientX, clientY) {
        var scale = this.props.scale || 1;
        var _a = normalizeToPair(this.props.resizeRatio || 1), resizeRatioX = _a[0], resizeRatioY = _a[1];
        var _b = this.state, direction = _b.direction, original = _b.original;
        var _c = this.props, lockAspectRatio = _c.lockAspectRatio, lockAspectRatioExtraHeight = _c.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _c.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection('right', direction)) {
            newWidth = original.width + (clientX - original.x) * resizeRatioX / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('left', direction)) {
            newWidth = original.width - (clientX - original.x) * resizeRatioX / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('bottom', direction)) {
            newHeight = original.height + (clientY - original.y) * resizeRatioY / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        if (hasDirection('top', direction)) {
            newHeight = original.height - (clientY - original.y) * resizeRatioY / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        return {
            newWidth: newWidth,
            newHeight: newHeight
        };
    };
    Resizable.prototype.calculateNewSizeFromAspectRatio = function(newWidth, newHeight, max, min) {
        var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === 'undefined' ? 10 : min.width;
        var computedMaxWidth = typeof max.width === 'undefined' || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === 'undefined' ? 10 : min.height;
        var computedMaxHeight = typeof max.height === 'undefined' || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
            var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
            var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
            var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
            var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
            var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
            var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
            var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
            var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
            newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
            newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        } else {
            newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
            newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return {
            newWidth: newWidth,
            newHeight: newHeight
        };
    };
    Resizable.prototype.setBoundingClientRect = function() {
        var adjustedScale = 1 / (this.props.scale || 1);
        // For parent boundary
        if (this.props.bounds === 'parent') {
            var parent_2 = this.parentNode;
            if (parent_2) {
                var parentRect = parent_2.getBoundingClientRect();
                this.parentLeft = parentRect.left * adjustedScale;
                this.parentTop = parentRect.top * adjustedScale;
            }
        }
        // For target(html element) boundary
        if (this.props.bounds && typeof this.props.bounds !== 'string') {
            var targetRect = this.props.bounds.getBoundingClientRect();
            this.targetLeft = targetRect.left * adjustedScale;
            this.targetTop = targetRect.top * adjustedScale;
        }
        // For boundary
        if (this.resizable) {
            var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top, right = _a.right, bottom = _a.bottom;
            this.resizableLeft = left * adjustedScale;
            this.resizableRight = right * adjustedScale;
            this.resizableTop = top_1 * adjustedScale;
            this.resizableBottom = bottom * adjustedScale;
        }
    };
    Resizable.prototype.onResizeStart = function(event, direction) {
        if (!this.resizable || !this.window) {
            return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.clientX;
            clientY = event.nativeEvent.clientY;
        } else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.touches[0].clientX;
            clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
            if (this.resizable) {
                var startResize = this.props.onResizeStart(event, direction, this.resizable);
                if (startResize === false) {
                    return;
                }
            }
        }
        // Fix #168
        if (this.props.size) {
            if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
                this.setState({
                    height: this.props.size.height
                });
            }
            if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
                this.setState({
                    width: this.props.size.width
                });
            }
        }
        // For lockAspectRatio case
        this.ratio = typeof this.props.lockAspectRatio === 'number' ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = this.window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== 'auto') {
            var parent_3 = this.parentNode;
            if (parent_3) {
                var dir = this.window.getComputedStyle(parent_3).flexDirection;
                this.flexDir = dir.startsWith('row') ? 'row' : 'column';
                flexBasis = computedStyle.flexBasis;
            }
        }
        // For boundary
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
            original: {
                x: clientX,
                y: clientY,
                width: this.size.width,
                height: this.size.height
            },
            isResizing: true,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), {
                cursor: this.window.getComputedStyle(event.target).cursor || 'auto'
            }),
            direction: direction,
            flexBasis: flexBasis
        };
        this.setState(state);
    };
    Resizable.prototype.onMouseMove = function(event) {
        var _this = this;
        if (!this.state.isResizing || !this.resizable || !this.window) {
            return;
        }
        if (this.window.TouchEvent && isTouchEvent(event)) {
            try {
                event.preventDefault();
                event.stopPropagation();
            } catch (e) {
            // Ignore on fail
            }
        }
        var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
        var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
        var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
        var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        // Calculate new size
        var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
        // Calculate max size from boundary settings
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        if (this.props.snap && this.props.snap.x) {
            newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
            newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        // Calculate new size from aspect ratio
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, {
            width: boundaryMax.maxWidth,
            height: boundaryMax.maxHeight
        }, {
            width: minWidth,
            height: minHeight
        });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
            var newGridWidth = snap(newWidth, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0);
            var newGridHeight = snap(newHeight, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0);
            var gap = this.props.snapGap || 0;
            var w = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
            var h = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
            newWidth = w;
            newHeight = h;
        }
        var delta = {
            width: newWidth - original.width,
            height: newHeight - original.height
        };
        this.delta = delta;
        if (width && typeof width === 'string') {
            if (width.endsWith('%')) {
                var percent = newWidth / parentSize.width * 100;
                newWidth = "".concat(percent, "%");
            } else if (width.endsWith('vw')) {
                var vw = newWidth / this.window.innerWidth * 100;
                newWidth = "".concat(vw, "vw");
            } else if (width.endsWith('vh')) {
                var vh = newWidth / this.window.innerHeight * 100;
                newWidth = "".concat(vh, "vh");
            }
        }
        if (height && typeof height === 'string') {
            if (height.endsWith('%')) {
                var percent = newHeight / parentSize.height * 100;
                newHeight = "".concat(percent, "%");
            } else if (height.endsWith('vw')) {
                var vw = newHeight / this.window.innerWidth * 100;
                newHeight = "".concat(vw, "vw");
            } else if (height.endsWith('vh')) {
                var vh = newHeight / this.window.innerHeight * 100;
                newHeight = "".concat(vh, "vh");
            }
        }
        var newState = {
            width: this.createSizeForCssProperty(newWidth, 'width'),
            height: this.createSizeForCssProperty(newHeight, 'height')
        };
        if (this.flexDir === 'row') {
            newState.flexBasis = newState.width;
        } else if (this.flexDir === 'column') {
            newState.flexBasis = newState.height;
        }
        var widthChanged = this.state.width !== newState.width;
        var heightChanged = this.state.height !== newState.height;
        var flexBaseChanged = this.state.flexBasis !== newState.flexBasis;
        var changed = widthChanged || heightChanged || flexBaseChanged;
        if (changed) {
            // For v18, update state sync
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(function() {
                _this.setState(newState);
            });
        }
        if (this.props.onResize) {
            if (changed) {
                this.props.onResize(event, direction, this.resizable, delta);
            }
        }
    };
    Resizable.prototype.onMouseUp = function(event) {
        var _a, _b;
        var _c = this.state, isResizing = _c.isResizing, direction = _c.direction, original = _c.original;
        if (!isResizing || !this.resizable) {
            return;
        }
        if (this.props.onResizeStop) {
            this.props.onResizeStop(event, direction, this.resizable, this.delta);
        }
        if (this.props.size) {
            this.setState({
                width: (_a = this.props.size.width) !== null && _a !== void 0 ? _a : 'auto',
                height: (_b = this.props.size.height) !== null && _b !== void 0 ? _b : 'auto'
            });
        }
        this.unbindEvents();
        this.setState({
            isResizing: false,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), {
                cursor: 'auto'
            })
        });
    };
    Resizable.prototype.updateSize = function(size) {
        var _a, _b;
        this.setState({
            width: (_a = size.width) !== null && _a !== void 0 ? _a : 'auto',
            height: (_b = size.height) !== null && _b !== void 0 ? _b : 'auto'
        });
    };
    Resizable.prototype.renderResizer = function() {
        var _this = this;
        var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
        if (!enable) {
            return null;
        }
        var resizers = Object.keys(enable).map(function(dir) {
            if (enable[dir] !== false) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$re$2d$resizable$2f$lib$2f$resizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resizer"], {
                    direction: dir,
                    onResizeStart: _this.onResizeStart,
                    replaceStyles: handleStyles && handleStyles[dir],
                    className: handleClasses && handleClasses[dir],
                    children: handleComponent && handleComponent[dir] ? handleComponent[dir] : null
                }, dir);
            }
            return null;
        });
        // #93 Wrap the resize box in span (will not break 100% width/height)
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: handleWrapperClass,
            style: handleWrapperStyle,
            children: resizers
        });
    };
    Resizable.prototype.render = function() {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function(acc, key) {
            if (definedProps.indexOf(key) !== -1) {
                return acc;
            }
            acc[key] = _this.props[key];
            return acc;
        }, {});
        var style = __assign(__assign(__assign({
            position: 'relative',
            userSelect: this.state.isResizing ? 'none' : 'auto'
        }, this.props.style), this.sizeStyle), {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            boxSizing: 'border-box',
            flexShrink: 0
        });
        if (this.state.flexBasis) {
            style.flexBasis = this.state.flexBasis;
        }
        var Wrapper = this.props.as || 'div';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Wrapper, __assign({
            style: style,
            className: this.props.className
        }, extendsProps, {
            // `ref` is after `extendsProps` to ensure this one wins over a version
            // passed in
            ref: function(c) {
                if (c) {
                    _this.resizable = c;
                }
            },
            children: [
                this.state.isResizing && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    style: this.state.backgroundStyle
                }),
                this.props.children,
                this.renderResizer()
            ]
        }));
    };
    Resizable.defaultProps = {
        as: 'div',
        onResizeStart: function() {},
        onResize: function() {},
        onResizeStop: function() {},
        enable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true
        },
        style: {},
        grid: [
            1,
            1
        ],
        gridGap: [
            0,
            0
        ],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0
    };
    return Resizable;
}(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"]);
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/react-colorful/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexAlphaColorPicker",
    ()=>ne,
    "HexColorInput",
    ()=>Oe,
    "HexColorPicker",
    ()=>Z,
    "HslColorPicker",
    ()=>ie,
    "HslStringColorPicker",
    ()=>fe,
    "HslaColorPicker",
    ()=>ae,
    "HslaStringColorPicker",
    ()=>ue,
    "HsvColorPicker",
    ()=>pe,
    "HsvStringColorPicker",
    ()=>_e,
    "HsvaColorPicker",
    ()=>de,
    "HsvaStringColorPicker",
    ()=>me,
    "RgbColorPicker",
    ()=>Ne,
    "RgbStringColorPicker",
    ()=>ye,
    "RgbaColorPicker",
    ()=>Ce,
    "RgbaStringColorPicker",
    ()=>He,
    "setNonce",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function u() {
    return (u = Object.assign || function(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = arguments[r];
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
    }).apply(this, arguments);
}
function c(e, r) {
    if (null == e) return {};
    var t, n, o = {}, a = Object.keys(e);
    for(n = 0; n < a.length; n++)r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
    return o;
}
function i(e) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(e), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(function(e) {
        t.current && t.current(e);
    });
    return t.current = e, n.current;
}
var s = function(e, r, t) {
    return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
}, f = function(e) {
    return "touches" in e;
}, v = function(e) {
    return e && e.ownerDocument.defaultView || self;
}, d = function(e, r, t) {
    var n = e.getBoundingClientRect(), o = f(r) ? function(e, r) {
        for(var t = 0; t < e.length; t++)if (e[t].identifier === r) return e[t];
        return e[0];
    }(r.touches, t) : r;
    return {
        left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
        top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height)
    };
}, h = function(e) {
    !f(e) && e.preventDefault();
}, m = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function(o) {
    var a = o.onMove, l = o.onKey, s = c(o, [
        "onMove",
        "onKey"
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), g = i(a), p = i(l), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e = function(e) {
            h(e), (f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current ? g(d(m.current, e, b.current)) : t(!1);
        }, r = function() {
            return t(!1);
        };
        function t(t) {
            var n = _.current, o = v(m.current), a = t ? o.addEventListener : o.removeEventListener;
            a(n ? "touchmove" : "mousemove", e), a(n ? "touchend" : "mouseup", r);
        }
        return [
            function(e) {
                var r = e.nativeEvent, n = m.current;
                if (n && (h(r), !function(e, r) {
                    return r && !f(e);
                }(r, _.current) && n)) {
                    if (f(r)) {
                        _.current = !0;
                        var o = r.changedTouches || [];
                        o.length && (b.current = o[0].identifier);
                    }
                    n.focus(), g(d(n, r, b.current)), t(!0);
                }
            },
            function(e) {
                var r = e.which || e.keyCode;
                r < 37 || r > 40 || (e.preventDefault(), p({
                    left: 39 === r ? .05 : 37 === r ? -.05 : 0,
                    top: 40 === r ? .05 : 38 === r ? -.05 : 0
                }));
            },
            t
        ];
    }, [
        p,
        g
    ]), C = x[0], E = x[1], H = x[2];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return H;
    }, [
        H
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        onTouchStart: C,
        onMouseDown: C,
        className: "react-colorful__interactive",
        ref: m,
        onKeyDown: E,
        tabIndex: 0,
        role: "slider"
    }));
}), g = function(e) {
    return e.filter(Boolean).join(" ");
}, p = function(r) {
    var t = r.color, n = r.left, o = r.top, a = void 0 === o ? .5 : o, l = g([
        "react-colorful__pointer",
        r.className
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: l,
        style: {
            top: 100 * a + "%",
            left: 100 * n + "%"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
            backgroundColor: t
        }
    }));
}, b = function(e, r, t) {
    return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, _ = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}, x = function(e) {
    return L(C(e));
}, C = function(e) {
    return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
        r: parseInt(e[0] + e[0], 16),
        g: parseInt(e[1] + e[1], 16),
        b: parseInt(e[2] + e[2], 16),
        a: 4 === e.length ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1
    } : {
        r: parseInt(e.substring(0, 2), 16),
        g: parseInt(e.substring(2, 4), 16),
        b: parseInt(e.substring(4, 6), 16),
        a: 8 === e.length ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
    };
}, E = function(e, r) {
    return void 0 === r && (r = "deg"), Number(e) * (_[r] || 1);
}, H = function(e) {
    var r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? N({
        h: E(r[1], r[2]),
        s: Number(r[3]),
        l: Number(r[4]),
        a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, M = H, N = function(e) {
    var r = e.s, t = e.l;
    return {
        h: e.h,
        s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0,
        v: t + r,
        a: e.a
    };
}, w = function(e) {
    return K(I(e));
}, y = function(e) {
    var r = e.s, t = e.v, n = e.a, o = (200 - r) * t / 100;
    return {
        h: b(e.h),
        s: b(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
        l: b(o / 2),
        a: b(n, 2)
    };
}, q = function(e) {
    var r = y(e);
    return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, k = function(e) {
    var r = y(e);
    return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, I = function(e) {
    var r = e.h, t = e.s, n = e.v, o = e.a;
    r = r / 360 * 6, t /= 100, n /= 100;
    var a = Math.floor(r), l = n * (1 - t), u = n * (1 - (r - a) * t), c = n * (1 - (1 - r + a) * t), i = a % 6;
    return {
        r: b(255 * [
            n,
            u,
            l,
            l,
            c,
            n
        ][i]),
        g: b(255 * [
            c,
            n,
            n,
            u,
            l,
            l
        ][i]),
        b: b(255 * [
            l,
            l,
            c,
            n,
            n,
            u
        ][i]),
        a: b(o, 2)
    };
}, O = function(e) {
    var r = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? A({
        h: E(r[1], r[2]),
        s: Number(r[3]),
        v: Number(r[4]),
        a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, j = O, z = function(e) {
    var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? L({
        r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
        g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
        b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
        a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, B = z, D = function(e) {
    var r = e.toString(16);
    return r.length < 2 ? "0" + r : r;
}, K = function(e) {
    var r = e.r, t = e.g, n = e.b, o = e.a, a = o < 1 ? D(b(255 * o)) : "";
    return "#" + D(r) + D(t) + D(n) + a;
}, L = function(e) {
    var r = e.r, t = e.g, n = e.b, o = e.a, a = Math.max(r, t, n), l = a - Math.min(r, t, n), u = l ? a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l : 0;
    return {
        h: b(60 * (u < 0 ? u + 6 : u)),
        s: b(a ? l / a * 100 : 0),
        v: b(a / 255 * 100),
        a: o
    };
}, A = function(e) {
    return {
        h: b(e.h),
        s: b(e.s),
        v: b(e.v),
        a: b(e.a, 2)
    };
}, S = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function(r) {
    var t = r.hue, n = r.onChange, o = g([
        "react-colorful__hue",
        r.className
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: o
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            n({
                h: 360 * e.left
            });
        },
        onKey: function(e) {
            n({
                h: s(t + 360 * e.left, 0, 360)
            });
        },
        "aria-label": "Hue",
        "aria-valuenow": b(t),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__hue-pointer",
        left: t / 360,
        color: q({
            h: t,
            s: 100,
            v: 100,
            a: 1
        })
    })));
}), T = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function(r) {
    var t = r.hsva, n = r.onChange, o = {
        backgroundColor: q({
            h: t.h,
            s: 100,
            v: 100,
            a: 1
        })
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__saturation",
        style: o
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            n({
                s: 100 * e.left,
                v: 100 - 100 * e.top
            });
        },
        onKey: function(e) {
            n({
                s: s(t.s + 100 * e.left, 0, 100),
                v: s(t.v - 100 * e.top, 0, 100)
            });
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + b(t.s) + "%, Brightness " + b(t.v) + "%"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__saturation-pointer",
        top: 1 - t.v / 100,
        left: t.s / 100,
        color: q(t)
    })));
}), F = function(e, r) {
    if (e === r) return !0;
    for(var t in e)if (e[t] !== r[t]) return !1;
    return !0;
}, P = function(e, r) {
    return e.replace(/\s/g, "") === r.replace(/\s/g, "");
}, X = function(e, r) {
    return e.toLowerCase() === r.toLowerCase() || F(C(e), C(r));
};
function Y(e, t, l) {
    var u = i(l), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return e.toHsva(t);
    }), s = c[0], f = c[1], v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        color: t,
        hsva: s
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!e.equal(t, v.current.color)) {
            var r = e.toHsva(t);
            v.current = {
                hsva: r,
                color: t
            }, f(r);
        }
    }, [
        t,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var r;
        F(s, v.current.hsva) || e.equal(r = e.fromHsva(s), v.current.color) || (v.current = {
            hsva: s,
            color: r
        }, u(r));
    }, [
        s,
        e,
        u
    ]);
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        f(function(r) {
            return Object.assign({}, r, e);
        });
    }, []);
    return [
        s,
        d
    ];
}
var R, V = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"], $ = function() {
    return R || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
}, G = function(e) {
    R = e;
}, J = new Map, Q = function(e) {
    V(function() {
        var r = e.current ? e.current.ownerDocument : document;
        if (void 0 !== r && !J.has(r)) {
            var t = r.createElement("style");
            t.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', J.set(r, t);
            var n = $();
            n && t.setAttribute("nonce", n), r.head.appendChild(t);
        }
    }, []);
}, U = function(t) {
    var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i = t.onChange, s = c(t, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    Q(f);
    var v = Y(o, l, i), d = v[0], h = v[1], m = g([
        "react-colorful",
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        ref: f,
        className: m
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(T, {
        hsva: d,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        hue: d.h,
        onChange: h,
        className: "react-colorful__last-control"
    }));
}, W = {
    defaultColor: "000",
    toHsva: x,
    fromHsva: function(e) {
        return w({
            h: e.h,
            s: e.s,
            v: e.v,
            a: 1
        });
    },
    equal: X
}, Z = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: W
    }));
}, ee = function(r) {
    var t = r.className, n = r.hsva, o = r.onChange, a = {
        backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, n, {
            a: 0
        })) + ", " + k(Object.assign({}, n, {
            a: 1
        })) + ")"
    }, l = g([
        "react-colorful__alpha",
        t
    ]), u = b(100 * n.a);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: l
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__alpha-gradient",
        style: a
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            o({
                a: e.left
            });
        },
        onKey: function(e) {
            o({
                a: s(n.a + e.left)
            });
        },
        "aria-label": "Alpha",
        "aria-valuetext": u + "%",
        "aria-valuenow": u,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__alpha-pointer",
        left: n.a,
        color: k(n)
    })));
}, re = function(t) {
    var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i = t.onChange, s = c(t, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    Q(f);
    var v = Y(o, l, i), d = v[0], h = v[1], m = g([
        "react-colorful",
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        ref: f,
        className: m
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(T, {
        hsva: d,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        hue: d.h,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ee, {
        hsva: d,
        onChange: h,
        className: "react-colorful__last-control"
    }));
}, te = {
    defaultColor: "0001",
    toHsva: x,
    fromHsva: w,
    equal: X
}, ne = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: te
    }));
}, oe = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0,
        a: 1
    },
    toHsva: N,
    fromHsva: y,
    equal: F
}, ae = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: oe
    }));
}, le = {
    defaultColor: "hsla(0, 0%, 0%, 1)",
    toHsva: H,
    fromHsva: k,
    equal: P
}, ue = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: le
    }));
}, ce = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0
    },
    toHsva: function(e) {
        return N({
            h: e.h,
            s: e.s,
            l: e.l,
            a: 1
        });
    },
    fromHsva: function(e) {
        return {
            h: (r = y(e)).h,
            s: r.s,
            l: r.l
        };
        //TURBOPACK unreachable
        ;
        var r;
    },
    equal: F
}, ie = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: ce
    }));
}, se = {
    defaultColor: "hsl(0, 0%, 0%)",
    toHsva: M,
    fromHsva: q,
    equal: P
}, fe = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: se
    }));
}, ve = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    },
    toHsva: function(e) {
        return e;
    },
    fromHsva: A,
    equal: F
}, de = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: ve
    }));
}, he = {
    defaultColor: "hsva(0, 0%, 0%, 1)",
    toHsva: O,
    fromHsva: function(e) {
        var r = A(e);
        return "hsva(" + r.h + ", " + r.s + "%, " + r.v + "%, " + r.a + ")";
    },
    equal: P
}, me = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: he
    }));
}, ge = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0
    },
    toHsva: function(e) {
        return {
            h: e.h,
            s: e.s,
            v: e.v,
            a: 1
        };
    },
    fromHsva: function(e) {
        var r = A(e);
        return {
            h: r.h,
            s: r.s,
            v: r.v
        };
    },
    equal: F
}, pe = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: ge
    }));
}, be = {
    defaultColor: "hsv(0, 0%, 0%)",
    toHsva: j,
    fromHsva: function(e) {
        var r = A(e);
        return "hsv(" + r.h + ", " + r.s + "%, " + r.v + "%)";
    },
    equal: P
}, _e = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: be
    }));
}, xe = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    toHsva: L,
    fromHsva: I,
    equal: F
}, Ce = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: xe
    }));
}, Ee = {
    defaultColor: "rgba(0, 0, 0, 1)",
    toHsva: z,
    fromHsva: function(e) {
        var r = I(e);
        return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
    },
    equal: P
}, He = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: Ee
    }));
}, Me = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0
    },
    toHsva: function(e) {
        return L({
            r: e.r,
            g: e.g,
            b: e.b,
            a: 1
        });
    },
    fromHsva: function(e) {
        return {
            r: (r = I(e)).r,
            g: r.g,
            b: r.b
        };
        //TURBOPACK unreachable
        ;
        var r;
    },
    equal: F
}, Ne = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: Me
    }));
}, we = {
    defaultColor: "rgb(0, 0, 0)",
    toHsva: B,
    fromHsva: function(e) {
        var r = I(e);
        return "rgb(" + r.r + ", " + r.g + ", " + r.b + ")";
    },
    equal: P
}, ye = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: we
    }));
}, qe = /^#?([0-9A-F]{3,8})$/i, ke = function(r) {
    var t = r.color, l = void 0 === t ? "" : t, s = r.onChange, f = r.onBlur, v = r.escape, d = r.validate, h = r.format, m = r.process, g = c(r, [
        "color",
        "onChange",
        "onBlur",
        "escape",
        "validate",
        "format",
        "process"
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return v(l);
    }), b = p[0], _ = p[1], x = i(s), C = i(f), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        var r = v(e.target.value);
        _(r), d(r) && x(m ? m(r) : r);
    }, [
        v,
        m,
        d,
        x
    ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        d(e.target.value) || _(v(l)), C(e);
    }, [
        l,
        v,
        d,
        C
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        _(v(l));
    }, [
        l,
        v
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("input", u({}, g, {
        value: h ? h(b) : b,
        spellCheck: "false",
        onChange: E,
        onBlur: H
    }));
}, Ie = function(e) {
    return "#" + e;
}, Oe = function(r) {
    var t = r.prefixed, n = r.alpha, o = c(r, [
        "prefixed",
        "alpha"
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        return e.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
    }, [
        n
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        return function(e, r) {
            var t = qe.exec(e), n = t ? t[1].length : 0;
            return 3 === n || 6 === n || !!r && 4 === n || !!r && 8 === n;
        }(e, n);
    }, [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ke, u({}, o, {
        escape: l,
        format: t ? Ie : void 0,
        process: Ie,
        validate: i
    }));
};
;
 //# sourceMappingURL=index.module.js.map
}),
"[project]/propertydrone/propertydrone_fe/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// state/index.ts
__turbopack_context__.s([]);
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// model/index.ts
__turbopack_context__.s([]);
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/orderedmap/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
    this.content = content;
}
OrderedMap.prototype = {
    constructor: OrderedMap,
    find: function(key) {
        for(var i = 0; i < this.content.length; i += 2)if (this.content[i] === key) return i;
        return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(key) {
        var found = this.find(key);
        return found == -1 ? undefined : this.content[found + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(key, value, newKey) {
        var self = newKey && newKey != key ? this.remove(newKey) : this;
        var found = self.find(key), content = self.content.slice();
        if (found == -1) {
            content.push(newKey || key, value);
        } else {
            content[found + 1] = value;
            if (newKey) content[found] = newKey;
        }
        return new OrderedMap(content);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(key) {
        var found = this.find(key);
        if (found == -1) return this;
        var content = this.content.slice();
        content.splice(found, 2);
        return new OrderedMap(content);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(key, value) {
        return new OrderedMap([
            key,
            value
        ].concat(this.remove(key).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(key, value) {
        var content = this.remove(key).content.slice();
        content.push(key, value);
        return new OrderedMap(content);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(place, key, value) {
        var without = this.remove(key), content = without.content.slice();
        var found = without.find(place);
        content.splice(found == -1 ? content.length : found, 0, key, value);
        return new OrderedMap(content);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(f) {
        for(var i = 0; i < this.content.length; i += 2)f(this.content[i], this.content[i + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(map.content.concat(this.subtract(map).content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(this.subtract(map).content.concat(map.content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(map) {
        var result = this;
        map = OrderedMap.from(map);
        for(var i = 0; i < map.content.length; i += 2)result = result.remove(map.content[i]);
        return result;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
        var result = {};
        this.forEach(function(key, value) {
            result[key] = value;
        });
        return result;
    },
    // :: number
    // The amount of keys in this map.
    get size () {
        return this.content.length >> 1;
    }
};
// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
    if (value instanceof OrderedMap) return value;
    var content = [];
    if (value) for(var prop in value)content.push(prop, value[prop]);
    return new OrderedMap(content);
};
const __TURBOPACK__default__export__ = OrderedMap;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentMatch",
    ()=>ContentMatch,
    "DOMParser",
    ()=>DOMParser,
    "DOMSerializer",
    ()=>DOMSerializer,
    "Fragment",
    ()=>Fragment,
    "Mark",
    ()=>Mark,
    "MarkType",
    ()=>MarkType,
    "Node",
    ()=>Node,
    "NodeRange",
    ()=>NodeRange,
    "NodeType",
    ()=>NodeType,
    "ReplaceError",
    ()=>ReplaceError,
    "ResolvedPos",
    ()=>ResolvedPos,
    "Schema",
    ()=>Schema,
    "Slice",
    ()=>Slice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/orderedmap/dist/index.js [app-ssr] (ecmascript)");
;
function findDiffStart(a, b, pos) {
    for(let i = 0;; i++){
        if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
        let childA = a.child(i), childB = b.child(i);
        if (childA == childB) {
            pos += childA.nodeSize;
            continue;
        }
        if (!childA.sameMarkup(childB)) return pos;
        if (childA.isText && childA.text != childB.text) {
            for(let j = 0; childA.text[j] == childB.text[j]; j++)pos++;
            return pos;
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffStart(childA.content, childB.content, pos + 1);
            if (inner != null) return inner;
        }
        pos += childA.nodeSize;
    }
}
function findDiffEnd(a, b, posA, posB) {
    for(let iA = a.childCount, iB = b.childCount;;){
        if (iA == 0 || iB == 0) return iA == iB ? null : {
            a: posA,
            b: posB
        };
        let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
        if (childA == childB) {
            posA -= size;
            posB -= size;
            continue;
        }
        if (!childA.sameMarkup(childB)) return {
            a: posA,
            b: posB
        };
        if (childA.isText && childA.text != childB.text) {
            let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
            while(same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]){
                same++;
                posA--;
                posB--;
            }
            return {
                a: posA,
                b: posB
            };
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
            if (inner) return inner;
        }
        posA -= size;
        posB -= size;
    }
}
/**
A fragment represents a node's collection of child nodes.

Like nodes, fragments are persistent data structures, and you
should not mutate them or their content. Rather, you create new
instances whenever needed. The API tries to make this easy.
*/ class Fragment {
    /**
    @internal
    */ constructor(/**
    The child nodes in this fragment.
    */ content, size){
        this.content = content;
        this.size = size || 0;
        if (size == null) for(let i = 0; i < content.length; i++)this.size += content[i].nodeSize;
    }
    /**
    Invoke a callback for all descendant nodes between the given two
    positions (relative to start of this fragment). Doesn't descend
    into a node when the callback returns `false`.
    */ nodesBetween(from, to, f, nodeStart = 0, parent) {
        for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
                let start = pos + 1;
                child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
            }
            pos = end;
        }
    }
    /**
    Call the given callback for every descendant node. `pos` will be
    relative to the start of the fragment. The callback may return
    `false` to prevent traversal of a given node's children.
    */ descendants(f) {
        this.nodesBetween(0, this.size, f);
    }
    /**
    Extract the text between `from` and `to`. See the same method on
    [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
    */ textBetween(from, to, blockSeparator, leafText) {
        let text = "", first = true;
        this.nodesBetween(from, to, (node, pos)=>{
            let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
            if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
                if (first) first = false;
                else text += blockSeparator;
            }
            text += nodeText;
        }, 0);
        return text;
    }
    /**
    Create a new fragment containing the combined content of this
    fragment and the other.
    */ append(other) {
        if (!other.size) return this;
        if (!this.size) return other;
        let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
        if (last.isText && last.sameMarkup(first)) {
            content[content.length - 1] = last.withText(last.text + first.text);
            i = 1;
        }
        for(; i < other.content.length; i++)content.push(other.content[i]);
        return new Fragment(content, this.size + other.size);
    }
    /**
    Cut out the sub-fragment between the two given positions.
    */ cut(from, to = this.size) {
        if (from == 0 && to == this.size) return this;
        let result = [], size = 0;
        if (to > from) for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from) {
                if (pos < from || end > to) {
                    if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
                    else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
                }
                result.push(child);
                size += child.nodeSize;
            }
            pos = end;
        }
        return new Fragment(result, size);
    }
    /**
    @internal
    */ cutByIndex(from, to) {
        if (from == to) return Fragment.empty;
        if (from == 0 && to == this.content.length) return this;
        return new Fragment(this.content.slice(from, to));
    }
    /**
    Create a new fragment in which the node at the given index is
    replaced by the given node.
    */ replaceChild(index, node) {
        let current = this.content[index];
        if (current == node) return this;
        let copy = this.content.slice();
        let size = this.size + node.nodeSize - current.nodeSize;
        copy[index] = node;
        return new Fragment(copy, size);
    }
    /**
    Create a new fragment by prepending the given node to this
    fragment.
    */ addToStart(node) {
        return new Fragment([
            node
        ].concat(this.content), this.size + node.nodeSize);
    }
    /**
    Create a new fragment by appending the given node to this
    fragment.
    */ addToEnd(node) {
        return new Fragment(this.content.concat(node), this.size + node.nodeSize);
    }
    /**
    Compare this fragment to another one.
    */ eq(other) {
        if (this.content.length != other.content.length) return false;
        for(let i = 0; i < this.content.length; i++)if (!this.content[i].eq(other.content[i])) return false;
        return true;
    }
    /**
    The first child of the fragment, or `null` if it is empty.
    */ get firstChild() {
        return this.content.length ? this.content[0] : null;
    }
    /**
    The last child of the fragment, or `null` if it is empty.
    */ get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }
    /**
    The number of child nodes in this fragment.
    */ get childCount() {
        return this.content.length;
    }
    /**
    Get the child node at the given index. Raise an error when the
    index is out of range.
    */ child(index) {
        let found = this.content[index];
        if (!found) throw new RangeError("Index " + index + " out of range for " + this);
        return found;
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content[index] || null;
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        for(let i = 0, p = 0; i < this.content.length; i++){
            let child = this.content[i];
            f(child, p, i);
            p += child.nodeSize;
        }
    }
    /**
    Find the first position at which this fragment and another
    fragment differ, or `null` if they are the same.
    */ findDiffStart(other, pos = 0) {
        return findDiffStart(this, other, pos);
    }
    /**
    Find the first position, searching from the end, at which this
    fragment and the given fragment differ, or `null` if they are
    the same. Since this position will not be the same in both
    nodes, an object with two separate positions is returned.
    */ findDiffEnd(other, pos = this.size, otherPos = other.size) {
        return findDiffEnd(this, other, pos, otherPos);
    }
    /**
    Find the index and inner offset corresponding to a given relative
    position in this fragment. The result object will be reused
    (overwritten) the next time the function is called. @internal
    */ findIndex(pos) {
        if (pos == 0) return retIndex(0, pos);
        if (pos == this.size) return retIndex(this.content.length, pos);
        if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
        for(let i = 0, curPos = 0;; i++){
            let cur = this.child(i), end = curPos + cur.nodeSize;
            if (end >= pos) {
                if (end == pos) return retIndex(i + 1, end);
                return retIndex(i, curPos);
            }
            curPos = end;
        }
    }
    /**
    Return a debugging string that describes this fragment.
    */ toString() {
        return "<" + this.toStringInner() + ">";
    }
    /**
    @internal
    */ toStringInner() {
        return this.content.join(", ");
    }
    /**
    Create a JSON-serializeable representation of this fragment.
    */ toJSON() {
        return this.content.length ? this.content.map((n)=>n.toJSON()) : null;
    }
    /**
    Deserialize a fragment from its JSON representation.
    */ static fromJSON(schema, value) {
        if (!value) return Fragment.empty;
        if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new Fragment(value.map(schema.nodeFromJSON));
    }
    /**
    Build a fragment from an array of nodes. Ensures that adjacent
    text nodes with the same marks are joined together.
    */ static fromArray(array) {
        if (!array.length) return Fragment.empty;
        let joined, size = 0;
        for(let i = 0; i < array.length; i++){
            let node = array[i];
            size += node.nodeSize;
            if (i && node.isText && array[i - 1].sameMarkup(node)) {
                if (!joined) joined = array.slice(0, i);
                joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
            } else if (joined) {
                joined.push(node);
            }
        }
        return new Fragment(joined || array, size);
    }
    /**
    Create a fragment from something that can be interpreted as a
    set of nodes. For `null`, it returns the empty fragment. For a
    fragment, the fragment itself. For a node or array of nodes, a
    fragment containing those nodes.
    */ static from(nodes) {
        if (!nodes) return Fragment.empty;
        if (nodes instanceof Fragment) return nodes;
        if (Array.isArray(nodes)) return this.fromArray(nodes);
        if (nodes.attrs) return new Fragment([
            nodes
        ], nodes.nodeSize);
        throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}
/**
An empty fragment. Intended to be reused whenever a node doesn't
contain anything (rather than allocating a new empty fragment for
each leaf node).
*/ Fragment.empty = new Fragment([], 0);
const found = {
    index: 0,
    offset: 0
};
function retIndex(index, offset) {
    found.index = index;
    found.offset = offset;
    return found;
}
function compareDeep(a, b) {
    if (a === b) return true;
    if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
    let array = Array.isArray(a);
    if (Array.isArray(b) != array) return false;
    if (array) {
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!compareDeep(a[i], b[i])) return false;
    } else {
        for(let p in a)if (!(p in b) || !compareDeep(a[p], b[p])) return false;
        for(let p in b)if (!(p in a)) return false;
    }
    return true;
}
/**
A mark is a piece of information that can be attached to a node,
such as it being emphasized, in code font, or a link. It has a
type and optionally a set of attributes that provide further
information (such as the target of the link). Marks are created
through a `Schema`, which controls which types exist and which
attributes they have.
*/ class Mark {
    /**
    @internal
    */ constructor(/**
    The type of this mark.
    */ type, /**
    The attributes associated with this mark.
    */ attrs){
        this.type = type;
        this.attrs = attrs;
    }
    /**
    Given a set of marks, create a new set which contains this one as
    well, in the right position. If this mark is already in the set,
    the set itself is returned. If any marks that are set to be
    [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
    those are replaced by this one.
    */ addToSet(set) {
        let copy, placed = false;
        for(let i = 0; i < set.length; i++){
            let other = set[i];
            if (this.eq(other)) return set;
            if (this.type.excludes(other.type)) {
                if (!copy) copy = set.slice(0, i);
            } else if (other.type.excludes(this.type)) {
                return set;
            } else {
                if (!placed && other.type.rank > this.type.rank) {
                    if (!copy) copy = set.slice(0, i);
                    copy.push(this);
                    placed = true;
                }
                if (copy) copy.push(other);
            }
        }
        if (!copy) copy = set.slice();
        if (!placed) copy.push(this);
        return copy;
    }
    /**
    Remove this mark from the given set, returning a new set. If this
    mark is not in the set, the set itself is returned.
    */ removeFromSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
        return set;
    }
    /**
    Test whether this mark is in the given set of marks.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return true;
        return false;
    }
    /**
    Test whether this mark has the same type and attributes as
    another mark.
    */ eq(other) {
        return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
    }
    /**
    Convert this mark to a JSON-serializeable representation.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        return obj;
    }
    /**
    Deserialize a mark from JSON.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
        let type = schema.marks[json.type];
        if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
        let mark = type.create(json.attrs);
        type.checkAttrs(mark.attrs);
        return mark;
    }
    /**
    Test whether two sets of marks are identical.
    */ static sameSet(a, b) {
        if (a == b) return true;
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!a[i].eq(b[i])) return false;
        return true;
    }
    /**
    Create a properly sorted mark set from null, a single mark, or an
    unsorted array of marks.
    */ static setFrom(marks) {
        if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
        if (marks instanceof Mark) return [
            marks
        ];
        let copy = marks.slice();
        copy.sort((a, b)=>a.type.rank - b.type.rank);
        return copy;
    }
}
/**
The empty set of marks.
*/ Mark.none = [];
/**
Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
given an invalid replacement.
*/ class ReplaceError extends Error {
}
/*
ReplaceError = function(this: any, message: string) {
  let err = Error.call(this, message)
  ;(err as any).__proto__ = ReplaceError.prototype
  return err
} as any

ReplaceError.prototype = Object.create(Error.prototype)
ReplaceError.prototype.constructor = ReplaceError
ReplaceError.prototype.name = "ReplaceError"
*/ /**
A slice represents a piece cut out of a larger document. It
stores not only a fragment, but also the depth up to which nodes on
both side are ‘open’ (cut through).
*/ class Slice {
    /**
    Create a slice. When specifying a non-zero open depth, you must
    make sure that there are nodes of at least that depth at the
    appropriate side of the fragment—i.e. if the fragment is an
    empty paragraph node, `openStart` and `openEnd` can't be greater
    than 1.
    
    It is not necessary for the content of open nodes to conform to
    the schema's content constraints, though it should be a valid
    start/end/middle for such a node, depending on which sides are
    open.
    */ constructor(/**
    The slice's content.
    */ content, /**
    The open depth at the start of the fragment.
    */ openStart, /**
    The open depth at the end.
    */ openEnd){
        this.content = content;
        this.openStart = openStart;
        this.openEnd = openEnd;
    }
    /**
    The size this slice would add when inserted into a document.
    */ get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    /**
    @internal
    */ insertAt(pos, fragment) {
        let content = insertInto(this.content, pos + this.openStart, fragment);
        return content && new Slice(content, this.openStart, this.openEnd);
    }
    /**
    @internal
    */ removeBetween(from, to) {
        return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
    }
    /**
    Tests whether this slice is equal to another slice.
    */ eq(other) {
        return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
    }
    /**
    @internal
    */ toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    /**
    Convert a slice to a JSON-serializable representation.
    */ toJSON() {
        if (!this.content.size) return null;
        let json = {
            content: this.content.toJSON()
        };
        if (this.openStart > 0) json.openStart = this.openStart;
        if (this.openEnd > 0) json.openEnd = this.openEnd;
        return json;
    }
    /**
    Deserialize a slice from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) return Slice.empty;
        let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
        if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
    }
    /**
    Create a slice from a fragment by taking the maximum possible
    open value on both side of the fragment.
    */ static maxOpen(fragment, openIsolating = true) {
        let openStart = 0, openEnd = 0;
        for(let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)openStart++;
        for(let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)openEnd++;
        return new Slice(fragment, openStart, openEnd);
    }
}
/**
The empty slice.
*/ Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
    let { index, offset } = content.findIndex(from), child = content.maybeChild(index);
    let { index: indexTo, offset: offsetTo } = content.findIndex(to);
    if (offset == from || child.isText) {
        if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
        return content.cut(0, from).append(content.cut(to));
    }
    if (index != indexTo) throw new RangeError("Removing non-flat range");
    return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
    let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
    if (offset == dist || child.isText) {
        if (parent && !parent.canReplace(index, index, insert)) return null;
        return content.cut(0, dist).append(insert).append(content.cut(dist));
    }
    let inner = insertInto(child.content, dist - offset - 1, insert, child);
    return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
    if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
    if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
    return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
    let index = $from.index(depth), node = $from.node(depth);
    if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
        let inner = replaceOuter($from, $to, slice, depth + 1);
        return node.copy(node.content.replaceChild(index, inner));
    } else if (!slice.content.size) {
        return close(node, replaceTwoWay($from, $to, depth));
    } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
        let parent = $from.parent, content = parent.content;
        return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
    } else {
        let { start, end } = prepareSliceForReplace(slice, $from);
        return close(node, replaceThreeWay($from, start, end, $to, depth));
    }
}
function checkJoin(main, sub) {
    if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
    let node = $before.node(depth);
    checkJoin(node, $after.node(depth));
    return node;
}
function addNode(child, target) {
    let last = target.length - 1;
    if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);
    else target.push(child);
}
function addRange($start, $end, depth, target) {
    let node = ($end || $start).node(depth);
    let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
    if ($start) {
        startIndex = $start.index(depth);
        if ($start.depth > depth) {
            startIndex++;
        } else if ($start.textOffset) {
            addNode($start.nodeAfter, target);
            startIndex++;
        }
    }
    for(let i = startIndex; i < endIndex; i++)addNode(node.child(i), target);
    if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
    node.type.checkContent(content);
    return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
    let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
    let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
    let content = [];
    addRange(null, $from, depth, content);
    if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
        checkJoin(openStart, openEnd);
        addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
    } else {
        if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
        addRange($start, $end, depth, content);
        if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
    let content = [];
    addRange(null, $from, depth, content);
    if ($from.depth > depth) {
        let type = joinable($from, $to, depth + 1);
        addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
    let extra = $along.depth - slice.openStart, parent = $along.node(extra);
    let node = parent.copy(slice.content);
    for(let i = extra - 1; i >= 0; i--)node = $along.node(i).copy(Fragment.from(node));
    return {
        start: node.resolveNoCache(slice.openStart + extra),
        end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
    };
}
/**
You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
information about it. Objects of this class represent such a
resolved position, providing various pieces of context
information, and some helper methods.

Throughout this interface, methods that take an optional `depth`
parameter will interpret undefined as `this.depth` and negative
numbers as `this.depth + value`.
*/ class ResolvedPos {
    /**
    @internal
    */ constructor(/**
    The position that was resolved.
    */ pos, /**
    @internal
    */ path, /**
    The offset this position has into its parent node.
    */ parentOffset){
        this.pos = pos;
        this.path = path;
        this.parentOffset = parentOffset;
        this.depth = path.length / 3 - 1;
    }
    /**
    @internal
    */ resolveDepth(val) {
        if (val == null) return this.depth;
        if (val < 0) return this.depth + val;
        return val;
    }
    /**
    The parent node that the position points into. Note that even if
    a position points into a text node, that node is not considered
    the parent—text nodes are ‘flat’ in this model, and have no content.
    */ get parent() {
        return this.node(this.depth);
    }
    /**
    The root node in which the position was resolved.
    */ get doc() {
        return this.node(0);
    }
    /**
    The ancestor node at the given level. `p.node(p.depth)` is the
    same as `p.parent`.
    */ node(depth) {
        return this.path[this.resolveDepth(depth) * 3];
    }
    /**
    The index into the ancestor at the given level. If this points
    at the 3rd node in the 2nd paragraph on the top level, for
    example, `p.index(0)` is 1 and `p.index(1)` is 2.
    */ index(depth) {
        return this.path[this.resolveDepth(depth) * 3 + 1];
    }
    /**
    The index pointing after this position into the ancestor at the
    given level.
    */ indexAfter(depth) {
        depth = this.resolveDepth(depth);
        return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
    }
    /**
    The (absolute) position at the start of the node at the given
    level.
    */ start(depth) {
        depth = this.resolveDepth(depth);
        return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    }
    /**
    The (absolute) position at the end of the node at the given
    level.
    */ end(depth) {
        depth = this.resolveDepth(depth);
        return this.start(depth) + this.node(depth).content.size;
    }
    /**
    The (absolute) position directly before the wrapping node at the
    given level, or, when `depth` is `this.depth + 1`, the original
    position.
    */ before(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position before the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
    }
    /**
    The (absolute) position directly after the wrapping node at the
    given level, or the original position when `depth` is `this.depth + 1`.
    */ after(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position after the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
    }
    /**
    When this position points into a text node, this returns the
    distance between the position and the start of the text node.
    Will be zero for positions that point between nodes.
    */ get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    /**
    Get the node directly after the position, if any. If the position
    points into a text node, only the part of that node after the
    position is returned.
    */ get nodeAfter() {
        let parent = this.parent, index = this.index(this.depth);
        if (index == parent.childCount) return null;
        let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
        return dOff ? parent.child(index).cut(dOff) : child;
    }
    /**
    Get the node directly before the position, if any. If the
    position points into a text node, only the part of that node
    before the position is returned.
    */ get nodeBefore() {
        let index = this.index(this.depth);
        let dOff = this.pos - this.path[this.path.length - 1];
        if (dOff) return this.parent.child(index).cut(0, dOff);
        return index == 0 ? null : this.parent.child(index - 1);
    }
    /**
    Get the position at the given index in the parent node at the
    given depth (which defaults to `this.depth`).
    */ posAtIndex(index, depth) {
        depth = this.resolveDepth(depth);
        let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
        for(let i = 0; i < index; i++)pos += node.child(i).nodeSize;
        return pos;
    }
    /**
    Get the marks at this position, factoring in the surrounding
    marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
    position is at the start of a non-empty node, the marks of the
    node after it (if any) are returned.
    */ marks() {
        let parent = this.parent, index = this.index();
        // In an empty parent, return the empty array
        if (parent.content.size == 0) return Mark.none;
        // When inside a text node, just return the text node's marks
        if (this.textOffset) return parent.child(index).marks;
        let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
        // If the `after` flag is true of there is no node before, make
        // the node after this position the main reference.
        if (!main) {
            let tmp = main;
            main = other;
            other = tmp;
        }
        // Use all marks in the main node, except those that have
        // `inclusive` set to false and are not present in the other node.
        let marks = main.marks;
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    Get the marks after the current position, if any, except those
    that are non-inclusive and not present at position `$end`. This
    is mostly useful for getting the set of marks to preserve after a
    deletion. Will return `null` if this position is at the end of
    its parent node or its parent node isn't a textblock (in which
    case no marks should be preserved).
    */ marksAcross($end) {
        let after = this.parent.maybeChild(this.index());
        if (!after || !after.isInline) return null;
        let marks = after.marks, next = $end.parent.maybeChild($end.index());
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    The depth up to which this position and the given (non-resolved)
    position share the same parent nodes.
    */ sharedDepth(pos) {
        for(let depth = this.depth; depth > 0; depth--)if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
        return 0;
    }
    /**
    Returns a range based on the place where this position and the
    given position diverge around block content. If both point into
    the same textblock, for example, a range around that textblock
    will be returned. If they point into different blocks, the range
    around those blocks in their shared ancestor is returned. You can
    pass in an optional predicate that will be called with a parent
    node to see if a range into that parent is acceptable.
    */ blockRange(other = this, pred) {
        if (other.pos < this.pos) return other.blockRange(this);
        for(let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
        return null;
    }
    /**
    Query whether the given position shares the same parent node.
    */ sameParent(other) {
        return this.pos - this.parentOffset == other.pos - other.parentOffset;
    }
    /**
    Return the greater of this and the given position.
    */ max(other) {
        return other.pos > this.pos ? other : this;
    }
    /**
    Return the smaller of this and the given position.
    */ min(other) {
        return other.pos < this.pos ? other : this;
    }
    /**
    @internal
    */ toString() {
        let str = "";
        for(let i = 1; i <= this.depth; i++)str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
        return str + ":" + this.parentOffset;
    }
    /**
    @internal
    */ static resolve(doc, pos) {
        if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
        let path = [];
        let start = 0, parentOffset = pos;
        for(let node = doc;;){
            let { index, offset } = node.content.findIndex(parentOffset);
            let rem = parentOffset - offset;
            path.push(node, index, start + offset);
            if (!rem) break;
            node = node.child(index);
            if (node.isText) break;
            parentOffset = rem - 1;
            start += offset + 1;
        }
        return new ResolvedPos(pos, path, parentOffset);
    }
    /**
    @internal
    */ static resolveCached(doc, pos) {
        let cache = resolveCache.get(doc);
        if (cache) {
            for(let i = 0; i < cache.elts.length; i++){
                let elt = cache.elts[i];
                if (elt.pos == pos) return elt;
            }
        } else {
            resolveCache.set(doc, cache = new ResolveCache);
        }
        let result = cache.elts[cache.i] = ResolvedPos.resolve(doc, pos);
        cache.i = (cache.i + 1) % resolveCacheSize;
        return result;
    }
}
class ResolveCache {
    constructor(){
        this.elts = [];
        this.i = 0;
    }
}
const resolveCacheSize = 12, resolveCache = new WeakMap();
/**
Represents a flat range of content, i.e. one that starts and
ends in the same node.
*/ class NodeRange {
    /**
    Construct a node range. `$from` and `$to` should point into the
    same node until at least the given `depth`, since a node range
    denotes an adjacent set of nodes in a single parent node.
    */ constructor(/**
    A resolved position along the start of the content. May have a
    `depth` greater than this object's `depth` property, since
    these are the positions that were used to compute the range,
    not re-resolved positions directly at its boundaries.
    */ $from, /**
    A position along the end of the content. See
    caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
    */ $to, /**
    The depth of the node that this range points into.
    */ depth){
        this.$from = $from;
        this.$to = $to;
        this.depth = depth;
    }
    /**
    The position at the start of the range.
    */ get start() {
        return this.$from.before(this.depth + 1);
    }
    /**
    The position at the end of the range.
    */ get end() {
        return this.$to.after(this.depth + 1);
    }
    /**
    The parent node that the range points into.
    */ get parent() {
        return this.$from.node(this.depth);
    }
    /**
    The start index of the range in the parent node.
    */ get startIndex() {
        return this.$from.index(this.depth);
    }
    /**
    The end index of the range in the parent node.
    */ get endIndex() {
        return this.$to.indexAfter(this.depth);
    }
}
const emptyAttrs = Object.create(null);
/**
This class represents a node in the tree that makes up a
ProseMirror document. So a document is an instance of `Node`, with
children that are also instances of `Node`.

Nodes are persistent data structures. Instead of changing them, you
create new ones with the content you want. Old ones keep pointing
at the old document shape. This is made cheaper by sharing
structure between the old and new data as much as possible, which a
tree shape like this (without back pointers) makes easy.

**Do not** directly mutate the properties of a `Node` object. See
[the guide](https://prosemirror.net/docs/guide/#doc) for more information.
*/ class Node {
    /**
    @internal
    */ constructor(/**
    The type of node that this is.
    */ type, /**
    An object mapping attribute names to values. The kind of
    attributes allowed and required are
    [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
    */ attrs, // A fragment holding the node's children.
    content, /**
    The marks (things like whether it is emphasized or part of a
    link) applied to this node.
    */ marks = Mark.none){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.content = content || Fragment.empty;
    }
    /**
    The array of this node's child nodes.
    */ get children() {
        return this.content.content;
    }
    /**
    The size of this node, as defined by the integer-based [indexing
    scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
    amount of characters. For other leaf nodes, it is one. For
    non-leaf nodes, it is the size of the content plus two (the
    start and end token).
    */ get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }
    /**
    The number of children that the node has.
    */ get childCount() {
        return this.content.childCount;
    }
    /**
    Get the child node at the given index. Raises an error when the
    index is out of range.
    */ child(index) {
        return this.content.child(index);
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content.maybeChild(index);
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        this.content.forEach(f);
    }
    /**
    Invoke a callback for all descendant nodes recursively between
    the given two positions that are relative to start of this
    node's content. The callback is invoked with the node, its
    position relative to the original node (method receiver),
    its parent node, and its child index. When the callback returns
    false for a given node, that node's children will not be
    recursed over. The last parameter can be used to specify a
    starting position to count from.
    */ nodesBetween(from, to, f, startPos = 0) {
        this.content.nodesBetween(from, to, f, startPos, this);
    }
    /**
    Call the given callback for every descendant node. Doesn't
    descend into a node when the callback returns `false`.
    */ descendants(f) {
        this.nodesBetween(0, this.content.size, f);
    }
    /**
    Concatenates all the text nodes found in this fragment and its
    children.
    */ get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    /**
    Get all text between positions `from` and `to`. When
    `blockSeparator` is given, it will be inserted to separate text
    from different block nodes. If `leafText` is given, it'll be
    inserted for every non-text leaf node encountered, otherwise
    [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
    */ textBetween(from, to, blockSeparator, leafText) {
        return this.content.textBetween(from, to, blockSeparator, leafText);
    }
    /**
    Returns this node's first child, or `null` if there are no
    children.
    */ get firstChild() {
        return this.content.firstChild;
    }
    /**
    Returns this node's last child, or `null` if there are no
    children.
    */ get lastChild() {
        return this.content.lastChild;
    }
    /**
    Test whether two nodes represent the same piece of document.
    */ eq(other) {
        return this == other || this.sameMarkup(other) && this.content.eq(other.content);
    }
    /**
    Compare the markup (type, attributes, and marks) of this node to
    those of another. Returns `true` if both have the same markup.
    */ sameMarkup(other) {
        return this.hasMarkup(other.type, other.attrs, other.marks);
    }
    /**
    Check whether this node's markup correspond to the given type,
    attributes, and marks.
    */ hasMarkup(type, attrs, marks) {
        return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
    }
    /**
    Create a new node with the same markup as this node, containing
    the given content (or empty, if no content is given).
    */ copy(content = null) {
        if (content == this.content) return this;
        return new Node(this.type, this.attrs, content, this.marks);
    }
    /**
    Create a copy of this node, with the given set of marks instead
    of the node's own marks.
    */ mark(marks) {
        return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
    }
    /**
    Create a copy of this node with only the content between the
    given positions. If `to` is not given, it defaults to the end of
    the node.
    */ cut(from, to = this.content.size) {
        if (from == 0 && to == this.content.size) return this;
        return this.copy(this.content.cut(from, to));
    }
    /**
    Cut out the part of the document between the given positions, and
    return it as a `Slice` object.
    */ slice(from, to = this.content.size, includeParents = false) {
        if (from == to) return Slice.empty;
        let $from = this.resolve(from), $to = this.resolve(to);
        let depth = includeParents ? 0 : $from.sharedDepth(to);
        let start = $from.start(depth), node = $from.node(depth);
        let content = node.content.cut($from.pos - start, $to.pos - start);
        return new Slice(content, $from.depth - depth, $to.depth - depth);
    }
    /**
    Replace the part of the document between the given positions with
    the given slice. The slice must 'fit', meaning its open sides
    must be able to connect to the surrounding content, and its
    content nodes must be valid children for the node they are placed
    into. If any of this is violated, an error of type
    [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
    */ replace(from, to, slice) {
        return replace(this.resolve(from), this.resolve(to), slice);
    }
    /**
    Find the node directly after the given position.
    */ nodeAt(pos) {
        for(let node = this;;){
            let { index, offset } = node.content.findIndex(pos);
            node = node.maybeChild(index);
            if (!node) return null;
            if (offset == pos || node.isText) return node;
            pos -= offset + 1;
        }
    }
    /**
    Find the (direct) child node after the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childAfter(pos) {
        let { index, offset } = this.content.findIndex(pos);
        return {
            node: this.content.maybeChild(index),
            index,
            offset
        };
    }
    /**
    Find the (direct) child node before the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childBefore(pos) {
        if (pos == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index, offset } = this.content.findIndex(pos);
        if (offset < pos) return {
            node: this.content.child(index),
            index,
            offset
        };
        let node = this.content.child(index - 1);
        return {
            node,
            index: index - 1,
            offset: offset - node.nodeSize
        };
    }
    /**
    Resolve the given position in the document, returning an
    [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
    */ resolve(pos) {
        return ResolvedPos.resolveCached(this, pos);
    }
    /**
    @internal
    */ resolveNoCache(pos) {
        return ResolvedPos.resolve(this, pos);
    }
    /**
    Test whether a given mark or mark type occurs in this document
    between the two given positions.
    */ rangeHasMark(from, to, type) {
        let found = false;
        if (to > from) this.nodesBetween(from, to, (node)=>{
            if (type.isInSet(node.marks)) found = true;
            return !found;
        });
        return found;
    }
    /**
    True when this is a block (non-inline node)
    */ get isBlock() {
        return this.type.isBlock;
    }
    /**
    True when this is a textblock node, a block node with inline
    content.
    */ get isTextblock() {
        return this.type.isTextblock;
    }
    /**
    True when this node allows inline content.
    */ get inlineContent() {
        return this.type.inlineContent;
    }
    /**
    True when this is an inline node (a text node or a node that can
    appear among text).
    */ get isInline() {
        return this.type.isInline;
    }
    /**
    True when this is a text node.
    */ get isText() {
        return this.type.isText;
    }
    /**
    True when this is a leaf node.
    */ get isLeaf() {
        return this.type.isLeaf;
    }
    /**
    True when this is an atom, i.e. when it does not have directly
    editable content. This is usually the same as `isLeaf`, but can
    be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
    on a node's spec (typically used when the node is displayed as
    an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
    */ get isAtom() {
        return this.type.isAtom;
    }
    /**
    Return a string representation of this node for debugging
    purposes.
    */ toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let name = this.type.name;
        if (this.content.size) name += "(" + this.content.toStringInner() + ")";
        return wrapMarks(this.marks, name);
    }
    /**
    Get the content match in this node at the given index.
    */ contentMatchAt(index) {
        let match = this.type.contentMatch.matchFragment(this.content, 0, index);
        if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
        return match;
    }
    /**
    Test whether replacing the range between `from` and `to` (by
    child index) with the given replacement fragment (which defaults
    to the empty fragment) would leave the node's content valid. You
    can optionally pass `start` and `end` indices into the
    replacement fragment.
    */ canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
        let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
        let two = one && one.matchFragment(this.content, to);
        if (!two || !two.validEnd) return false;
        for(let i = start; i < end; i++)if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
        return true;
    }
    /**
    Test whether replacing the range `from` to `to` (by index) with
    a node of the given type would leave the node's content valid.
    */ canReplaceWith(from, to, type, marks) {
        if (marks && !this.type.allowsMarks(marks)) return false;
        let start = this.contentMatchAt(from).matchType(type);
        let end = start && start.matchFragment(this.content, to);
        return end ? end.validEnd : false;
    }
    /**
    Test whether the given node's content could be appended to this
    node. If that node is empty, this will only return true if there
    is at least one node type that can appear in both nodes (to avoid
    merging completely incompatible nodes).
    */ canAppend(other) {
        if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);
        else return this.type.compatibleContent(other.type);
    }
    /**
    Check whether this node and its descendants conform to the
    schema, and raise an exception when they do not.
    */ check() {
        this.type.checkContent(this.content);
        this.type.checkAttrs(this.attrs);
        let copy = Mark.none;
        for(let i = 0; i < this.marks.length; i++){
            let mark = this.marks[i];
            mark.type.checkAttrs(mark.attrs);
            copy = mark.addToSet(copy);
        }
        if (!Mark.sameSet(copy, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m)=>m.type.name)}`);
        this.content.forEach((node)=>node.check());
    }
    /**
    Return a JSON-serializeable representation of this node.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        if (this.content.size) obj.content = this.content.toJSON();
        if (this.marks.length) obj.marks = this.marks.map((n)=>n.toJSON());
        return obj;
    }
    /**
    Deserialize a node from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Node.fromJSON");
        let marks = undefined;
        if (json.marks) {
            if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            marks = json.marks.map(schema.markFromJSON);
        }
        if (json.type == "text") {
            if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
            return schema.text(json.text, marks);
        }
        let content = Fragment.fromJSON(schema, json.content);
        let node = schema.nodeType(json.type).create(json.attrs, content, marks);
        node.type.checkAttrs(node.attrs);
        return node;
    }
}
Node.prototype.text = undefined;
class TextNode extends Node {
    /**
    @internal
    */ constructor(type, attrs, content, marks){
        super(type, attrs, null, marks);
        if (!content) throw new RangeError("Empty text nodes are not allowed");
        this.text = content;
    }
    toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        return wrapMarks(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(from, to) {
        return this.text.slice(from, to);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(marks) {
        return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
    }
    withText(text) {
        if (text == this.text) return this;
        return new TextNode(this.type, this.attrs, text, this.marks);
    }
    cut(from = 0, to = this.text.length) {
        if (from == 0 && to == this.text.length) return this;
        return this.withText(this.text.slice(from, to));
    }
    eq(other) {
        return this.sameMarkup(other) && this.text == other.text;
    }
    toJSON() {
        let base = super.toJSON();
        base.text = this.text;
        return base;
    }
}
function wrapMarks(marks, str) {
    for(let i = marks.length - 1; i >= 0; i--)str = marks[i].type.name + "(" + str + ")";
    return str;
}
/**
Instances of this class represent a match state of a node type's
[content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
find out whether further content matches here, and whether a given
position is a valid end of the node.
*/ class ContentMatch {
    /**
    @internal
    */ constructor(/**
    True when this match state represents a valid end of the node.
    */ validEnd){
        this.validEnd = validEnd;
        /**
        @internal
        */ this.next = [];
        /**
        @internal
        */ this.wrapCache = [];
    }
    /**
    @internal
    */ static parse(string, nodeTypes) {
        let stream = new TokenStream(string, nodeTypes);
        if (stream.next == null) return ContentMatch.empty;
        let expr = parseExpr(stream);
        if (stream.next) stream.err("Unexpected trailing text");
        let match = dfa(nfa(expr));
        checkForDeadEnds(match, stream);
        return match;
    }
    /**
    Match a node type, returning a match after that node if
    successful.
    */ matchType(type) {
        for(let i = 0; i < this.next.length; i++)if (this.next[i].type == type) return this.next[i].next;
        return null;
    }
    /**
    Try to match a fragment. Returns the resulting match when
    successful.
    */ matchFragment(frag, start = 0, end = frag.childCount) {
        let cur = this;
        for(let i = start; cur && i < end; i++)cur = cur.matchType(frag.child(i).type);
        return cur;
    }
    /**
    @internal
    */ get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    /**
    Get the first matching node type at this match position that can
    be generated.
    */ get defaultType() {
        for(let i = 0; i < this.next.length; i++){
            let { type } = this.next[i];
            if (!(type.isText || type.hasRequiredAttrs())) return type;
        }
        return null;
    }
    /**
    @internal
    */ compatible(other) {
        for(let i = 0; i < this.next.length; i++)for(let j = 0; j < other.next.length; j++)if (this.next[i].type == other.next[j].type) return true;
        return false;
    }
    /**
    Try to match the given fragment, and if that fails, see if it can
    be made to match by inserting nodes in front of it. When
    successful, return a fragment of inserted nodes (which may be
    empty if nothing had to be inserted). When `toEnd` is true, only
    return a fragment if the resulting match goes to the end of the
    content expression.
    */ fillBefore(after, toEnd = false, startIndex = 0) {
        let seen = [
            this
        ];
        function search(match, types) {
            let finished = match.matchFragment(after, startIndex);
            if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map((tp)=>tp.createAndFill()));
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
                    seen.push(next);
                    let found = search(next, types.concat(type));
                    if (found) return found;
                }
            }
            return null;
        }
        return search(this, []);
    }
    /**
    Find a set of wrapping node types that would allow a node of the
    given type to appear at this position. The result may be empty
    (when it fits directly) and will be null when no such wrapping
    exists.
    */ findWrapping(target) {
        for(let i = 0; i < this.wrapCache.length; i += 2)if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
        let computed = this.computeWrapping(target);
        this.wrapCache.push(target, computed);
        return computed;
    }
    /**
    @internal
    */ computeWrapping(target) {
        let seen = Object.create(null), active = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        while(active.length){
            let current = active.shift(), match = current.match;
            if (match.matchType(target)) {
                let result = [];
                for(let obj = current; obj.type; obj = obj.via)result.push(obj.type);
                return result.reverse();
            }
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
                    active.push({
                        match: type.contentMatch,
                        type,
                        via: current
                    });
                    seen[type.name] = true;
                }
            }
        }
        return null;
    }
    /**
    The number of outgoing edges this node has in the finite
    automaton that describes the content expression.
    */ get edgeCount() {
        return this.next.length;
    }
    /**
    Get the _n_​th outgoing edge from this node in the finite
    automaton that describes the content expression.
    */ edge(n) {
        if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
        return this.next[n];
    }
    /**
    @internal
    */ toString() {
        let seen = [];
        function scan(m) {
            seen.push(m);
            for(let i = 0; i < m.next.length; i++)if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
        }
        scan(this);
        return seen.map((m, i)=>{
            let out = i + (m.validEnd ? "*" : " ") + " ";
            for(let i = 0; i < m.next.length; i++)out += (i ? ", " : "") + m.next[i].type.name + "->" + seen.indexOf(m.next[i].next);
            return out;
        }).join("\n");
    }
}
/**
@internal
*/ ContentMatch.empty = new ContentMatch(true);
class TokenStream {
    constructor(string, nodeTypes){
        this.string = string;
        this.nodeTypes = nodeTypes;
        this.inline = null;
        this.pos = 0;
        this.tokens = string.split(/\s*(?=\b|\W|$)/);
        if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
        if (this.tokens[0] == "") this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(tok) {
        return this.next == tok && (this.pos++ || true);
    }
    err(str) {
        throw new SyntaxError(str + " (in content expression '" + this.string + "')");
    }
}
function parseExpr(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSeq(stream));
    }while (stream.eat("|"))
    return exprs.length == 1 ? exprs[0] : {
        type: "choice",
        exprs
    };
}
function parseExprSeq(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSubscript(stream));
    }while (stream.next && stream.next != ")" && stream.next != "|")
    return exprs.length == 1 ? exprs[0] : {
        type: "seq",
        exprs
    };
}
function parseExprSubscript(stream) {
    let expr = parseExprAtom(stream);
    for(;;){
        if (stream.eat("+")) expr = {
            type: "plus",
            expr
        };
        else if (stream.eat("*")) expr = {
            type: "star",
            expr
        };
        else if (stream.eat("?")) expr = {
            type: "opt",
            expr
        };
        else if (stream.eat("{")) expr = parseExprRange(stream, expr);
        else break;
    }
    return expr;
}
function parseNum(stream) {
    if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
    let result = Number(stream.next);
    stream.pos++;
    return result;
}
function parseExprRange(stream, expr) {
    let min = parseNum(stream), max = min;
    if (stream.eat(",")) {
        if (stream.next != "}") max = parseNum(stream);
        else max = -1;
    }
    if (!stream.eat("}")) stream.err("Unclosed braced range");
    return {
        type: "range",
        min,
        max,
        expr
    };
}
function resolveName(stream, name) {
    let types = stream.nodeTypes, type = types[name];
    if (type) return [
        type
    ];
    let result = [];
    for(let typeName in types){
        let type = types[typeName];
        if (type.isInGroup(name)) result.push(type);
    }
    if (result.length == 0) stream.err("No node type or group '" + name + "' found");
    return result;
}
function parseExprAtom(stream) {
    if (stream.eat("(")) {
        let expr = parseExpr(stream);
        if (!stream.eat(")")) stream.err("Missing closing paren");
        return expr;
    } else if (!/\W/.test(stream.next)) {
        let exprs = resolveName(stream, stream.next).map((type)=>{
            if (stream.inline == null) stream.inline = type.isInline;
            else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
            return {
                type: "name",
                value: type
            };
        });
        stream.pos++;
        return exprs.length == 1 ? exprs[0] : {
            type: "choice",
            exprs
        };
    } else {
        stream.err("Unexpected token '" + stream.next + "'");
    }
}
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(expr) {
    let nfa = [
        []
    ];
    connect(compile(expr, 0), node());
    return nfa;
    //TURBOPACK unreachable
    ;
    function node() {
        return nfa.push([]) - 1;
    }
    function edge(from, to, term) {
        let edge = {
            term,
            to
        };
        nfa[from].push(edge);
        return edge;
    }
    function connect(edges, to) {
        edges.forEach((edge)=>edge.to = to);
    }
    function compile(expr, from) {
        if (expr.type == "choice") {
            return expr.exprs.reduce((out, expr)=>out.concat(compile(expr, from)), []);
        } else if (expr.type == "seq") {
            for(let i = 0;; i++){
                let next = compile(expr.exprs[i], from);
                if (i == expr.exprs.length - 1) return next;
                connect(next, from = node());
            }
        } else if (expr.type == "star") {
            let loop = node();
            edge(from, loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "plus") {
            let loop = node();
            connect(compile(expr.expr, from), loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "opt") {
            return [
                edge(from)
            ].concat(compile(expr.expr, from));
        } else if (expr.type == "range") {
            let cur = from;
            for(let i = 0; i < expr.min; i++){
                let next = node();
                connect(compile(expr.expr, cur), next);
                cur = next;
            }
            if (expr.max == -1) {
                connect(compile(expr.expr, cur), cur);
            } else {
                for(let i = expr.min; i < expr.max; i++){
                    let next = node();
                    edge(cur, next);
                    connect(compile(expr.expr, cur), next);
                    cur = next;
                }
            }
            return [
                edge(cur)
            ];
        } else if (expr.type == "name") {
            return [
                edge(from, undefined, expr.value)
            ];
        } else {
            throw new Error("Unknown expr type");
        }
    }
}
function cmp(a, b) {
    return b - a;
}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(nfa, node) {
    let result = [];
    scan(node);
    return result.sort(cmp);
    //TURBOPACK unreachable
    ;
    function scan(node) {
        let edges = nfa[node];
        if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
        result.push(node);
        for(let i = 0; i < edges.length; i++){
            let { term, to } = edges[i];
            if (!term && result.indexOf(to) == -1) scan(to);
        }
    }
}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
    let labeled = Object.create(null);
    return explore(nullFrom(nfa, 0));
    //TURBOPACK unreachable
    ;
    function explore(states) {
        let out = [];
        states.forEach((node)=>{
            nfa[node].forEach(({ term, to })=>{
                if (!term) return;
                let set;
                for(let i = 0; i < out.length; i++)if (out[i][0] == term) set = out[i][1];
                nullFrom(nfa, to).forEach((node)=>{
                    if (!set) out.push([
                        term,
                        set = []
                    ]);
                    if (set.indexOf(node) == -1) set.push(node);
                });
            });
        });
        let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
        for(let i = 0; i < out.length; i++){
            let states = out[i][1].sort(cmp);
            state.next.push({
                type: out[i][0],
                next: labeled[states.join(",")] || explore(states)
            });
        }
        return state;
    }
}
function checkForDeadEnds(match, stream) {
    for(let i = 0, work = [
        match
    ]; i < work.length; i++){
        let state = work[i], dead = !state.validEnd, nodes = [];
        for(let j = 0; j < state.next.length; j++){
            let { type, next } = state.next[j];
            nodes.push(type.name);
            if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
            if (work.indexOf(next) == -1) work.push(next);
        }
        if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
}
// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
    let defaults = Object.create(null);
    for(let attrName in attrs){
        let attr = attrs[attrName];
        if (!attr.hasDefault) return null;
        defaults[attrName] = attr.default;
    }
    return defaults;
}
function computeAttrs(attrs, value) {
    let built = Object.create(null);
    for(let name in attrs){
        let given = value && value[name];
        if (given === undefined) {
            let attr = attrs[name];
            if (attr.hasDefault) given = attr.default;
            else throw new RangeError("No value supplied for attribute " + name);
        }
        built[name] = given;
    }
    return built;
}
function checkAttrs(attrs, values, type, name) {
    for(let name in values)if (!(name in attrs)) throw new RangeError(`Unsupported attribute ${name} for ${type} of type ${name}`);
    for(let name in attrs){
        let attr = attrs[name];
        if (attr.validate) attr.validate(values[name]);
    }
}
function initAttrs(typeName, attrs) {
    let result = Object.create(null);
    if (attrs) for(let name in attrs)result[name] = new Attribute(typeName, name, attrs[name]);
    return result;
}
/**
Node types are objects allocated once per `Schema` and used to
[tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
about the node type, such as its name and what kind of node it
represents.
*/ class NodeType {
    /**
    @internal
    */ constructor(/**
    The name the node type has in this schema.
    */ name, /**
    A link back to the `Schema` the node type belongs to.
    */ schema, /**
    The spec that this type is based on
    */ spec){
        this.name = name;
        this.schema = schema;
        this.spec = spec;
        /**
        The set of marks allowed in this node. `null` means all marks
        are allowed.
        */ this.markSet = null;
        this.groups = spec.group ? spec.group.split(" ") : [];
        this.attrs = initAttrs(name, spec.attrs);
        this.defaultAttrs = defaultAttrs(this.attrs);
        this.contentMatch = null;
        this.inlineContent = null;
        this.isBlock = !(spec.inline || name == "text");
        this.isText = name == "text";
    }
    /**
    True if this is an inline type.
    */ get isInline() {
        return !this.isBlock;
    }
    /**
    True if this is a textblock type, a block that contains inline
    content.
    */ get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    /**
    True for node types that allow no content.
    */ get isLeaf() {
        return this.contentMatch == ContentMatch.empty;
    }
    /**
    True when this node is an atom, i.e. when it does not have
    directly editable content.
    */ get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    /**
    Return true when this node type is part of the given
    [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
    */ isInGroup(group) {
        return this.groups.indexOf(group) > -1;
    }
    /**
    The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
    */ get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    /**
    Tells you whether this node type has any required attributes.
    */ hasRequiredAttrs() {
        for(let n in this.attrs)if (this.attrs[n].isRequired) return true;
        return false;
    }
    /**
    Indicates whether this node allows some of the same content as
    the given node type.
    */ compatibleContent(other) {
        return this == other || this.contentMatch.compatible(other.contentMatch);
    }
    /**
    @internal
    */ computeAttrs(attrs) {
        if (!attrs && this.defaultAttrs) return this.defaultAttrs;
        else return computeAttrs(this.attrs, attrs);
    }
    /**
    Create a `Node` of this type. The given attributes are
    checked and defaulted (you can pass `null` to use the type's
    defaults entirely, if no required attributes exist). `content`
    may be a `Fragment`, a node, an array of nodes, or
    `null`. Similarly `marks` may be `null` to default to the empty
    set of marks.
    */ create(attrs = null, content, marks) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
    against the node type's content restrictions, and throw an error
    if it doesn't match.
    */ createChecked(attrs = null, content, marks) {
        content = Fragment.from(content);
        this.checkContent(content);
        return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
    necessary to add nodes to the start or end of the given fragment
    to make it fit the node. If no fitting wrapping can be found,
    return null. Note that, due to the fact that required nodes can
    always be created, this will always succeed if you pass null or
    `Fragment.empty` as content.
    */ createAndFill(attrs = null, content, marks) {
        attrs = this.computeAttrs(attrs);
        content = Fragment.from(content);
        if (content.size) {
            let before = this.contentMatch.fillBefore(content);
            if (!before) return null;
            content = before.append(content);
        }
        let matched = this.contentMatch.matchFragment(content);
        let after = matched && matched.fillBefore(Fragment.empty, true);
        if (!after) return null;
        return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
    }
    /**
    Returns true if the given fragment is valid content for this node
    type.
    */ validContent(content) {
        let result = this.contentMatch.matchFragment(content);
        if (!result || !result.validEnd) return false;
        for(let i = 0; i < content.childCount; i++)if (!this.allowsMarks(content.child(i).marks)) return false;
        return true;
    }
    /**
    Throws a RangeError if the given fragment is not valid content for this
    node type.
    @internal
    */ checkContent(content) {
        if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "node", this.name);
    }
    /**
    Check whether the given mark type is allowed in this node.
    */ allowsMarkType(markType) {
        return this.markSet == null || this.markSet.indexOf(markType) > -1;
    }
    /**
    Test whether the given set of marks are allowed in this node.
    */ allowsMarks(marks) {
        if (this.markSet == null) return true;
        for(let i = 0; i < marks.length; i++)if (!this.allowsMarkType(marks[i].type)) return false;
        return true;
    }
    /**
    Removes the marks that are not allowed in this node from the given set.
    */ allowedMarks(marks) {
        if (this.markSet == null) return marks;
        let copy;
        for(let i = 0; i < marks.length; i++){
            if (!this.allowsMarkType(marks[i].type)) {
                if (!copy) copy = marks.slice(0, i);
            } else if (copy) {
                copy.push(marks[i]);
            }
        }
        return !copy ? marks : copy.length ? copy : Mark.none;
    }
    /**
    @internal
    */ static compile(nodes, schema) {
        let result = Object.create(null);
        nodes.forEach((name, spec)=>result[name] = new NodeType(name, schema, spec));
        let topType = schema.spec.topNode || "doc";
        if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
        if (!result.text) throw new RangeError("Every schema needs a 'text' type");
        for(let _ in result.text.attrs)throw new RangeError("The text node type should not have attributes");
        return result;
    }
}
function validateType(typeName, attrName, type) {
    let types = type.split("|");
    return (value)=>{
        let name = value === null ? "null" : typeof value;
        if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
    };
}
// Attribute descriptors
class Attribute {
    constructor(typeName, attrName, options){
        this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
        this.default = options.default;
        this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}
// Marks
/**
Like nodes, marks (which are associated with nodes to signify
things like emphasis or being part of a link) are
[tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
instantiated once per `Schema`.
*/ class MarkType {
    /**
    @internal
    */ constructor(/**
    The name of the mark type.
    */ name, /**
    @internal
    */ rank, /**
    The schema that this mark type instance is part of.
    */ schema, /**
    The spec on which the type is based.
    */ spec){
        this.name = name;
        this.rank = rank;
        this.schema = schema;
        this.spec = spec;
        this.attrs = initAttrs(name, spec.attrs);
        this.excluded = null;
        let defaults = defaultAttrs(this.attrs);
        this.instance = defaults ? new Mark(this, defaults) : null;
    }
    /**
    Create a mark of this type. `attrs` may be `null` or an object
    containing only some of the mark's attributes. The others, if
    they have defaults, will be added.
    */ create(attrs = null) {
        if (!attrs && this.instance) return this.instance;
        return new Mark(this, computeAttrs(this.attrs, attrs));
    }
    /**
    @internal
    */ static compile(marks, schema) {
        let result = Object.create(null), rank = 0;
        marks.forEach((name, spec)=>result[name] = new MarkType(name, rank++, schema, spec));
        return result;
    }
    /**
    When there is a mark of this type in the given set, a new set
    without it is returned. Otherwise, the input set is returned.
    */ removeFromSet(set) {
        for(var i = 0; i < set.length; i++)if (set[i].type == this) {
            set = set.slice(0, i).concat(set.slice(i + 1));
            i--;
        }
        return set;
    }
    /**
    Tests whether there is a mark of this type in the given set.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (set[i].type == this) return set[i];
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "mark", this.name);
    }
    /**
    Queries whether a given mark type is
    [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
    */ excludes(other) {
        return this.excluded.indexOf(other) > -1;
    }
}
/**
A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
occur in conforming documents, and provides functionality for
creating and deserializing such documents.

When given, the type parameters provide the names of the nodes and
marks in this schema.
*/ class Schema {
    /**
    Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
    */ constructor(spec){
        /**
        The [linebreak
        replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
        in this schema, if any.
        */ this.linebreakReplacement = null;
        /**
        An object for storing whatever values modules may want to
        compute and cache per schema. (If you want to store something
        in it, try to use property names unlikely to clash.)
        */ this.cached = Object.create(null);
        let instanceSpec = this.spec = {};
        for(let prop in spec)instanceSpec[prop] = spec[prop];
        instanceSpec.nodes = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].from(spec.nodes), instanceSpec.marks = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
        this.marks = MarkType.compile(this.spec.marks, this);
        let contentExprCache = Object.create(null);
        for(let prop in this.nodes){
            if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
            let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
            type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
            type.inlineContent = type.contentMatch.inlineContent;
            if (type.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = type;
            }
            type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
        }
        for(let prop in this.marks){
            let type = this.marks[prop], excl = type.spec.excludes;
            type.excluded = excl == null ? [
                type
            ] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
        }
        this.nodeFromJSON = (json)=>Node.fromJSON(this, json);
        this.markFromJSON = (json)=>Mark.fromJSON(this, json);
        this.topNodeType = this.nodes[this.spec.topNode || "doc"];
        this.cached.wrappings = Object.create(null);
    }
    /**
    Create a node in this schema. The `type` may be a string or a
    `NodeType` instance. Attributes will be extended with defaults,
    `content` may be a `Fragment`, `null`, a `Node`, or an array of
    nodes.
    */ node(type, attrs = null, content, marks) {
        if (typeof type == "string") type = this.nodeType(type);
        else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);
        else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
        return type.createChecked(attrs, content, marks);
    }
    /**
    Create a text node in the schema. Empty text nodes are not
    allowed.
    */ text(text, marks) {
        let type = this.nodes.text;
        return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
    }
    /**
    Create a mark with the given type and attributes.
    */ mark(type, attrs) {
        if (typeof type == "string") type = this.marks[type];
        return type.create(attrs);
    }
    /**
    @internal
    */ nodeType(name) {
        let found = this.nodes[name];
        if (!found) throw new RangeError("Unknown node type: " + name);
        return found;
    }
}
function gatherMarks(schema, marks) {
    let found = [];
    for(let i = 0; i < marks.length; i++){
        let name = marks[i], mark = schema.marks[name], ok = mark;
        if (mark) {
            found.push(mark);
        } else {
            for(let prop in schema.marks){
                let mark = schema.marks[prop];
                if (name == "_" || mark.spec.group && mark.spec.group.split(" ").indexOf(name) > -1) found.push(ok = mark);
            }
        }
        if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
    }
    return found;
}
function isTagRule(rule) {
    return rule.tag != null;
}
function isStyleRule(rule) {
    return rule.style != null;
}
/**
A DOM parser represents a strategy for parsing DOM content into a
ProseMirror document conforming to a given schema. Its behavior is
defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
*/ class DOMParser {
    /**
    Create a parser that targets the given schema, using the given
    parsing rules.
    */ constructor(/**
    The schema into which the parser parses.
    */ schema, /**
    The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
    uses, in order of precedence.
    */ rules){
        this.schema = schema;
        this.rules = rules;
        /**
        @internal
        */ this.tags = [];
        /**
        @internal
        */ this.styles = [];
        let matchedStyles = this.matchedStyles = [];
        rules.forEach((rule)=>{
            if (isTagRule(rule)) {
                this.tags.push(rule);
            } else if (isStyleRule(rule)) {
                let prop = /[^=]*/.exec(rule.style)[0];
                if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
                this.styles.push(rule);
            }
        });
        // Only normalize list elements when lists in the schema can't directly contain themselves
        this.normalizeLists = !this.tags.some((r)=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
            let node = schema.nodes[r.node];
            return node.contentMatch.matchType(node);
        });
    }
    /**
    Parse a document from the content of a DOM node.
    */ parse(dom, options = {}) {
        let context = new ParseContext(this, options, false);
        context.addAll(dom, Mark.none, options.from, options.to);
        return context.finish();
    }
    /**
    Parses the content of the given DOM node, like
    [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
    options. But unlike that method, which produces a whole node,
    this one returns a slice that is open at the sides, meaning that
    the schema constraints aren't applied to the start of nodes to
    the left of the input and the end of nodes at the end.
    */ parseSlice(dom, options = {}) {
        let context = new ParseContext(this, options, true);
        context.addAll(dom, Mark.none, options.from, options.to);
        return Slice.maxOpen(context.finish());
    }
    /**
    @internal
    */ matchTag(dom, context, after) {
        for(let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++){
            let rule = this.tags[i];
            if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
                if (rule.getAttrs) {
                    let result = rule.getAttrs(dom);
                    if (result === false) continue;
                    rule.attrs = result || undefined;
                }
                return rule;
            }
        }
    }
    /**
    @internal
    */ matchStyle(prop, value, context, after) {
        for(let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++){
            let rule = this.styles[i], style = rule.style;
            if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
            // or has an '=' sign after the prop, followed by the given
            // value.
            style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
            if (rule.getAttrs) {
                let result = rule.getAttrs(value);
                if (result === false) continue;
                rule.attrs = result || undefined;
            }
            return rule;
        }
    }
    /**
    @internal
    */ static schemaRules(schema) {
        let result = [];
        function insert(rule) {
            let priority = rule.priority == null ? 50 : rule.priority, i = 0;
            for(; i < result.length; i++){
                let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
                if (nextPriority < priority) break;
            }
            result.splice(i, 0, rule);
        }
        for(let name in schema.marks){
            let rules = schema.marks[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
            });
        }
        for(let name in schema.nodes){
            let rules = schema.nodes[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
            });
        }
        return result;
    }
    /**
    Construct a DOM parser using the parsing rules listed in a
    schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
    [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
    */ static fromSchema(schema) {
        return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
    }
}
const blockTags = {
    address: true,
    article: true,
    aside: true,
    blockquote: true,
    canvas: true,
    dd: true,
    div: true,
    dl: true,
    fieldset: true,
    figcaption: true,
    figure: true,
    footer: true,
    form: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    header: true,
    hgroup: true,
    hr: true,
    li: true,
    noscript: true,
    ol: true,
    output: true,
    p: true,
    pre: true,
    section: true,
    table: true,
    tfoot: true,
    ul: true
};
const ignoreTags = {
    head: true,
    noscript: true,
    object: true,
    script: true,
    style: true,
    title: true
};
const listTags = {
    ol: true,
    ul: true
};
// Using a bitfield for node context options
const OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
    if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
    return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
class NodeContext {
    constructor(type, attrs, marks, solid, match, options){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.solid = solid;
        this.options = options;
        this.content = [];
        // Marks applied to the node's children
        this.activeMarks = Mark.none;
        this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
    }
    findWrapping(node) {
        if (!this.match) {
            if (!this.type) return [];
            let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
            if (fill) {
                this.match = this.type.contentMatch.matchFragment(fill);
            } else {
                let start = this.type.contentMatch, wrap;
                if (wrap = start.findWrapping(node.type)) {
                    this.match = start;
                    return wrap;
                } else {
                    return null;
                }
            }
        }
        return this.match.findWrapping(node.type);
    }
    finish(openEnd) {
        if (!(this.options & OPT_PRESERVE_WS)) {
            let last = this.content[this.content.length - 1], m;
            if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
                let text = last;
                if (last.text.length == m[0].length) this.content.pop();
                else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
            }
        }
        let content = Fragment.from(this.content);
        if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
        return this.type ? this.type.create(this.attrs, content, this.marks) : content;
    }
    inlineContext(node) {
        if (this.type) return this.type.inlineContent;
        if (this.content.length) return this.content[0].isInline;
        return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
    }
}
class ParseContext {
    constructor(// The parser we are using.
    parser, // The options passed to this parse.
    options, isOpen){
        this.parser = parser;
        this.options = options;
        this.isOpen = isOpen;
        this.open = 0;
        this.localPreserveWS = false;
        let topNode = options.topNode, topContext;
        let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
        if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
        else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
        else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
        this.nodes = [
            topContext
        ];
        this.find = options.findPositions;
        this.needsBlock = false;
    }
    get top() {
        return this.nodes[this.open];
    }
    // Add a DOM node to the content. Text is inserted as text node,
    // otherwise, the node is passed to `addElement` or, if it has a
    // `style` attribute, `addElementWithStyles`.
    addDOM(dom, marks) {
        if (dom.nodeType == 3) this.addTextNode(dom, marks);
        else if (dom.nodeType == 1) this.addElement(dom, marks);
    }
    addTextNode(dom, marks) {
        let value = dom.nodeValue;
        let top = this.top, preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
        let { schema } = this.parser;
        if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
            if (!preserveWS) {
                value = value.replace(/[ \t\r\n\u000c]+/g, " ");
                // If this starts with whitespace, and there is no node before it, or
                // a hard break, or a text node that ends with whitespace, strip the
                // leading space.
                if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
                    let nodeBefore = top.content[top.content.length - 1];
                    let domNodeBefore = dom.previousSibling;
                    if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
                }
            } else if (preserveWS === "full") {
                value = value.replace(/\r\n?/g, "\n");
            } else if (schema.linebreakReplacement && /[\r\n]/.test(value) && this.top.findWrapping(schema.linebreakReplacement.create())) {
                let lines = value.split(/\r?\n|\r/);
                for(let i = 0; i < lines.length; i++){
                    if (i) this.insertNode(schema.linebreakReplacement.create(), marks, true);
                    if (lines[i]) this.insertNode(schema.text(lines[i]), marks, !/\S/.test(lines[i]));
                }
                value = "";
            } else {
                value = value.replace(/\r?\n|\r/g, " ");
            }
            if (value) this.insertNode(schema.text(value), marks, !/\S/.test(value));
            this.findInText(dom);
        } else {
            this.findInside(dom);
        }
    }
    // Try to find a handler for the given tag and use that to parse. If
    // none is found, the element's content nodes are added directly.
    addElement(dom, marks, matchAfter) {
        let outerWS = this.localPreserveWS, top = this.top;
        if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
        let name = dom.nodeName.toLowerCase(), ruleID;
        if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
        let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
        out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
            this.findInside(dom);
            this.ignoreFallback(dom, marks);
        } else if (!rule || rule.skip || rule.closeParent) {
            if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);
            else if (rule && rule.skip.nodeType) dom = rule.skip;
            let sync, oldNeedsBlock = this.needsBlock;
            if (blockTags.hasOwnProperty(name)) {
                if (top.content.length && top.content[0].isInline && this.open) {
                    this.open--;
                    top = this.top;
                }
                sync = true;
                if (!top.type) this.needsBlock = true;
            } else if (!dom.firstChild) {
                this.leafFallback(dom, marks);
                break out;
            }
            let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
            if (innerMarks) this.addAll(dom, innerMarks);
            if (sync) this.sync(top);
            this.needsBlock = oldNeedsBlock;
        } else {
            let innerMarks = this.readStyles(dom, marks);
            if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : undefined);
        }
        this.localPreserveWS = outerWS;
    }
    // Called for leaf DOM nodes that would otherwise be ignored
    leafFallback(dom, marks) {
        if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
    }
    // Called for ignored nodes
    ignoreFallback(dom, marks) {
        // Ignored BR nodes should at least create an inline context
        if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks, true);
    }
    // Run any style parser associated with the node's styles. Either
    // return an updated array of marks, or null to indicate some of the
    // styles had a rule with `ignore` set.
    readStyles(dom, marks) {
        let styles = dom.style;
        // Because many properties will only show up in 'normalized' form
        // in `style.item` (i.e. text-decoration becomes
        // text-decoration-line, text-decoration-color, etc), we directly
        // query the styles mentioned in our rules instead of iterating
        // over the items.
        if (styles && styles.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let name = this.parser.matchedStyles[i], value = styles.getPropertyValue(name);
            if (value) for(let after = undefined;;){
                let rule = this.parser.matchStyle(name, value, this, after);
                if (!rule) break;
                if (rule.ignore) return null;
                if (rule.clearMark) marks = marks.filter((m)=>!rule.clearMark(m));
                else marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
                if (rule.consuming === false) after = rule;
                else break;
            }
        }
        return marks;
    }
    // Look up a handler for the given node. If none are found, return
    // false. Otherwise, apply it, use its return value to drive the way
    // the node's content is wrapped, and return true.
    addElementByRule(dom, rule, marks, continueAfter) {
        let sync, nodeType;
        if (rule.node) {
            nodeType = this.parser.schema.nodes[rule.node];
            if (!nodeType.isLeaf) {
                let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
                if (inner) {
                    sync = true;
                    marks = inner;
                }
            } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
                this.leafFallback(dom, marks);
            }
        } else {
            let markType = this.parser.schema.marks[rule.mark];
            marks = marks.concat(markType.create(rule.attrs));
        }
        let startIn = this.top;
        if (nodeType && nodeType.isLeaf) {
            this.findInside(dom);
        } else if (continueAfter) {
            this.addElement(dom, marks, continueAfter);
        } else if (rule.getContent) {
            this.findInside(dom);
            rule.getContent(dom, this.parser.schema).forEach((node)=>this.insertNode(node, marks, false));
        } else {
            let contentDOM = dom;
            if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);
            else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);
            else if (rule.contentElement) contentDOM = rule.contentElement;
            this.findAround(dom, contentDOM, true);
            this.addAll(contentDOM, marks);
            this.findAround(dom, contentDOM, false);
        }
        if (sync && this.sync(startIn)) this.open--;
    }
    // Add all child nodes between `startIndex` and `endIndex` (or the
    // whole node, if not given). If `sync` is passed, use it to
    // synchronize after every block element.
    addAll(parent, marks, startIndex, endIndex) {
        let index = startIndex || 0;
        for(let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index){
            this.findAtPoint(parent, index);
            this.addDOM(dom, marks);
        }
        this.findAtPoint(parent, index);
    }
    // Try to find a way to fit the given node type into the current
    // context. May add intermediate wrappers and/or leave non-solid
    // nodes that we're in.
    findPlace(node, marks, cautious) {
        let route, sync;
        for(let depth = this.open, penalty = 0; depth >= 0; depth--){
            let cx = this.nodes[depth];
            let found = cx.findWrapping(node);
            if (found && (!route || route.length > found.length + penalty)) {
                route = found;
                sync = cx;
                if (!found.length) break;
            }
            if (cx.solid) {
                if (cautious) break;
                penalty += 2;
            }
        }
        if (!route) return null;
        this.sync(sync);
        for(let i = 0; i < route.length; i++)marks = this.enterInner(route[i], null, marks, false);
        return marks;
    }
    // Try to insert the given node, adjusting the context when needed.
    insertNode(node, marks, cautious) {
        if (node.isInline && this.needsBlock && !this.top.type) {
            let block = this.textblockFromContext();
            if (block) marks = this.enterInner(block, null, marks);
        }
        let innerMarks = this.findPlace(node, marks, cautious);
        if (innerMarks) {
            this.closeExtra();
            let top = this.top;
            if (top.match) top.match = top.match.matchType(node.type);
            let nodeMarks = Mark.none;
            for (let m of innerMarks.concat(node.marks))if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
            top.content.push(node.mark(nodeMarks));
            return true;
        }
        return false;
    }
    // Try to start a node of the given type, adjusting the context when
    // necessary.
    enter(type, attrs, marks, preserveWS) {
        let innerMarks = this.findPlace(type.create(attrs), marks, false);
        if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
        return innerMarks;
    }
    // Open a node of the given type
    enterInner(type, attrs, marks, solid = false, preserveWS) {
        this.closeExtra();
        let top = this.top;
        top.match = top.match && top.match.matchType(type);
        let options = wsOptionsFor(type, preserveWS, top.options);
        if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
        let applyMarks = Mark.none;
        marks = marks.filter((m)=>{
            if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
                applyMarks = m.addToSet(applyMarks);
                return false;
            }
            return true;
        });
        this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
        this.open++;
        return marks;
    }
    // Make sure all nodes above this.open are finished and added to
    // their parents
    closeExtra(openEnd = false) {
        let i = this.nodes.length - 1;
        if (i > this.open) {
            for(; i > this.open; i--)this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        this.open = 0;
        this.closeExtra(this.isOpen);
        return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(to) {
        for(let i = this.open; i >= 0; i--){
            if (this.nodes[i] == to) {
                this.open = i;
                return true;
            } else if (this.localPreserveWS) {
                this.nodes[i].options |= OPT_PRESERVE_WS;
            }
        }
        return false;
    }
    get currentPos() {
        this.closeExtra();
        let pos = 0;
        for(let i = this.open; i >= 0; i--){
            let content = this.nodes[i].content;
            for(let j = content.length - 1; j >= 0; j--)pos += content[j].nodeSize;
            if (i) pos++;
        }
        return pos;
    }
    findAtPoint(parent, offset) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
        }
    }
    findInside(parent) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
        }
    }
    findAround(parent, content, before) {
        if (parent != content && this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
                let pos = content.compareDocumentPosition(this.find[i].node);
                if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
            }
        }
    }
    findInText(textNode) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
        }
    }
    // Determines whether the given context string matches this context.
    matchesContext(context) {
        if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
        let parts = context.split("/");
        let option = this.options.context;
        let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
        let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
        let match = (i, depth)=>{
            for(; i >= 0; i--){
                let part = parts[i];
                if (part == "") {
                    if (i == parts.length - 1 || i == 0) continue;
                    for(; depth >= minDepth; depth--)if (match(i - 1, depth)) return true;
                    return false;
                } else {
                    let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
                    if (!next || next.name != part && !next.isInGroup(part)) return false;
                    depth--;
                }
            }
            return true;
        };
        return match(parts.length - 1, this.open);
    }
    textblockFromContext() {
        let $context = this.options.context;
        if ($context) for(let d = $context.depth; d >= 0; d--){
            let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
            if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
        }
        for(let name in this.parser.schema.nodes){
            let type = this.parser.schema.nodes[name];
            if (type.isTextblock && type.defaultAttrs) return type;
        }
    }
}
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
    for(let child = dom.firstChild, prevItem = null; child; child = child.nextSibling){
        let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
        if (name && listTags.hasOwnProperty(name) && prevItem) {
            prevItem.appendChild(child);
            child = prevItem;
        } else if (name == "li") {
            prevItem = child;
        } else if (name) {
            prevItem = null;
        }
    }
}
// Apply a CSS selector.
function matches(dom, selector) {
    return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
    let copy = {};
    for(let prop in obj)copy[prop] = obj[prop];
    return copy;
}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function markMayApply(markType, nodeType) {
    let nodes = nodeType.schema.nodes;
    for(let name in nodes){
        let parent = nodes[name];
        if (!parent.allowsMarkType(markType)) continue;
        let seen = [], scan = (match)=>{
            seen.push(match);
            for(let i = 0; i < match.edgeCount; i++){
                let { type, next } = match.edge(i);
                if (type == nodeType) return true;
                if (seen.indexOf(next) < 0 && scan(next)) return true;
            }
        };
        if (scan(parent.contentMatch)) return true;
    }
}
/**
A DOM serializer knows how to convert ProseMirror nodes and
marks of various types to DOM nodes.
*/ class DOMSerializer {
    /**
    Create a serializer. `nodes` should map node names to functions
    that take a node and return a description of the corresponding
    DOM. `marks` does the same for mark names, but also gets an
    argument that tells it whether the mark's content is block or
    inline content (for typical use, it'll always be inline). A mark
    serializer may be `null` to indicate that marks of that type
    should not be serialized.
    */ constructor(/**
    The node serialization functions.
    */ nodes, /**
    The mark serialization functions.
    */ marks){
        this.nodes = nodes;
        this.marks = marks;
    }
    /**
    Serialize the content of this fragment to a DOM fragment. When
    not in the browser, the `document` option, containing a DOM
    document, should be passed so that the serializer can create
    nodes.
    */ serializeFragment(fragment, options = {}, target) {
        if (!target) target = doc(options).createDocumentFragment();
        let top = target, active = [];
        fragment.forEach((node)=>{
            if (active.length || node.marks.length) {
                let keep = 0, rendered = 0;
                while(keep < active.length && rendered < node.marks.length){
                    let next = node.marks[rendered];
                    if (!this.marks[next.type.name]) {
                        rendered++;
                        continue;
                    }
                    if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
                    keep++;
                    rendered++;
                }
                while(keep < active.length)top = active.pop()[1];
                while(rendered < node.marks.length){
                    let add = node.marks[rendered++];
                    let markDOM = this.serializeMark(add, node.isInline, options);
                    if (markDOM) {
                        active.push([
                            add,
                            top
                        ]);
                        top.appendChild(markDOM.dom);
                        top = markDOM.contentDOM || markDOM.dom;
                    }
                }
            }
            top.appendChild(this.serializeNodeInner(node, options));
        });
        return target;
    }
    /**
    @internal
    */ serializeNodeInner(node, options) {
        let { dom, contentDOM } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
        if (contentDOM) {
            if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(node.content, options, contentDOM);
        }
        return dom;
    }
    /**
    Serialize this node to a DOM node. This can be useful when you
    need to serialize a part of a document, as opposed to the whole
    document. To serialize a whole document, use
    [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
    its [content](https://prosemirror.net/docs/ref/#model.Node.content).
    */ serializeNode(node, options = {}) {
        let dom = this.serializeNodeInner(node, options);
        for(let i = node.marks.length - 1; i >= 0; i--){
            let wrap = this.serializeMark(node.marks[i], node.isInline, options);
            if (wrap) {
                (wrap.contentDOM || wrap.dom).appendChild(dom);
                dom = wrap.dom;
            }
        }
        return dom;
    }
    /**
    @internal
    */ serializeMark(mark, inline, options = {}) {
        let toDOM = this.marks[mark.type.name];
        return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
    }
    static renderSpec(doc, structure, xmlNS = null, blockArraysIn) {
        return renderSpec(doc, structure, xmlNS, blockArraysIn);
    }
    /**
    Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
    properties in a schema's node and mark specs.
    */ static fromSchema(schema) {
        return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
    }
    /**
    Gather the serializers in a schema's node specs into an object.
    This can be useful as a base to build a custom serializer from.
    */ static nodesFromSchema(schema) {
        let result = gatherToDOM(schema.nodes);
        if (!result.text) result.text = (node)=>node.text;
        return result;
    }
    /**
    Gather the serializers in a schema's mark specs into an object.
    */ static marksFromSchema(schema) {
        return gatherToDOM(schema.marks);
    }
}
function gatherToDOM(obj) {
    let result = {};
    for(let name in obj){
        let toDOM = obj[name].spec.toDOM;
        if (toDOM) result[name] = toDOM;
    }
    return result;
}
function doc(options) {
    return options.document || window.document;
}
const suspiciousAttributeCache = new WeakMap();
function suspiciousAttributes(attrs) {
    let value = suspiciousAttributeCache.get(attrs);
    if (value === undefined) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
    return value;
}
function suspiciousAttributesInner(attrs) {
    let result = null;
    function scan(value) {
        if (value && typeof value == "object") {
            if (Array.isArray(value)) {
                if (typeof value[0] == "string") {
                    if (!result) result = [];
                    result.push(value);
                } else {
                    for(let i = 0; i < value.length; i++)scan(value[i]);
                }
            } else {
                for(let prop in value)scan(value[prop]);
            }
        }
    }
    scan(attrs);
    return result;
}
function renderSpec(doc, structure, xmlNS, blockArraysIn) {
    if (typeof structure == "string") return {
        dom: doc.createTextNode(structure)
    };
    if (structure.nodeType != null) return {
        dom: structure
    };
    if (structure.dom && structure.dom.nodeType != null) return structure;
    let tagName = structure[0], suspicious;
    if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let space = tagName.indexOf(" ");
    if (space > 0) {
        xmlNS = tagName.slice(0, space);
        tagName = tagName.slice(space + 1);
    }
    let contentDOM;
    let dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
    let attrs = structure[1], start = 1;
    if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
        start = 2;
        for(let name in attrs)if (attrs[name] != null) {
            let space = name.indexOf(" ");
            if (space > 0) dom.setAttributeNS(name.slice(0, space), name.slice(space + 1), attrs[name]);
            else if (name == "style" && dom.style) dom.style.cssText = attrs[name];
            else dom.setAttribute(name, attrs[name]);
        }
    }
    for(let i = start; i < structure.length; i++){
        let child = structure[i];
        if (child === 0) {
            if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom,
                contentDOM: dom
            };
        } else {
            let { dom: inner, contentDOM: innerContent } = renderSpec(doc, child, xmlNS, blockArraysIn);
            dom.appendChild(inner);
            if (innerContent) {
                if (contentDOM) throw new RangeError("Multiple content holes");
                contentDOM = innerContent;
            }
        }
    }
    return {
        dom,
        contentDOM
    };
}
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-transform/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddMarkStep",
    ()=>AddMarkStep,
    "AddNodeMarkStep",
    ()=>AddNodeMarkStep,
    "AttrStep",
    ()=>AttrStep,
    "DocAttrStep",
    ()=>DocAttrStep,
    "MapResult",
    ()=>MapResult,
    "Mapping",
    ()=>Mapping,
    "RemoveMarkStep",
    ()=>RemoveMarkStep,
    "RemoveNodeMarkStep",
    ()=>RemoveNodeMarkStep,
    "ReplaceAroundStep",
    ()=>ReplaceAroundStep,
    "ReplaceStep",
    ()=>ReplaceStep,
    "Step",
    ()=>Step,
    "StepMap",
    ()=>StepMap,
    "StepResult",
    ()=>StepResult,
    "Transform",
    ()=>Transform,
    "TransformError",
    ()=>TransformError,
    "canJoin",
    ()=>canJoin,
    "canSplit",
    ()=>canSplit,
    "dropPoint",
    ()=>dropPoint,
    "findWrapping",
    ()=>findWrapping,
    "insertPoint",
    ()=>insertPoint,
    "joinPoint",
    ()=>joinPoint,
    "liftTarget",
    ()=>liftTarget,
    "replaceStep",
    ()=>replaceStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
;
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
const lower16 = 0xffff;
const factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
    return index + offset * factor16;
}
function recoverIndex(value) {
    return value & lower16;
}
function recoverOffset(value) {
    return (value - (value & lower16)) / factor16;
}
const DEL_BEFORE = 1, DEL_AFTER = 2, DEL_ACROSS = 4, DEL_SIDE = 8;
/**
An object representing a mapped position with extra
information.
*/ class MapResult {
    /**
    @internal
    */ constructor(/**
    The mapped version of the position.
    */ pos, /**
    @internal
    */ delInfo, /**
    @internal
    */ recover){
        this.pos = pos;
        this.delInfo = delInfo;
        this.recover = recover;
    }
    /**
    Tells you whether the position was deleted, that is, whether the
    step removed the token on the side queried (via the `assoc`)
    argument from the document.
    */ get deleted() {
        return (this.delInfo & DEL_SIDE) > 0;
    }
    /**
    Tells you whether the token before the mapped position was deleted.
    */ get deletedBefore() {
        return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
    }
    /**
    True when the token after the mapped position was deleted.
    */ get deletedAfter() {
        return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
    }
    /**
    Tells whether any of the steps mapped through deletes across the
    position (including both the token before and after the
    position).
    */ get deletedAcross() {
        return (this.delInfo & DEL_ACROSS) > 0;
    }
}
/**
A map describing the deletions and insertions made by a step, which
can be used to find the correspondence between positions in the
pre-step version of a document and the same position in the
post-step version.
*/ class StepMap {
    /**
    Create a position map. The modifications to the document are
    represented as an array of numbers, in which each group of three
    represents a modified chunk as `[start, oldSize, newSize]`.
    */ constructor(/**
    @internal
    */ ranges, /**
    @internal
    */ inverted = false){
        this.ranges = ranges;
        this.inverted = inverted;
        if (!ranges.length && StepMap.empty) return StepMap.empty;
    }
    /**
    @internal
    */ recover(value) {
        let diff = 0, index = recoverIndex(value);
        if (!this.inverted) for(let i = 0; i < index; i++)diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
        return this.ranges[index * 3] + diff + recoverOffset(value);
    }
    mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    map(pos, assoc = 1) {
        return this._map(pos, assoc, true);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
            if (pos <= end) {
                let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
                let result = start + diff + (side < 0 ? 0 : newSize);
                if (simple) return result;
                let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
                let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
                if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
                return new MapResult(result, del, recover);
            }
            diff += newSize - oldSize;
        }
        return simple ? pos + diff : new MapResult(pos + diff, 0, null);
    }
    /**
    @internal
    */ touches(pos, recover) {
        let diff = 0, index = recoverIndex(recover);
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
            if (pos <= end && i == index * 3) return true;
            diff += this.ranges[i + newIndex] - oldSize;
        }
        return false;
    }
    /**
    Calls the given function on each of the changed ranges included in
    this map.
    */ forEach(f) {
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0, diff = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
            f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
            diff += newSize - oldSize;
        }
    }
    /**
    Create an inverted version of this map. The result can be used to
    map positions in the post-step document to the pre-step document.
    */ invert() {
        return new StepMap(this.ranges, !this.inverted);
    }
    /**
    @internal
    */ toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    /**
    Create a map that moves all positions by offset `n` (which may be
    negative). This can be useful when applying steps meant for a
    sub-document to a larger document, or vice-versa.
    */ static offset(n) {
        return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [
            0,
            -n,
            0
        ] : [
            0,
            0,
            n
        ]);
    }
}
/**
A StepMap that contains no changed ranges.
*/ StepMap.empty = new StepMap([]);
/**
A mapping represents a pipeline of zero or more [step
maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
handling mapping positions through a series of steps in which some
steps are inverted versions of earlier steps. (This comes up when
‘[rebasing](https://prosemirror.net/docs/guide/#transform.rebasing)’ steps for
collaboration or history management.)
*/ class Mapping {
    /**
    Create a new mapping with the given position maps.
    */ constructor(maps, /**
    @internal
    */ mirror, /**
    The starting position in the `maps` array, used when `map` or
    `mapResult` is called.
    */ from = 0, /**
    The end position in the `maps` array.
    */ to = maps ? maps.length : 0){
        this.mirror = mirror;
        this.from = from;
        this.to = to;
        this._maps = maps || [];
        this.ownData = !(maps || mirror);
    }
    /**
    The step maps in this mapping.
    */ get maps() {
        return this._maps;
    }
    /**
    Create a mapping that maps only through a part of this one.
    */ slice(from = 0, to = this.maps.length) {
        return new Mapping(this._maps, this.mirror, from, to);
    }
    /**
    Add a step map to the end of this mapping. If `mirrors` is
    given, it should be the index of the step map that is the mirror
    image of this one.
    */ appendMap(map, mirrors) {
        if (!this.ownData) {
            this._maps = this._maps.slice();
            this.mirror = this.mirror && this.mirror.slice();
            this.ownData = true;
        }
        this.to = this._maps.push(map);
        if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
    }
    /**
    Add all the step maps in a given mapping to this one (preserving
    mirroring information).
    */ appendMapping(mapping) {
        for(let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : undefined);
        }
    }
    /**
    Finds the offset of the step map that mirrors the map at the
    given offset, in this mapping (as per the second argument to
    `appendMap`).
    */ getMirror(n) {
        if (this.mirror) {
            for(let i = 0; i < this.mirror.length; i++)if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
        }
    }
    /**
    @internal
    */ setMirror(n, m) {
        if (!this.mirror) this.mirror = [];
        this.mirror.push(n, m);
    }
    /**
    Append the inverse of the given mapping to this one.
    */ appendMappingInverted(mapping) {
        for(let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : undefined);
        }
    }
    /**
    Create an inverted version of this mapping.
    */ invert() {
        let inverse = new Mapping;
        inverse.appendMappingInverted(this);
        return inverse;
    }
    /**
    Map a position through this mapping.
    */ map(pos, assoc = 1) {
        if (this.mirror) return this._map(pos, assoc, true);
        for(let i = this.from; i < this.to; i++)pos = this._maps[i].map(pos, assoc);
        return pos;
    }
    /**
    Map a position through this mapping, returning a mapping
    result.
    */ mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let delInfo = 0;
        for(let i = this.from; i < this.to; i++){
            let map = this._maps[i], result = map.mapResult(pos, assoc);
            if (result.recover != null) {
                let corr = this.getMirror(i);
                if (corr != null && corr > i && corr < this.to) {
                    i = corr;
                    pos = this._maps[corr].recover(result.recover);
                    continue;
                }
            }
            delInfo |= result.delInfo;
            pos = result.pos;
        }
        return simple ? pos : new MapResult(pos, delInfo, null);
    }
}
const stepsByID = Object.create(null);
/**
A step object represents an atomic change. It generally applies
only to the document it was created for, since the positions
stored in it will only make sense for that document.

New steps are defined by creating classes that extend `Step`,
overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
methods, and registering your class with a unique
JSON-serialization identifier using
[`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
*/ class Step {
    /**
    Get the step map that represents the changes made by this step,
    and which can be used to transform between positions in the old
    and the new document.
    */ getMap() {
        return StepMap.empty;
    }
    /**
    Try to merge this step with another one, to be applied directly
    after it. Returns the merged step when possible, null if the
    steps can't be merged.
    */ merge(other) {
        return null;
    }
    /**
    Deserialize a step from its JSON representation. Will call
    through to the step class' own implementation of this method.
    */ static fromJSON(schema, json) {
        if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let type = stepsByID[json.stepType];
        if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
        return type.fromJSON(schema, json);
    }
    /**
    To be able to serialize steps to JSON, each step needs a string
    ID to attach to its JSON representation. Use this method to
    register an ID for your step classes. Try to pick something
    that's unlikely to clash with steps from other modules.
    */ static jsonID(id, stepClass) {
        if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
        stepsByID[id] = stepClass;
        stepClass.prototype.jsonID = id;
        return stepClass;
    }
}
/**
The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
new document or a failure value.
*/ class StepResult {
    /**
    @internal
    */ constructor(/**
    The transformed document, if successful.
    */ doc, /**
    The failure message, if unsuccessful.
    */ failed){
        this.doc = doc;
        this.failed = failed;
    }
    /**
    Create a successful step result.
    */ static ok(doc) {
        return new StepResult(doc, null);
    }
    /**
    Create a failed step result.
    */ static fail(message) {
        return new StepResult(null, message);
    }
    /**
    Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
    arguments. Create a successful result if it succeeds, and a
    failed one if it throws a `ReplaceError`.
    */ static fromReplace(doc, from, to, slice) {
        try {
            return StepResult.ok(doc.replace(from, to, slice));
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceError"]) return StepResult.fail(e.message);
            throw e;
        }
    }
}
function mapFragment(fragment, f, parent) {
    let mapped = [];
    for(let i = 0; i < fragment.childCount; i++){
        let child = fragment.child(i);
        if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
        if (child.isInline) child = f(child, parent, i);
        mapped.push(child);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].fromArray(mapped);
}
/**
Add a mark to all inline content between two positions.
*/ class AddMarkStep extends Step {
    /**
    Create a mark step.
    */ constructor(/**
    The start of the marked range.
    */ from, /**
    The end of the marked range.
    */ to, /**
    The mark to add.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
        let parent = $from.node($from.sharedDepth(this.to));
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node, parent)=>{
            if (!node.isAtom || !parent.type.allowsMarkType(this.mark.type)) return node;
            return node.mark(this.mark.addToSet(node.marks));
        }, parent), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new RemoveMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new AddMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addMark", AddMarkStep);
/**
Remove a mark from all inline content between two positions.
*/ class RemoveMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The start of the unmarked range.
    */ from, /**
    The end of the unmarked range.
    */ to, /**
    The mark to remove.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to);
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node)=>{
            return node.mark(this.mark.removeFromSet(node.marks));
        }, doc), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new AddMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new RemoveMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeMark", RemoveMarkStep);
/**
Add a mark to a specific node.
*/ class AddNodeMarkStep extends Step {
    /**
    Create a node mark step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to add.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (node) {
            let newSet = this.mark.addToSet(node.marks);
            if (newSet.length == node.marks.length) {
                for(let i = 0; i < node.marks.length; i++)if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
                return new AddNodeMarkStep(this.pos, this.mark);
            }
        }
        return new RemoveNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addNodeMark", AddNodeMarkStep);
/**
Remove a mark from a specific node.
*/ class RemoveNodeMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to remove.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node || !this.mark.isInSet(node.marks)) return this;
        return new AddNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
/**
Replace a part of the document with a slice of new content.
*/ class ReplaceStep extends Step {
    /**
    The given `slice` should fit the 'gap' between `from` and
    `to`—the depths must line up, and the surrounding nodes must be
    able to be joined with the open sides of the slice. When
    `structure` is true, the step will fail if the content between
    from and to is not just a sequence of closing and then opening
    tokens (this is to guard against rebased replace steps
    overwriting something they weren't supposed to).
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The slice to insert.
    */ slice, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.slice = slice;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
        return StepResult.fromReplace(doc, this.from, this.to, this.slice);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(doc) {
        return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deletedAcross && to.deletedAcross) return null;
        return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
    }
    merge(other) {
        if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
        if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
            return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
        } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
            return new ReplaceStep(other.from, this.to, slice, this.structure);
        } else {
            return null;
        }
    }
    toJSON() {
        let json = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new ReplaceStep(json.from, json.to, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), !!json.structure);
    }
}
Step.jsonID("replace", ReplaceStep);
/**
Replace a part of the document with a slice of content, but
preserve a range of the replaced content by moving it into the
slice.
*/ class ReplaceAroundStep extends Step {
    /**
    Create a replace-around step with the given range and gap.
    `insert` should be the point in the slice into which the content
    of the gap should be moved. `structure` has the same meaning as
    it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The start of preserved range.
    */ gapFrom, /**
    The end of preserved range.
    */ gapTo, /**
    The slice to insert.
    */ slice, /**
    The position in the slice where the preserved range should be
    inserted.
    */ insert, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.gapFrom = gapFrom;
        this.gapTo = gapTo;
        this.slice = slice;
        this.insert = insert;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
        let gap = doc.slice(this.gapFrom, this.gapTo);
        if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
        let inserted = this.slice.insertAt(this.insert, gap.content);
        if (!inserted) return StepResult.fail("Content does not fit in gap");
        return StepResult.fromReplace(doc, this.from, this.to, inserted);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(doc) {
        let gap = this.gapTo - this.gapFrom;
        return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
        let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
        if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
        return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let json = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), json.insert, !!json.structure);
    }
}
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
    let $from = doc.resolve(from), dist = to - from, depth = $from.depth;
    while(dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount){
        depth--;
        dist--;
    }
    if (dist > 0) {
        let next = $from.node(depth).maybeChild($from.indexAfter(depth));
        while(dist > 0){
            if (!next || next.isLeaf) return true;
            next = next.firstChild;
            dist--;
        }
    }
    return false;
}
function addMark(tr, from, to, mark) {
    let removed = [], added = [];
    let removing, adding;
    tr.doc.nodesBetween(from, to, (node, pos, parent)=>{
        if (!node.isInline) return;
        let marks = node.marks;
        if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
            let start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to);
            let newSet = mark.addToSet(marks);
            for(let i = 0; i < marks.length; i++){
                if (!marks[i].isInSet(newSet)) {
                    if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;
                    else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
                }
            }
            if (adding && adding.to == start) adding.to = end;
            else added.push(adding = new AddMarkStep(start, end, mark));
        }
    });
    removed.forEach((s)=>tr.step(s));
    added.forEach((s)=>tr.step(s));
}
function removeMark(tr, from, to, mark) {
    let matched = [], step = 0;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        if (!node.isInline) return;
        step++;
        let toRemove = null;
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkType"]) {
            let set = node.marks, found;
            while(found = mark.isInSet(set)){
                (toRemove || (toRemove = [])).push(found);
                set = found.removeFromSet(set);
            }
        } else if (mark) {
            if (mark.isInSet(node.marks)) toRemove = [
                mark
            ];
        } else {
            toRemove = node.marks;
        }
        if (toRemove && toRemove.length) {
            let end = Math.min(pos + node.nodeSize, to);
            for(let i = 0; i < toRemove.length; i++){
                let style = toRemove[i], found;
                for(let j = 0; j < matched.length; j++){
                    let m = matched[j];
                    if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
                }
                if (found) {
                    found.to = end;
                    found.step = step;
                } else {
                    matched.push({
                        style,
                        from: Math.max(pos, from),
                        to: end,
                        step
                    });
                }
            }
        }
    });
    matched.forEach((m)=>tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
    let node = tr.doc.nodeAt(pos);
    let replSteps = [], cur = pos + 1;
    for(let i = 0; i < node.childCount; i++){
        let child = node.child(i), end = cur + child.nodeSize;
        let allowed = match.matchType(child.type);
        if (!allowed) {
            replSteps.push(new ReplaceStep(cur, end, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty));
        } else {
            match = allowed;
            for(let j = 0; j < child.marks.length; j++)if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
            if (clearNewlines && child.isText && parentType.whitespace != "pre") {
                let m, newline = /\r?\n|\r/g, slice;
                while(m = newline.exec(child.text)){
                    if (!slice) slice = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
                    replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
                }
            }
        }
        cur = end;
    }
    if (!match.validEnd) {
        let fill = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        tr.replace(cur, cur, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](fill, 0, 0));
    }
    for(let i = replSteps.length - 1; i >= 0; i--)tr.step(replSteps[i]);
}
function canCut(node, start, end) {
    return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
/**
Try to find a target depth to which the content in the given range
can be lifted. Will not go across
[isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
*/ function liftTarget(range) {
    let parent = range.parent;
    let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
    for(let depth = range.depth, contentBefore = 0, contentAfter = 0;; --depth){
        let node = range.$from.node(depth);
        let index = range.$from.index(depth) + contentBefore, endIndex = range.$to.indexAfter(depth) - contentAfter;
        if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
        if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
        if (index) contentBefore = 1;
        if (endIndex < node.childCount) contentAfter = 1;
    }
    return null;
}
function lift(tr, range, target) {
    let { $from, $to, depth } = range;
    let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
    let start = gapStart, end = gapEnd;
    let before = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, openStart = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $from.index(d) > 0) {
        splitting = true;
        before = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(d).copy(before));
        openStart++;
    } else {
        start--;
    }
    let after = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, openEnd = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $to.after(d + 1) < $to.end(d)) {
        splitting = true;
        after = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from($to.node(d).copy(after));
        openEnd++;
    } else {
        end++;
    }
    tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](before.append(after), openStart, openEnd), before.size - openStart, true));
}
/**
Try to find a valid way to wrap the content in the given range in a
node of the given type. May introduce extra nodes around and inside
the wrapper node, if necessary. Returns null if no valid wrapping
could be found. When `innerRange` is given, that range's content is
used as the content to fit into the wrapping, instead of the
content of `range`.
*/ function findWrapping(range, nodeType, attrs = null, innerRange = range) {
    let around = findWrappingOutside(range, nodeType);
    let inner = around && findWrappingInside(innerRange, nodeType);
    if (!inner) return null;
    return around.map(withAttrs).concat({
        type: nodeType,
        attrs
    }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
    return {
        type,
        attrs: null
    };
}
function findWrappingOutside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (!around) return null;
    let outer = around.length ? around[0] : type;
    return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let inner = parent.child(startIndex);
    let inside = type.contentMatch.findWrapping(inner.type);
    if (!inside) return null;
    let lastType = inside.length ? inside[inside.length - 1] : type;
    let innerMatch = lastType.contentMatch;
    for(let i = startIndex; innerMatch && i < endIndex; i++)innerMatch = innerMatch.matchType(parent.child(i).type);
    if (!innerMatch || !innerMatch.validEnd) return null;
    return inside;
}
function wrap(tr, range, wrappers) {
    let content = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let i = wrappers.length - 1; i >= 0; i--){
        if (content.size) {
            let match = wrappers[i].type.contentMatch.matchFragment(content);
            if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
        }
        content = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    let start = range.start, end = range.end;
    tr.step(new ReplaceAroundStep(start, end, start, end, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
    if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let mapFrom = tr.steps.length;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
        if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
            let convertNewlines = null;
            if (type.schema.linebreakReplacement) {
                let pre = type.whitespace == "pre", supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
                if (pre && !supportLinebreak) convertNewlines = false;
                else if (!pre && supportLinebreak) convertNewlines = true;
            }
            // Ensure all markup that isn't allowed in the new node type is cleared
            if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
            clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, undefined, convertNewlines === null);
            let mapping = tr.mapping.slice(mapFrom);
            let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
            tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
            if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
            return false;
        }
    });
}
function replaceNewlines(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.isText) {
            let m, newline = /\r?\n|\r/g;
            while(m = newline.exec(child.text)){
                let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
                tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
            }
        }
    });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.type == child.type.schema.linebreakReplacement) {
            let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
            tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
        }
    });
}
function canChangeType(doc, pos, type) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return $pos.parent.canReplaceWith(index, index + 1, type);
}
/**
Change the type, attributes, and/or marks of the node at `pos`.
When `type` isn't given, the existing node type is preserved,
*/ function setNodeMarkup(tr, pos, type, attrs, marks) {
    let node = tr.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at given position");
    if (!type) type = node.type;
    let newNode = type.create(attrs, null, marks || node.marks);
    if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
    if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
    tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(newNode), 0, 0), 1, true));
}
/**
Check whether splitting at the given position is allowed.
*/ function canSplit(doc, pos, depth = 1, typesAfter) {
    let $pos = doc.resolve(pos), base = $pos.depth - depth;
    let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
    if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
    for(let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--){
        let node = $pos.node(d), index = $pos.index(d);
        if (node.type.spec.isolating) return false;
        let rest = node.content.cutByIndex(index, node.childCount);
        let overrideChild = typesAfter && typesAfter[i + 1];
        if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
        let after = typesAfter && typesAfter[i] || node;
        if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest)) return false;
    }
    let index = $pos.indexAfter(base);
    let baseType = typesAfter && typesAfter[0];
    return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
    let $pos = tr.doc.resolve(pos), before = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, after = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--){
        before = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from($pos.node(d).copy(before));
        let typeAfter = typesAfter && typesAfter[i];
        after = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
    }
    tr.step(new ReplaceStep(pos, pos, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](before.append(after), depth, depth), true));
}
/**
Test whether the blocks before and after a given position can be
joined.
*/ function canJoin(doc, pos) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
    if (!b.content.size) a.type.compatibleContent(b.type);
    let match = a.contentMatchAt(a.childCount);
    let { linebreakReplacement } = a.type.schema;
    for(let i = 0; i < b.childCount; i++){
        let child = b.child(i);
        let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
        match = match.matchType(type);
        if (!match) return false;
        if (!a.type.allowsMarks(child.marks)) return false;
    }
    return match.validEnd;
}
function joinable(a, b) {
    return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
/**
Find an ancestor of the given position that can be joined to the
block before (or after if `dir` is positive). Returns the joinable
point, if any.
*/ function joinPoint(doc, pos, dir = -1) {
    let $pos = doc.resolve(pos);
    for(let d = $pos.depth;; d--){
        let before, after, index = $pos.index(d);
        if (d == $pos.depth) {
            before = $pos.nodeBefore;
            after = $pos.nodeAfter;
        } else if (dir > 0) {
            before = $pos.node(d + 1);
            index++;
            after = $pos.node(d).maybeChild(index);
        } else {
            before = $pos.node(d).maybeChild(index - 1);
            after = $pos.node(d + 1);
        }
        if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
        if (d == 0) break;
        pos = dir < 0 ? $pos.before(d) : $pos.after(d);
    }
}
function join(tr, pos, depth) {
    let convertNewlines = null;
    let { linebreakReplacement } = tr.doc.type.schema;
    let $before = tr.doc.resolve(pos - depth), beforeType = $before.node().type;
    if (linebreakReplacement && beforeType.inlineContent) {
        let pre = beforeType.whitespace == "pre";
        let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;
        else if (!pre && supportLinebreak) convertNewlines = true;
    }
    let mapFrom = tr.steps.length;
    if (convertNewlines === false) {
        let $after = tr.doc.resolve(pos + depth);
        replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
    }
    if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
    let mapping = tr.mapping.slice(mapFrom), start = mapping.map(pos - depth);
    tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty, true));
    if (convertNewlines === true) {
        let $full = tr.doc.resolve(start);
        replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
    }
    return tr;
}
/**
Try to find a point where a node of the given type can be inserted
near `pos`, by searching up the node hierarchy when `pos` itself
isn't a valid place but is at the start or end of a node. Return
null if no position was found.
*/ function insertPoint(doc, pos, nodeType) {
    let $pos = doc.resolve(pos);
    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
    if ($pos.parentOffset == 0) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.index(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
        if (index > 0) return null;
    }
    if ($pos.parentOffset == $pos.parent.content.size) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.indexAfter(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
        if (index < $pos.node(d).childCount) return null;
    }
    return null;
}
/**
Finds a position at or around the given position where the given
slice can be inserted. Will look at parent nodes' nearest boundary
and try there, even if the original position wasn't directly at the
start or end of that node. Returns null when no position was found.
*/ function dropPoint(doc, pos, slice) {
    let $pos = doc.resolve(pos);
    if (!slice.content.size) return pos;
    let content = slice.content;
    for(let i = 0; i < slice.openStart; i++)content = content.firstChild.content;
    for(let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++){
        for(let d = $pos.depth; d >= 0; d--){
            let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
            let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
            let parent = $pos.node(d), fits = false;
            if (pass == 1) {
                fits = parent.canReplace(insertPos, insertPos, content);
            } else {
                let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
                fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
            }
            if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
        }
    }
    return null;
}
/**
‘Fit’ a slice into a given position in the document, producing a
[step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
there's no meaningful way to insert the slice here, or inserting it
would be a no-op (an empty slice over an empty range).
*/ function replaceStep(doc, from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
    if (from == to && !slice.size) return null;
    let $from = doc.resolve(from), $to = doc.resolve(to);
    // Optimization -- avoid work if it's obvious that it's not needed.
    if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
    return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
    return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// This class tracks the state of the placement progress in the
// following properties:
//
//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.
//
//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.
//
//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.
class Fitter {
    constructor($from, $to, unplaced){
        this.$from = $from;
        this.$to = $to;
        this.unplaced = unplaced;
        this.frontier = [];
        this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty;
        for(let i = 0; i <= $from.depth; i++){
            let node = $from.node(i);
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt($from.indexAfter(i))
            });
        }
        for(let i = $from.depth; i > 0; i--)this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        // As long as there's unplaced content, try to place some of it.
        // If that fails, either increase the open score of the unplaced
        // slice, or drop nodes from it, and then try again.
        while(this.unplaced.size){
            let fit = this.findFittable();
            if (fit) this.placeNodes(fit);
            else this.openMore() || this.dropNode();
        }
        // When there's inline content directly after the frontier _and_
        // directly after `this.$to`, we must generate a `ReplaceAround`
        // step that pulls that content into the node after the frontier.
        // That means the fitting must be done to the end of the textblock
        // node after `this.$to`, not `this.$to` itself.
        let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
        let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
        if (!$to) return null;
        // If closing to `$to` succeeded, create a step
        let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
        while(openStart && openEnd && content.childCount == 1){
            content = content.firstChild.content;
            openStart--;
            openEnd--;
        }
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](content, openStart, openEnd);
        if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
        if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
        return null;
    }
    // Find a position on the start spine of `this.unplaced` that has
    // content that can be moved somewhere on the frontier. Returns two
    // depths, one for the slice and one for the frontier.
    findFittable() {
        let startDepth = this.unplaced.openStart;
        for(let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++){
            let node = cur.firstChild;
            if (cur.childCount > 1) openEnd = 0;
            if (node.type.spec.isolating && openEnd <= d) {
                startDepth = d;
                break;
            }
            cur = node.content;
        }
        // Only try wrapping nodes (pass 2) after finding a place without
        // wrapping failed.
        for(let pass = 1; pass <= 2; pass++){
            for(let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--){
                let fragment, parent = null;
                if (sliceDepth) {
                    parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
                    fragment = parent.content;
                } else {
                    fragment = this.unplaced.content;
                }
                let first = fragment.firstChild;
                for(let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--){
                    let { type, match } = this.frontier[frontierDepth], wrap, inject = null;
                    // In pass 1, if the next node matches, or there is no next
                    // node but the parents look compatible, we've found a
                    // place.
                    if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(first), false)) : parent && type.compatibleContent(parent.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        inject
                    };
                    else if (pass == 2 && first && (wrap = match.findWrapping(first.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        wrap
                    };
                    // Don't continue looking further up if the parent node
                    // would fit here.
                    if (parent && match.matchType(parent.type)) break;
                }
            }
        }
    }
    openMore() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (!inner.childCount || inner.firstChild.isLeaf) return false;
        this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
        return true;
    }
    dropNode() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (inner.childCount <= 1 && openStart > 0) {
            let openAtEnd = content.size - openStart <= openStart + inner.size;
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
        } else {
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart, 1), openStart, openEnd);
        }
    }
    // Move content from the unplaced slice at `sliceDepth` to the
    // frontier node at `frontierDepth`. Close that frontier node when
    // applicable.
    placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap }) {
        while(this.depth > frontierDepth)this.closeFrontierNode();
        if (wrap) for(let i = 0; i < wrap.length; i++)this.openFrontierNode(wrap[i]);
        let slice = this.unplaced, fragment = parent ? parent.content : slice.content;
        let openStart = slice.openStart - sliceDepth;
        let taken = 0, add = [];
        let { match, type } = this.frontier[frontierDepth];
        if (inject) {
            for(let i = 0; i < inject.childCount; i++)add.push(inject.child(i));
            match = match.matchFragment(inject);
        }
        // Computes the amount of (end) open nodes at the end of the
        // fragment. When 0, the parent is open, but no more. When
        // negative, nothing is open.
        let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
        // Scan over the fragment, fitting as many child nodes as
        // possible.
        while(taken < fragment.childCount){
            let next = fragment.child(taken), matches = match.matchType(next.type);
            if (!matches) break;
            taken++;
            if (taken > 1 || openStart == 0 || next.content.size) {
                match = matches;
                add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
            }
        }
        let toEnd = taken == fragment.childCount;
        if (!toEnd) openEndCount = -1;
        this.placed = addToFragment(this.placed, frontierDepth, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(add));
        this.frontier[frontierDepth].match = match;
        // If the parent types match, and the entire node was moved, and
        // it's not open, close this frontier node right away.
        if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
        // Add new frontier nodes for any open nodes at the end.
        for(let i = 0, cur = fragment; i < openEndCount; i++){
            let node = cur.lastChild;
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt(node.childCount)
            });
            cur = node.content;
        }
        // Update `this.unplaced`. Drop the entire node from which we
        // placed it we got to its end, otherwise just drop the placed
        // nodes.
        this.unplaced = !toEnd ? new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let top = this.frontier[this.depth], level;
        if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
        let { depth } = this.$to, after = this.$to.after(depth);
        while(depth > 1 && after == this.$to.end(--depth))++after;
        return after;
    }
    findCloseLevel($to) {
        scan: for(let i = Math.min(this.depth, $to.depth); i >= 0; i--){
            let { match, type } = this.frontier[i];
            let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
            let fit = contentAfterFits($to, i, type, match, dropInner);
            if (!fit) continue;
            for(let d = i - 1; d >= 0; d--){
                let { match, type } = this.frontier[d];
                let matches = contentAfterFits($to, d, type, match, true);
                if (!matches || matches.childCount) continue scan;
            }
            return {
                depth: i,
                fit,
                move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
            };
        }
    }
    close($to) {
        let close = this.findCloseLevel($to);
        if (!close) return null;
        while(this.depth > close.depth)this.closeFrontierNode();
        if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
        $to = close.move;
        for(let d = close.depth + 1; d <= $to.depth; d++){
            let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
            this.openFrontierNode(node.type, node.attrs, add);
        }
        return $to;
    }
    openFrontierNode(type, attrs = null, content) {
        let top = this.frontier[this.depth];
        top.match = top.match.matchType(type);
        this.placed = addToFragment(this.placed, this.depth, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrs, content)));
        this.frontier.push({
            type,
            match: type.contentMatch
        });
    }
    closeFrontierNode() {
        let open = this.frontier.pop();
        let add = open.match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
    }
}
function dropFromFragment(fragment, depth, count) {
    if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
    return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
    if (depth == 0) return fragment.append(content);
    return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
    for(let i = 0; i < depth; i++)fragment = fragment.firstChild.content;
    return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
    if (openStart <= 0) return node;
    let frag = node.content;
    if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
    if (openStart > 0) {
        frag = node.type.contentMatch.fillBefore(frag).append(frag);
        if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
    let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
    if (index == node.childCount && !type.compatibleContent(node.type)) return null;
    let fit = match.fillBefore(node.content, true, index);
    return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
    for(let i = start; i < fragment.childCount; i++)if (!type.allowsMarks(fragment.child(i).marks)) return true;
    return false;
}
function definesContent(type) {
    return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
    if (!slice.size) return tr.deleteRange(from, to);
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
    let targetDepths = coveredDepths($from, $to);
    // Can't replace the whole document, so remove 0 if it's present
    if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
    // Negative numbers represent not expansion over the whole node at
    // that depth, but replacing from $from.before(-D) to $to.pos.
    let preferredTarget = -($from.depth + 1);
    targetDepths.unshift(preferredTarget);
    // This loop picks a preferred target depth, if one of the covering
    // depths is not outside of a defining node, and adds negative
    // depths for any depth that has $from at its start and does not
    // cross a defining node.
    for(let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--){
        let spec = $from.node(d).type.spec;
        if (spec.defining || spec.definingAsContext || spec.isolating) break;
        if (targetDepths.indexOf(d) > -1) preferredTarget = d;
        else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
    }
    // Try to fit each possible depth of the slice into each possible
    // target depth, starting with the preferred depths.
    let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
    let leftNodes = [], preferredDepth = slice.openStart;
    for(let content = slice.content, i = 0;; i++){
        let node = content.firstChild;
        leftNodes.push(node);
        if (i == slice.openStart) break;
        content = node.content;
    }
    // Back up preferredDepth to cover defining textblocks directly
    // above it, possibly skipping a non-defining textblock.
    for(let d = preferredDepth - 1; d >= 0; d--){
        let leftNode = leftNodes[d], def = definesContent(leftNode.type);
        if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;
        else if (def || !leftNode.type.isTextblock) break;
    }
    for(let j = slice.openStart; j >= 0; j--){
        let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
        let insert = leftNodes[openDepth];
        if (!insert) continue;
        for(let i = 0; i < targetDepths.length; i++){
            // Loop over possible expansion levels, starting with the
            // preferred one
            let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
            if (targetDepth < 0) {
                expand = false;
                targetDepth = -targetDepth;
            }
            let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
            if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
        }
    }
    let startSteps = tr.steps.length;
    for(let i = targetDepths.length - 1; i >= 0; i--){
        tr.replace(from, to, slice);
        if (tr.steps.length > startSteps) break;
        let depth = targetDepths[i];
        if (depth < 0) continue;
        from = $from.before(depth);
        to = $to.after(depth);
    }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
    if (depth < oldOpen) {
        let first = fragment.firstChild;
        fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
    }
    if (depth > newOpen) {
        let match = parent.contentMatchAt(0);
        let start = match.fillBefore(fragment).append(fragment);
        fragment = start.append(match.matchFragment(start).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return fragment;
}
function replaceRangeWith(tr, from, to, node) {
    if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
        let point = insertPoint(tr.doc, from, node.type);
        if (point != null) from = to = point;
    }
    tr.replaceRange(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(node), 0, 0));
}
function deleteRange(tr, from, to) {
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    let covered = coveredDepths($from, $to);
    for(let i = 0; i < covered.length; i++){
        let depth = covered[i], last = i == covered.length - 1;
        if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
        if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
    }
    for(let d = 1; d <= $from.depth && d <= $to.depth; d++){
        if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
    }
    tr.delete(from, to);
}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
    let result = [], minDepth = Math.min($from.depth, $to.depth);
    for(let d = minDepth; d >= 0; d--){
        let start = $from.start(d);
        if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
        if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
    }
    return result;
}
/**
Update an attribute in a specific node.
*/ class AttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.pos = pos;
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at attribute step's position");
        let attrs = Object.create(null);
        for(let name in node.attrs)attrs[name] = node.attrs[name];
        attrs[this.attr] = this.value;
        let updated = node.type.create(attrs, null, node.marks);
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new AttrStep(json.pos, json.attr, json.value);
    }
}
Step.jsonID("attr", AttrStep);
/**
Update an attribute in the doc node.
*/ class DocAttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let attrs = Object.create(null);
        for(let name in doc.attrs)attrs[name] = doc.attrs[name];
        attrs[this.attr] = this.value;
        let updated = doc.type.create(attrs, doc.content, doc.marks);
        return StepResult.ok(updated);
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new DocAttrStep(this.attr, doc.attrs[this.attr]);
    }
    map(mapping) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new DocAttrStep(json.attr, json.value);
    }
}
Step.jsonID("docAttr", DocAttrStep);
/**
@internal
*/ let TransformError = class extends Error {
};
TransformError = function TransformError(message) {
    let err = Error.call(this, message);
    err.__proto__ = TransformError.prototype;
    return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
/**
Abstraction to build up and track an array of
[steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

Most transforming methods return the `Transform` object itself, so
that they can be chained.
*/ class Transform {
    /**
    Create a transform that starts with the given document.
    */ constructor(/**
    The current document (the result of applying the steps in the
    transform).
    */ doc){
        this.doc = doc;
        /**
        The steps in this transform.
        */ this.steps = [];
        /**
        The documents before each of the steps.
        */ this.docs = [];
        /**
        A mapping with the maps for each of the steps in this transform.
        */ this.mapping = new Mapping;
    }
    /**
    The starting document.
    */ get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    /**
    Apply a new step in this transform, saving the result. Throws an
    error when the step fails.
    */ step(step) {
        let result = this.maybeStep(step);
        if (result.failed) throw new TransformError(result.failed);
        return this;
    }
    /**
    Try to apply a step in this transformation, ignoring it if it
    fails. Returns the step result.
    */ maybeStep(step) {
        let result = step.apply(this.doc);
        if (!result.failed) this.addStep(step, result.doc);
        return result;
    }
    /**
    True when the document has been changed (when there are any
    steps).
    */ get docChanged() {
        return this.steps.length > 0;
    }
    /**
    Return a single range, in post-transform document positions,
    that covers all content changed by this transform. Returns null
    if no replacements are made. Note that this will ignore changes
    that add/remove marks without replacing the underlying content.
    */ changedRange() {
        let from = 1e9, to = -1e9;
        for(let i = 0; i < this.mapping.maps.length; i++){
            let map = this.mapping.maps[i];
            if (i) {
                from = map.map(from, 1);
                to = map.map(to, -1);
            }
            map.forEach((_f, _t, fromB, toB)=>{
                from = Math.min(from, fromB);
                to = Math.max(to, toB);
            });
        }
        return from == 1e9 ? null : {
            from,
            to
        };
    }
    /**
    @internal
    */ addStep(step, doc) {
        this.docs.push(this.doc);
        this.steps.push(step);
        this.mapping.appendMap(step.getMap());
        this.doc = doc;
    }
    /**
    Replace the part of the document between `from` and `to` with the
    given `slice`.
    */ replace(from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
        let step = replaceStep(this.doc, from, to, slice);
        if (step) this.step(step);
        return this;
    }
    /**
    Replace the given range with the given content, which may be a
    fragment, node, or array of nodes.
    */ replaceWith(from, to, content) {
        return this.replace(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(content), 0, 0));
    }
    /**
    Delete the content between the given positions.
    */ delete(from, to) {
        return this.replace(from, to, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty);
    }
    /**
    Insert the given content at the given position.
    */ insert(pos, content) {
        return this.replaceWith(pos, pos, content);
    }
    /**
    Replace a range of the document with a given slice, using
    `from`, `to`, and the slice's
    [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
    than fixed start and end points. This method may grow the
    replaced area or close open nodes in the slice in order to get a
    fit that is more in line with WYSIWYG expectations, by dropping
    fully covered parent nodes of the replaced region when they are
    marked [non-defining as
    context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
    open parent node from the slice that _is_ marked as [defining
    its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
    
    This is the method, for example, to handle paste. The similar
    [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
    primitive tool which will _not_ move the start and end of its given
    range, and is useful in situations where you need more precise
    control over what happens.
    */ replaceRange(from, to, slice) {
        replaceRange(this, from, to, slice);
        return this;
    }
    /**
    Replace the given range with a node, but use `from` and `to` as
    hints, rather than precise positions. When from and to are the same
    and are at the start or end of a parent node in which the given
    node doesn't fit, this method may _move_ them out towards a parent
    that does allow the given node to be placed. When the given range
    completely covers a parent node, this method may completely replace
    that parent node.
    */ replaceRangeWith(from, to, node) {
        replaceRangeWith(this, from, to, node);
        return this;
    }
    /**
    Delete the given range, expanding it to cover fully covered
    parent nodes until a valid replace is found.
    */ deleteRange(from, to) {
        deleteRange(this, from, to);
        return this;
    }
    /**
    Split the content in the given range off from its parent, if there
    is sibling content before or after it, and move it up the tree to
    the depth specified by `target`. You'll probably want to use
    [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
    sure the lift is valid.
    */ lift(range, target) {
        lift(this, range, target);
        return this;
    }
    /**
    Join the blocks around the given position. If depth is 2, their
    last and first siblings are also joined, and so on.
    */ join(pos, depth = 1) {
        join(this, pos, depth);
        return this;
    }
    /**
    Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
    The wrappers are assumed to be valid in this position, and should
    probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
    */ wrap(range, wrappers) {
        wrap(this, range, wrappers);
        return this;
    }
    /**
    Set the type of all textblocks (partly) between `from` and `to` to
    the given node type with the given attributes.
    */ setBlockType(from, to = from, type, attrs = null) {
        setBlockType(this, from, to, type, attrs);
        return this;
    }
    /**
    Change the type, attributes, and/or marks of the node at `pos`.
    When `type` isn't given, the existing node type is preserved,
    */ setNodeMarkup(pos, type, attrs = null, marks) {
        setNodeMarkup(this, pos, type, attrs, marks);
        return this;
    }
    /**
    Set a single attribute on a given node to a new value.
    The `pos` addresses the document content. Use `setDocAttribute`
    to set attributes on the document itself.
    */ setNodeAttribute(pos, attr, value) {
        this.step(new AttrStep(pos, attr, value));
        return this;
    }
    /**
    Set a single attribute on the document to a new value.
    */ setDocAttribute(attr, value) {
        this.step(new DocAttrStep(attr, value));
        return this;
    }
    /**
    Add a mark to the node at position `pos`.
    */ addNodeMark(pos, mark) {
        this.step(new AddNodeMarkStep(pos, mark));
        return this;
    }
    /**
    Remove a mark (or all marks of the given type) from the node at
    position `pos`.
    */ removeNodeMark(pos, mark) {
        let node = this.doc.nodeAt(pos);
        if (!node) throw new RangeError("No node at position " + pos);
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"]) {
            if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
        } else {
            let set = node.marks, found, steps = [];
            while(found = mark.isInSet(set)){
                steps.push(new RemoveNodeMarkStep(pos, found));
                set = found.removeFromSet(set);
            }
            for(let i = steps.length - 1; i >= 0; i--)this.step(steps[i]);
        }
        return this;
    }
    /**
    Split the node at the given position, and optionally, if `depth` is
    greater than one, any number of nodes above that. By default, the
    parts split off will inherit the node type of the original node.
    This can be changed by passing an array of types and attributes to
    use after the split (with the outermost nodes coming first).
    */ split(pos, depth = 1, typesAfter) {
        split(this, pos, depth, typesAfter);
        return this;
    }
    /**
    Add the given mark to the inline content between `from` and `to`.
    */ addMark(from, to, mark) {
        addMark(this, from, to, mark);
        return this;
    }
    /**
    Remove marks from inline nodes between `from` and `to`. When
    `mark` is a single mark, remove precisely that mark. When it is
    a mark type, remove all marks of that type. When it is null,
    remove all marks of any type.
    */ removeMark(from, to, mark) {
        removeMark(this, from, to, mark);
        return this;
    }
    /**
    Removes all marks and nodes from the content of the node at
    `pos` that don't match the given new parent node type. Accepts
    an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
    third argument.
    */ clearIncompatible(pos, parentType, match) {
        clearIncompatible(this, pos, parentType, match);
        return this;
    }
}
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllSelection",
    ()=>AllSelection,
    "EditorState",
    ()=>EditorState,
    "NodeSelection",
    ()=>NodeSelection,
    "Plugin",
    ()=>Plugin,
    "PluginKey",
    ()=>PluginKey,
    "Selection",
    ()=>Selection,
    "SelectionRange",
    ()=>SelectionRange,
    "TextSelection",
    ()=>TextSelection,
    "Transaction",
    ()=>Transaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-transform/dist/index.js [app-ssr] (ecmascript)");
;
;
const classesById = Object.create(null);
/**
Superclass for editor selections. Every selection type should
extend this. Should not be instantiated directly.
*/ class Selection {
    /**
    Initialize a selection with the head and anchor and ranges. If no
    ranges are given, constructs a single range across `$anchor` and
    `$head`.
    */ constructor(/**
    The resolved anchor of the selection (the side that stays in
    place when the selection is modified).
    */ $anchor, /**
    The resolved head of the selection (the side that moves when
    the selection is modified).
    */ $head, ranges){
        this.$anchor = $anchor;
        this.$head = $head;
        this.ranges = ranges || [
            new SelectionRange($anchor.min($head), $anchor.max($head))
        ];
    }
    /**
    The selection's anchor, as an unresolved position.
    */ get anchor() {
        return this.$anchor.pos;
    }
    /**
    The selection's head.
    */ get head() {
        return this.$head.pos;
    }
    /**
    The lower bound of the selection's main range.
    */ get from() {
        return this.$from.pos;
    }
    /**
    The upper bound of the selection's main range.
    */ get to() {
        return this.$to.pos;
    }
    /**
    The resolved lower  bound of the selection's main range.
    */ get $from() {
        return this.ranges[0].$from;
    }
    /**
    The resolved upper bound of the selection's main range.
    */ get $to() {
        return this.ranges[0].$to;
    }
    /**
    Indicates whether the selection contains any content.
    */ get empty() {
        let ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++)if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
        return true;
    }
    /**
    Get the content of this selection as a slice.
    */ content() {
        return this.$from.doc.slice(this.from, this.to, true);
    }
    /**
    Replace the selection with a slice or, if no slice is given,
    delete the selection. Will append to the given transaction.
    */ replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
        // Put the new selection at the position after the inserted
        // content. When that ended in an inline node, search backwards,
        // to get the position after that node. If not, search forward.
        let lastNode = content.content.lastChild, lastParent = null;
        for(let i = 0; i < content.openEnd; i++){
            lastParent = lastNode;
            lastNode = lastNode.lastChild;
        }
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty : content);
            if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
        }
    }
    /**
    Replace the selection with the given node, appending the changes
    to the given transaction.
    */ replaceWith(tr, node) {
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            let from = mapping.map($from.pos), to = mapping.map($to.pos);
            if (i) {
                tr.deleteRange(from, to);
            } else {
                tr.replaceRangeWith(from, to, node);
                selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
            }
        }
    }
    /**
    Find a valid cursor or leaf node selection starting at the given
    position and searching back if `dir` is negative, and forward if
    positive. When `textOnly` is true, only consider cursor
    selections. Will return null when no valid selection position is
    found.
    */ static findFrom($pos, dir, textOnly = false) {
        let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
        if (inner) return inner;
        for(let depth = $pos.depth - 1; depth >= 0; depth--){
            let found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
            if (found) return found;
        }
        return null;
    }
    /**
    Find a valid cursor or leaf node selection near the given
    position. Searches forward first by default, but if `bias` is
    negative, it will search backwards first.
    */ static near($pos, bias = 1) {
        return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
    }
    /**
    Find the cursor or leaf node selection closest to the start of
    the given document. Will return an
    [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
    exists.
    */ static atStart(doc) {
        return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
    }
    /**
    Find the cursor or leaf node selection closest to the end of the
    given document.
    */ static atEnd(doc) {
        return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
    }
    /**
    Deserialize the JSON representation of a selection. Must be
    implemented for custom classes (as a static class method).
    */ static fromJSON(doc, json) {
        if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
        let cls = classesById[json.type];
        if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
        return cls.fromJSON(doc, json);
    }
    /**
    To be able to deserialize selections from JSON, custom selection
    classes must register themselves with an ID string, so that they
    can be disambiguated. Try to pick something that's unlikely to
    clash with classes from other modules.
    */ static jsonID(id, selectionClass) {
        if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
        classesById[id] = selectionClass;
        selectionClass.prototype.jsonID = id;
        return selectionClass;
    }
    /**
    Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
    which is a value that can be mapped without having access to a
    current document, and later resolved to a real selection for a
    given document again. (This is used mostly by the history to
    track and restore old selections.) The default implementation of
    this method just converts the selection to a text selection and
    returns the bookmark for that.
    */ getBookmark() {
        return TextSelection.between(this.$anchor, this.$head).getBookmark();
    }
}
Selection.prototype.visible = true;
/**
Represents a selected range in a document.
*/ class SelectionRange {
    /**
    Create a range.
    */ constructor(/**
    The lower bound of the range.
    */ $from, /**
    The upper bound of the range.
    */ $to){
        this.$from = $from;
        this.$to = $to;
    }
}
let warnedAboutTextSelection = false;
function checkTextSelection($pos) {
    if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
        warnedAboutTextSelection = true;
        console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
    }
}
/**
A text selection represents a classical editor selection, with a
head (the moving side) and anchor (immobile side), both of which
point into textblock nodes. It can be empty (a regular cursor
position).
*/ class TextSelection extends Selection {
    /**
    Construct a text selection between the given points.
    */ constructor($anchor, $head = $anchor){
        checkTextSelection($anchor);
        checkTextSelection($head);
        super($anchor, $head);
    }
    /**
    Returns a resolved position if this is a cursor selection (an
    empty text selection), and null otherwise.
    */ get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(doc, mapping) {
        let $head = doc.resolve(mapping.map(this.head));
        if (!$head.parent.inlineContent) return Selection.near($head);
        let $anchor = doc.resolve(mapping.map(this.anchor));
        return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
        super.replace(tr, content);
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
            let marks = this.$from.marksAcross(this.$to);
            if (marks) tr.ensureMarks(marks);
        }
    }
    eq(other) {
        return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
    }
    getBookmark() {
        return new TextBookmark(this.anchor, this.head);
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        };
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
    }
    /**
    Create a text selection from non-resolved positions.
    */ static create(doc, anchor, head = anchor) {
        let $anchor = doc.resolve(anchor);
        return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
    }
    /**
    Return a text selection that spans the given positions or, if
    they aren't text positions, find a text selection near them.
    `bias` determines whether the method searches forward (default)
    or backwards (negative number) first. Will fall back to calling
    [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
    doesn't contain a valid text position.
    */ static between($anchor, $head, bias) {
        let dPos = $anchor.pos - $head.pos;
        if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
        if (!$head.parent.inlineContent) {
            let found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
            if (found) $head = found.$head;
            else return Selection.near($head, bias);
        }
        if (!$anchor.parent.inlineContent) {
            if (dPos == 0) {
                $anchor = $head;
            } else {
                $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
                if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
            }
        }
        return new TextSelection($anchor, $head);
    }
}
Selection.jsonID("text", TextSelection);
class TextBookmark {
    constructor(anchor, head){
        this.anchor = anchor;
        this.head = head;
    }
    map(mapping) {
        return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
    resolve(doc) {
        return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
    }
}
/**
A node selection is a selection that points at a single node. All
nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
target of a node selection. In such a selection, `from` and `to`
point directly before and after the selected node, `anchor` equals
`from`, and `head` equals `to`..
*/ class NodeSelection extends Selection {
    /**
    Create a node selection. Does not verify the validity of its
    argument.
    */ constructor($pos){
        let node = $pos.nodeAfter;
        let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
        super($pos, $end);
        this.node = node;
    }
    map(doc, mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        let $pos = doc.resolve(pos);
        if (deleted) return Selection.near($pos);
        return new NodeSelection($pos);
    }
    content() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(this.node), 0, 0);
    }
    eq(other) {
        return other instanceof NodeSelection && other.anchor == this.anchor;
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        };
    }
    getBookmark() {
        return new NodeBookmark(this.anchor);
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new NodeSelection(doc.resolve(json.anchor));
    }
    /**
    Create a node selection from non-resolved positions.
    */ static create(doc, from) {
        return new NodeSelection(doc.resolve(from));
    }
    /**
    Determines whether the given node may be selected as a node
    selection.
    */ static isSelectable(node) {
        return !node.isText && node.type.spec.selectable !== false;
    }
}
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
class NodeBookmark {
    constructor(anchor){
        this.anchor = anchor;
    }
    map(mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
    }
    resolve(doc) {
        let $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
        if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
        return Selection.near($pos);
    }
}
/**
A selection type that represents selecting the whole document
(which can not necessarily be expressed with a text selection, when
there are for example leaf block nodes at the start or end of the
document).
*/ class AllSelection extends Selection {
    /**
    Create an all-selection over the given document.
    */ constructor(doc){
        super(doc.resolve(0), doc.resolve(doc.content.size));
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"].empty) {
            tr.delete(0, tr.doc.content.size);
            let sel = Selection.atStart(tr.doc);
            if (!sel.eq(tr.selection)) tr.setSelection(sel);
        } else {
            super.replace(tr, content);
        }
    }
    toJSON() {
        return {
            type: "all"
        };
    }
    /**
    @internal
    */ static fromJSON(doc) {
        return new AllSelection(doc);
    }
    map(doc) {
        return new AllSelection(doc);
    }
    eq(other) {
        return other instanceof AllSelection;
    }
    getBookmark() {
        return AllBookmark;
    }
}
Selection.jsonID("all", AllSelection);
const AllBookmark = {
    map () {
        return this;
    },
    resolve (doc) {
        return new AllSelection(doc);
    }
};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(doc, node, pos, index, dir, text = false) {
    if (node.inlineContent) return TextSelection.create(doc, pos);
    for(let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir){
        let child = node.child(i);
        if (!child.isAtom) {
            let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
            if (inner) return inner;
        } else if (!text && NodeSelection.isSelectable(child)) {
            return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
        }
        pos += child.nodeSize * dir;
    }
    return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
    let last = tr.steps.length - 1;
    if (last < startLen) return;
    let step = tr.steps[last];
    if (!(step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceStep"] || step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaceAroundStep"])) return;
    let map = tr.mapping.maps[last], end;
    map.forEach((_from, _to, _newFrom, newTo)=>{
        if (end == null) end = newTo;
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
const UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4;
/**
An editor state transaction, which can be applied to a state to
create an updated state. Use
[`EditorState.tr`](https://prosemirror.net/docs/ref/#state.EditorState.tr) to create an instance.

Transactions track changes to the document (they are a subclass of
[`Transform`](https://prosemirror.net/docs/ref/#transform.Transform)), but also other state changes,
like selection updates and adjustments of the set of [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks). In addition, you can store
metadata properties in a transaction, which are extra pieces of
information that client code or plugins can use to describe what a
transaction represents, so that they can update their [own
state](https://prosemirror.net/docs/ref/#state.StateField) accordingly.

The [editor view](https://prosemirror.net/docs/ref/#view.EditorView) uses a few metadata
properties: it will attach a property `"pointer"` with the value
`true` to selection transactions directly caused by mouse or touch
input, a `"composition"` property holding an ID identifying the
composition that caused it to transactions caused by composed DOM
input, and a `"uiEvent"` property of that may be `"paste"`,
`"cut"`, or `"drop"`.
*/ class Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"] {
    /**
    @internal
    */ constructor(state){
        super(state.doc);
        // The step count for which the current selection is valid.
        this.curSelectionFor = 0;
        // Bitfield to track which aspects of the state were updated by
        // this transaction.
        this.updated = 0;
        // Object used to store metadata properties for the transaction.
        this.meta = Object.create(null);
        this.time = Date.now();
        this.curSelection = state.selection;
        this.storedMarks = state.storedMarks;
    }
    /**
    The transaction's current selection. This defaults to the editor
    selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
    transaction, but can be overwritten with
    [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
    */ get selection() {
        if (this.curSelectionFor < this.steps.length) {
            this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
            this.curSelectionFor = this.steps.length;
        }
        return this.curSelection;
    }
    /**
    Update the transaction's current selection. Will determine the
    selection that the editor gets when the transaction is applied.
    */ setSelection(selection) {
        if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        this.curSelection = selection;
        this.curSelectionFor = this.steps.length;
        this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
        this.storedMarks = null;
        return this;
    }
    /**
    Whether the selection was explicitly updated by this transaction.
    */ get selectionSet() {
        return (this.updated & UPDATED_SEL) > 0;
    }
    /**
    Set the current stored marks.
    */ setStoredMarks(marks) {
        this.storedMarks = marks;
        this.updated |= UPDATED_MARKS;
        return this;
    }
    /**
    Make sure the current stored marks or, if that is null, the marks
    at the selection, match the given set of marks. Does nothing if
    this is already the case.
    */ ensureMarks(marks) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"].sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
        return this;
    }
    /**
    Add a mark to the set of stored marks.
    */ addStoredMark(mark) {
        return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Remove a mark or mark type from the set of stored marks.
    */ removeStoredMark(mark) {
        return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Whether the stored marks were explicitly set for this transaction.
    */ get storedMarksSet() {
        return (this.updated & UPDATED_MARKS) > 0;
    }
    /**
    @internal
    */ addStep(step, doc) {
        super.addStep(step, doc);
        this.updated = this.updated & ~UPDATED_MARKS;
        this.storedMarks = null;
    }
    /**
    Update the timestamp for the transaction.
    */ setTime(time) {
        this.time = time;
        return this;
    }
    /**
    Replace the current selection with the given slice.
    */ replaceSelection(slice) {
        this.selection.replace(this, slice);
        return this;
    }
    /**
    Replace the selection with the given node. When `inheritMarks` is
    true and the content is inline, it inherits the marks from the
    place where it is inserted.
    */ replaceSelectionWith(node, inheritMarks = true) {
        let selection = this.selection;
        if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"].none));
        selection.replaceWith(this, node);
        return this;
    }
    /**
    Delete the selection.
    */ deleteSelection() {
        this.selection.replace(this);
        return this;
    }
    /**
    Replace the given range, or the selection if no range is given,
    with a text node containing the given string.
    */ insertText(text, from, to) {
        let schema = this.doc.type.schema;
        if (from == null) {
            if (!text) return this.deleteSelection();
            return this.replaceSelectionWith(schema.text(text), true);
        } else {
            if (to == null) to = from;
            if (!text) return this.deleteRange(from, to);
            let marks = this.storedMarks;
            if (!marks) {
                let $from = this.doc.resolve(from);
                marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
            }
            this.replaceRangeWith(from, to, schema.text(text, marks));
            if (!this.selection.empty && this.selection.to == from + text.length) this.setSelection(Selection.near(this.selection.$to));
            return this;
        }
    }
    /**
    Store a metadata property in this transaction, keyed either by
    name or by plugin.
    */ setMeta(key, value) {
        this.meta[typeof key == "string" ? key : key.key] = value;
        return this;
    }
    /**
    Retrieve a metadata property for a given name or plugin.
    */ getMeta(key) {
        return this.meta[typeof key == "string" ? key : key.key];
    }
    /**
    Returns true if this transaction doesn't contain any metadata,
    and can thus safely be extended.
    */ get isGeneric() {
        for(let _ in this.meta)return false;
        return true;
    }
    /**
    Indicate that the editor should scroll the selection into view
    when updated to the state produced by this transaction.
    */ scrollIntoView() {
        this.updated |= UPDATED_SCROLL;
        return this;
    }
    /**
    True when this transaction has had `scrollIntoView` called on it.
    */ get scrolledIntoView() {
        return (this.updated & UPDATED_SCROLL) > 0;
    }
}
function bind(f, self) {
    return !self || !f ? f : f.bind(self);
}
class FieldDesc {
    constructor(name, desc, self){
        this.name = name;
        this.init = bind(desc.init, self);
        this.apply = bind(desc.apply, self);
    }
}
const baseFields = [
    new FieldDesc("doc", {
        init (config) {
            return config.doc || config.schema.topNodeType.createAndFill();
        },
        apply (tr) {
            return tr.doc;
        }
    }),
    new FieldDesc("selection", {
        init (config, instance) {
            return config.selection || Selection.atStart(instance.doc);
        },
        apply (tr) {
            return tr.selection;
        }
    }),
    new FieldDesc("storedMarks", {
        init (config) {
            return config.storedMarks || null;
        },
        apply (tr, _marks, _old, state) {
            return state.selection.$cursor ? tr.storedMarks : null;
        }
    }),
    new FieldDesc("scrollToSelection", {
        init () {
            return 0;
        },
        apply (tr, prev) {
            return tr.scrolledIntoView ? prev + 1 : prev;
        }
    })
];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
class Configuration {
    constructor(schema, plugins){
        this.schema = schema;
        this.plugins = [];
        this.pluginsByKey = Object.create(null);
        this.fields = baseFields.slice();
        if (plugins) plugins.forEach((plugin)=>{
            if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
            this.plugins.push(plugin);
            this.pluginsByKey[plugin.key] = plugin;
            if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
        });
    }
}
/**
The state of a ProseMirror editor is represented by an object of
this type. A state is a persistent data structure—it isn't
updated, but rather a new state value is computed from an old one
using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

A state holds a number of built-in fields, and plugins can
[define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
*/ class EditorState {
    /**
    @internal
    */ constructor(/**
    @internal
    */ config){
        this.config = config;
    }
    /**
    The schema of the state's document.
    */ get schema() {
        return this.config.schema;
    }
    /**
    The plugins that are active in this state.
    */ get plugins() {
        return this.config.plugins;
    }
    /**
    Apply the given transaction to produce a new state.
    */ apply(tr) {
        return this.applyTransaction(tr).state;
    }
    /**
    @internal
    */ filterTransaction(tr, ignore = -1) {
        for(let i = 0; i < this.config.plugins.length; i++)if (i != ignore) {
            let plugin = this.config.plugins[i];
            if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
        }
        return true;
    }
    /**
    Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
    returns the precise transactions that were applied (which might
    be influenced by the [transaction
    hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
    plugins) along with the new state.
    */ applyTransaction(rootTr) {
        if (!this.filterTransaction(rootTr)) return {
            state: this,
            transactions: []
        };
        let trs = [
            rootTr
        ], newState = this.applyInner(rootTr), seen = null;
        // This loop repeatedly gives plugins a chance to respond to
        // transactions as new transactions are added, making sure to only
        // pass the transactions the plugin did not see before.
        for(;;){
            let haveNew = false;
            for(let i = 0; i < this.config.plugins.length; i++){
                let plugin = this.config.plugins[i];
                if (plugin.spec.appendTransaction) {
                    let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
                    let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
                    if (tr && newState.filterTransaction(tr, i)) {
                        tr.setMeta("appendedTransaction", rootTr);
                        if (!seen) {
                            seen = [];
                            for(let j = 0; j < this.config.plugins.length; j++)seen.push(j < i ? {
                                state: newState,
                                n: trs.length
                            } : {
                                state: this,
                                n: 0
                            });
                        }
                        trs.push(tr);
                        newState = newState.applyInner(tr);
                        haveNew = true;
                    }
                    if (seen) seen[i] = {
                        state: newState,
                        n: trs.length
                    };
                }
            }
            if (!haveNew) return {
                state: newState,
                transactions: trs
            };
        }
    }
    /**
    @internal
    */ applyInner(tr) {
        if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        let newInstance = new EditorState(this.config), fields = this.config.fields;
        for(let i = 0; i < fields.length; i++){
            let field = fields[i];
            newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
        }
        return newInstance;
    }
    /**
    Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
    */ get tr() {
        return new Transaction(this);
    }
    /**
    Create a new state.
    */ static create(config) {
        let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
        let instance = new EditorState($config);
        for(let i = 0; i < $config.fields.length; i++)instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
        return instance;
    }
    /**
    Create a new state based on this one, but with an adjusted set
    of active plugins. State fields that exist in both sets of
    plugins are kept unchanged. Those that no longer exist are
    dropped, and those that are new are initialized using their
    [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
    configuration object..
    */ reconfigure(config) {
        let $config = new Configuration(this.schema, config.plugins);
        let fields = $config.fields, instance = new EditorState($config);
        for(let i = 0; i < fields.length; i++){
            let name = fields[i].name;
            instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
        }
        return instance;
    }
    /**
    Serialize this state to JSON. If you want to serialize the state
    of plugins, pass an object mapping property names to use in the
    resulting JSON object to plugin objects. The argument may also be
    a string or number, in which case it is ignored, to support the
    way `JSON.stringify` calls `toString` methods.
    */ toJSON(pluginFields) {
        let result = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks) result.storedMarks = this.storedMarks.map((m)=>m.toJSON());
        if (pluginFields && typeof pluginFields == 'object') for(let prop in pluginFields){
            if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            let plugin = pluginFields[prop], state = plugin.spec.state;
            if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
        }
        return result;
    }
    /**
    Deserialize a JSON representation of a state. `config` should
    have at least a `schema` field, and should contain array of
    plugins to initialize the state with. `pluginFields` can be used
    to deserialize the state of plugins, by associating plugin
    instances with the property names they use in the JSON object.
    */ static fromJSON(config, json, pluginFields) {
        if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!config.schema) throw new RangeError("Required config field 'schema' missing");
        let $config = new Configuration(config.schema, config.plugins);
        let instance = new EditorState($config);
        $config.fields.forEach((field)=>{
            if (field.name == "doc") {
                instance.doc = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].fromJSON(config.schema, json.doc);
            } else if (field.name == "selection") {
                instance.selection = Selection.fromJSON(instance.doc, json.selection);
            } else if (field.name == "storedMarks") {
                if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
            } else {
                if (pluginFields) for(let prop in pluginFields){
                    let plugin = pluginFields[prop], state = plugin.spec.state;
                    if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
                        instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
                        return;
                    }
                }
                instance[field.name] = field.init(config, instance);
            }
        });
        return instance;
    }
}
function bindProps(obj, self, target) {
    for(let prop in obj){
        let val = obj[prop];
        if (val instanceof Function) val = val.bind(self);
        else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
        target[prop] = val;
    }
    return target;
}
/**
Plugins bundle functionality that can be added to an editor.
They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
may influence that state and the view that contains it.
*/ class Plugin {
    /**
    Create a plugin.
    */ constructor(/**
    The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
    */ spec){
        this.spec = spec;
        /**
        The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
        */ this.props = {};
        if (spec.props) bindProps(spec.props, this, this.props);
        this.key = spec.key ? spec.key.key : createKey("plugin");
    }
    /**
    Extract the plugin's state field from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
const keys = Object.create(null);
function createKey(name) {
    if (name in keys) return name + "$" + ++keys[name];
    keys[name] = 0;
    return name + "$";
}
/**
A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
that makes it possible to find them, given an editor state.
Assigning a key does mean only one plugin of that type can be
active in a state.
*/ class PluginKey {
    /**
    Create a plugin key.
    */ constructor(name = "key"){
        this.key = createKey(name);
    }
    /**
    Get the active plugin with this key, if any, from an editor
    state.
    */ get(state) {
        return state.config.pluginsByKey[this.key];
    }
    /**
    Get the plugin's state from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/keys.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "yCursorPluginKey",
    ()=>yCursorPluginKey,
    "ySyncPluginKey",
    ()=>ySyncPluginKey,
    "yUndoPluginKey",
    ()=>yUndoPluginKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)"); // eslint-disable-line
;
const ySyncPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('y-sync');
const yUndoPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('y-undo');
const yCursorPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('yjs-cursor');
}),
"[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashOfJSON",
    ()=>hashOfJSON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$hash$2f$sha256$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/hash/sha256.node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/buffer.js [app-ssr] (ecmascript)");
;
;
/**
 * Custom function to transform sha256 hash to N byte
 *
 * @param {Uint8Array} digest
 */ const _convolute = (digest)=>{
    const N = 6;
    for(let i = N; i < digest.length; i++){
        digest[i % N] = digest[i % N] ^ digest[i];
    }
    return digest.slice(0, N);
};
const hashOfJSON = (json)=>__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](_convolute(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$hash$2f$sha256$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["digest"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAny"](json))));
}),
"[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/sync-plugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProsemirrorBinding",
    ()=>ProsemirrorBinding,
    "attributesToMarks",
    ()=>attributesToMarks,
    "createEmptyMeta",
    ()=>createEmptyMeta,
    "createNodeFromYElement",
    ()=>createNodeFromYElement,
    "getRelativeSelection",
    ()=>getRelativeSelection,
    "isVisible",
    ()=>isVisible,
    "updateYFragment",
    ()=>updateYFragment,
    "ySyncPlugin",
    ()=>ySyncPlugin,
    "yattr2markname",
    ()=>yattr2markname
]);
/**
 * @module bindings/prosemirror
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$mutex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/mutex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)"); // eslint-disable-line
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/math.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/keys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/yjs/dist/yjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/lib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$eventloop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/eventloop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const createEmptyMeta = ()=>({
        mapping: new Map(),
        isOMark: new Map()
    });
const isVisible = (item, snapshot)=>snapshot === undefined ? !item.deleted : snapshot.sv.has(item.id.client) && /** @type {number} */ snapshot.sv.get(item.id.client) > item.id.clock && !__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDeleted"](snapshot.ds, item.id);
/**
 * Either a node if type is YXmlElement or an Array of text nodes if YXmlText
 * @typedef {Map<Y.AbstractType<any>, PModel.Node | Array<PModel.Node>>} ProsemirrorMapping
 */ /**
 * @typedef {Object} ColorDef
 * @property {string} ColorDef.light
 * @property {string} ColorDef.dark
 */ /**
 * @typedef {Object} YSyncOpts
 * @property {Array<ColorDef>} [YSyncOpts.colors]
 * @property {Map<string,ColorDef>} [YSyncOpts.colorMapping]
 * @property {Y.PermanentUserData|null} [YSyncOpts.permanentUserData]
 * @property {ProsemirrorMapping} [YSyncOpts.mapping]
 * @property {function} [YSyncOpts.onFirstRender] Fired when the content from Yjs is initially rendered to ProseMirror
 */ /**
 * @type {Array<ColorDef>}
 */ const defaultColors = [
    {
        light: '#ecd44433',
        dark: '#ecd444'
    }
];
/**
 * @param {Map<string,ColorDef>} colorMapping
 * @param {Array<ColorDef>} colors
 * @param {string} user
 * @return {ColorDef}
 */ const getUserColor = (colorMapping, colors, user)=>{
    // @todo do not hit the same color twice if possible
    if (!colorMapping.has(user)) {
        if (colorMapping.size < colors.length) {
            const usedColors = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]();
            colorMapping.forEach((color)=>usedColors.add(color));
            colors = colors.filter((color)=>!usedColors.has(color));
        }
        colorMapping.set(user, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oneOf"](colors));
    }
    return colorMapping.get(user);
};
const ySyncPlugin = (yXmlFragment, { colors = defaultColors, colorMapping = new Map(), permanentUserData = null, onFirstRender = ()=>{}, mapping } = {})=>{
    let initialContentChanged = false;
    const binding = new ProsemirrorBinding(yXmlFragment, mapping);
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        props: {
            editable: (state)=>{
                const syncState = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"].getState(state);
                return syncState.snapshot == null && syncState.prevSnapshot == null;
            }
        },
        key: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"],
        state: {
            /**
       * @returns {any}
       */ init: (_initargs, _state)=>{
                return {
                    type: yXmlFragment,
                    doc: yXmlFragment.doc,
                    binding,
                    snapshot: null,
                    prevSnapshot: null,
                    isChangeOrigin: false,
                    isUndoRedoOperation: false,
                    addToHistory: true,
                    colors,
                    colorMapping,
                    permanentUserData
                };
            },
            apply: (tr, pluginState)=>{
                const change = tr.getMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
                if (change !== undefined) {
                    pluginState = Object.assign({}, pluginState);
                    for(const key in change){
                        pluginState[key] = change[key];
                    }
                }
                pluginState.addToHistory = tr.getMeta('addToHistory') !== false;
                // always set isChangeOrigin. If undefined, this is not change origin.
                pluginState.isChangeOrigin = change !== undefined && !!change.isChangeOrigin;
                pluginState.isUndoRedoOperation = change !== undefined && !!change.isChangeOrigin && !!change.isUndoRedoOperation;
                if (binding.prosemirrorView !== null) {
                    if (change !== undefined && (change.snapshot != null || change.prevSnapshot != null)) {
                        // snapshot changed, rerender next
                        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$eventloop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeout"](0, ()=>{
                            if (binding.prosemirrorView == null) {
                                return;
                            }
                            if (change.restore == null) {
                                binding._renderSnapshot(change.snapshot, change.prevSnapshot, pluginState);
                            } else {
                                binding._renderSnapshot(change.snapshot, change.snapshot, pluginState);
                                // reset to current prosemirror state
                                delete pluginState.restore;
                                delete pluginState.snapshot;
                                delete pluginState.prevSnapshot;
                                binding.mux(()=>{
                                    binding._prosemirrorChanged(binding.prosemirrorView.state.doc);
                                });
                            }
                        });
                    }
                }
                return pluginState;
            }
        },
        view: (view)=>{
            binding.initView(view);
            if (mapping == null) {
                // force rerender to update the bindings mapping
                binding._forceRerender();
            }
            onFirstRender();
            return {
                update: ()=>{
                    const pluginState = plugin.getState(view.state);
                    if (pluginState.snapshot == null && pluginState.prevSnapshot == null) {
                        if (// If the content doesn't change initially, we don't render anything to Yjs
                        // If the content was cleared by a user action, we want to catch the change and
                        // represent it in Yjs
                        initialContentChanged || view.state.doc.content.findDiffStart(view.state.doc.type.createAndFill().content) !== null) {
                            initialContentChanged = true;
                            if (pluginState.addToHistory === false && !pluginState.isChangeOrigin) {
                                const yUndoPluginState = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yUndoPluginKey"].getState(view.state);
                                /**
                 * @type {Y.UndoManager}
                 */ const um = yUndoPluginState && yUndoPluginState.undoManager;
                                if (um) {
                                    um.stopCapturing();
                                }
                            }
                            binding.mux(()=>{
                                /** @type {Y.Doc} */ pluginState.doc.transact((tr)=>{
                                    tr.meta.set('addToHistory', pluginState.addToHistory);
                                    binding._prosemirrorChanged(view.state.doc);
                                }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
                            });
                        }
                    }
                },
                destroy: ()=>{
                    binding.destroy();
                }
            };
        }
    });
    return plugin;
};
/**
 * @param {import('prosemirror-state').Transaction} tr
 * @param {ReturnType<typeof getRelativeSelection>} relSel
 * @param {ProsemirrorBinding} binding
 */ const restoreRelativeSelection = (tr, relSel, binding)=>{
    if (relSel !== null && relSel.anchor !== null && relSel.head !== null) {
        if (relSel.type === 'all') {
            tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AllSelection"](tr.doc));
        } else if (relSel.type === 'node') {
            const anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relativePositionToAbsolutePosition"])(binding.doc, binding.type, relSel.anchor, binding.mapping);
            tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeSelection"].create(tr.doc, anchor));
        } else {
            const anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relativePositionToAbsolutePosition"])(binding.doc, binding.type, relSel.anchor, binding.mapping);
            const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relativePositionToAbsolutePosition"])(binding.doc, binding.type, relSel.head, binding.mapping);
            if (anchor !== null && head !== null) {
                const sel = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextSelection"].between(tr.doc.resolve(anchor), tr.doc.resolve(head));
                tr.setSelection(sel);
            }
        }
    }
};
const getRelativeSelection = (pmbinding, state)=>({
        type: /** @type {any} */ state.selection.jsonID,
        anchor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["absolutePositionToRelativePosition"])(state.selection.anchor, pmbinding.type, pmbinding.mapping),
        head: (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["absolutePositionToRelativePosition"])(state.selection.head, pmbinding.type, pmbinding.mapping)
    });
class ProsemirrorBinding {
    /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */ constructor(yXmlFragment, mapping = new Map()){
        this.type = yXmlFragment;
        /**
     * this will be set once the view is created
     * @type {any}
     */ this.prosemirrorView = null;
        this.mux = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$mutex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMutex"])();
        this.mapping = mapping;
        /**
     * Is overlapping mark - i.e. mark does not exclude itself.
     *
     * @type {Map<import('prosemirror-model').MarkType, boolean>}
     */ this.isOMark = new Map();
        this._observeFunction = this._typeChanged.bind(this);
        /**
     * @type {Y.Doc}
     */ // @ts-ignore
        this.doc = yXmlFragment.doc;
        /**
     * current selection as relative positions in the Yjs model
     */ this.beforeTransactionSelection = null;
        this.beforeAllTransactions = ()=>{
            if (this.beforeTransactionSelection === null && this.prosemirrorView != null) {
                this.beforeTransactionSelection = getRelativeSelection(this, this.prosemirrorView.state);
            }
        };
        this.afterAllTransactions = ()=>{
            this.beforeTransactionSelection = null;
        };
        this._domSelectionInView = null;
    }
    /**
   * Create a transaction for changing the prosemirror state.
   *
   * @returns
   */ get _tr() {
        return this.prosemirrorView.state.tr.setMeta('addToHistory', false);
    }
    _isLocalCursorInView() {
        if (!this.prosemirrorView.hasFocus()) return false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"] && this._domSelectionInView === null) {
            // Calculate the domSelectionInView and clear by next tick after all events are finished
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$eventloop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeout"](0, ()=>{
                this._domSelectionInView = null;
            });
            this._domSelectionInView = this._isDomSelectionInView();
        }
        return this._domSelectionInView;
    }
    _isDomSelectionInView() {
        const selection = this.prosemirrorView._root.getSelection();
        if (selection == null || selection.anchorNode == null) return false;
        const range = this.prosemirrorView._root.createRange();
        range.setStart(selection.anchorNode, selection.anchorOffset);
        range.setEnd(selection.focusNode, selection.focusOffset);
        // This is a workaround for an edgecase where getBoundingClientRect will
        // return zero values if the selection is collapsed at the start of a newline
        // see reference here: https://stackoverflow.com/a/59780954
        const rects = range.getClientRects();
        if (rects.length === 0) {
            // probably buggy newline behavior, explicitly select the node contents
            if (range.startContainer && range.collapsed) {
                range.selectNodeContents(range.startContainer);
            }
        }
        const bounding = range.getBoundingClientRect();
        const documentElement = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"].documentElement;
        return bounding.bottom >= 0 && bounding.right >= 0 && bounding.left <= (window.innerWidth || documentElement.clientWidth || 0) && bounding.top <= (window.innerHeight || documentElement.clientHeight || 0);
    }
    /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */ renderSnapshot(snapshot, prevSnapshot) {
        if (!prevSnapshot) {
            prevSnapshot = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSnapshot"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDeleteSet"](), new Map());
        }
        this.prosemirrorView.dispatch(this._tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"], {
            snapshot,
            prevSnapshot
        }));
    }
    unrenderSnapshot() {
        this.mapping.clear();
        this.mux(()=>{
            const fragmentContent = this.type.toArray().map((t)=>createNodeFromYElement(t, this.prosemirrorView.state.schema, this)).filter((n)=>n !== null);
            // @ts-ignore
            const tr = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(fragmentContent), 0, 0));
            tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"], {
                snapshot: null,
                prevSnapshot: null
            });
            this.prosemirrorView.dispatch(tr);
        });
    }
    _forceRerender() {
        this.mapping.clear();
        this.mux(()=>{
            // If this is a forced rerender, this might neither happen as a pm change nor within a Yjs
            // transaction. Then the "before selection" doesn't exist. In this case, we need to create a
            // relative position before replacing content. Fixes #126
            const sel = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection;
            const fragmentContent = this.type.toArray().map((t)=>createNodeFromYElement(t, this.prosemirrorView.state.schema, this)).filter((n)=>n !== null);
            // @ts-ignore
            const tr = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(fragmentContent), 0, 0));
            if (sel) {
                /**
         * If the Prosemirror document we just created from this.type is
         * smaller than the previous document, the selection might be
         * out of bound, which would make Prosemirror throw an error.
         */ const clampedAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"](sel.anchor, 0), tr.doc.content.size);
                const clampedHead = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"](sel.head, 0), tr.doc.content.size);
                tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, clampedAnchor, clampedHead));
            }
            this.prosemirrorView.dispatch(tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"], {
                isChangeOrigin: true,
                binding: this
            }));
        });
    }
    /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */ _renderSnapshot(snapshot, prevSnapshot, pluginState) {
        /**
     * The document that contains the full history of this document.
     * @type {Y.Doc}
     */ let historyDoc = this.doc;
        let historyType = this.type;
        if (!snapshot) {
            snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"](this.doc);
        }
        if (snapshot instanceof Uint8Array || prevSnapshot instanceof Uint8Array) {
            if (!(snapshot instanceof Uint8Array) || !(prevSnapshot instanceof Uint8Array)) {
                // expected both snapshots to be v2 updates
                __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unexpectedCase"]();
            }
            historyDoc = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doc"]({
                gc: false
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyUpdateV2"](historyDoc, prevSnapshot);
            prevSnapshot = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"](historyDoc);
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyUpdateV2"](historyDoc, snapshot);
            snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"](historyDoc);
            if (historyType._item === null) {
                /**
         * If is a root type, we need to find the root key in the initial document
         * and use it to get the history type.
         */ const rootKey = Array.from(this.doc.share.keys()).find((key)=>this.doc.share.get(key) === this.type);
                historyType = historyDoc.getXmlFragment(rootKey);
            } else {
                /**
         * If it is a sub type, we use the item id to find the history type.
         */ const historyStructs = historyDoc.store.clients.get(historyType._item.id.client) ?? [];
                const itemIndex = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findIndexSS"](historyStructs, historyType._item.id.clock);
                const item = historyStructs[itemIndex];
                const content = item.content;
                historyType = content.type;
            }
        }
        // clear mapping because we are going to rerender
        this.mapping.clear();
        this.mux(()=>{
            historyDoc.transact((transaction)=>{
                // before rendering, we are going to sanitize ops and split deleted ops
                // if they were deleted by seperate users.
                /**
         * @type {Y.PermanentUserData}
         */ const pud = pluginState.permanentUserData;
                if (pud) {
                    pud.dss.forEach((ds)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iterateDeletedStructs"](transaction, ds, (_item)=>{});
                    });
                }
                /**
         * @param {'removed'|'added'} type
         * @param {Y.ID} id
         */ const computeYChange = (type, id)=>{
                    const user = type === 'added' ? pud.getUserByClientId(id.client) : pud.getUserByDeletedId(id);
                    return {
                        user,
                        type,
                        color: getUserColor(pluginState.colorMapping, pluginState.colors, user)
                    };
                };
                // Create document fragment and render
                const fragmentContent = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeListToArraySnapshot"](historyType, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Snapshot"](prevSnapshot.ds, snapshot.sv)).map((t)=>{
                    if (!t._item.deleted || isVisible(t._item, snapshot) || isVisible(t._item, prevSnapshot)) {
                        return createNodeFromYElement(t, this.prosemirrorView.state.schema, {
                            mapping: new Map(),
                            isOMark: new Map()
                        }, snapshot, prevSnapshot, computeYChange);
                    } else {
                        // No need to render elements that are not visible by either snapshot.
                        // If a client adds and deletes content in the same snapshot the element is not visible by either snapshot.
                        return null;
                    }
                }).filter((n)=>n !== null);
                // @ts-ignore
                const tr = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(fragmentContent), 0, 0));
                this.prosemirrorView.dispatch(tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"], {
                    isChangeOrigin: true
                }));
            }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
        });
    }
    /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */ _typeChanged(events, transaction) {
        if (this.prosemirrorView == null) return;
        const syncState = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"].getState(this.prosemirrorView.state);
        if (events.length === 0 || syncState.snapshot != null || syncState.prevSnapshot != null) {
            // drop out if snapshot is active
            this.renderSnapshot(syncState.snapshot, syncState.prevSnapshot);
            return;
        }
        this.mux(()=>{
            /**
       * @param {any} _
       * @param {Y.AbstractType<any>} type
       */ const delType = (_, type)=>this.mapping.delete(type);
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iterateDeletedStructs"](transaction, transaction.deleteSet, (struct)=>{
                if (struct.constructor === __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"]) {
                    const type = /** @type {Y.ContentType} */ /** @type {Y.Item} */ struct.content.type;
                    type && this.mapping.delete(type);
                }
            });
            transaction.changed.forEach(delType);
            transaction.changedParentTypes.forEach(delType);
            const fragmentContent = this.type.toArray().map((t)=>createNodeIfNotExists(t, this.prosemirrorView.state.schema, this)).filter((n)=>n !== null);
            // @ts-ignore
            let tr = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].from(fragmentContent), 0, 0));
            restoreRelativeSelection(tr, this.beforeTransactionSelection, this);
            tr = tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"], {
                isChangeOrigin: true,
                isUndoRedoOperation: transaction.origin instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UndoManager"]
            });
            if (this.beforeTransactionSelection !== null && this._isLocalCursorInView()) {
                tr.scrollIntoView();
            }
            this.prosemirrorView.dispatch(tr);
        });
    }
    /**
   * @param {import('prosemirror-model').Node} doc
   */ _prosemirrorChanged(doc) {
        this.doc.transact(()=>{
            updateYFragment(this.doc, this.type, doc, this);
            this.beforeTransactionSelection = getRelativeSelection(this, this.prosemirrorView.state);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
    }
    /**
   * View is ready to listen to changes. Register observers.
   * @param {any} prosemirrorView
   */ initView(prosemirrorView) {
        if (this.prosemirrorView != null) this.destroy();
        this.prosemirrorView = prosemirrorView;
        this.doc.on('beforeAllTransactions', this.beforeAllTransactions);
        this.doc.on('afterAllTransactions', this.afterAllTransactions);
        this.type.observeDeep(this._observeFunction);
    }
    destroy() {
        if (this.prosemirrorView == null) return;
        this.prosemirrorView = null;
        this.type.unobserveDeep(this._observeFunction);
        this.doc.off('beforeAllTransactions', this.beforeAllTransactions);
        this.doc.off('afterAllTransactions', this.afterAllTransactions);
    }
}
/**
 * @private
 * @param {Y.XmlElement | Y.XmlHook} el
 * @param {PModel.Schema} schema
 * @param {BindingMetadata} meta
 * @param {Y.Snapshot} [snapshot]
 * @param {Y.Snapshot} [prevSnapshot]
 * @param {function('removed' | 'added', Y.ID):any} [computeYChange]
 * @return {PModel.Node | null}
 */ const createNodeIfNotExists = (el, schema, meta, snapshot, prevSnapshot, computeYChange)=>{
    const node = meta.mapping.get(el);
    if (node === undefined) {
        if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"]) {
            return createNodeFromYElement(el, schema, meta, snapshot, prevSnapshot, computeYChange);
        } else {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["methodUnimplemented"]() // we are currently not handling hooks
            ;
        }
    }
    return node;
};
const createNodeFromYElement = (el, schema, meta, snapshot, prevSnapshot, computeYChange)=>{
    const children = [];
    /**
   * @param {Y.XmlElement | Y.XmlText} type
   */ const createChildren = (type)=>{
        if (type instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"]) {
            const n = createNodeIfNotExists(type, schema, meta, snapshot, prevSnapshot, computeYChange);
            if (n !== null) {
                children.push(n);
            }
        } else {
            // If the next ytext exists and was created by us, move the content to the current ytext.
            // This is a fix for #160 -- duplication of characters when two Y.Text exist next to each
            // other.
            const nextytext = /** @type {Y.ContentType} */ type._item.right?.content?.type;
            if (nextytext instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"] && !nextytext._item.deleted && nextytext._item.id.client === nextytext.doc.clientID) {
                type.applyDelta([
                    {
                        retain: type.length
                    },
                    ...nextytext.toDelta()
                ]);
                nextytext.doc.transact((tr)=>{
                    nextytext._item.delete(tr);
                });
            }
            // now create the prosemirror text nodes
            const ns = createTextNodesFromYText(type, schema, meta, snapshot, prevSnapshot, computeYChange);
            if (ns !== null) {
                ns.forEach((textchild)=>{
                    if (textchild !== null) {
                        children.push(textchild);
                    }
                });
            }
        }
    };
    if (snapshot === undefined || prevSnapshot === undefined) {
        el.toArray().forEach(createChildren);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeListToArraySnapshot"](el, new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Snapshot"](prevSnapshot.ds, snapshot.sv)).forEach(createChildren);
    }
    try {
        const attrs = el.getAttributes(snapshot);
        if (snapshot !== undefined) {
            if (!isVisible(el._item, snapshot)) {
                attrs.ychange = computeYChange ? computeYChange('removed', /** @type {Y.Item} */ el._item.id) : {
                    type: 'removed'
                };
            } else if (!isVisible(el._item, prevSnapshot)) {
                attrs.ychange = computeYChange ? computeYChange('added', /** @type {Y.Item} */ el._item.id) : {
                    type: 'added'
                };
            }
        }
        const node = schema.node(el.nodeName, attrs, children);
        meta.mapping.set(el, node);
        return node;
    } catch (e) {
        // an error occured while creating the node. This is probably a result of a concurrent action.
        /** @type {Y.Doc} */ el.doc.transact((transaction)=>{
            /** @type {Y.Item} */ el._item.delete(transaction);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
        meta.mapping.delete(el);
        return null;
    }
};
/**
 * @private
 * @param {Y.XmlText} text
 * @param {import('prosemirror-model').Schema} schema
 * @param {BindingMetadata} _meta
 * @param {Y.Snapshot} [snapshot]
 * @param {Y.Snapshot} [prevSnapshot]
 * @param {function('removed' | 'added', Y.ID):any} [computeYChange]
 * @return {Array<PModel.Node>|null}
 */ const createTextNodesFromYText = (text, schema, _meta, snapshot, prevSnapshot, computeYChange)=>{
    const nodes = [];
    const deltas = text.toDelta(snapshot, prevSnapshot, computeYChange);
    try {
        for(let i = 0; i < deltas.length; i++){
            const delta = deltas[i];
            nodes.push(schema.text(delta.insert, attributesToMarks(delta.attributes, schema)));
        }
    } catch (e) {
        // an error occured while creating the node. This is probably a result of a concurrent action.
        /** @type {Y.Doc} */ text.doc.transact((transaction)=>{
            /** @type {Y.Item} */ text._item.delete(transaction);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
        return null;
    }
    // @ts-ignore
    return nodes;
};
/**
 * @private
 * @param {Array<any>} nodes prosemirror node
 * @param {BindingMetadata} meta
 * @return {Y.XmlText}
 */ const createTypeFromTextNodes = (nodes, meta)=>{
    const type = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]();
    const delta = nodes.map((node)=>({
            // @ts-ignore
            insert: node.text,
            attributes: marksToAttributes(node.marks, meta)
        }));
    type.applyDelta(delta);
    meta.mapping.set(type, nodes);
    return type;
};
/**
 * @private
 * @param {any} node prosemirror node
 * @param {BindingMetadata} meta
 * @return {Y.XmlElement}
 */ const createTypeFromElementNode = (node, meta)=>{
    const type = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"](node.type.name);
    for(const key in node.attrs){
        const val = node.attrs[key];
        if (val !== null && key !== 'ychange') {
            type.setAttribute(key, val);
        }
    }
    type.insert(0, normalizePNodeContent(node).map((n)=>createTypeFromTextOrElementNode(n, meta)));
    meta.mapping.set(type, node);
    return type;
};
/**
 * @private
 * @param {PModel.Node|Array<PModel.Node>} node prosemirror text node
 * @param {BindingMetadata} meta
 * @return {Y.XmlElement|Y.XmlText}
 */ const createTypeFromTextOrElementNode = (node, meta)=>node instanceof Array ? createTypeFromTextNodes(node, meta) : createTypeFromElementNode(node, meta);
/**
 * @param {any} val
 */ const isObject = (val)=>typeof val === 'object' && val !== null;
/**
 * @param {any} pattrs
 * @param {any} yattrs
 */ const equalAttrs = (pattrs, yattrs)=>{
    const keys = Object.keys(pattrs).filter((key)=>pattrs[key] !== null);
    let eq = keys.length === (yattrs == null ? 0 : Object.keys(yattrs).filter((key)=>yattrs[key] !== null).length);
    for(let i = 0; i < keys.length && eq; i++){
        const key = keys[i];
        const l = pattrs[key];
        const r = yattrs[key];
        eq = key === 'ychange' || l === r || isObject(l) && isObject(r) && equalAttrs(l, r);
    }
    return eq;
};
/**
 * @typedef {Array<Array<PModel.Node>|PModel.Node>} NormalizedPNodeContent
 */ /**
 * @param {any} pnode
 * @return {NormalizedPNodeContent}
 */ const normalizePNodeContent = (pnode)=>{
    const c = pnode.content.content;
    const res = [];
    for(let i = 0; i < c.length; i++){
        const n = c[i];
        if (n.isText) {
            const textNodes = [];
            for(let tnode = c[i]; i < c.length && tnode.isText; tnode = c[++i]){
                textNodes.push(tnode);
            }
            i--;
            res.push(textNodes);
        } else {
            res.push(n);
        }
    }
    return res;
};
/**
 * @param {Y.XmlText} ytext
 * @param {Array<any>} ptexts
 */ const equalYTextPText = (ytext, ptexts)=>{
    const delta = ytext.toDelta();
    return delta.length === ptexts.length && delta.every(/** @type {(d:any,i:number) => boolean} */ (d, i)=>d.insert === /** @type {any} */ ptexts[i].text && __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"](d.attributes || {}).length === ptexts[i].marks.length && __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["every"](d.attributes, (attr, yattrname)=>{
            const markname = yattr2markname(yattrname);
            const pmarks = ptexts[i].marks;
            return equalAttrs(attr, pmarks.find(/** @param {any} mark */ (mark)=>mark.type.name === markname)?.attrs);
        }));
};
/**
 * @param {Y.XmlElement|Y.XmlText|Y.XmlHook} ytype
 * @param {any|Array<any>} pnode
 */ const equalYTypePNode = (ytype, pnode)=>{
    if (ytype instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"] && !(pnode instanceof Array) && matchNodeName(ytype, pnode)) {
        const normalizedContent = normalizePNodeContent(pnode);
        return ytype._length === normalizedContent.length && equalAttrs(ytype.getAttributes(), pnode.attrs) && ytype.toArray().every((ychild, i)=>equalYTypePNode(ychild, normalizedContent[i]));
    }
    return ytype instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"] && pnode instanceof Array && equalYTextPText(ytype, pnode);
};
/**
 * @param {PModel.Node | Array<PModel.Node> | undefined} mapped
 * @param {PModel.Node | Array<PModel.Node>} pcontent
 */ const mappedIdentity = (mapped, pcontent)=>mapped === pcontent || mapped instanceof Array && pcontent instanceof Array && mapped.length === pcontent.length && mapped.every((a, i)=>pcontent[i] === a);
/**
 * @param {Y.XmlElement} ytype
 * @param {PModel.Node} pnode
 * @param {BindingMetadata} meta
 * @return {{ foundMappedChild: boolean, equalityFactor: number }}
 */ const computeChildEqualityFactor = (ytype, pnode, meta)=>{
    const yChildren = ytype.toArray();
    const pChildren = normalizePNodeContent(pnode);
    const pChildCnt = pChildren.length;
    const yChildCnt = yChildren.length;
    const minCnt = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"](yChildCnt, pChildCnt);
    let left = 0;
    let right = 0;
    let foundMappedChild = false;
    for(; left < minCnt; left++){
        const leftY = yChildren[left];
        const leftP = pChildren[left];
        if (mappedIdentity(meta.mapping.get(leftY), leftP)) {
            foundMappedChild = true; // definite (good) match!
        } else if (!equalYTypePNode(leftY, leftP)) {
            break;
        }
    }
    for(; left + right < minCnt; right++){
        const rightY = yChildren[yChildCnt - right - 1];
        const rightP = pChildren[pChildCnt - right - 1];
        if (mappedIdentity(meta.mapping.get(rightY), rightP)) {
            foundMappedChild = true;
        } else if (!equalYTypePNode(rightY, rightP)) {
            break;
        }
    }
    return {
        equalityFactor: left + right,
        foundMappedChild
    };
};
/**
 * @param {Y.Text} ytext
 */ const ytextTrans = (ytext)=>{
    let str = '';
    /**
   * @type {Y.Item|null}
   */ let n = ytext._start;
    const nAttrs = {};
    while(n !== null){
        if (!n.deleted) {
            if (n.countable && n.content instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentString"]) {
                str += n.content.str;
            } else if (n.content instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentFormat"]) {
                nAttrs[n.content.key] = null;
            }
        }
        n = n.right;
    }
    return {
        str,
        nAttrs
    };
};
/**
 * @todo test this more
 *
 * @param {Y.Text} ytext
 * @param {Array<any>} ptexts
 * @param {BindingMetadata} meta
 */ const updateYText = (ytext, ptexts, meta)=>{
    meta.mapping.set(ytext, ptexts);
    const { nAttrs, str } = ytextTrans(ytext);
    const content = ptexts.map((p)=>({
            insert: /** @type {any} */ p.text,
            attributes: Object.assign({}, nAttrs, marksToAttributes(p.marks, meta))
        }));
    const { insert, remove, index } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleDiff"])(str, content.map((c)=>c.insert).join(''));
    ytext.delete(index, remove);
    ytext.insert(index, insert);
    ytext.applyDelta(content.map((c)=>({
            retain: c.insert.length,
            attributes: c.attributes
        })));
};
const hashedMarkNameRegex = /(.*)(--[a-zA-Z0-9+/=]{8})$/;
const yattr2markname = (attrName)=>hashedMarkNameRegex.exec(attrName)?.[1] ?? attrName;
const attributesToMarks = (attrs, schema)=>{
    /**
   * @type {Array<import('prosemirror-model').Mark>}
   */ const marks = [];
    for(const markName in attrs){
        // remove hashes if necessary
        marks.push(schema.mark(yattr2markname(markName), attrs[markName]));
    }
    return marks;
};
/**
 * @param {Array<import('prosemirror-model').Mark>} marks
 * @param {BindingMetadata} meta
 */ const marksToAttributes = (marks, meta)=>{
    const pattrs = {};
    marks.forEach((mark)=>{
        if (mark.type.name !== 'ychange') {
            const isOverlapping = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setIfUndefined"](meta.isOMark, mark.type, ()=>!mark.type.excludes(mark.type));
            pattrs[isOverlapping ? `${mark.type.name}--${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashOfJSON"](mark.toJSON())}` : mark.type.name] = mark.attrs;
        }
    });
    return pattrs;
};
const updateYFragment = (y, yDomFragment, pNode, meta)=>{
    if (yDomFragment instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"] && yDomFragment.nodeName !== pNode.type.name) {
        throw new Error('node name mismatch!');
    }
    meta.mapping.set(yDomFragment, pNode);
    // update attributes
    if (yDomFragment instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"]) {
        const yDomAttrs = yDomFragment.getAttributes();
        const pAttrs = pNode.attrs;
        for(const key in pAttrs){
            if (pAttrs[key] !== null) {
                if (yDomAttrs[key] !== pAttrs[key] && key !== 'ychange') {
                    yDomFragment.setAttribute(key, pAttrs[key]);
                }
            } else {
                yDomFragment.removeAttribute(key);
            }
        }
        // remove all keys that are no longer in pAttrs
        for(const key in yDomAttrs){
            if (pAttrs[key] === undefined) {
                yDomFragment.removeAttribute(key);
            }
        }
    }
    // update children
    const pChildren = normalizePNodeContent(pNode);
    const pChildCnt = pChildren.length;
    const yChildren = yDomFragment.toArray();
    const yChildCnt = yChildren.length;
    const minCnt = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"](pChildCnt, yChildCnt);
    let left = 0;
    let right = 0;
    // find number of matching elements from left
    for(; left < minCnt; left++){
        const leftY = yChildren[left];
        const leftP = pChildren[left];
        if (!mappedIdentity(meta.mapping.get(leftY), leftP)) {
            if (equalYTypePNode(leftY, leftP)) {
                // update mapping
                meta.mapping.set(leftY, leftP);
            } else {
                break;
            }
        }
    }
    // find number of matching elements from right
    for(; right + left < minCnt; right++){
        const rightY = yChildren[yChildCnt - right - 1];
        const rightP = pChildren[pChildCnt - right - 1];
        if (!mappedIdentity(meta.mapping.get(rightY), rightP)) {
            if (equalYTypePNode(rightY, rightP)) {
                // update mapping
                meta.mapping.set(rightY, rightP);
            } else {
                break;
            }
        }
    }
    y.transact(()=>{
        // try to compare and update
        while(yChildCnt - left - right > 0 && pChildCnt - left - right > 0){
            const leftY = yChildren[left];
            const leftP = pChildren[left];
            const rightY = yChildren[yChildCnt - right - 1];
            const rightP = pChildren[pChildCnt - right - 1];
            if (leftY instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"] && leftP instanceof Array) {
                if (!equalYTextPText(leftY, leftP)) {
                    updateYText(leftY, leftP, meta);
                }
                left += 1;
            } else {
                let updateLeft = leftY instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"] && matchNodeName(leftY, leftP);
                let updateRight = rightY instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"] && matchNodeName(rightY, rightP);
                if (updateLeft && updateRight) {
                    // decide which which element to update
                    const equalityLeft = computeChildEqualityFactor(leftY, leftP, meta);
                    const equalityRight = computeChildEqualityFactor(rightY, rightP, meta);
                    if (equalityLeft.foundMappedChild && !equalityRight.foundMappedChild) {
                        updateRight = false;
                    } else if (!equalityLeft.foundMappedChild && equalityRight.foundMappedChild) {
                        updateLeft = false;
                    } else if (equalityLeft.equalityFactor < equalityRight.equalityFactor) {
                        updateLeft = false;
                    } else {
                        updateRight = false;
                    }
                }
                if (updateLeft) {
                    updateYFragment(y, leftY, leftP, meta);
                    left += 1;
                } else if (updateRight) {
                    updateYFragment(y, rightY, rightP, meta);
                    right += 1;
                } else {
                    meta.mapping.delete(yDomFragment.get(left));
                    yDomFragment.delete(left, 1);
                    yDomFragment.insert(left, [
                        createTypeFromTextOrElementNode(leftP, meta)
                    ]);
                    left += 1;
                }
            }
        }
        const yDelLen = yChildCnt - left - right;
        if (yChildCnt === 1 && pChildCnt === 0 && yChildren[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
            meta.mapping.delete(yChildren[0]);
            // Edge case handling https://github.com/yjs/y-prosemirror/issues/108
            // Only delete the content of the Y.Text to retain remote changes on the same Y.Text object
            yChildren[0].delete(0, yChildren[0].length);
        } else if (yDelLen > 0) {
            yDomFragment.slice(left, left + yDelLen).forEach((type)=>meta.mapping.delete(type));
            yDomFragment.delete(left, yDelLen);
        }
        if (left + right < pChildCnt) {
            const ins = [];
            for(let i = left; i < pChildCnt - right; i++){
                ins.push(createTypeFromTextOrElementNode(pChildren[i], meta));
            }
            yDomFragment.insert(left, ins);
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"]);
};
/**
 * @function
 * @param {Y.XmlElement} yElement
 * @param {any} pNode Prosemirror Node
 */ const matchNodeName = (yElement, pNode)=>!(pNode instanceof Array) && yElement.nodeName === pNode.type.name;
}),
"[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/lib.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absolutePositionToRelativePosition",
    ()=>absolutePositionToRelativePosition,
    "initProseMirrorDoc",
    ()=>initProseMirrorDoc,
    "prosemirrorJSONToYDoc",
    ()=>prosemirrorJSONToYDoc,
    "prosemirrorJSONToYXmlFragment",
    ()=>prosemirrorJSONToYXmlFragment,
    "prosemirrorToYDoc",
    ()=>prosemirrorToYDoc,
    "prosemirrorToYXmlFragment",
    ()=>prosemirrorToYXmlFragment,
    "relativePositionToAbsolutePosition",
    ()=>relativePositionToAbsolutePosition,
    "setMeta",
    ()=>setMeta,
    "yDocToProsemirror",
    ()=>yDocToProsemirror,
    "yDocToProsemirrorJSON",
    ()=>yDocToProsemirrorJSON,
    "yXmlFragmentToProseMirrorFragment",
    ()=>yXmlFragmentToProseMirrorFragment,
    "yXmlFragmentToProseMirrorRootNode",
    ()=>yXmlFragmentToProseMirrorRootNode,
    "yXmlFragmentToProsemirror",
    ()=>yXmlFragmentToProsemirror,
    "yXmlFragmentToProsemirrorJSON",
    ()=>yXmlFragmentToProsemirrorJSON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/sync-plugin.js [app-ssr] (ecmascript)"); // eslint-disable-line
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/keys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/yjs/dist/yjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)"); // eslint-disable-line
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$eventloop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lib0/eventloop.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Either a node if type is YXmlElement or an Array of text nodes if YXmlText
 * @typedef {Map<Y.AbstractType, Node | Array<Node>>} ProsemirrorMapping
 */ /**
 * Is null if no timeout is in progress.
 * Is defined if a timeout is in progress.
 * Maps from view
 * @type {Map<EditorView, Map<any, any>>|null}
 */ let viewsToUpdate = null;
const updateMetas = ()=>{
    const ups = viewsToUpdate;
    viewsToUpdate = null;
    ups.forEach((metas, view)=>{
        const tr = view.state.tr;
        const syncState = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"].getState(view.state);
        if (syncState && syncState.binding && !syncState.binding.isDestroyed) {
            metas.forEach((val, key)=>{
                tr.setMeta(key, val);
            });
            view.dispatch(tr);
        }
    });
};
const setMeta = (view, key, value)=>{
    if (!viewsToUpdate) {
        viewsToUpdate = new Map();
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$eventloop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeout"](0, updateMetas);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setIfUndefined"](viewsToUpdate, view, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"]).set(key, value);
};
const absolutePositionToRelativePosition = (pos, type, mapping)=>{
    if (pos === 0) {
        // if the type is later populated, we want to retain the 0 position (hence assoc=-1)
        return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRelativePositionFromTypeIndex"](type, 0, type.length === 0 ? -1 : 0);
    }
    /**
   * @type {any}
   */ let n = type._first === null ? null : /** @type {Y.ContentType} */ type._first.content.type;
    while(n !== null && type !== n){
        if (n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
            if (n._length >= pos) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRelativePositionFromTypeIndex"](n, pos, type.length === 0 ? -1 : 0);
            } else {
                pos -= n._length;
            }
            if (n._item !== null && n._item.next !== null) {
                n = /** @type {Y.ContentType} */ n._item.next.content.type;
            } else {
                do {
                    n = n._item === null ? null : n._item.parent;
                    pos--;
                }while (n !== type && n !== null && n._item !== null && n._item.next === null)
                if (n !== null && n !== type) {
                    // @ts-gnore we know that n.next !== null because of above loop conditition
                    n = n._item === null ? null : /** @type {Y.ContentType} */ /** @type Y.Item */ n._item.next.content.type;
                }
            }
        } else {
            const pNodeSize = /** @type {any} */ (mapping.get(n) || {
                nodeSize: 0
            }).nodeSize;
            if (n._first !== null && pos < pNodeSize) {
                n = /** @type {Y.ContentType} */ n._first.content.type;
                pos--;
            } else {
                if (pos === 1 && n._length === 0 && pNodeSize > 1) {
                    // edge case, should end in this paragraph
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelativePosition"](n._item === null ? null : n._item.id, n._item === null ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRootTypeKey"](n) : null, null);
                }
                pos -= pNodeSize;
                if (n._item !== null && n._item.next !== null) {
                    n = /** @type {Y.ContentType} */ n._item.next.content.type;
                } else {
                    if (pos === 0) {
                        // set to end of n.parent
                        n = n._item === null ? n : n._item.parent;
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelativePosition"](n._item === null ? null : n._item.id, n._item === null ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRootTypeKey"](n) : null, null);
                    }
                    do {
                        n = /** @type {Y.Item} */ n._item.parent;
                        pos--;
                    }while (n !== type && /** @type {Y.Item} */ n._item.next === null)
                    // if n is null at this point, we have an unexpected case
                    if (n !== type) {
                        // We know that n._item.next is defined because of above loop condition
                        n = /** @type {Y.ContentType} */ /** @type {Y.Item} */ /** @type {Y.Item} */ n._item.next.content.type;
                    }
                }
            }
        }
        if (n === null) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        if (pos === 0 && n.constructor !== __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"] && n !== type) {
            return createRelativePosition(n._item.parent, n._item);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRelativePositionFromTypeIndex"](type, type._length, type.length === 0 ? -1 : 0);
};
const createRelativePosition = (type, item)=>{
    let typeid = null;
    let tname = null;
    if (type._item === null) {
        tname = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRootTypeKey"](type);
    } else {
        typeid = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createID"](type._item.id.client, type._item.id.clock);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelativePosition"](typeid, tname, item.id);
};
const relativePositionToAbsolutePosition = (y, documentType, relPos, mapping)=>{
    const decodedPos = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAbsolutePositionFromRelativePosition"](relPos, y);
    if (decodedPos === null || decodedPos.type !== documentType && !__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isParentOf"](documentType, decodedPos.type._item)) {
        return null;
    }
    let type = decodedPos.type;
    let pos = 0;
    if (type.constructor === __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
        pos = decodedPos.index;
    } else if (type._item === null || !type._item.deleted) {
        let n = type._first;
        let i = 0;
        while(i < type._length && i < decodedPos.index && n !== null){
            if (!n.deleted) {
                const t = /** @type {Y.ContentType} */ n.content.type;
                i++;
                if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
                    pos += t._length;
                } else {
                    pos += /** @type {any} */ mapping.get(t).nodeSize;
                }
            }
            n = n.right;
        }
        pos += 1; // increase because we go out of n
    }
    while(type !== documentType && type._item !== null){
        // @ts-ignore
        const parent = type._item.parent;
        // @ts-ignore
        if (parent._item === null || !parent._item.deleted) {
            pos += 1; // the start tag
            let n = /** @type {Y.AbstractType} */ parent._first;
            // now iterate until we found type
            while(n !== null){
                const contentType = /** @type {Y.ContentType} */ n.content.type;
                if (contentType === type) {
                    break;
                }
                if (!n.deleted) {
                    if (contentType instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
                        pos += contentType._length;
                    } else {
                        pos += /** @type {any} */ mapping.get(contentType).nodeSize;
                    }
                }
                n = n.right;
            }
        }
        type = parent;
    }
    return pos - 1 // we don't count the most outer tag, because it is a fragment
    ;
};
const yXmlFragmentToProseMirrorFragment = (yXmlFragment, schema)=>{
    const fragmentContent = yXmlFragment.toArray().map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNodeFromYElement"])(t, schema, (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmptyMeta"])())).filter((n)=>n !== null);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].fromArray(fragmentContent);
};
const yXmlFragmentToProseMirrorRootNode = (yXmlFragment, schema)=>schema.topNodeType.create(null, yXmlFragmentToProseMirrorFragment(yXmlFragment, schema));
const initProseMirrorDoc = (yXmlFragment, schema)=>{
    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmptyMeta"])();
    const fragmentContent = yXmlFragment.toArray().map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNodeFromYElement"])(t, schema, meta)).filter((n)=>n !== null);
    const doc = schema.topNodeType.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"].fromArray(fragmentContent));
    return {
        doc,
        meta,
        mapping: meta.mapping
    };
};
function prosemirrorToYDoc(doc, xmlFragment = 'prosemirror') {
    const ydoc = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doc"]();
    const type = ydoc.get(xmlFragment, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlFragment"]);
    if (!type.doc) {
        return ydoc;
    }
    prosemirrorToYXmlFragment(doc, type);
    return type.doc;
}
function prosemirrorToYXmlFragment(doc, xmlFragment) {
    const type = xmlFragment || new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlFragment"]();
    const ydoc = type.doc ? type.doc : {
        transact: (transaction)=>transaction(undefined)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateYFragment"])(ydoc, type, doc, {
        mapping: new Map(),
        isOMark: new Map()
    });
    return type;
}
function prosemirrorJSONToYDoc(schema, state, xmlFragment = 'prosemirror') {
    const doc = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].fromJSON(schema, state);
    return prosemirrorToYDoc(doc, xmlFragment);
}
function prosemirrorJSONToYXmlFragment(schema, state, xmlFragment) {
    const doc = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].fromJSON(schema, state);
    return prosemirrorToYXmlFragment(doc, xmlFragment);
}
function yDocToProsemirror(schema, ydoc) {
    const state = yDocToProsemirrorJSON(ydoc);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].fromJSON(schema, state);
}
function yXmlFragmentToProsemirror(schema, xmlFragment) {
    const state = yXmlFragmentToProsemirrorJSON(xmlFragment);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].fromJSON(schema, state);
}
function yDocToProsemirrorJSON(ydoc, xmlFragment = 'prosemirror') {
    return yXmlFragmentToProsemirrorJSON(ydoc.getXmlFragment(xmlFragment));
}
function yXmlFragmentToProsemirrorJSON(xmlFragment) {
    const items = xmlFragment.toArray();
    /**
   * @param {Y.AbstractType} item
   */ const serialize = (item)=>{
        /**
     * @type {Object} NodeObject
     * @property {string} NodeObject.type
     * @property {Record<string, string>=} NodeObject.attrs
     * @property {Array<NodeObject>=} NodeObject.content
     */ let response;
        // TODO: Must be a better way to detect text nodes than this
        if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlText"]) {
            const delta = item.toDelta();
            response = delta.map(/** @param {any} d */ (d)=>{
                const text = {
                    type: 'text',
                    text: d.insert
                };
                if (d.attributes) {
                    text.marks = Object.keys(d.attributes).map((type_)=>{
                        const attrs = d.attributes[type_];
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yattr2markname"])(type_);
                        const mark = {
                            type
                        };
                        if (Object.keys(attrs)) {
                            mark.attrs = attrs;
                        }
                        return mark;
                    });
                }
                return text;
            });
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XmlElement"]) {
            response = {
                type: item.nodeName
            };
            const attrs = item.getAttributes();
            if (Object.keys(attrs).length) {
                response.attrs = attrs;
            }
            const children = item.toArray();
            if (children.length) {
                response.content = children.map(serialize).flat();
            }
        } else {
            // expected either Y.XmlElement or Y.XmlText
            __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        return response;
    };
    return {
        type: 'doc',
        content: items.map(serialize)
    };
}
}),
"[project]/propertydrone/propertydrone_fe/node_modules/echo-drag-handle-plugin/dist/index.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragHandlePlugin",
    ()=>DragHandlePlugin,
    "dragHandlePluginDefaultKey",
    ()=>dragHandlePluginDefaultKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tippy.js/dist/tippy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/plugins/keys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/y-prosemirror/src/lib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f40$tiptap$2f$pm$2f$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
function getSelectionRanges(state, range, depth) {
    const ranges = [];
    const root = state.node(0);
    depth = typeof depth === 'number' && depth >= 0 ? depth : state.sameParent(range) ? Math.max(0, state.sharedDepth(range.pos) - 1) : state.sharedDepth(range.pos);
    const nodeRange = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeRange"](state, range, depth);
    const startIndex = nodeRange.depth === 0 ? 0 : root.resolve(nodeRange.start).posAtIndex(0);
    nodeRange.parent.forEach((size, offset)=>{
        const from = startIndex + offset;
        const to = from + size.nodeSize;
        if (from < nodeRange.start || from >= nodeRange.end) return;
        const selectionRange = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionRange"](root.resolve(from), root.resolve(to));
        ranges.push(selectionRange);
    });
    return ranges;
}
class NodeRangeBookmark {
    anchor;
    head;
    constructor(anchor, head){
        this.anchor = anchor;
        this.head = head;
    }
    map(mapping) {
        return new NodeRangeBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
    resolve(doc) {
        const e = doc.resolve(this.anchor);
        const o = doc.resolve(this.head);
        return new NodeRangeSelection(e, o);
    }
}
class NodeRangeSelection extends __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"] {
    depth;
    constructor(t, e, o, s = 1){
        const { doc: r } = t;
        const n = t === e;
        const i = t.pos === r.content.size && e.pos === r.content.size;
        const a = n && !i ? r.resolve(e.pos + (s > 0 ? 1 : -1)) : e;
        const c = n && i ? r.resolve(t.pos - (s > 0 ? 1 : -1)) : t;
        const d = getSelectionRanges(c.min(a), c.max(a), o);
        super(a.pos >= t.pos ? d[0].$from : d[d.length - 1].$to, a.pos >= t.pos ? d[d.length - 1].$to : d[0].$from, d);
        this.depth = o;
    }
    get $to() {
        return this.ranges[this.ranges.length - 1].$to;
    }
    eq(other) {
        return other instanceof NodeRangeSelection && other.$from.pos === this.$from.pos && other.$to.pos === this.$to.pos;
    }
    map(doc, mapping) {
        const o = doc.resolve(mapping.map(this.anchor));
        const s = doc.resolve(mapping.map(this.head));
        return new NodeRangeSelection(o, s);
    }
    toJSON() {
        return {
            type: 'nodeRange',
            anchor: this.anchor,
            head: this.head
        };
    }
    get isForwards() {
        return this.head >= this.anchor;
    }
    get isBackwards() {
        return !this.isForwards;
    }
    extendBackwards() {
        const { doc: t } = this.$from;
        if (this.isForwards && this.ranges.length > 1) {
            const t = this.ranges.slice(0, -1);
            const e = t[0].$from;
            const o = t[t.length - 1].$to;
            return new NodeRangeSelection(e, o, this.depth);
        }
        const e = this.ranges[0];
        const o = t.resolve(Math.max(0, e.$from.pos - 1));
        return new NodeRangeSelection(this.$anchor, o, this.depth);
    }
    extendForwards() {
        const { doc: t } = this.$from;
        if (this.isBackwards && this.ranges.length > 1) {
            const t = this.ranges.slice(1);
            const e = t[0].$from;
            const o = t[t.length - 1].$to;
            return new NodeRangeSelection(o, e, this.depth);
        }
        const e = this.ranges[this.ranges.length - 1];
        const o = t.resolve(Math.min(t.content.size, e.$to.pos + 1));
        return new NodeRangeSelection(this.$anchor, o, this.depth);
    }
    static fromJSON(doc, json) {
        return new NodeRangeSelection(doc.resolve(json.anchor), doc.resolve(json.head));
    }
    static create(doc, anchor, head, depth, bias = 1) {
        return new this(doc.resolve(anchor), doc.resolve(head), depth, bias);
    }
    getBookmark() {
        return new NodeRangeBookmark(this.anchor, this.head);
    }
}
function cloneElement(node) {
    const clonedNode = node.cloneNode(true);
    const originalElements = [
        node,
        ...Array.from(node.getElementsByTagName('*'))
    ];
    const clonedElements = [
        clonedNode,
        ...Array.from(clonedNode.getElementsByTagName('*'))
    ];
    originalElements.forEach((element, index)=>{
        clonedElements[index].style.cssText = function(element) {
            let styles = '';
            const computedStyles = getComputedStyle(element);
            for(let i = 0; i < computedStyles.length; i += 1){
                styles += `${computedStyles[i]}:${computedStyles.getPropertyValue(computedStyles[i])};`;
            }
            return styles;
        }(element);
    });
    return clonedNode;
}
function getComputedStyles(node, property) {
    return window.getComputedStyle(node)[property];
}
function minMax(value = 0, min = 0, max = 0) {
    return Math.min(Math.max(value, min), max);
}
function removeNode(node) {
    if (node.parentNode !== null && node.parentNode !== undefined) {
        node.parentNode.removeChild(node);
    }
}
const findElementNextToCoords = (options)=>{
    const { x, y, direction, editor } = options;
    let resultElement = null;
    let resultNode = null;
    let d = null;
    let l = x;
    for(; null === resultNode && l < window.innerWidth && l > 0;){
        const elements = document.elementsFromPoint(l, y);
        const index = elements.findIndex((el)=>el.classList.contains('ProseMirror'));
        const filteredElements = elements.slice(0, index);
        if (filteredElements.length > 0) {
            const element = filteredElements[0];
            resultElement = element;
            d = editor.view.posAtDOM(element, 0);
            if (d >= 0) {
                resultNode = editor.state.doc.nodeAt(Math.max(d - 1, 0));
                if (resultNode === null || resultNode.isText) {
                    resultNode = editor.state.doc.nodeAt(Math.max(d - 1, 0));
                }
                if (!resultNode) {
                    resultNode = editor.state.doc.nodeAt(Math.max(d, 0));
                }
                break;
            }
        }
        if (direction === 'left') {
            l -= 1;
        } else {
            l += 1;
        }
    }
    return {
        resultElement,
        resultNode,
        pos: d !== null ? d : null
    };
};
function getSelectionRangesNearCursor(e, t) {
    const { doc: n } = t.view.state, o = findElementNextToCoords({
        editor: t,
        x: e.clientX,
        y: e.clientY,
        direction: 'right'
    });
    if (!o.resultNode || null === o.pos) return [];
    const r = e.clientX, i = function(e, t, n) {
        const o = parseInt(getComputedStyles(e.dom, 'paddingLeft'), 10), r = parseInt(getComputedStyles(e.dom, 'paddingRight'), 10), i = parseInt(getComputedStyles(e.dom, 'borderLeftWidth'), 10), s = parseInt(getComputedStyles(e.dom, 'borderLeftWidth'), 10), d = e.dom.getBoundingClientRect();
        return {
            left: minMax(t, d.left + o + i, d.right - r - s),
            top: n
        };
    }(t.view, r, e.clientY), s = t.view.posAtCoords(i);
    if (!s) return [];
    const { pos: d } = s;
    if (!n.resolve(d).parent) return [];
    const a = n.resolve(o.pos), p = n.resolve(o.pos + 1);
    return getSelectionRanges(a, p, 0);
}
const getPreviousNodeStartPosition = (e, t)=>{
    const n = e.resolve(t), { depth: o } = n;
    if (0 === o) return t;
    return n.pos - n.parentOffset - 1;
};
const getAncestorNodeAtDepth = (e, t)=>{
    const n = e.nodeAt(t), o = e.resolve(t);
    let { depth: r } = o, i = n;
    for(; r > 0;){
        const e = o.node(r);
        r -= 1, 0 === r && (i = e);
    }
    return i;
};
const getOuterNode = (doc, pos)=>{
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ySyncPluginKey"].getState(doc);
    return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["absolutePositionToRelativePosition"])(pos, n.type, n.binding.mapping) : null;
};
const getOuterNodePos = (e, t)=>{
    let n = t;
    for(; n && n.parentNode && n.parentNode !== e.dom;)n = n.parentNode;
    return n;
};
const dragHandlePluginDefaultKey = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('dragHandle');
const DragHandlePlugin = ({ pluginKey: e = dragHandlePluginDefaultKey, element, editor, tippyOptions, onNodeChange })=>{
    const container = document.createElement('div');
    let tippyInstance = null;
    let x = false;
    let currentNode = null;
    let lastNodePos = -1;
    element.addEventListener('dragstart', (e)=>{
        const { view } = editor;
        if (!e.dataTransfer) return;
        const { empty, $from, $to } = view.state.selection;
        const s = getSelectionRangesNearCursor(e, editor);
        const d = getSelectionRanges($from, $to, 0);
        const c = d.some((e)=>s.find((t)=>t.$from === e.$from && t.$to === e.$to));
        const u = empty || !c ? s : d;
        if (!u.length) return;
        const { tr: g } = view.state;
        const h = document.createElement('div');
        const y = u[0].$from.pos;
        const v = u[u.length - 1].$to.pos;
        const C = NodeRangeSelection.create(view.state.doc, y, v);
        const E = C.content();
        u.forEach((e)=>{
            const t = cloneElement(view.nodeDOM(e.$from.pos));
            h.append(t);
        });
        h.style.position = 'absolute';
        h.style.top = '-10000px';
        document.body.append(h);
        e.dataTransfer.clearData();
        e.dataTransfer.setDragImage(h, 0, 0);
        view.dragging = {
            slice: E,
            move: true
        };
        g.setSelection(C);
        view.dispatch(g);
        document.addEventListener('drop', ()=>removeNode(h), {
            once: true
        });
        setTimeout(()=>{
            element && (element.style.pointerEvents = 'none');
        }, 0);
    });
    element.addEventListener('dragend', ()=>{
        element && (element.style.pointerEvents = 'auto');
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        key: typeof e === 'string' ? new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"](e) : e,
        state: {
            init: ()=>({
                    locked: false
                }),
            apply (e, t, n, o) {
                const l = e.getMeta('lockDragHandle');
                const a = e.getMeta('hideDragHandle');
                if (undefined !== l && (x = l), a && tippyInstance) {
                    return tippyInstance.hide(), x = false, currentNode = null, lastNodePos = -1, null == onNodeChange || onNodeChange({
                        editor: editor,
                        node: null,
                        pos: -1
                    }), t;
                }
                if (e.docChanged && -1 !== lastNodePos && element && tippyInstance) {
                    const t = e.mapping.map(lastNodePos);
                    t !== lastNodePos && (lastNodePos = t, getOuterNode(o, lastNodePos));
                }
                return t;
            }
        },
        view: (e)=>{
            var t;
            return element.draggable = true, element.style.pointerEvents = 'auto', null === (t = editor.view.dom.parentElement) || undefined === t || t.appendChild(container), container.appendChild(element), container.style.pointerEvents = 'none', container.style.position = 'absolute', container.style.top = '0', container.style.left = '0', tippyInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e.dom, {
                getReferenceClientRect: null,
                interactive: true,
                trigger: 'manual',
                placement: 'left-start',
                hideOnClick: false,
                duration: 100,
                zIndex: 10,
                popperOptions: {
                    modifiers: [
                        {
                            name: 'flip',
                            enabled: false
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                rootBoundary: 'document',
                                mainAxis: false
                            }
                        }
                    ]
                },
                ...tippyOptions,
                appendTo: container,
                content: element
            }), {
                update (t, n) {
                    if (!element || !tippyInstance) return;
                    if (element.draggable = !x, e.state.doc.eq(n.doc) || -1 === lastNodePos) return;
                    let o = e.nodeDOM(lastNodePos);
                    if (o = getOuterNodePos(e, o), o === e.dom) return;
                    if (1 !== (null == o ? undefined : o.nodeType)) return;
                    const r = e.posAtDOM(o, 0), s = getAncestorNodeAtDepth(editor.state.doc, r);
                    if (s !== currentNode) {
                        const t = getPreviousNodeStartPosition(editor.state.doc, r);
                        currentNode = s, lastNodePos = t, getOuterNode(e.state, lastNodePos), null == onNodeChange || onNodeChange({
                            editor: editor,
                            node: currentNode,
                            pos: lastNodePos
                        }), tippyInstance.setProps({
                            getReferenceClientRect: ()=>o.getBoundingClientRect()
                        }), tippyInstance.show();
                    }
                },
                destroy () {
                    null == tippyInstance || tippyInstance.destroy(), element && removeNode(container);
                }
            };
        },
        props: {
            handleDOMEvents: {
                mouseleave: (e, event)=>(x || event.target && !container.contains(event.relatedTarget) && (null == tippyInstance || tippyInstance.hide(), currentNode = null, lastNodePos = -1, null == onNodeChange || onNodeChange({
                        editor: editor,
                        node: null,
                        pos: -1
                    })), false),
                mousemove (e, t) {
                    if (!element || !tippyInstance || x) return false;
                    const n = findElementNextToCoords({
                        x: t.clientX,
                        y: t.clientY,
                        direction: 'right',
                        editor: editor
                    });
                    if (!n.resultElement) return false;
                    let o = n.resultElement;
                    if (o = getOuterNodePos(e, o), o === e.dom) return false;
                    if (1 !== (null == o ? undefined : o.nodeType)) return false;
                    const r = e.posAtDOM(o, 0), s = getAncestorNodeAtDepth(editor.state.doc, r);
                    if (s !== currentNode) {
                        const t = getPreviousNodeStartPosition(editor.state.doc, r);
                        currentNode = s, lastNodePos = t, getOuterNode(e.state, lastNodePos), null == onNodeChange || onNodeChange({
                            editor: editor,
                            node: currentNode,
                            pos: lastNodePos
                        }), tippyInstance.setProps({
                            getReferenceClientRect: ()=>o.getBoundingClientRect()
                        }), tippyInstance.show();
                    }
                    return false;
                }
            }
        }
    });
};
;
}),
];

//# sourceMappingURL=f6976_0789dcc7._.js.map