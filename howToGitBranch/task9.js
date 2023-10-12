summ1=200000;
percent=10;
srock=2; 

summ2=summ1 * Math.pow(((percent / 100) + 1), srock); 
pereplata=summ2-summ1; 

console.log(`${summ2} сумма выплаты ${pereplata} Переплата`);