<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
   <head>
      <link href="webjars\bootstrap\5.1.3\css\bootstrap.min.css" rel = "stylesheet">
      <title>this is todo list</title>
   </head>
   <body>
	<h1>Your Todos</h1>
	<table class="table">
		<thead>
			<tr>
			    <th>id</th>
				<th>Description</th>
				<th>Target Date</th>
				<th>is Done?</th>
				<th></th>
				<th></th>

			</tr>
		</thead>
		<tbody>
			<c:forEach items="${todo}" var="todos">
				<tr>
					<td>${todos.id}</td>
					<td>${todos.nameOfCourse}</td>
					<td>${todos.date}</td>
					<td>${todos.isCompleted}</td>
					<td><a href="update-todo" class = "btn btn-success">update</a><td>
					<td><a href="delete-todo?id=${todos.id}" class = "btn btn-success">delete${todos.id}</a></td>

				</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href = "add_todo" class = "btn btn-success">AddTodo</a>
	<script src = "webjars\bootstrap\5.1.3\js\bootstrap.min.js"></script>
	<script src = "webjars\jquery\3.6.0\jquery.min.js"></script>
  </body>
</html>