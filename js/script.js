var row = 1;

var entry = document.getElementById('entry');
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var regno = document.getElementById("reg_number").value;
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
    var name = lname + ' ' + fname;
    var nhis = document.getElementById("nhis_number").value ?? null;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var state = document.getElementById("state").value;
    var tribe = document.getElementById("tribe").value;
    var department = document.getElementById("department").value ?? null;
    var next_kin = document.getElementById("next_kin").value ?? null;
    var occupation = document.getElementById("occupation").value;
    var id_no = document.getElementById("id_no").value;
    var office_num = document.getElementById("office_num").value ?? null;
    var home_num = document.getElementById("home_num").value ?? null;
    var date_employ = document.getElementById("date_employ").value ?? null;
    var direct_line = document.getElementById("direct_line").value ?? null;
    var ac_charge = document.getElementById("ac_charge").value ?? null;
    var provider = document.getElementById("provider").value ?? null;
    var relationship = document.getElementById("relationship").value ?? null;
    var med_alert1 = document.getElementById("med_alert1").value ?? null;
    var med_alert2 = document.getElementById("med_alert2").value ?? null;
    var med_alert3 = document.getElementById("med_alert3").value ?? null;
    var drug_inter1 = document.getElementById("drug_inter1").value ?? null;
    var drug_inter2 = document.getElementById("drug_inter2").value ?? null;
    var drug_inter3 = document.getElementById("drug_inter3").value ?? null;

    if(!regno || !fname || !lname || !address || !dob || !age || !sex || !state || !tribe || !occupation || !id_no) {
     alert('Plese fill all required inputs');
     return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11 = newRow.insertCell(10);
    var cell12 = newRow.insertCell(11);
    var cell13 = newRow.insertCell(12);
    var cell14 = newRow.insertCell(13);
    var cell15 = newRow.insertCell(14);
    var cell16 = newRow.insertCell(15);
    var cell17 = newRow.insertCell(16);
    var cell18 = newRow.insertCell(17);
    var cell19 = newRow.insertCell(18);
    var cell20 = newRow.insertCell(19);
    var cell21 = newRow.insertCell(20);
    var cell22 = newRow.insertCell(21);
    var cell23 = newRow.insertCell(22);
    var cell24 = newRow.insertCell(23);
    var cell25 = newRow.insertCell(24);
    var cell26 = newRow.insertCell(25);
    var cell27 = newRow.insertCell(26);
    var cell28 = newRow.insertCell(27);

    cell1.innerHTML = regno;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = name;
    cell5.innerHTML = nhis;
    cell6.innerHTML = address;
    cell7.innerHTML = dob;
    cell8.innerHTML = age;
    cell9.innerHTML = sex;
    cell10.innerHTML = state;
    cell11.innerHTML = tribe;
    cell12.innerHTML = department;
    cell13.innerHTML = next_kin;
    cell14.innerHTML = occupation;
    cell15.innerHTML = id_no;
    cell16.innerHTML = office_num;
    cell17.innerHTML = home_num;
    cell18.innerHTML = date_employ;
    cell19.innerHTML = direct_line;
    cell20.innerHTML = ac_charge;
    cell21.innerHTML = provider;
    cell22.innerHTML = relationship;
    cell23.innerHTML = med_alert1;
    cell24.innerHTML = med_alert2;
    cell25.innerHTML = med_alert3;
    cell26.innerHTML = drug_inter1;
    cell27.innerHTML = drug_inter2;
    cell28.innerHTML = drug_inter3;

    row++;
}