document.querySelector('#btn').addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.getElementById("namecat").value;
    let phone = document.getElementById("phone").value;
    let sex = document.querySelectorAll('input[name="sex"]').value;
    let food = document.querySelector('input[name="food"]').value;
    let poroda = document.querySelector("option[name='poroda']").value;



    if (man.checked) {
        sex = "самец";
    } else if (woman.checked) {
        sex = "самка";
    }


    if (wet.checked) {
        food = "влажный корм";
    } else if (dry.checked) {
        food = "сухой корм";
    } else if (natural.checked) {
        food = "натуральная еда";
    }

    class Cat {
        constructor(name, phone, poroda, sex, food) {
            this.name = name;
            this.phone = phone;
            this.poroda = poroda;
            this.type = sex;
            this.food = food;
        }
    }


    const catInfo = new Cat(name, phone, poroda, sex, food);
    console.log(catInfo);
});