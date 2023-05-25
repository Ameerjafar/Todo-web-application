<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
   <head>
      <link href="webjars\bootstrap\5.1.3\css\bootstrap.min.css" rel = "stylesheet">
      <title>Enter your todos</title>
   </head>
   <body>
	<h1>Enter Your Todos</h1>
	<form:form method="post" modelAttribute="todo">
	  Description : <form:input type = "text" path = "nameOfCourse"/>
	  <input type = "submit" class = "btn btn-success">
	  <form:input type = "hidden" path = "id"/>
      <form:input type = "hidden" path = "isCompleted"/>
	</form:form>
	<script src = "webjars\bootstrap\5.1.3\js\bootstrap.min.js"></script>
	<script src = "webjars\jquery\3.6.0\jquery.min.js"></script>
  </body>
</html>