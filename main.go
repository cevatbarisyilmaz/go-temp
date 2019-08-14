package main

import (
	"github.com/cevatbarisyilmaz/reserv"
	"log"
)

func main() {
	res, err := reserv.New(nil)
	if err != nil {
		log.Fatal(err)
	}
	res.APIHandler = nil // Don't forget to set the API handler
	log.Println("Running")
	err = res.Run()
	log.Fatal(err)
}
