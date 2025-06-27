"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Получаем id всех тем
    const themes = await queryInterface.sequelize.query(
      `SELECT id, name_card FROM "DescCards";`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    if (!themes || themes.length === 0) {
      throw new Error("Не найдены темы. Сначала запустите сиды для тем!");
    }
    const themeMap = {};
    themes.forEach((row) => {
      themeMap[row.name_card] = row.id;
    });

    const questions = [
      {
        question:
          "Проспект Победы — самая длинная улица Челябинска. Какой номер у последнего дома?",
        answer: JSON.stringify([
          "197 — у завода радиаторных батарей",
          "256 — магическое число программистов",
          "400 — пожарная часть",
          "501 — дом сказок",
        ]),
        variable_answer: "400 — пожарная часть",
        desc_id: themeMap["Челябинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какое животное изображено на гербе Челябинска?",
        answer: JSON.stringify([
          "Медведь в каске (символ промышленности)",
          "Лось (мощь уральской природы)",
          "Верблюд с поклажей (символ торговли)",
          "Стальной дятел (металлургический символ)",
        ]),
        variable_answer: "Верблюд с поклажей (символ торговли)",
        desc_id: themeMap["Челябинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что произошло над Челябинском 15 февраля 2013 года?",
        answer: JSON.stringify([
          "Падение метеорита",
          "Землетрясение магнитудой 6.5",
          "Сход снежной лавины с гор",
          "Ураганный ветер скоростью 40 м/с",
        ]),
        variable_answer: "Падение метеорита",
        desc_id: themeMap["Челябинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Челябинск был основан в 1736 году как...",
        answer: JSON.stringify([
          "Защитная крепость",
          "Резиденция императрицы",
          "Православный монастырь",
          "Купеческая ярмарка",
        ]),
        variable_answer: "Защитная крепость",
        desc_id: themeMap["Челябинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Что стало основной продукцией Челябинского тракторного завода с середины XX века?",
        answer: JSON.stringify([
          "Танки и военная техника",
          'Легковые автомобили "Урал"',
          "Железнодорожные вагоны",
          "Сельскохозяйственные комбайны",
        ]),
        variable_answer: "Танки и военная техника",
        desc_id: themeMap["Челябинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой необычный цвет могут приобретать редкие сорта огурцов при полном созревании?",
        answer: JSON.stringify([
          "Ярко-синий",
          "Кроваво-красный",
          "Фиолетовый в горошек",
          "Неоново-желтый",
        ]),
        variable_answer: "Кроваво-красный",
        desc_id: themeMap["Огурчики"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какое неожиданное бытовое применение есть у огурцов?",
        answer: JSON.stringify([
          "Чистка столовых приборов",
          "Удаление ржавчины",
          "Полировка мебели",
          "Устранение скрипа дверей",
        ]),
        variable_answer: "Чистка столовых приборов",
        desc_id: themeMap["Огурчики"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "В каком году огурцы впервые вырастили в условиях космоса?",
        answer: JSON.stringify([
          '2001 - на станции "Мир"',
          "2015 - на МКС",
          "2020 - в лунной миссии",
          '1998 - в шаттле "Колумбия"',
        ]),
        variable_answer: "2015 - на МКС",
        desc_id: themeMap["Огурчики"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Вкус какого фрукта приобретает особый сорт огурцов при созревании?",
        answer: JSON.stringify(["Ананаса", "Киви", "Дыни", "Манго"]),
        variable_answer: "Дыни",
        desc_id: themeMap["Огурчики"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой витамин в огурцах особенно эффективен против отеков?",
        answer: JSON.stringify([
          "Витамин А",
          "Витамин С",
          "Витамин Е",
          "Витамин К",
        ]),
        variable_answer: "Витамин К",
        desc_id: themeMap["Огурчики"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой длины был костыль, попавший в Книгу рекордов Гиннеса?",
        answer: JSON.stringify([
          "5 метров — как высота двухэтажного дома",
          "10 метров — длина китайской пагоды",
          "16 метров — индийский рекордсмен",
          "25 метров — как синий кит",
        ]),
        variable_answer: "16 метров — индийский рекордсмен",
        desc_id: themeMap["Костыли"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Где найдено древнейшее свидетельство использования костылей (2830 г. до н.э.)?",
        answer: JSON.stringify([
          "Древняя Греция",
          "Месопотамия",
          "Древний Египет",
          "Индия",
        ]),
        variable_answer: "Древний Египет",
        desc_id: themeMap["Костыли"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Что означает термин "костыль" в программировании?',
        answer: JSON.stringify([
          "Идеально оптимизированный код",
          "Элегантное архитектурное решение",
          'Временное "уродливое" решение проблемы',
          "Способ шифрования данных",
        ]),
        variable_answer: 'Временное "уродливое" решение проблемы',
        desc_id: themeMap["Костыли"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какую главную проблему решили костыли с опорой под локоть?",
        answer: JSON.stringify([
          "Высокая стоимость материалов",
          "Сложность транспортировки",
          "Повреждение плечевых суставов",
          "Невозможность регулировки",
        ]),
        variable_answer: "Повреждение плечевых суставов",
        desc_id: themeMap["Костыли"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Дополнительный: Как называются костыли с опорой под локоть?",
        answer: JSON.stringify([
          "Американки",
          "Канадки",
          "Француженки",
          "Японки",
        ]),
        variable_answer: "Канадки",
        desc_id: themeMap["Костыли"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой национальный цветок изображен на гербе Республики Корея?",
        answer: JSON.stringify([
          "Гавайская роза",
          "Чайная роза",
          "Роза Шарона",
          "Сакура",
        ]),
        variable_answer: "Роза Шарона",
        desc_id: themeMap["Корея"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какой южнокорейский футболист стал легендой "Манчестер Юнайтед"?',
        answer: JSON.stringify([
          "Ким Чен Ин",
          "Пак Чи Сон",
          "Ли Чон Ён",
          "Хван Хи Чан",
        ]),
        variable_answer: "Пак Чи Сон",
        desc_id: themeMap["Корея"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой принцип НЕ является основным в традиционной корейской кухне?",
        answer: JSON.stringify([
          "Использование свежих ингредиентов",
          "Разнообразие вкусов",
          "Баланс между горячим и холодным",
          "Длительная термическая обработка",
        ]),
        variable_answer: "Длительная термическая обработка",
        desc_id: themeMap["Корея"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какой номер был у главного героя "Игры в кальмара" Сон Ги Хуна?',
        answer: JSON.stringify(["001", "101", "456", "256"]),
        variable_answer: "456",
        desc_id: themeMap["Корея"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Что запрещено в большинстве корейских лифтов из-за суеверий?",
        answer: JSON.stringify([
          "Кнопка 13-го этажа",
          "Черные ручки",
          "Число 4",
          "Зеркала",
        ]),
        variable_answer: "Число 4",
        desc_id: themeMap["Корея"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какой необычный памятник в Тюмени "выглядывает" прямо из-под земли?',
        answer: JSON.stringify([
          "Памятник кроту",
          "Памятник сантехнику",
          "Памятник нефтянику",
          "Памятник дворнику",
        ]),
        variable_answer: "Памятник сантехнику",
        desc_id: themeMap["Тюмень"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какое здание в Тюмени является крупнейшим в России среди аналогов?",
        answer: JSON.stringify([
          "Драматический театр",
          "Администрация города",
          'Торговый центр "Кристалл"',
          "Железнодорожный вокзал",
        ]),
        variable_answer: "Драматический театр",
        desc_id: themeMap["Тюмень"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой уникальный палеонтологический экспонат хранится в Тюменском краеведческом музее?",
        answer: JSON.stringify([
          "Скелет динозавра высотой 8 метров",
          "Скелет мамонта длиной 5 метров",
          "Чучело саблезубого тигра",
          "Яйцо древней птицы диаметром 50 см",
        ]),
        variable_answer: "Скелет мамонта длиной 5 метров",
        desc_id: themeMap["Тюмень"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой необычный материал изобрели ученые Тюменского университета?",
        answer: JSON.stringify([
          "Жидкое стекло для строительства",
          "Сухая вода для тушения пожаров",
          "Невидимый защитный экран",
          "Самоочищающийся бетон",
        ]),
        variable_answer: "Сухая вода для тушения пожаров",
        desc_id: themeMap["Тюмень"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Что необычного использовали в Тюмени в 1957 году для передачи телесигнала?",
        answer: JSON.stringify([
          "Буровую вышку как антенну",
          "Спутниковую тарелку самодельной сборки",
          "Антенны со всех городских крыш",
          "Военную радиолокационную установку",
        ]),
        variable_answer: "Буровую вышку как антенну",
        desc_id: themeMap["Тюмень"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "В каком крае расположен город Барнаул?",
        answer: JSON.stringify([
          "Алтайском",
          "Приморском",
          "Забайкальском",
          "Краснодарском",
        ]),
        variable_answer: "Алтайском",
        desc_id: themeMap["Барнаул"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "В какую историческую эпоху появились первые поселения на месте современного Барнаула?",
        answer: JSON.stringify([
          "Каменный век",
          "Медный век",
          "Бронзовый век",
          "Античность",
        ]),
        variable_answer: "Каменный век",
        desc_id: themeMap["Барнаул"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "На берегу какой крупной реки расположен Барнаул?",
        answer: JSON.stringify(["Обь", "Барнаулка", "Иртыш", "Енисей"]),
        variable_answer: "Обь",
        desc_id: themeMap["Барнаул"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какое животное изображено на гербе Барнаула?",
        answer: JSON.stringify(["Лошадь", "Овца", "Волк", "Медведь"]),
        variable_answer: "Лошадь",
        desc_id: themeMap["Барнаул"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какова протяженность самой длинной улицы Барнаула?",
        answer: JSON.stringify([
          "15 км - проспект Ленина",
          "7 км - Павловский тракт",
          "20 км - Социалистический проспект",
          "25 км - улица Попова",
        ]),
        variable_answer: "15 км - проспект Ленина",
        desc_id: themeMap["Барнаул"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какой особый статус получил Обнинск в 2000 году, став первым в России?",
        answer: JSON.stringify([
          "Столица атомной энергетики",
          "Город воинской славы",
          "Наукоград Российской Федерации",
          "Столица калужского региона",
        ]),
        variable_answer: "Наукоград Российской Федерации",
        desc_id: themeMap["Обнинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Каких военных специалистов готовят в Обнинске?",
        answer: JSON.stringify([
          "Летчиков стратегической авиации",
          "Командиров танковых дивизий",
          "Экипажи атомных подводных лодок",
          "Спецназовцев ГРУ",
        ]),
        variable_answer: "Экипажи атомных подводных лодок",
        desc_id: themeMap["Обнинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Какая уникальная конструкция в Обнинске является самой высокой метеомачтой в Европе (310 м)?",
        answer: JSON.stringify([
          "Держится без фундамента на растяжках",
          "Имеет смотровую площадку на вершине",
          "Построена из титановых сплавов",
          "Вращается вокруг своей оси",
        ]),
        variable_answer: "Держится без фундамента на растяжках",
        desc_id: themeMap["Обнинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какое первое в мире достижение появилось в Обнинске?",
        answer: JSON.stringify([
          "Первый атомный ледокол",
          "Первая промышленная атомная электростанция",
          "Первый спутник связи",
          "Первая установка термоядерного синтеза",
        ]),
        variable_answer: "Первая промышленная атомная электростанция",
        desc_id: themeMap["Обнинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "В каком сериале прославился актер Марк Богатырев из Обнинска?",
        answer: JSON.stringify(["Интерны", "Кухня", "Молодежка", "Физрук"]),
        variable_answer: "Кухня",
        desc_id: themeMap["Обнинск"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какая известная теннисистка родилась в Сочи?",
        answer: JSON.stringify([
          "Вера Звонарёва",
          "Мария Шарапова",
          "Мария Кириленко",
          "Анастасия Мыскина",
        ]),
        variable_answer: "Мария Шарапова",
        desc_id: themeMap["Сочи"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Что уникального выращивают в Сочи как в самом северном регионе?",
        answer: JSON.stringify(["Бананы", "Кофе", "Чай", "Ананасы"]),
        variable_answer: "Чай",
        desc_id: themeMap["Сочи"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Когда появились первые люди на территории современного Сочи?",
        answer: JSON.stringify([
          "Около 10 000 лет назад",
          "В эпоху Древнего Рима",
          "Более 100 000 лет назад",
          "После ледникового периода",
        ]),
        variable_answer: "Более 100 000 лет назад",
        desc_id: themeMap["Сочи"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какая самая низкая температура зафиксирована в Сочи?",
        answer: JSON.stringify(["-5°C", "-13°C", "-20°C", "0°C"]),
        variable_answer: "-13°C",
        desc_id: themeMap["Сочи"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какое животное изображено на логотипе ФК Сочи?",
        answer: JSON.stringify(["Дельфин", "Тигр", "Барс", "Сойка"]),
        variable_answer: "Барс",
        desc_id: themeMap["Сочи"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Cards", questions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
