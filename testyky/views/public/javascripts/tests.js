// GETTING UUID
  var uuid = function() {
  var url = location.href;
  var lastSlash = url.lastIndexOf("/");
  return url.substring(lastSlash+1, url.length);
};

// console.log(uuid);


var updatedInfo0 = {
	packUuid: "none",
	userUuid: uuid,
	name: "",
	surname: "",
	email: "",
	toAuthor: "Recruiter_1",
	toProject: "Senior FE Dev",
	t1_Scale_1: "",
	t1_Scale_2: "",
	t1_Scale_3: "",
	t1_Scale_4: "",
	t1_Scale_5: "",
	t2_Scale_1: "",
	t2_Scale_2: "",
	t2_Scale_3: "",
	t2_Scale_4: "",
	t2_Scale_5: ""
};


var updatedInfo1 = {
	packUuid: "none",
	userUuid: "261e0331-a97f-11e5-b747-95216473bf7c",
	name: "Ivan3",
	surname: "Susanin3",
	email: "Susanin@mail.ru",
	toAuthor: "Recruiter_1",
	toProject: "Senior FE Dev",
	t1_Scale_1: "9",
	t1_Scale_2: "2",
	t1_Scale_3: "6",
	t1_Scale_4: "5",
	t1_Scale_5: "7",
	t2_Scale_1: "5",
	t2_Scale_2: "5",
	t2_Scale_3: "1",
	t2_Scale_4: "2",
	t2_Scale_5: "3"
};

var updatedInfo2 = {
	packUuid: "none",
	userUuid: "261e0331-a97f-11e5-b747-95216473bf7c",
	name: "Ivan3",
	surname: "Susanin3",
	email: "Susanin@mail.ru",
	toAuthor: "Recruiter_1",
	toProject: "Senior FE Dev",
	t1_Scale_1: "00900",
	t1_Scale_2: "00200",
	t1_Scale_3: "00600",
	t1_Scale_4: "00500",
	t1_Scale_5: "00700",
	t2_Scale_1: "00500",
	t2_Scale_2: "00500",
	t2_Scale_3: "00100",
	t2_Scale_4: "00200",
	t2_Scale_5: "00300"
};


// add new result
// ajaxPost(addResult, updatedInfo0, 'dbAddResult');
// update result
// ajaxPut(updateResult, updatedInfo0, 'dbResultsUpdate'); 




// add new result
// ajaxPost(ajaxData[0][0], updatedInfo1, ajaxData[0][1]);

// update result
// ajaxPut(ajaxData[1][0], updatedInfo0, ajaxData[1][1]); 