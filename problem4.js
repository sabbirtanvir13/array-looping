const products=[1,2,3,]
const comp_prodects=[];
for(const product of products){
    comp_prodects.push(product);
}
comp_prodects[0]=99;
console.log(products);
console.log(comp_prodects);