let Books = [{
        Title: "Сумма Оснований, Основы",
        Genres: "Поэзия"
    },
    {
        Title: "Об отличии нашего финансового кризиса от мирового",
        Genres: "Публицистика"
    },
    {
        Title: "Лемяшинский триптих (Рассказы)",
        Genres: "Русская классическая проза"
    },
    {
        Title: "Черный король",
        Genres: "Полицейские детективы"
    },
    {
        Title: "Безрыбье",
        Genres: "Научная фантастика"
    },
    {
        Title: "1001-я ночь войны",
        Genres: "Русская классическая проза"
    },
    {
        Title: "Бегущий За Ветром в погоне за несбывшейся мечтой",
        Genres: "Научная фантастика"
    },
    {
        Title: "Приключения Гекльберри Финна",
        Genres: "Детская проза"
    },
    {
        Title: "Ученик Герострата",
        Genres: "Научная фантастика"
    },
    {
        Title: "За гольцом по Каре",
        Genres: "Хобби и ремесла"
    }
];

let Poezia = [];
let Publicistica = [];
let Proza = [];
let Detectives = [];
let Fantasy = [];
let Hobby = [];
let AllGenres = [];

function SortOnlyOneTypeOfGenres() {
    for (let book = 0; book < Books.length; book++) {
        if (AllGenres.includes(Books[book].Genres) == false) {
            AllGenres.push(Books[book].Genres);
        };
    };
}

function FindAllFantasy() {
    Books.forEach(book => {
        if (book.Genres.includes("Фантастика"));
        or(book.Genres.includes("фантастика")); {
            Fantasy.push(book);
        };
    });
};

function FindEveryPoezia() {
    Books.forEach(book => {
        if (book.Genres.includes("Поэзия"));
        or(book.Genres.includes("поэзия")); {
            Poezia.push(book);
        };
    });
};

function FindEveryPublicistica() {
    Books.forEach(book => {
        if (book.Genres.includes("Публицистика"));
        or(book.Genres.includes("публицистика")); {
            Publicistica.push(book);
        };
    });
};

function FindEveryProza() {
    Books.forEach(book => {
        if (book.Genres.includes("Проза"));
        or(book.Genres.includes("проза")); {
            Proza.push(book);
        };
    });
};

function FindAllDetectives() {
    Books.forEach(book => {
        if (book.Genres.includes("Детективы"));
        or(book.Genres.includes("детективы")); {
            Detectives.push(book);
        };
    });
};

function FindAllHobby() {
    Books.forEach(book => {
        if (book.Genres.includes("Хобби"));
        or(book.Genres.includes("хобби")); {
            Hobby.push(book);
        };
    });
};

function FindAllGenres() {
    FindAllFantasy();
    FindEveryPoezia();
    FindEveryPublicistica();
    FindEveryProza();
    FindAllDetectives();
    FindAllHobby();
};

function Sort() {
    Books.sort();
};

function Main() {
    Sort();
    SortOnlyOneTypeOfGenres();
    FindAllGenres();
};