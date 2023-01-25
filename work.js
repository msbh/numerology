
      var PYTHAGOREAN = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
      };
       var KABALA = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
      };

      var CHALDEAN = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 8, 'g': 3, 'h': 5, 'i': 1,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 7, 'p': 8, 'q': 1, 'r': 2,
        's': 3, 't': 4, 'u': 6, 'v': 6, 'w': 6, 'x': 5, 'y': 1, 'z': 7
      };

      // Set up HTML elements
      var input = document.querySelector('input');
      var button = document.querySelector('button');
      var result = document.querySelector('.result');

      // Metode
      function calculate(){
        // Empty HTML
        result.innerHTML = '';

        // Print results
        printResult(PYTHAGOREAN, 'Pythagoras');
        printResult(CHALDEAN, 'Chaldean');
        printResult(KABALA, 'Kabala');
      }
      
      function checkDesire(comSum,desired,list){
      var addStr='';
       if(comSum != desired){
  				for (var key in list) {
  					if(sumtoSingleDigit (comSum + list[key])	== desired){
							 addStr = addStr +','+key;
           	}
          }
         
        }
        return addStr;
      }
function sumtoSingleDigit(sum){

      var comm=0;
 				if(sum>9)
        { 
          let myFunc = num => Number(num);      
          var intArr = Array.from(String(sum), myFunc);

       comm= parseInt(intArr[0])+parseInt(intArr[1]);
           if(comm >9){
           	return	sumtoSingleDigit(comm);
           }
           else {return comm;}
        }
        else { return sum;}
}
      // Print list
      function printResult(list, text) {
      var desiredArr = [6,4,5,8];
        var letters = input.value.toLowerCase().replace(/[^0-9a-z]/g, '').split('');
        var sum = 0, l, i,z;
        var comSum=0;
        var addStr='';
        for(i = 0; i < letters.length; i++){
          // Extract letter from array
          l = letters[i];

          // Lookup or convert letter and add to sum
          sum += list[l] || parseInt(l);
        }
        if(text=='Kabala'){
         // Write the sum to screen
        result.innerHTML += '<div class="result-text"><b>' + text + '</b> </br>' + sum +  '   Sum:   '+ ((sum/9)+1) + '</div>';
        return;
        }
        if(sum>9)
        { 
       		comSum = sumtoSingleDigit(sum);   
        }
        else{comSum = sum }
         for (z = 0; z < desiredArr.length; z++) {
           console.log(desiredArr[z]);      
       		addStr = addStr +'    '+desiredArr[z] +':' +checkDesire(comSum,desiredArr[z],list);
       }
      /* if(comSum != desired){
  				for (var key in list) {
  					if(sumtoSingleDigit (comSum + list[key])	== desired){
								addStr = addStr +','+key;
           	}
          }
         
        }
        */

        // Write the sum to screen
        result.innerHTML += '<div class="result-text"><b>' + text + '</b> </br>' + sum +  '   Sum:   '+comSum +  ' </br>     '+addStr +'</div>';
      }
