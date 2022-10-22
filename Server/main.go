package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Home struct {
	Message string `json:"message"`
}

type Server struct {
}

func (s *Server) Run(path string) error {
	_ = getConfig(path)
	router := getRoutes()
	router.Run("localhost:8080")
	return nil
}

func getConfig(path string) error {
	return nil
}

func getRoutes() *gin.Engine {
	routes := gin.Default()
	routes.GET("/home", home)

	return routes
}

var message = Home{Message: "Hello Home"}

func home(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, message)

}

func main() {
	s := Server{}

	_ = s.Run("")
}
