$(function(){

    var human = {
        name: "Adam",
        age: 20,
        sex: "men",
        growth: 180,
        weight: 70
    };

    function Worker(name){
        this.name = name;
        this.placeOfWork = "MacDonalds";
        this.salary = 12; // Гривен/Час
        this.working = function(hours){
            this.TotalSalary = this.salary*hours;
        }
        this.__proto__ = human;
    };

    function Student(name){
        this.name = name;
        this.placeOfStudy = "KNURE";
        this.scholarship = true;
        this.watchTV = function(hours){
            if (hours>=50 && hours<150) {
                this.scholarship = false;
            } else if (hours>=150) {
                delete this.placeOfStudy;
                delete this.scholarship;
                this.army = true;
            }
        }
        this.__proto__ = human;
    };

    Worker.__proto__ = human;
    Student.__proto__ = human;

    var Worker1 = new Worker("Олег");
    var Worker2 = new Worker("Сергей");
    var Student1 = new Student("Миша");
    var Student2 = new Student("Кирилл");
    
    Worker1.working(180);
    Worker2.weight = 65;
    Worker2.placeOfWork = "Nix Solutions";
    Worker2.salary = 36;
    Worker2.working(120);
    Student1.watchTV(150);
    Student2.watchTV(50);

    console.log("Олег: ",Worker1);
    console.log("Сергей: ",Worker2);
    console.log("Миша: ",Student1); // Смотрел сериалы, слетел со степендии.
    console.log("Кирилл: ",Student2); // Очень много смотрел сериалы, и был отчислен.
    console.log("Пол Миши:", Student1.sex); // Наследование методов прототипа
    console.log("Вес Сергея:", Worker2.weight); // Метод присвоенный экземпляру 
});