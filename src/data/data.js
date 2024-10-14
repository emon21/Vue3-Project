
const message = 'Well Come To Vue JS in js framework';
// const date = Date('dd/mm/yyyy');
// const date = (new Date('D-m-Y')).toLocaleDateString();
// const date = (new Date('D-m-Y')).toDateString();

function getDate() {
   const date = new Date();
   return date.toDateString()
}

const data = {

   message: 'Well Come To Vue JS in js framework !!',
   date: '30 - june- 2024',
   tasks:[1,2,3,4,5]
   
}


export default data;

// export {data};