// alert("hisdvsdvsdv");
var data = document.getElementById('data')
var userList = document.getElementById('userList')
	var counter = 0;

function adduser() {
	var inputdata = data.value
	//alert(inputdata);
	var html_data = '<div class="row" id="data' +counter + '"style="margin-top: 20px;" >'+
				
'<div class="col-md-6" >'+
'<input type="text" name="" class="form-control" value="'+inputdata+'" disabled>'+
'</div>'+
'<div class="col-md-2" >'+
'<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'" >Edit</button>'+	
'</div>'+
'<div class="col-md-2" >'+
'<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'" >Update</button>'+	
'</div>'+
'<div class="col-md-2" >'+
'<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'" >Delete</button>'+	
'</div>'+
'</div>';
counter++;
	
userList.insertAdjacentHTML('beforeend',html_data);
}
function edit(editId) {
	// body...
	// alert(editId);
	var parent = document.getElementById(editId).parentNode.parentNode;
	var child = parent.firstChild.firstChild;
	child.removeAttribute("disabled");
	console.log(child);
}
function update(updateId) {
	// body...
	// alert(updateId);
	var parent = document.getElementById(updateId).parentNode.parentNode;
	var child = parent.firstChild.firstChild;
	child.setAttribute("disabled",'disabled');
	console.log(child);
}
function remove(deleteId) {
	// body...
	// alert(deleteId);
	var parent = document.getElementById(deleteId).parentNode.parentNode;
	parent.remove();
}