window.onload =
    function () {
        var data = {
            pageTitle: 'Тест по программированию',

            categories: [
                {
                    categoryName: "Вопрос №1",

                    variant: [
                        'Вариант ответа №1',
                        'Вариант ответа №2',
                        'Вариант ответа №3'
                    ]
                },
                {
                    categoryName: "Вопрос №2",

                    variant: [
                        'Вариант ответа №1',
                        'Вариант ответа №2',
                        'Вариант ответа №3'
                    ]
                },
                {
                    categoryName: "Вопрос №3",

                    variant: [
                        'Вариант ответа №1',
                        'Вариант ответа №2',
                        'Вариант ответа №3'
                    ],
                }
            ],
            result: "Проверить мои результаты"

        };

        var main = document.createElement('div');
        main.className = "main";
        main.style.display = "block";
        main.style.width = "400px";
        main.style.height = "450px";
        main.style.margin = "0 auto";
        main.style.textAlign = "center";
        document.body.appendChild(main);

        var p = document.createElement("P");
        p.innerHTML = data.pageTitle;
        main.appendChild(p);


        var numQ = data.categories.length; //-Количество вопросов в списке

        for (var d = 0; d < numQ; d++) {

            var qw = document.createElement('div');
            qw.className = "question";
            qw.style.float = "left";
            main.appendChild(qw);

            var p = document.createElement("P");
            p.innerHTML = data.categories[d].categoryName;
            qw.appendChild(p);

            var ul = document.createElement("UL");
            ul.style.listStyle = "none";
            ul.style.flat = "left";
            ul.style.paddingLeft = "100px";
            qw.appendChild(ul);

            var numU = data.categories[d].variant.length; //- Количество вариантов ответов в списке
            for (var c = 0; c < numU; c++) {
                createNewLi(d.toString() + c.toString(), data.categories[d].variant[c]);
            }
        };

        function createNewLi(value, textLabel) {
            var li = document.createElement("LI");
            ul.appendChild(li);

            var input = document.createElement("INPUT");
            input.type = "checkbox";
            input.value = value;
            li.appendChild(input);

            var label = document.createElement("label");
            label.innerHTML = textLabel;
            li.appendChild(label);
        }


        var clearDiv = document.createElement('div');
        clearDiv.style.clear = "both";
        main.appendChild(clearDiv);

        var pInput = document.createElement("p");
        main.appendChild(pInput);

        var button = document.createElement("INPUT");
        button.type = "submit";
        button.value = data.result;
        pInput.appendChild(button);
    };




