---
title: Spring vs Spring Boot
author: Ronij Pandey
date: 2020-08-10
hero: ./images/spring_vs_boot.png
slug: spring-vs-spring-boot
excerpt: We will see how Spring and Spring Boot can be compared.
---

Programmers need not start from scratch when they want to work on some projects. They have tools designed to help them in the development process. One of the most helpful tools is the  **Framework**.

Using a software framework to develop applications lets us focus on the high-level functionality of the application instead of any low-level functionality which is taken care of by the framework itself.

> Since software frameworks are often built, tested, and optimized by several experienced software engineers and programmers, they are flexible, powerful, and efficient.

# What is the Spring Framework?

[Spring](https://spring.io/projects/spring-framework)  is a  _lightweight framework_  that makes the development of the  **JavaEE**  application easier. Its called a lightweight framework because it tries to be as invisible as possible which is achieved by following  **POJO-oriented**  development.

> The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications — on any kind of deployment platform.

It can be thought of as a  _framework of frameworks_  because it provides support to various other frameworks. It is one of the most widely used  [Java EE Frameworks](https://en.wikipedia.org/wiki/List_of_Java_frameworks)  for building applications and contains many modules such as core, beans, context, JDBC, ORM, Transaction, Web, Servlet, Struts, Security, and many more.

# Core Feature

[**_Dependency Injection_**](https://docs.spring.io/spring/docs/3.0.x/spring-framework-reference/html/overview.html)  (DI) or  **Inversion of Control**  (IoC) is the most important feature of the Spring Framework and it is at the core of all Spring Modules.

Why is this DI or IoC so important? These are the design patterns which when used properly, help us to develop  [loosely coupled](https://en.wikipedia.org/wiki/Loose_coupling)  applications. These loosely coupled applications can easily be tested and maintained.

Let us consider the following Student class which uses the object of Address class. Notice that we are creating an instance of Address class using  `new`  keyword and that means they are tightly coupled. Now if we want to test the functionality of student class we need to a  [**mock**](https://devopedia.org/mock-testing#:~:text=Mock%20testing%20is%20an%20approach,behaviour%20of%20the%20real%20ones.)  of Address which is not so easy to inject due to tight coupling (may need to modify source code).

```
class Student { 
    int id; 
    Address address; 
      
    Student() { 
        address = new Address();  
    } 
      
    // other methods.
 }
```

Spring framework provides us with two simple annotations which make the dependency injection easier. They are:

-   `@Component`  marks the class which Spring needs to manage.
-   `@Autowired`  marks the variables for which Spring needs to find the correct matching object and inject them implicitly.

Using the dependency injection of spring the above code now becomes loosely coupled and hence easier to test.

```
@Component 
class Address { 
    // some code 
}

class Student { 
    int id; 
      
    @Autowired 
    Address address; 
      
    Student() { 
        // no instantiation needed  
    } 
      
    // other methods.
}
```

In Spring, the objects that are created, instantiated, and managed by the  [Spring IoC container](https://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/beans.html)  are called  **beans**. They form the backbone of our application.`@Component`  annotation marks a class as a bean. In the above example, objects of Address class are beans and are managed by Spring.

# Other Features of Spring Framework

Apart from dependency injection, Spring provides many other benefits such as:

-   **Reduced Duplication of codes**. Spring framework provides templates for various technologies. It hides the basic steps of these technologies. For example, by using the Spring’s  **JdbcTemplate**  you do not need to write code for creating connection and statement, committing the transaction, closing connection, exception handling, etc. You can focus on writing the code for executing queries only. Similarly for other technologies such as Hibernate, JPA, etc.
-   **Modularity**. It allows us to use only those parts that we need and to just choose any part of it in isolation.
-   **Easy to test**. The Spring Test module provides support for testing our codes easily.
-   **Easier Development**. The DI feature and its support for various frameworks make the development of the JavaEE application easy.

# Why do we need Spring Boot?

Though Spring provides a lot of features we still need to do a lot of configurations. If you want to create a spring application, you need to put a lot of initial effort. For example, when we use Spring MVC, we need to configure dispatcher servlet, a view resolver, and many more. Below is an XML configuration for view resolver.
```
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"> 
        <property name="prefix">  
            <value>/WEB-INF/views/</value>  
        </property>  
        <property name="suffix">  
            <value>.jsp</value>  
        </property>  
</bean>
```

Here comes the Spring Boot to our save time in bootstrapping spring projects. It is also a Spring module that provides the  **Rapid Application Development**  feature.

> Spring Boot is a way to create an application with minimal configurations. It provides a lot of default configurations to create Spring applications faster.
> 
> 
> It looks at our classpath and at the beans we have configured, makes reasonable assumptions about what we are missing, and adds those items. Spring Boot allow us to focus more on business features and less on configurations and setups.

# Core Feature

When developing an application using the Spring Framework, there are a lot of similar configurations that otherwise have to be added manually. We also need to identify the frameworks we want to use and then choose compatible versions. After that, we need to do configurations to connect them.

> Spring Boot provides the feature of  **Auto-Configuration**  through which it creates the basic configuration that is needed to use these frameworks in our application. We do not have to do those configurations manually.

With the Spring Boot, we just need to tell Spring how many of modules we want to use and we will get a fast setup for them (we are allowed to change it by ourselves later on). We can use  [**spring initializer**](https://start.spring.io/)  to pull in all the dependencies we need for our application thus reducing our development time.

# Other Features of Spring Boot

Besides helping us to eliminate  **boilerplate configurations,** Spring boot has many other benefits such as:

-   **Has Starter Projects**. Spring Boot provides several  **starters**  that allow us to add required jars in the classpath. It’s like one-stop for all the Spring and related technology that we need, without having to add all those dependencies by ourself. For example, if we want to build an MVC web application using the Spring MVC module and Thymeleaf views we just need to include the  `spring-boot-starter-thymeleaf`  dependency in our project.
-   **Spring Boot Actuator**  provides us with advanced features such as  **metrics, health checks,** and **monitoring**  of our application.
-   It creates  **stand-alone**  Spring applications as the server is already integrated into the application. Hence we do not need to deploy WAR files. The application is  **production-ready** from the beginning.
-   There is no requirement for  **XML**  configuration and we can simply relay on annotations.

# Differences

Some of the key differences between Spring and Spring Boot are shown below.

1.  In Spring we need to  **write lots of**  boilerplate code  while Spring Boot  **reduces**  boilerplate code thus reducing LOC.
2.  In the case of Spring, we need to set up the sever explicitly while Spring Boot offers an  **embedded server.**
3.  The primary feature of Spring is  **dependency injection**  while the primary feature of Spring Boot is  **Autoconfiguration.**
4.  We need to manually define dependencies for the Spring project while Spring Boot comes with the concept of  **starter**  that internally takes care of downloading the required dependencies i.e.  **JARs.**

# Conclusion

Spring Framework is all in one Java Development framework. It has lots of modules. We can consider these modules as various ingredients for making a cake.

![thealmondeater.com/chocolate-vegan-birthday-cake](./images/cake_ingredients.jpg)

We can manually make the cake by using different combinations of these ingredients, which will take time and effort. Spring Boot allows us to directly get the final cake. We just need to say the flavor we want! Now  **more features can be added**  to this cake if required.


![Image for post](./images/cake.jpeg)

Another good analogy can be found at this  [link](https://devrant.com/rants/1867059/spring-vs-spring-boot). They are not competing with each other. They solve different problems and help programmers to be more productive.

If you found this article informative, you can also check my other article on  [object-oriented programming in java](https://medium.com/dev-genius/object-oriented-programming-in-java-57202e7c0abd?source=friends_link&sk=73629e76ceb5bc8ed32dff001cf2d325).
