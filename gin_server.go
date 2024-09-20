package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router with default middleware (logger and recovery)
	r := gin.Default()

	// Define a route for the root path
	r.GET("/", func(c *gin.Context) {
		// Respond with a welcome message
		c.String(200, "Welcome to the Go Web Server with Gin!")
	})

	// Define a route for the /hello path
	r.GET("/hello", func(c *gin.Context) {
		// Get the 'name' query parameter, default to "World" if not provided
		name := c.DefaultQuery("name", "World")
		// Respond with a personalized greeting
		c.String(200, "Hello, %s!", name)
	})

	// Define a route for the /users path
	r.GET("/users", func(c *gin.Context) {
		// Respond with a JSON array of users
		users := []string{"Alice", "Bob", "Charlie"}
		c.JSON(200, gin.H{
			"users": users,
		})
	})

	// Define a route for the /user/:id path
	r.GET("/user/:id", func(c *gin.Context) {
		// Get the 'id' path parameter
		id := c.Param("id")
		// Respond with a JSON object of the user
		c.JSON(200, gin.H{
			"id":   id,
			"name": "User " + id,
		})
	})

	// Start the server on port 8080
	r.Run(":8080")
}