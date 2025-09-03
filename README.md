# Sample Snack app Tiến
All lab Andorid - IUH 


# LAB 4: https://reactnative.dev/docs/flatlist


# vao trang #mockapi ->  tao 1 list cac api

https://rapidapi.com/guides/fetch-api-react-native

  npm install --legacy-peer-deps
  npm fund
  npm audit fix --force

  //npm install -g expo-cli
# tạo project
## cách 1
	npx create-expo-app demo_app --template expo-template-blank-typescript
## cách 2
 	npm create-expo-app demo_app --template expo-template-blank-typescript

   	npm start
  
		npx expo install react-native-web react-dom @expo/metro-runtime
		npm install react-native-elements
## cài các thư viện
### tv 1
	npm install @react-navigation/native-stack
### tv 2
	
 	npm install @react-navigation/stack
### tv 3

	npm install @react-navigation/native

 ###
  	npm start
  ###
 
  
 	 npm expo install @expo/metro-runtime
 ###

	npm install react-native-elements




  NẾU XUẤT HIỆN LỖI
  WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI:https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
───────────────────────────────────────────────────────────────────────────┐                                                         
  https://stackoverflow.com/questions/75314418/the-legacy-expo-cli-does-not-support-node-17
  
  
  
  1 - Gỡ cài đặt expo-cli:


	npm uninstall --global expo-cli


2 - Cài đặt Expo CLI lên phiên bản mới nhất:


	npm install --global expo-cli


3 - Tạo một dự án Expo TypeScript mới:

	npx create-expo-app demo_app --template expo-template-blank-typescript


4 - Điều hướng đến Dự án của bạn:


	cd demo_app


5 - Cài đặt react-native-web@~0.19.6:


	npm install react-native-web@~0.19.6


6 - Cài đặt react-dom@18.2.0 :

	npm install react-dom@18.2.0


7 - Cài đặt @expo/webpack-config@^19.0.0:

	npm install @expo/webpack-config@^19.0.0


8 - Chạy dự án:

	npm run web

 ## CÁCH RUN PROJECT
 	
  #Steep 1	
   	
    	npm install
   	Dùng để install thư viện

 	
  #Steep 2
  
    	npx expo install react-native-web react-dom @expo/metro-runtime



## LAB 5 REACT 
		https://medium.com/@bhairabpatra.iitd/crud-create-read-update-delete-application-in-react-566bf229aaee

https://www.figma.com/design/bJ1zR7MlDRDOfTNTnyE7F2/Lab_07_a?node-id=0-...EZbXec-0

 	 npx expo install expo-upgrade

	npm install --global expo-cli


	npm install react-native-web@~0.19.6


	npm install @react-navigation/native-stack

	npm install @react-navigation/stack

	npm install @react-navigation/native



1. Cài đặt react-redux
npm install react-redux @reduxjs/toolkit






### chi tiết bài tập

  
1. Bài Tập TypeScript: 
Buổi 1, Buổi 2: 
https://drive.google.com/file/d/1Z9sHF8v52G6mTND5abqj7QFmmipnKJhK/view?usp=sharing

https://drive.google.com/file/d/1DCtmkx51HroqUzubzIXal8972HzQzAMV/view?usp=sharing

	1. Create a class Person with attributes name and age. Write a method to display this information.
	2. Write a class Student extending Person with an additional attribute grade. Add a method to
	display all info.
	3. Create a class Car with properties brand, model, year. Write a method to show car info.
	4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
	5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
	6. Create a class Book with attributes title, author, year.
	7. Write a class User with private property name and getter/setter.
	8. Create a Product class with name, price. Create an array of products and filter products with
	price > 100.
	9. Define an interface Animal with name and method sound().
	10. Create a class Account with public, private and readonly fields.
	11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
	12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
	13. Create an abstract class Shape with method area(). Implement Square and Circle.
	14. Create a base class Employee. Extend Manager and Developer with specific methods.
	15. Create a Library class that can store Book and User objects. Add method to add books.
	16. Create a generic class Box that can store any type of value.
	17. Write a singleton Logger class that logs messages to console.
	18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
	19. Demonstrate method overriding using polymorphism with Animal and subclasses.
	20. Write a Vehicle interface and implement it in Car and Bike classes.
	21. Create a generic Repository class with methods add(), getAll().
	22. Create a class Stack with push, pop, peek, isEmpty methods.
	23. Create an interface Payment with method pay(amount). Implement CashPayment and
	CardPayment.
	24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
	25. Create a class Shape with a static method describe().
	26. Create a class Order with list of products. Add method to calculate total price.
	27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
	
	28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
	29. Create an interface Movable with method move(). Implement it in Car and Robot.
	30. Create a class School with list of Students and Teachers. Add method to display info.	
