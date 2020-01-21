// all parent class name call
const qs = (Bisnu) => {
    return document.querySelector(Bisnu);
}

const N= (f) => {
    f.map((m) => {
        m.style = non;
    });
}

let country = qs(".countries");
let bd1 = qs(".states_for_bd");
let Dhk1 = qs(".states_for_Dhaka");
let Mym = qs(".states_for_Mymensingh");
let Ctg = qs(".states_for_Chittagong");
let Khl = qs(".states_for_Khulna");
let bari = qs(".states_for_Barisal");
let Syl = qs(".states_for_sylhet");
// I put all the variables in one variable
let all = [bd1, Dhk1, Mym, Ctg, Khl, bari, Syl];
let ll = `display:grid;justify-content:center`;
let non = `display:none`;
let blo = `display:block`;
let invalid = qs(".text h3");

// select country

country.addEventListener("change", () => {
    let c = qs("#select_opt").value;

    if (c == "nn") {
       N(all);

    } else if (c == "bd") {
        bd1.style = ll;
        invalid.style=non;
    } else if (c == "Us") {
        invalid.innerHTML = "United states Is not Fund!";
        N(all);
        invalid.style=blo;
    } else if (c == "in") {
        invalid.innerHTML = "India Is not Fund!";
        N(all);
        invalid.style=blo;
    } else if (c == "pk") {
        invalid.innerHTML = "pakistan Is not Fund!";
        N(all);
        invalid.style=blo;
    }
});

// ========================================================================================================================================
//  select division

bd1.addEventListener("change", () => {
    let d = qs("#Division").value;

    let dk = [Mym, Ctg, Khl, bari, Syl];
    let mm = [Dhk1, Ctg, Khl, bari, Syl];
    let ct = [Dhk1, Mym, Khl, bari, Syl];
    let kh = [Dhk1, Mym, Ctg, bari, Syl];
    let br = [Dhk1, Mym, Ctg, Khl, Syl];
    let sl = [Dhk1, Mym, Ctg, Khl, bari];


    if (d == "dhk") {
        Dhk1.style = ll;
        N(dk);
        invalid.style=non;
    } else if (d == "mym") {
        Mym.style = ll;
        N(mm);
        invalid.style=non;
    } else if (d == "ctg") {
        Ctg.style = ll;
        N(ct);
        invalid.style=non;
    } else if (d == "khl") {
        Khl.style = ll;
        N(kh);
        invalid.style=non;
    } else if (d == "bar") {
        bari.style = ll;
        N(br);
        invalid.style=non;
    } else if (d == "syl") {
        Syl.style = ll;
        N(sl);
        invalid.style=non;
    }

})
