<!-- ................................................................................... -->
<p align="center">
 ---
  <b><span style="font-size: 24px ; color: blue"><u>Course Registration Assignment</u></span></b>
---
</p>


### <span style=" color: skyblue">Code Link : </span>

1. [Code Link](https://github.com/programming-hero-web-course2/my-course-roster-mr-tnmy-srkr "https://github.com/programming-hero-web-course2/my-course-roster-mr-tnmy-srkr")
---
### <span style=" color: skyblue">Live Link : </span>

1. [Live Netlify Link](https://course-reg-react.netlify.app/ "https://course-reg-react.netlify.app/")

2. [Live Vercel Link](https://course-reg-react.vercel.app/ "https://course-reg-react.vercel.app/")

3. [Live Surge Link](http://course-reg-react.surge.sh/ "http://course-reg-react.surge.sh/")
---
### <span style=" color: skyblue"> Questions & Answers :</span>

- <span style="font-size: 20px">**Add at least 3 Project features :**</span>

1. **Feature 1:**

   This project is created by React + vite.
   The combination of React and Vite provides a modern, efficient, and flexible development environment with a great developer experience.

2. **Feature 2:**

   If user clicked on the select button ,the courses name will be added to the cart .Then total credit hour will be increased as per the course credit and then remaining credit hours (By default 20) will be deducted from the clicked course's credit hours.Also total price will show at the bottom of the cart.
   
3. **Feature 3:**

   I had Made this website with multiple components which give me more code organized,reusability,and maintainability.In an example I just make a design and build logic for one card only and then I call them 9 times ;which is easy to manage and maintain my codebase.
   
 4. **Feature 4:**

    I had declared useState 5 times in this project's. At first, use it to store json data by it's setter function.Then used it to store and update data for cart component ;like its course name, remaining credit hours,total credit hours & total price,which give me real time data updates.
 5. **Feature 5:**

    I didn't use any external api link in that project.I just made a normal array of objects with length is 9 and use 6 property names and this data are converted to json with the help of json online converter.Also Image link are created with the help of 'imagebb.com' website

---


- <span style="font-size: 20px">**Discuss how you managed the state in your assignment project :**</span>




    1. 'data' state:

       1.  In the Cards component, the state is managed using the useState and useEffect hooks.The useEffect hook is responsible for fetching data from json file.

       2. data holds the course data that is fetched from a JSON file.
       It is initialized with an empty array using useState.

        2. The fetched data is stored  in the setter function of setData at useState([]). it updates the data state using setData.


    2. 'allCardsName' State:
    
       1. it holds an array of course names that the user has added to the cart. It is initialized with an empty array using useState.

       2. setAllCardsName is used to update the allCardsName state.

    3. 'creditHrs' State::
    
       1. creditHrs holds the remaining      credit hours the user has.
         It is initialized with a value of 20 using useState. 

       2. setCreditHrs is used to update the creditHrs state.

   4. 'totalCreditHrs' State:
    
       1.   totalCreditHrs holds the total credit hours of all the selected courses.It is initialized with a value of 0 using useState

       2.  setTotalCreditHrs is used to update the totalCreditHrs state.

 

    5.  'totalPrice' State:
    
        1.   totalPrice holds the total price of all the selected courses.
         It is initialized with a value of 0 using useState.  

        2.   setTotalPrice is used to update the totalPrice state.

<!-- ................................................................................... -->
