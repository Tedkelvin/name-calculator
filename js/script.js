function validateform(){
var gender = document.getElementsByName("gender");
   var mdate = document.getElementById("date");
   var mmonth = document.getElementById("month");
   var myear = document.getElementById("year");
   var formValid = false;

   if (mdate.value == "" || mdate.value == null) {
    alert("Please Input date");
       return false;
   } else {
       mdate.style.border = "";
       if (!isNaN(mdate.value)) {
           if (mdate.value <= 0 || mdate.value > 31) {
        alert("Invalid date");
               return false;
           }
       } else {
        alert("Date must be a number");
           return false;
       }
   }
   if (mmonth.value == "" || mmonth.value == null) {
    alert("Please Input month");
       return false;
   } else {
       if (!isNaN(mmonth.value)) {
           if (mmonth.value <= 0 || mmonth.value > 12) {
        alert("Invalid month");
               return false;
           }
       } else {
    alert("Month must be a number");
           return false;
       }
   }
   if (myear.value == "" || myear.value == null) {
    alert("Please Input year");
       return false;
   } else {
       myear.style.border = "";
       if (!isNaN(myear.value)) {
           if (myear.value.length != 4) {
               alert("Invalid year");
               return false;
           }
       } else {
    alert("Year must be a number");
           return false;
       }
   }
   while (!formValid && i < gender.length) {
       if (gender[i].checked)
           formValid = true;
       i++;
   }
   if (!formValid) {
      alert("Select gender);
       return false;
   }
   alert(gender.value);
   alert(mdate.value);
   alert(mmonth.value);
   alert(myear.value);

}
