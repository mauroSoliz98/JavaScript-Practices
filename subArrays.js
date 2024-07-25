/*Medir la longitud de un sub-array delimitado por un numero dado por el usuario que se repita 
al principio y al final del array ejemplo [1,7,9,8,5,7,0] el resultado seria 5
Ojo: Si el valor dado no se repite o se repite mas de dos veces el resultado es 0 */

var lengthOfSequence = function (arr, n) {
  
    let flag1 = -1 //Bandera que señala el principio del sub-array
    let flag2 = -1 //Bandera que señala el final del sub-array
    let flag3 = -1 //Bandera de control de un tercer elemento
    //OJO: -1 NOS INDICA QUE NO ESTA APUNTANDO A NINGUN INDECE
    for ( let i = 0; i<arr.length; i++ ) {
        if (arr[i] == n) {
          console.log(arr[i]);
            if (flag1 == -1) {
            flag1 = i
            console.log('flag1: ', flag1);
            } 
            else if ( flag2 == -1 ) {  
            flag2 = i
            console.log('flag2: ', flag2);
            }
            else if (flag3 == -1 ) {
            flag3 = i
            console.log('flag3: ', flag3);
            }
        }
     
    }
    if((flag1 != -1) && (flag2 != -1) && (flag3 == -1)){
      return (flag2 - flag1 + 1)
    } else {
      return 0
    }
  };
  console.log('Resultado: ',lengthOfSequence([1, 1], 1))
