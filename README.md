*STUDENT PROJECT*
 
 **Application description**
 
 Basically, the application is divided into a backend and a frontend part, hence this is full stack application.
 The database is written in MongoDB. So there are four collections in the base, for motorcycles, scooters, outboard motors, and four-wheelers. Each document contains information such as: model name, image urls, descriptions, etc...
  
 The backend is the server side of this project, and the main task is to communicate with the database, read it and deliver data to the frontend part, via the *API* service. There are 5 services that we have created through *FeathersJs*, namely: service for motorbikes, scooters, outboard motors, four-wheelers and for sending emails. Each of these services is connected to the corresponding collection, except for the mail service, which does not need to be connected to the database, because it does not even use it (*custom service*).
  
 The front-end part of the project is the part that is visible to the user, and which is responsible for the design and interaction with the other party. We used *React* to structure this part. There are 3 static pages, the home page, about us, which briefly describes the history of Yamaha, and the contact page, where there is the possibility of sending an email to the company, as well as showing the location on the map and other ways of contacting the company, i.e. the store.
    
 The rest is dynamic and their content depends precisely on the aforementioned database and its data. API services are called, data is parsed, and depending on the selection of the category on the site, it depends on which servos will be called. For example, we clicked on the engine category, the application automatically, before displaying the data to the user, made a call to the server, which must be in operation at that moment, receives the data, and places it in exactly the specified places. That way we get all the products. When a certain product is clicked, the *ID* of it is displayed above in the *URL* address, where the page is redirected to the next one, and by the same principle, before rendering the same, the *ID* is taken from the *URL* and a query is made on the *API* by that *ID-*. Again, certain data is obtained, which is distributed to a specific place and the desired (clicked) product is obtained.
    
 At the end of each page, with a specific product, there is a file with prices for the corresponding product and the possibility of scheduling a test drive, that is, entering the user's email and sending a message to that email, precisely through the email service.
