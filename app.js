//Chapter 1
//1
alert('Hello... I can run JS through web browser\'s console')
//2
window.alert("Error!Please enter a valid password.");
//3
alert("Welcome to JS land... \n Happy Coding!");
//4
alert("Welcome to JS land... \n Happy Coding!");
alert('Happy Coding!')

//5
alert('Hello... I can run JS through web browser\'s console')

//6
alert("Hello World in q6.html");
//7
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>
//          alert("Inside Head");
//     </script>
// </head>
// <script>
//      alert("Before your pages html");
// </script>
// <body>
//     <script>
//         alert("Inside your pages html");
//    </script>
// </body>
// <script>
//     alert("After your pages html");
// </script>
// </html>


//Chapter 2
   //Q1
   var username ="fnkhan142";
   alert(username);
   //Q2
   var myName = "Muhammad Faizan Khan";
   alert(myName);
   //Q3
   var message = "Hello World"
   alert(message);

   //4
   var name = 'Muhammad Faizan Khan'
   var age = '22 years old'
   var course = 'Web and Mobile App Development'
   alert(name, age, course)
   alert(age)
   alert(course)
    //5
    var pattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
    alert(pattern);
    //6
    var email = "My email address is example" + "@example.com";
    alert(email);

     //7
     var book = "I am trying to learn from the Book A smarter \n way to learn JavaScript";
     alert(book);
    
     //8
     var dispBrowser = "Yah! I can write HTML content through JavaScript";
     document.write(dispBrowser);

     //9
     var dispPattern= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
     alert(dispPattern);

     //Chapter 3
       
    //1
       var age = 15;
       alert("I am " + age + " " + "years old")

      //2
      var visitor= 14;
      alert("You have visited the site" + " " + visitor + " " + " times");

       //3
       var birthYear = 1998;
       document.write('My birth year is ' + ''  + birthYear + '<br> Data type of my declared variable is number' );

       //4
       var vistorsName = "Faizan";
       var productTitle = "T-shirt";
       var quantity = 5;
       document.write(vistorsName + " " + "ordered" + " " + quantity + " " + "T-shirt" + "(s) " + " " + "on XYZ Clothing store");

       //Chapter 4
       // 1
    var a1,b1,c1;
        // 2
    var $_ab, _ba, _321, aca_xya, aba_123;
        // 3
    document.write('<h1>Rules for naming JS variables</h1><br><p>Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>Variables must begin with a letter, $ or _ . For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS</p>')

    //Chapter 5
     //1
     var num1= 3;
     var num2 = 5;
     var num3 = num1 + num2;
     document.write("Sum of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);
 //2
 var num1= 3;
     var num2 = 5;
     var num3 = num1 - num2;
     document.write("Substract of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);
     var num1= 3;
     var num2 = 5;
     var num3 = num1 * num2;
     document.write("Multiple of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);


     var num1= 20;
     var num2 = 5;
     var num3 = num1 / num2;
     document.write("Division of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);

     var num1= 21;
     var num2 = 5;
     var num3 = num1 % num2;
     document.write("Mod of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);

     //3
     var num1;
     document.write("Value after variable declaration is:" + num1);
     var num1 = 5;
     document.write('<br>Initial Value : ' + num1);
     num1++;
     document.write('<br> Value after increment is: ' + num1);
     var num1 = num1 + 7;
     document.write('<br> Value after addition is: ' + num1);
     num1--;
     document.write('<br> Value after decrement is: ' + num1);
     var num1 = num1%3;
     document.write('<br> Remainder is: ' + num1);

     //4
     var oneMovie = 600;
     var numberOfTickets = 5;
     var totalCost = (oneMovie* numberOfTickets);
     document.write("Total cost to buy" + " " +  numberOfTickets + " " + "tickets  to a movie is" + " " + totalCost + "PKR")  

//5
document.write('Table of 4<br>')
for (let i = 1; i <= 10; i++) {
document.write('4x' + i + '=' + i * 4 + '<br>')
}

 //6
 var fehrenheit = 77;
 var convertedCelsius = (fehrenheit - 32) * 5 / 9;
 document.write(convertedCelsius + '°C is ' + fehrenheit + '°F<br>')

 var celsius = 21.11111111111111;
 var convertedFehrenheit = (celsius * 9 / 5) + 32;
 document.write(convertedFehrenheit + '°F is ' + celsius + '°C')

  //Q7
  var priceOfItem1 = 650;
  var priceOfItem2 = 100;
  var item1Q = 3;
  var item2Q = 7;
  var shippingCharges = 100;
  var totalCost = (priceOfItem1* item1Q) + (priceOfItem2*item2Q) +shippingCharges;
  document.write('<h1>Shopping Cart</h1><br>');
  document.write('Price of item 1 is '+ priceOfItem1 + '<br> Quantity of item 1 is ' + item1Q + '<br>Price of item 2 is'+ priceOfItem2 + '<br> Quantity of item 2 is ' + item2Q + '<br> Shipping Charges ' + shippingCharges + "<br><br>Total Cost of your order is " + totalCost);

  //8
  var totalMarks =  980;
  var marksObtained = 804;
  var totalPercent=(marksObtained/totalMarks*100);
  document.write('<h1>Marks Sheet</h1> <br>');
  document.write('Total Marks: ' + totalMarks + '<br>Marks Obtained: ' + marksObtained + '<br>Percentage: ' +totalPercent + '%'); 

 //9
 var singleCalc = (10 * 104.80) + (25 * 28);
 document.write('Total Currency in PKR:' + singleCalc);

 //10
 var exp = (5 * 10 /2);
 document.write('Mathematics Expressions : ' +exp);

  //11
  var currentYear = 2016;
  var birthYear = 1992;
  var age= 2016-1992;
  document.write('Current Year:' + currentYear + '<br>Birth Year:' + birthYear + '<br>Your age is: ' + age );

   //12
   var radiusOfCircle = 20;
   var circumOfCircle = (2* 3.142 * radiusOfCircle);
   var areaOfCircle = (3.142 * radiusOfCircle*radiusOfCircle);
   document.write('Radius of a circle:' + radiusOfCircle + '<br>The circumference is: ' + circumOfCircle + '<br>The area is: ' + areaOfCircle);

    //Q13
    var favouriteSnack = 'chocolate chip'
    var currentAge = 15;
    var maxAge =  65;
    var amountOfSnacks = 3;
    var calculator = (maxAge - currentAge) * 3;
    document.write('<h1>The Lifetime Supply Calculator</h1><br>');
    document.write('<br>Favourite Snack:' +favouriteSnack);
    document.write('<br>Current age:' + currentAge);
    document.write('<br>Estimated Maximum age:' + maxAge);
    document.write('<br>Amount of snacks per day:' + amountOfSnacks);
    document.write('<br>You will need ' + calculator + ' chocolate chip to last you until the ripe old age of  ' + maxAge);

//Chapter 6-9
 //1
 var a= 10;
 document.write('Result:<br>');
 document.write('The value of a is:' + a  + '<br>');
 document.write('.................................<br><br>');
 document.write('The value of  ++a is: ' + ++a + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  a++ is: ' + a++ + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  --a is: ' + --a + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  a-- is: ' + a-- + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');

  //2
  var a = 2;
  var b = 1;

  document.write('a: ' + a + '<br>')
  document.write('b: ' + b + '<br>')
  var result = --a - --b + ++b + b--;
  document.write('result: ' + result + '<br>')
  document.write('--a value is 1<br>')
  document.write('--a - --b value is 1<br>')
  document.write('--a - --b + ++b value is 2<br>')
  document.write('--a - --b + ++b + b-- value is 3<br>')

  //3
  var name =prompt('What is your name?');
  document.write('Your name is:' + name);

        //5
        var numberForTable = prompt('Enter number for table')

        if (Number(numberForTable)) {
            for (let i = 1; i <= 10; i++) {
                document.write(numberForTable + 'x' + i + '=' + numberForTable * i + '<br>');
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            document.write(5 + 'x' + i + '=' + 5 * i + '<br>');
        }
    }

//6
var subject1 = 'English';
var subject2 = 'Urdu';
var subject3 = 'Math';
var tM = 100;
var tMSub = 100 * 3;
var obtainedMarks1 = prompt('Enter Obtained Mask');
var obtainedMarks2 = prompt('Enter Obtained Mask');
var obtainedMarks3 = prompt('Enter Obtained Mask');
var tOM = Number(obtainedMarks1) + Number(obtainedMarks2) + Number(obtainedMarks3);
var percent1 = Math.trunc((obtainedMarks1 / tM) * 100);
var percent2 = Math.trunc((obtainedMarks2 / tM) * 100);
var percent3 = Math.trunc((obtainedMarks3 / tM) * 100);  
var totalPercent = (percent1 + percent2 + percent3) / 3;

document.write('<table>')
document.write('<tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>')
document.write('<tr><td>' + subject1 + '</td><td>' + tM + '</td><td>' + obtainedMarks1 + '</td><td>' + percent1 + '%</td></tr>')
document.write('<tr><td>' + subject2 + '</td><td>' + tM + '</td><td>' + obtainedMarks2 + '</td><td>' + percent2 + '%</td></tr>')
document.write('<tr><td>' + subject3 + '</td><td>' + tM + '</td><td>' + obtainedMarks3 + '</td><td>' + percent3 + '%</td></tr>')
document.write('<tr><th colspan="2">' + tMSub + '</th><th>' + tOM + '</th><th>' + totalPercent + '%</th></tr>')
document.write('</table>')


//Chapter 9-11
//1
var city = prompt('Enter city name');
if(city == 'Karachi'){
    document.write('Welcome to the city of lights');
}
  //2
  var gender = prompt('Enter your gender');
  if(gender == 'male'){
      document.write('Good Morning Sir');
  }
 else if(gender == 'female'){
      document.write(' Good Morning Ma’am');
  }
 //3
 var signalColor = prompt('Enter signal color');
 if(signalColor == 'Red'){
     document.write('Must Stop');
 }
 else if(signalColor == 'Yellow'){
     document.write('Ready to move');
 }
 else if(signalColor == 'Green'){
     document.write('Move now');
 }
 //4
 var fuelCar = prompt('Enter fuel in litres : ');
 if(fuelCar < 0.25){
     document.write('Please refill the fuel in your car');
 }

// 5
// a.given condition
// for variable a is true
// b.given condition
// for variable b is true
// c.condition 2 is true, condition 4 is true
// d.The cost equals
// e.True
// f.car is smaller than cat

 //6
 var subject1 = prompt('Enter 1st subject marks')
 var subject2 = prompt('Enter 2nd subject marks')
 var subject3 = prompt('Enter 3rd subject marks')
  var tM = 300;
  var tOM = Number(subject1) + Number(subject2) + Number(subject3);
  var percent = Math.trunc((tOM / tM) * 100);

  document.write('<h1>Marks Sheet</h1><br>')
  document.write('Total Marks: ' + tM + '<br>')
  document.write('Marks obtained: ' + tOM + '<br>')
  document.write('Percentage: ' + percent + '%<br>')

  if (percent >= 80) {
      document.write('Grade: A-one<br>')
      document.write('Remarks: Excellent')
  } else if (percent >= 70) {
      document.write('Grade: A<br>')
      document.write('Remarks: Good')
  } else if (percent >= 60) {
      document.write('Grade: B<br>')
      document.write('Remarks: You need to improve')
  } else if (percent < 60) {
      document.write('Grade: Fail<br>')
      document.write('Remarks: Sorry')
  }
   //7
   var secretNumber = 5;
   var guess = prompt('Guess the number')

   if (secretNumber === Number(guess)) {
       document.write('Bingo! Correct answer')
   } else if (++secretNumber === Number((guess))) {
       document.write('Close enough to the correct answer')
   }

    //8
    var number = prompt('Enter a number');
    if(Number(number) % 3 == 0){
        document.write('number is divisible by 3');
    }

     //9
     var number = prompt('Enter a number');
     if(Number(number) % 2 == 0){
        document.write('even');
    }
    else{
        document.write('odd');
    }
   //10
   var Temp = prompt('Enter temperature')

   if (Number(Temp) > 40) {
       document.write('It is too hot outside')
   } else if (Number(Temp) > 30) {
       document.write('The Weather today is Normal')
   } else if (Number(Temp) > 20) {
       document.write('Today’s Weather is cool')
   } else if (Number(Temp) > 10) {
       document.write('OMG! Today’s weather is so Cool')
   }

 //11
 var firstNum = prompt('Enter First Number')
 var secondNum = prompt('Enter Second Number')
 var operators = prompt('Enter operator')

 if (operators =='+') {
 var calc = firstNum + secondNum;
 document.write('Addition: ' + calc)
 } else if (operators == '-') {
 var calc = firstNum - secondNum;
 document.write('Subtraction: ' + calc)
 } else if (operators == '*') {
 var calc = firstNum * secondNum;
 document.write('Multilpy: ' + calc)
 } else if (operators == '/') {
 var calc = firstNum / secondNum;
 document.write('Divide: ' + calc)
 } else if (operators == '%') {
 var calc = firstNum % secondNum;
 document.write('Remainder: ' + calc)
 }
//Chapter 12-13
  //1
  var checkCh = prompt('Enter character')
  if (checkCh.charCodeAt(0) >= 65 && checkCh.charCodeAt(0) <= 90) {
      document.write('UpperCase Letter')
  } else if (checkCh.charCodeAt(0) >= 97 || checkCh.charCodeAt(0) <= 122) {
      document.write('LowerCase Letter')
}

//2
var firstNum = prompt('Enter 1st number')
var secondNum = prompt('Enter 2nd number')

if (Number(firstNum) > Number(secondNum)) {
    document.write('First Number is greater than second number')
} else if (Number(firstNum) < Number(secondNum)) {
    document.write('Second Number is greater than first number')
} else if (Number(firstNum) == Number(secondNum)) {
    document.write('First Number is equal to second number')
}

  //3
  var num1 = prompt('Enter a number')

  if (Number(num1) == 0) {
      document.write('Zero')
  } else if (Number(num1) > 0) {
      document.write('Positive')
  } else if (Number(num1) < 0) {
      document.write('Negative')
  }

    //4
    var character = prompt('Enter a character')

    if (character.charCodeAt(0) == 65 || character.charCodeAt(0) == 69 || character.charCodeAt(0) == 73 || character.charCodeAt(0) == 79 || character.charCodeAt(0) == 85 || character.charCodeAt(0) == 97 || character.charCodeAt(0) == 101 || character.charCodeAt(0) == 105 || character.charCodeAt(0) == 111 || character.charCodeAt(0) == 117) {
        document.write('True')
    } else {
        document.write('False')
    }
 //5
 var correctPass ='faizan';
 var askPass = prompt('Enter a Password');
 if(correctPass == askPass){
     document.write('Correct! The password you entered matches the original password');
 }
 else if(askPass === ''){
     document.write('Please enter your password');
 }
 else {
     document.write('Incorrect password');
 }
//6
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }else{
        greeting = "Good evening";
}

//7
        var timing = prompt('Enter Time(24 Hours Format)')

        if (timing == '0100') {
            document.write('1 AM')
        } else if (timing == '0200') {
            document.write('2 AM')
        } else if (timing == '0300') {
            document.write('3 AM')
        } else if (timing == '0400') {
            document.write('4 AM')
        } else if (timing == '0500') {
            document.write('5 AM')
        } else if (timing == '0600') {
            document.write('6 AM')
        } else if (timing == '0700') {
            document.write('7 AM')
        } else if (timing == '0800') {
            document.write('8 AM')
        } else if (timing == '0900') {
            document.write('9 AM')
        } else if (timing == '1000') {
            document.write('10 AM')
        } else if (timing == '1100') {
            document.write('11 AM')
        } else if (timing == '1200') {
            document.write('12 PM')
        } else if (timing == '1300') {
            document.write('1 PM')
        } else if (timing == '1400') {
            document.write('2 PM')
        } else if (timing == '1500') {
            document.write('3 PM')
        } else if (timing == '1600') {
            document.write('4 PM')
        } else if (timing == '1700') {
            document.write('5 PM')
        } else if (timing == '1800') {
            document.write('6 PM')
        } else if (timing == '1900') {
            document.write('7 PM')
        } else if (timing == '2000') {
            document.write('8 PM')
        } else if (timing == '2100') {
            document.write('9 PM')
        } else if (timing == '2200') {
            document.write('10 PM')
        } else if (timing == '2300') {
            document.write('11 PM')
        } else if (timing == '0000') {
            document.write('12 AM')
        }
//Chapter 14-16
  //1
  var e = [];
  //2
  var f = new Array(); 
  //3
  var g = ["a","b" ,"c"];
  //4
  var h =[11,22,12,22];
  //5
  var i = [true,true,false];
  //6
  var j = ['faizan',true ,12]

  // 7
  var k = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

  document.write('<h1>Qualification</h1><h1>')
  for (let i = 0; i < k.length; i++) {
      document.write((i + 1) + ') ' + k[i] + '<br>')
  }
  document.write('</h1>')

     //8
     var nameOfStudent = ['Michael', 'John', 'Tony'];
     var marksObtained = [320, 230, 480];
     totalM = 500;

     document.write('<h3>')
     for (let i = 0; i < nameOfStudent.length; i++) {
         document.write('Score of ' + nameOfStudent[i] + ' is ' + marksObtained[i] + '. Percentage: ' + Math.trunc((marksObtained[i] / totalM) * 100) + '%<br>')

     }
     document.write('</h3>')

   //9
   var nameOfColor = [];
   document.write(nameOfColor + '<br>')
   
   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.push(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   nameOfColor.shift()
   document.write(nameOfColor + '<br>')

   nameOfColor.pop()
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   var indexNumber = prompt('Enter index Number')
   nameOfColor.splice(Number(indexNumber), 0, userOfColor)
   document.write(nameOfColor + '<br>')

   var deleteFromStart = prompt('Start delete color')
   var deleteFromEnd = prompt('End delete color')
   nameOfColor.splice(Number(deleteFromStart), Number(deleteFromEnd))
   document.write(nameOfColor + '<br>')

      //10
      var a = [320, 230, 480, 120]
      document.write('Scores Of Student:' + a)
      a.sort()    
      document.write('<br>Ordered Scores Of Student:' + a)

  //11
  var citiesOfPak = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
  var selectedCitiesOfPak = citiesOfPak.slice(2, 4);
  document.write('Cities list:<br>' + citiesOfPak)
  document.write('<br><br>Selected cities list:<br>' + selectedCitiesOfPak)

   //12
   var array1 = ['This', 'is', 'my', 'cat'];
   document.write('<h1>Array:<br>' + array1 + '</h1>')
   document.write('<h1>String:<br>' + array1.join(' ') + '</h1>')

 //13
 var devicesOfComp = ['keyboard', 'mouse', 'printer', 'monitor'];

 document.write('<h3>Devies:<br>' +devicesOfComp + '<br>')
 for (let i = 0; i < 4; i++) {
     document.write('<br>Out:<br>' + devicesOfComp.shift())
 }
 document.write('</h3>')

 //14
 var devicesOfComp = ['keyboard', 'mouse', 'printer', 'monitor'];

 document.write('<h3>Devies:<br>' + devicesOfComp + '<br>')
 devicesOfComp.reverse();
 for (let i = 0; i < 4; i++) {
     document.write('<br>Out:<br>' + devicesOfComp.shift());
 }
document.write('</h3>')

 //15
 var manufacturersOfPhone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

 document.write('<select>')
 for (let i = 0; i < manufacturersOfPhone.length; i++) {
     document.write('<option>' + manufacturersOfPhone[i] + '</option>')
 }
 document.write('</select>')

//Chapters 17-20
  //1
  var array1 = [[],[]]
  //2
  var array2 = [
[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]
  ]
document.write('<h1>')
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= 3; j++) {
      document.write(array2[i][j] + ' ')
  }
document.write('<br>')
  }
document.write('</h1>')

  //3
  document.write('<h1>')
  for (let i = 0; i < 10; i++) {
      document.write((i + 1) + '<br>')
  }
  document.write('</h1>')

  //4
  var tableForM = prompt('Enter a number to show its multiplication table')
  var tableLengthForM = prompt('Enter length multiplication table')

  document.write('Multiplication table of ' + tableForM + '<br>')
  document.write('Length ' + tableLengthForM + '<br><br>')
  for (let i = 1; i <= tableLengthForM; i++) {
      document.write(tableForM + ' x ' + i + ' = ' + tableForM * i + '<br>')
  }

   //5
   var fruitsInArray = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
   document.write('<h1>')
   for (let i = 0; i < fruitsInArray.length; i++) {
       document.write(fruitsInArray[i] + '<br>')
   }
   document.write('</h1>')

   document.write('<h1>')
   for (let i = 0; i < fruitsInArray.length; i++) {
       document.write('Element at index ' + i + ' is ' + fruitsInArray[i] + '<br>')   
   }
   document.write('</h1>')

     //6
     document.write('<h1>Counting: ')
     counter = 15
 for (let i = 0; i < counter; i++) {
     
     document.write((i + 1) + ', ')
 }
 
 document.write('</h1>')

 document.write('<h1>Reverse Counting: ')
 let i;
 counter = 10
 for (i = counter; i > 0; i--) {
     if (i == 0) {
     break
 }
 document.write(i + ', ')
 }
 document.write('</h1>')

 document.write('<h1>Even: ')
 counter = 22
 for (let i = 0; i < counter - 1; i++) {
     if (i % 2 == 0) {
         document.write(i + ', ')
 }
}
 document.write('</h1>')

 document.write('<h1>Odd: ')
 counter = 21
 for (let i = 0; i < counter - 1; i++) {
     if (i % 2 != 0) {
         document.write(i + ', ')
 }
}
 document.write('</h1>')

 document.write('<h1>Series: ')
 counter = 10
 for (let i = 0; i <= counter; i++) {
     if (i != 0) {
     document.write((i*2) + 'k, ')
     }
 }
 document.write('</h1>')

  //7
  var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
  var searchByUser = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am')

  if (A.indexOf(searchByUser) == -1) {
      document.write('We are sorry.' + searchByUser + ' is <b>not available</b> in our bakery')
  } else {
      document.write(searchByUser + ' is <b>available</b> at index ' + A.indexOf(searchByUser) + ' in our bakery')
}

     //8
     var A = [24, 53, 78, 91, 12];
     var largestNumber = 0;
 for (let i = 0; i < A.length; i++) {
     if (A[i] > largestNumber) {
         largestNumber = A[i]
 }
}
 document.write('<h1>Array items:' + A + '<br>')
 document.write('The largest number is ' + largestNumber + '</h1>')
 
    //9
    var A = [24, 53, 78, 91, 12];
    var smallestNumber = A[0];
for (let i = 0; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i]
    }
}
document.write('<h1>Array items:' + A + '<br>')
document.write('The smallest number is ' + smallestNumber + '</h1>')

//10
    
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0)
            document.write(i + ', ')
        }