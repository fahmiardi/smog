define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div id="connect-modal" class="modal small-modal"><div class="modal-header"><h3>Connect</h3></div><div class="modal-body"><input id="host" type="text" placeholder="Host" value="mongodb://localhost:27017/test?auto_reconnect" class="small-modal-box"/></div><div class="modal-footer"><a id="connect-button" class="btn btn-primary">Connect</a></div></div>')}return buf.join("")}})