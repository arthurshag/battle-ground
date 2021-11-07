import React, {useEffect, useState} from "react";
import {ApiNumber} from "../../services/Api";
import {Button, Divider, Input, Space} from 'antd';
import Title from "antd/lib/typography/Title";
import styles from "./Numbers.module.css";

function getRandomNum(max: number, min: number) {
    max += min;
    return Math.floor(Math.random() * max - min);
}

const arrayNotifications = [
    "Факт по цифре",
    "Факт по ЦИФРЕ",
    "Ошибка, пиши цифру",
    "Пиши цифру",
    "Пиши цифру ёпта",
    "НЕ БУКАВЫ, А ЦИФРУ",
    "Зачем ты суешь, свои грязные букавы сюда ?",
    "ТЕБЕ РУССКИМ ЯЗЫКОМ НАПИСАННО ФАКТ ПО ЦИФРЕ",
    "Падла, не пиши сюда больше Букавы",
    "Падла, не пиши сюда больше",
    "...",
    "............",
    "......................................................................................",
    "..................................................................................................................................................................................................................................................................",
    "Ты кто такой, чтобы это делать ?",
    "НА МОИХ ГЛАЗАХ",
    "ТЫ С КИОСКА ЗАРЯЖАЕШЬ СЮДА СИМВОЛЫ ИЛИ ЧТО ?",
    "Вы чё, действительно это делаете ?",
    "ГОРОХОВЫЙ, ПИШИ ЦИФРУ",
    "Ладно",
    "Хорошо",
    "Я понимаю",
    "Ты думаешь...",
    "Ты правда думаешь, что я заготовил более дохрена фраз на эту форму ?",
    "Да, ты прав",
    "НО",
    "ПИШИ",
    "СРАННУЮ",
    "ЦИФРУ",
    "I AM A DANGER SKYLER",
    "I AM night",
    "Я найду тебя",
    "Разберу",
    "И соберу",
    "Пиши свой адрес в форму",
    "Всё, за тобой выехали",
    "Тикай с городу",
    "Ты понимаешь, если ты сейчас не остановишься",
    "То будут последсвтия",
    "То будут последсвтия",
    "Сильные последствия",
    "Ты вынуждаешь меня",
    "Применить это",
    "3",
    "2",
    "1",
    "0",
    "ХОХЛЫ",
    "ХОХЛЫ ХОХЛЫ ХОХЛЫ",
    "ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ",
    "ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ",
    "ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ",
    "ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫХОХЛЫ ХОХЛЫ ХОХЛЫ",
    "ХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫ",
    "ХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫ",
    "ХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫ",
    "ХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫ",
    "ХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫХОХЛЫ",
    "Всё, заготовок больше нет, ты победил, я ухожу, всё",
]
let i = -1;
export const Numbers: React.FC = () => {
    const [text, changeText] = useState("");
    const [trigger, result] = ApiNumber.useLazyGetFactQuery();
    const {data, isLoading, isError} = result;

    useEffect(() => {
        if (!text.length)
            return
        trigger(text);
    }, [text])

    useEffect(() => {
        if (!isError) {
            if(i < arrayNotifications.length - 1)
                i++;
        }
    }, [isError])

    return <div className={styles.numbers} prefix={styles.numbers}>
        <Title>Факт по цифре</Title>
        <Space size={0}>
            <Input placeholder="Пиши цифру!" value={text} onChange={(value) => changeText(value.target.value)}/>
            <Button onClick={() => changeText(getRandomNum(1000, 1000).toString())}>Взять рандомный число</Button>
        </Space>
        <Divider/>
        {isError ? <Title level={2} type={"danger"} style={{textShadow: "0 0 2px black", maxWidth:700}}>
            {arrayNotifications[i]}
        </Title> : ""}
        {isLoading && "Загрузка"}
        {!isError && <Title style={{maxWidth: '700px'}} level={3}>{data}</Title>}
    </div>
}

