import { GameConfig } from "./types";

export const africanCapitalCitiNamesGameConfig: GameConfig = {
    id: "africa-capitals-game",
    stages: [
        {
            id: "1",
            order: 1,
            price: 400,
            task: {
                id: "1",
                description: "What is the capital of Angola?",
                correctAnswerId: "3",
                answers: [
                    { id: "1", value: "Cairo" },
                    { id: "2", value: "Addis Ababa" },
                    { id: "3", value: "Luanda" }, // Correct answer
                    { id: "4", value: "Nicosia" },
                ],
            },
        },
        {
            id: "2",
            order: 2,
            price: 500,
            task: {
                id: "2",
                description: "What is the capital of Botswana?",
                correctAnswerId: "2",
                answers: [
                    { id: "1", value: "Pretoria" },
                    { id: "2", value: "Gaborone" }, // Correct answer
                    { id: "3", value: "Harare" },
                    { id: "4", value: "Windhoek" },
                ],
            },
        },
        {
            id: "3",
            order: 3,
            price: 600,
            task: {
                id: "3",
                description: "What is the capital of Ethiopia?",
                correctAnswerId: "2",
                answers: [
                    { id: "1", value: "Nairobi" },
                    { id: "2", value: "Addis Ababa" }, // Correct answer
                    { id: "3", value: "Khartoum" },
                    { id: "4", value: "Maputo" },
                ],
            },
        },
        {
            id: "4",
            order: 4,
            price: 700,
            task: {
                id: "4",
                correctAnswerId: "1",
                description: "What is the capital of Kenya?",
                answers: [
                    { id: "1", value: "Nairobi" }, // Correct answer
                    { id: "2", value: "Dar es Salaam" },
                    { id: "3", value: "Lusaka" },
                    { id: "4", value: "Mogadishu" },
                ],
            },
        },
        {
            id: "5",
            order: 5,
            price: 800,
            task: {
                id: "5",
                correctAnswerId: "1",
                description: "What is the capital of Nigeria?",
                answers: [
                    { id: "1", value: "Abuja" }, // Correct answer
                    { id: "2", value: "Accra" },
                    { id: "3", value: "Yamoussoukro" },
                    { id: "4", value: "Dakar" },
                ],
            },
        },
        {
            id: "6",
            order: 6,
            price: 900,
            task: {
                id: "6",
                description: "What is the capital of South Africa?",
                correctAnswerId: "1",
                answers: [
                    { id: "1", value: "Pretoria" }, // Correct answer (administrative)
                    { id: "2", value: "Cape Town" }, // Legislative capital
                    { id: "3", value: "Bloemfontein" }, // Judicial capital
                    { id: "4", value: "Mbabane" }, // Capital of Swaziland (eSwatini)
                ],
            },
        },
        {
            id: "7",
            order: 7,
            price: 1000,
            task: {
                id: "7",
                description: "What is the capital of Tanzania?",
                correctAnswerId: "1",
                answers: [
                    { id: "1", value: "Dodoma" }, // Correct answer (official)
                    { id: "2", value: "Dar es Salaam" }, // Former and commercial capital
                    { id: "3", value: "Kigali" }, // Capital of Rwanda
                    { id: "4", value: "Lusaka" }, // Capital of Zambia
                ],
            },
        },
    ],
};
