define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({id:"new-modal","class":"modal fade small-modal"},{})),buf.push("><div"),buf.push(attrs({"class":"modal-header"},{})),buf.push("><h3>Create</h3></div><div"),buf.push(attrs({"class":"modal-body"},{})),buf.push("><input"),buf.push(attrs({id:"name",type:"text",placeholder:"Name","class":"small-modal-box"},{type:!0,placeholder:!0})),buf.push("/></div><div"),buf.push(attrs({"class":"modal-footer"},{})),buf.push("><a"),buf.push(attrs({id:"new-button","class":"btn btn-primary"},{})),buf.push(">Create</a></div></div>")}return buf.join("")}})