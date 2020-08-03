---
title: Object-Oriented Programming in Java
author: Ronij Pandey
date: 2020-07-14
hero: ./images/robots.png
slug: object-oriented-programming-in-java
excerpt: In this article, we will explore the various concepts related to OOP.
---

Apart from a variety of programming languages available today, we also have different styles of programming to accomplish different tasks. These styles of programming are called programming paradigms. Check my other [article](https://medium.com/@ronij.2508/programming-languages-and-their-types-d6aa9f7a361b?source=friends_link&sk=f4f48c4fb26b06d5e59483513854a93d) to know in detail about various available paradigms and their uses.

Before starting about object-oriented programming, let us first think about what is an “object”. A general answer would be “anything that may be perceived by the senses”.

Let us consider “flower” as an object. We can describe a flower by its certain properties like color, smell, number of petals, etc. Similarly, we can describe every object using some of the properties which they possess.

There are many objects which have certain properties as well as perform certain actions. For example, consider a bird. They have certain properties such as legs, wings, beaks, color, etc as well as perform certain actions such as they fly, they sing and they eat.

From these observations, we can say that an object has some properties and perform certain actions. Similar to real-world objects, we have objects in the world of computers that have properties ( in the form of data) and perform certain actions (in the form of methods or procedures).

# The four pillars of OOP

Object-Oriented Programming (OOP) is a style of programming that is based on the concept of “objects”. Now since we know what an object is, let us know about the four principles on which object-oriented programming is based.

![](https://cdn-images-1.medium.com/max/1800/1*_zV8LVtRnNnnw_juph-Gpg.png)

We will see in detail about these principles along with there implementations in **Java**. If you are not comfortable with Java ignore the codes and just go through the concepts mentioned as they are not specific to any particular language.

# Encapsulation

When we refer to an object, we are not referring to its particular property or some particular action that it performs. We consider all of its properties and actions as one unit. In a way this like putting all of them in one capsule and calling that as an object. This is technically called encapsulation.

> Encapsulation is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit.

Let us consider a laptop as an object. You might be knowing that laptop consists of various components such as processors, hard disks, RAM, etc. When they are combined together, we collectively call them a laptop.

![](https://cdn-images-1.medium.com/max/1200/1*GYTU_ScTBKB5w4lfmlRrEQ.jpeg)

Java by its syntax itself supports the encapsulation. In Java, the wrapping capsule for the data and methods is called a **class**. It is considered as a blueprint from which individual objects are created using the `**new**` operator. A class definition in Java would look something like this.

```
class Laptop
{
    Processor processor;
    RAM ram;
    HardDiskDrive hdd;
    // other compononts
    // methods
}
```

Creating laptop objects using the laptop class in the following code.

```
class ComputerWorld {
   public static void main(String []args) {
      Laptop laptop1 = new Laptop();
      Laptop laptop2 = new Laptop();
   }
}
```

# Abstraction

Many objects, like cars, coffee machines, or simply a pen hide their internal details and mechanism of working. This makes using these objects easy. You simply do not bother how the engine of a car works or how a braking system works, instead, you can focus on your driving.

> Abstraction is a process of hiding the implementation details from the user.

Considering our laptop object, we can easily see the abstraction at work. Users are provided with input devices(e.g. keyboard, mouse) and some output devices(e.g. display, speaker) and the internal working of how data are processed and stored is abstracted from them.

In Java, abstraction is achieved using **Abstract** classes and **interfaces**. Let us create an interface for our laptop object.

```
interface LaptopInterface{
   void takeInputFromKeyboard();
   void printOnScreen();
}
```

Now this interface can be implemented by the Laptop class.

```
class Laptop implements LaptopInterface
{
    // Laptop properties
    Processor processor;
    RAM ram;
    HardDiskDrive hdd;

    // Laptop Actions
    public void takeInputFromKeyboard(){
        // complex logic
    }
    public void printOnScreen(){
        // complex logic
    }
    public void otherComplexOperations(){
        // complex logic
    }
}
```

Since Laptop class implements LaptopInterface, we can use that interface to provide only `takeInputFromKeyboard()` and `printOnScreen()` methods to the user and hide the other methods like `otherComplexOperations()`. The code would look something like below.

```
class ComputerWorld {
   public static void main(String []args) {
      // making objects
      LaptopInterface laptop1 = new Laptop();

      // performing actions
      laptop1.takeInputFromKeyboard();
      laptop1.printOnScreen();

      // but we cannot access this
      laptop1.otherComplexOperations();  // shows error
   }
}
```

# Polymorphism

The word _polymorphism_ means having many forms. We can also see this in real-world objects e.g. consider a person working as a teacher. For students, that person is a teacher while at home the same person may be a parent to his/her children. The same person is also a citizen of a country. Thus we can see that a person expresses the concept of polymorphism by having different forms in relationship with different objects.

![](https://cdn-images-1.medium.com/max/842/1*2gHzHWRRB-sEG7Q_0h_VLg.png)

In Java, we can achieve polymorphism in two different ways. The first way is to use a parent class reference(Person) to refer to child class objects(Teacher, Parent, Citizen). This type of polymorphism is called **runtime polymorphism** (or **dynamic polymorphism**) which is achieved by a concept called [**method overriding**](https://en.wikipedia.org/wiki/Method_overriding).

The second way to achieve polymorphism is to use the concept of [**method overloading]**(https://en.wikipedia.org/wiki/Function_overloading) which means that there are several methods present in a class having the same name but different types/order/number of parameters. This is called **compile-time polymorphism** (or **static polymorphism\*\*).

> In programming languages, **polymorphism** is the provision of a single interface to objects of different types or the use of a single symbol to represent multiple different types.

Consider the following implementation for finding the area of a triangle. It shows _static polymorphism_ by calling `area()` function to find the area using two different ways.

```
class Triangle
{
    // method 1
    static double area(double width, double height)
    {
        return (width*height)/2;
    }

    // method 2
    static double area(double side1, double side2, double side3)
    {
        double s = (side1+side2+side3)/2;
        return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));;
    }

    public static void main(String []args)
    {
        System.out.println(area(5,3));  // calls method 1
        System.out.println(area(10,10,10));  // calls method 2
    }
}
```

# Inheritance

Inheritance is a process through which one class acquires fields and methods of another class. The concept is similar to inheritance in the real-world i.e. children inheriting properties from there parents.

A class that is derived from another class is called a _subclass_ (also a _derived class_, _extended class_, or _child class_). The class from which the subclass is derived is called a _superclass_ (also a _base class_ or a _parent class_). The relationship between the two classes is called** IS-A Relationship **(denoted by an arrow from the child class to parent class).

![Types of Inheritance](https://cdn-images-1.medium.com/max/1512/1*bmRfpOY8maEq1NbTlrtpXw.png)

Java supports only three types of inheritance for classes: single, multilevel, and hierarchical. Multiple and hybrid inheritance is supported through interface only. (Find out why?). Now let us see the concept of inheritance through an example.

![](https://cdn-images-1.medium.com/max/762/1*xJl0xkSAhXDlae09KY9FFA.png)

Consider a person object from the real world. Properties such as hands, legs, eyes belong to the person along with various actions such as eating, sleeping, walking. Now consider a teacher. He/She is also a person, hence displays all the properties and actions which belong to a person. In addition to that, a teacher may have some extra properties (teacher ID, number of students) and display some extra actions (teaches, assign marks). Similarly, a student is also a person and inherits all the properties of it.

```
class Person
{
    // fields
    int hands;
    int legs;
    int eyes;

    // methods
    public void eat()
    {
        // code for eating
    }
    public void sleep()
    {
        // code for sleeping
    }
    public void walk()
    {
        // code for walking
    }
}
```

In Java, we inherit the properties of a class using the `**extend**` keyword. Let us make a `Teacher` class.

```
class Teacher extends Person
{
    // fields
    int tid;
    int studentCount;

    // unique methods
    public void teach()
    {
        // code for teaching
    }
    public void assignMarks()
    {
        // code for marking
    }
}
```

The student also inherits the `Person` class. Let us make a class named `Student`.

```
class Student extends Person
{
    // fileds
    int rollNumber;
    int teacher;

    // unique methods
    public void study()
    {
        // code for studying
    }
    public void giveExam()
    {
        // code to give exam
    }
}
```

Now let us see the behavior of inherited objects in the computer world.

```
class ComputerWorld {
   public static void main(String []args) {
      // making teacher objects
      Teacher teacher = new Teacher();

      // performing actions
      teacher.teach();
      teacher.assignMarks();
      teacher.eat();    // uses parent class functions
      teacher.sleep();  // uses parent class functions


      // making student objects
      Student student = new Student();

      // performing actions
      student.study();
      student.giveExam();
      student.eat();    // uses parent class functions
      student.sleep();  // uses parent class functions
   }
}
```

> The idea of inheritance is simple but powerful: When we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class (provided there exists some relationship among them). In doing this, we can reuse the fields and methods of the existing class without having to write (and debug) them again.

# Object-Oriented vs Object-Based

There are certain languages(such as Visual Basic) that support the usage of object and encapsulation but do not support inheritance or, polymorphism or, both. Classes exist, but can’t inherit from each other. These languages are called Object-Based Languages.

Object-Oriented languages (such as Java, C#) support all the features of OOP including inheritance and polymorphism.

# Pure Object-Oriented Languages

Apart from the four basic principles of OOP, 3 extra qualities need\* *to be satisfied for a programming language to be a *pure Object-Oriented language\*. They are:

1. All predefined types must be objects,

2. All user-defined types must be objects, and

3. Every operation on objects must be done with the help of methods.

Java satisfies all the four principles of OOP. But it does not satisfy quality 2 and 3 ( due to **primitive data type** and **static keyword**). So it cannot be considered as a pure object-oriented language but this only adds to its feature rather than its setback.

# Conclusion

Among other programming paradigms ( find them in my other [article](https://medium.com/@ronij.2508/programming-languages-and-their-types-d6aa9f7a361b?source=friends_link&sk=f4f48c4fb26b06d5e59483513854a93d)) OOP is particularly helpful when problems need some real-world modeling as well as when the solution needs the **Bottom-Up** approach. Features such as code _reusability_, code _maintainability_, and _portability_ differentiate it from other programming styles.