Buổi 2
	A. Basics with Promise
	1. Create a Promise that returns the string "Hello Async" after 2 seconds.
	2. Write a function that returns a Promise resolving with the number 10 after 1 second.
	3. Write a function that rejects a Promise with the error "Something went wrong" after 1
	second.
	4. Use .then() and .catch() to handle a Promise that returns a random number.
	5. Create a function simulateTask(time) that returns a Promise resolving with "Task
	done" after time ms.
	6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
	7. Use Promise.race() to return whichever Promise resolves first.
	8. Create a Promise chain: square the number 2, then double it, then add 5.
	9. Write a Promise that reads an array after 1 second and filters even numbers.
	10. Use .finally() to log "Done" when a Promise finishes (success or failure).
	
	B. Async/Await
	11. Convert Exercise 1 into async/await.
	12. Write an async function that calls simulateTask(2000) and logs the result.
	13. Handle errors using try/catch with async/await.
	14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
	15. Call multiple async functions sequentially using await.
	16. Call multiple async functions in parallel using Promise.all().
	17. Use for await...of to iterate over an array of Promises.
	18. Write an async function fetchUser(id) that simulates an API call (resolves a user
	object after 1 second).
	19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
	ID.
	20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
	
	C. Fetch API & Simulated I/O
	21. Use fetch to get data from a public API (e.g.,
	https://jsonplaceholder.typicode.com/todos/1).
	22. Call the API multiple times and log the results.
	23. Write an async function that fetches a list of todos and filters out those that are not
	completed.
	24. Write an async function postData() that sends a POST request to a test API.
	25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs
	when done.
	26. Use async/await with setTimeout to simulate a 5-second wait.
	
	27. Write a function fetchWithRetry(url, retries) that retries up to retries times if
	the API call fails.
	28. Write an async function batchProcess() that processes 5 async tasks at once (use
	Promise.all).
	29. Write an async function queueProcess() that processes tasks sequentially in a queue.
	30. Use async/await + Promise.allSettled() to handle multiple API calls and display their
	success/failure status.
2. React Native:
# Buổi 3: 
https://www.figma.com/design/aUiiT4bpYie30CvHv4tYPZ/Lab_01--Copy-?m=auto&t=qbl351IleB1xbwE1-7

# Buổi 4: https://www.figma.com/design/ics8vhK76d3EyA9wxwboJV/Lab_02--Copy-?m=auto&t=qbl351IleB1xbwE1-7 
	
 # Buổi 5: https://www.figma.com/design/WKXYx66bcRKBweG3yNAV5c/Lab_03_c_Navigation--Copy-?m=auto&t=qbl351IleB1xbwE1-7 
	
 # Buổi 6: 
	https://www.figma.com/design/rDAd6fWYA6SWgvBeqWnwZm/Lab_04_a--Copy-?m=auto&t=qbl351IleB1xbwE1-7 

	https://www.figma.com/design/q1SBiV65iuWAg6yI1DTdWD/Lab_05_b--Copy-?m=auto&t=qbl351IleB1xbwE1-7  
# Buổi 7: https://www.figma.com/design/B8UsZ5NMVSUxftt4sZwVyH/Lab_05_a--Copy-?m=auto&t=qbl351IleB1xbwE1-7 

 # Buổi 8: https://www.figma.com/design/zhggplEUDkAq3ntn6nFODH/Lab_06_Props_Component_Landscape_API--Copy-?m=auto&t=qbl351IleB1xbwE1-7 


# Buổi 9: Review All (hooks, component, api, redux, flexbox, navigation, tab, drawer…)

 
 # Buổi 10: Kiểm tra TH (SQlite, API, ReduxToolkit)

3. Bài tập bổ sung:
		https://www.figma.com/file/3glzG7ZgUJxFpNdJb7ZwF2/Thi-CK_Tiet_7_11_T4_14_12_22?type=design&node-id=0-1&mode=design&t=Kh8C38woG1uUqR8j-0

