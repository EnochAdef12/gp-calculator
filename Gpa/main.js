//This is initialization, used the document() to get element by id

const add = document.getElementById('add')
const courseCode = document.getElementById('courseCode')
const unit = document.getElementById('courseUnit')
const grade = document.getElementById('grade')
const tbody = document.getElementById('tbody')
const tfoot = document.getElementById('tfoot')
const table = document.getElementById('label')
const calc = document.getElementById('calc')
const reset = document.getElementById('reset')
const love = document.getElementById('lol')

let gpArray = [];



//We added an event listener to the add button and some control structures to meet specific conditions//
add.addEventListener('click', ()=>{
    if(unit.value <=0   || grade.selectedIndex ===  0  ){
        alert('Wrong input please try again')

    }
    else if(unit.value >=5){
        alert("Wrong input try again")
    }
    else{
        //Here table row and data are dynamically created and dynamically added when the add button is pressed//
        
    const tr = document.createElement('tr') 
    const tdCourseCode = document.createElement('td')
    tdCourseCode.innerHTML = courseCode.value
    const tdUnit = document.createElement('td')
    tdUnit.innerHTML = unit.value
    const tdGrade   = document.createElement('td')
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text
    //We appended them to their respective table row and data
    tr.appendChild(tdCourseCode)
    tr.appendChild(tdUnit)
    tr.appendChild(tdGrade)
    tbody.appendChild(tr)
    //The table and buttons were on display none they were set to block when the add button is pressed 
    table.style.display = "block"
   calc.style.display = "block"
   reset.style.display = "block"
 
  
   //We created an array to push the unit and grade using the push method , this will allows us to manipulate values, when called
   
   gpArray.push({'unit':unit.value ,
   'grade':grade.options[grade.selectedIndex].value})
   //Before  the grade.index was a text , now it is converted to a value so we can perform operation//

   //After pressing the add button all existing values go back to 0

    courseCode.value = "";
    unit.value = ""
    grade.selectedIndex = '0'

    }
    
    

})


//Event listener for the calacuation button



calc.addEventListener('click',() => {
    let unitLoads = 0, productOfUnitAndGrade = 0,
      sumOfProduct = 0
      
      

     gpArray.forEach(result =>{
        unitLoads += parseInt(result.unit)
        productOfUnitAndGrade = parseInt(result.unit)* parseInt(result.grade)
        sumOfProduct += productOfUnitAndGrade
         

     })
      

        const tr = document.createElement('tr')

         tdTotalUnit = document.createElement('td')
        tdTotalUnit.innerHTML = `Your total unit is ${unitLoads}`

        tdGpa = document.createElement('td')
        tdGpa.innerHTML = `Your GPA is ${(sumOfProduct /  unitLoads).toFixed(2)}`
        tdGpa.setAttribute('colspan', '2')
      

         
        tr.appendChild(tdTotalUnit)
        tr.appendChild(tdGpa)
        
     
        if(tfoot.querySelector('tr') !== null){
            tfoot.querySelector('tr').remove() 
    
        } 
        
    
       
        tfoot.appendChild(tr); 

})
reset.addEventListener('click', () =>{
    gpArray=[]
    tbody.querySelectorAll('*').forEach(child => child.remove())
    if(tfoot.querySelector('tr') !== null){
        tfoot.querySelector('tr').remove() 

    }
   
   
    calc.style.display = "none"
    reset.style.display = "none"
    table.style.display = "none"
})