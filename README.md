http://localhost:3000/user/school/category?board=ICSE&medium=ENGLISH&category=Higher Secondary   (get the School list based on Query)
http://localhost:3000/user/school/medium?board=ICSE&medium=ENGLISH (get the School list based on Query)
http://localhost:3000/user/school/board?board=ICSE (get the School list based on Query)
http://localhost:3000/user/school (get the School list based on Query)

http://localhost:3000/admin/register (post Request Add School by admin)
body = {
    "name":"school2",
    "board":"ICSE",
    "type":"School",
    "medium":"English",
    "classes":"Higher Secondary"
}

http://localhost:3000/user/register  for regiter User in Db 

body ={
    "name":"user!",
    "classId":"6745736299aaddccdd0727f1", //SchoolId
    "subjects":["Maths"]
}

http://localhost:3000/user/details?userId=6745768313e33eab5c1b6653 get the user Details which we added
