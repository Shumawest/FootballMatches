Matches.Match = DS.Model.extend({
title: DS.attr('string'),
score: DS.attr('string'),
name: DS.attr('string'),
time: DS.attr('string'),
comment: DS.attr('string'),
photo: DS.attr('string')

});


Matches.Match.FIXTURES = [
 {
   id: 1,
   title: 'Россия - Япония',
   score: '0-1',
   name: '02-Кацуми (Япония)',
   time: '36:27',
   photo: 'images/1.jpg'
   
 },
 {
   id: 2,
   title: 'Украина - Франция',
   score: '2-1',
   name: '01-Шевченко (Украина); 08-Коновалов (Украина); 02-Рибери (Франция)',
   time: '76:50',
   photo: './images/1.jpg'
 },
 {
   id: 3,
   title: 'США - Англия',
   score: '1-1',
   name: '07-Смит (Англия); 09-Джексон (США)',
   time: '25:13',
   photo: 'images/1.jpg'
 }
];
