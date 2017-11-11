package main

import (
	"log"
	"net/http"
	"text/template"

	"github.com/gorilla/mux"
)

var index = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("assets/view/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
})

func main() {
	var r = mux.NewRouter().StrictSlash(true)

	r.Methods("GET").Path("/").Name("Index").Handler(index)
	r.PathPrefix("/assets/").Handler(
		http.StripPrefix("/assets/", http.FileServer(http.Dir("assets/"))),
	)

	log.Fatal(http.ListenAndServe(":8080", r))
}
