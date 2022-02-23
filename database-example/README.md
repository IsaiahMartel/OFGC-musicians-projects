## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Aspect](#aspect)
5. [Collaboration](#collaboration)

## General Info
***

Musicians can check their projects, events and information inside [OFGC](https://ofgrancanaria.com/es) in an organised way. 

### OFGC
![Client](https://ofgrancanaria.com/wp-content/uploads/2020/03/Group.png)
## Technologies
***
A list of technologies used within the project:
* [Laravel](https://laravel.com/): Version 8.68.1
* [Angular](https://angular.io/): Version 12.1.4 with [Ionic](https://ionicframework.com/): 
Version 6.18.1, version Ionic Framework: @ionic/angular 5.9.1

## Before instalation
***
Before you start you need:
* Git - https://git-scm.com/downloads.
* MySQL - https://www.mysql.com/downloads/.
* Node.js - https://nodejs.org/es/download/.

## Installation
***
Clone the repository:

```
git clone https://github.com/IsaiahMartel/AuditorioIonicLaravel
```
####Backend
Switch to the backend

```
cd AuditorioIonicLaravel/backend/
```
Install all the dependencies using composer
```
composer install
```
Copy the example env file and make the required configuration changes in the .env file 
```
cp .env.example .env
```
Generate a new application key
```
php artisan key:generate
```

Run the database migrations (Set the database connection in .env before migrating)

```
php artisan migrate
```

Start the local development server
```
php artisan serve
```

You can now access the server at http://localhost:8000

TL;DR command list

```
git clone https://github.com/pablopuch/OFGC.git
cd OFGC/backend/
composer install
cp .env.example .env
php artisan key:generate
```

####Frontend

Switch to frontend
```
cd OFGC/fronted/
```

Install all the dependencies using npm
```
npm install
```

Start the local development server

```
ionic serve -l
```
(http://localhost:8200/ is often bugged, switch to http://localhost:8100/ open developer tools and use select a mobile resolution in "Toggle device toolbar")

Now the app is running!!
***

## Aspect
***
*some icons could change besides some aspect changes towards final version


![Home](https://user-images.githubusercontent.com/91074551/146265703-694dce4a-329e-476b-bd89-a370778a9523.PNG)

![Menu](https://user-images.githubusercontent.com/91074551/146265716-70f2032b-a292-4ec4-b902-d28faec91a59.PNG)

![Project](https://user-images.githubusercontent.com/91074551/146265757-19876ff7-2a2d-401b-b459-463684b9f380.PNG)

![Events' project](https://user-images.githubusercontent.com/91074551/146268726-0193f39d-0c6f-4979-9de3-b4c268487557.PNG)


![Create event](https://user-images.githubusercontent.com/91074551/146265844-49850471-2e0d-4a19-acbf-6b53a1546d9a.PNG)

![Update event](https://user-images.githubusercontent.com/91074551/146265860-34f5d756-cfd8-445d-8e2c-6f5182c6dd08.PNG)

![Members' project](https://user-images.githubusercontent.com/91074551/146265881-9ebdc097-6854-4cd0-a287-34ad48a41639.PNG)

![Works' project](https://user-images.githubusercontent.com/91074551/146265920-ce688cab-4824-4734-9c2a-136281b39760.PNG)

![Login](https://user-images.githubusercontent.com/91074551/146265733-6dd6cdcb-4230-40ee-805b-1506cfb7aea9.PNG)

![Configuration](https://user-images.githubusercontent.com/91074551/146265955-8a3d34a8-bdc5-4b2b-b910-f1f8fe3e51f5.PNG)
***


## Collaboration
***
My class-mate in this project Pablo Punch, we helped a lot each other: https://github.com/pablopuch/ (here is his project: https://github.com/pablopuch/OFGC).
https://github.com/tcrurav Our teacher Tiburcio over-helped everyone through the project, and his example of Ionic-Spring was very useful for my first CRUD (https://github.com/tcrurav/spring_ionic_21_22).
Many videos of Develoteca's channel helped me for understanding laravel and creating the backend. Like this, for example: https://www.youtube.com/watch?v=9DU7WLZeam8.
This tutorial on how to create a CRUD in Ionic: https://remotestack.io/ionic-http-requests-with-httpclient-get-post-put-delete-tutorial/.
To create this README and documentation I was colsuting the README of one class-mate, Rubens Banez: https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/README.md and this guide https://gist.github.com/vinkla/dca76249ba6b73c5dd66a4e986df4c8d.
***
