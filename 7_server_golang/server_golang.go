/**
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -11.09m.2024-
 */

package main

import (
	"net/http"
)

func main() {
	muxer := http.NewServeMux()
	//fileServerCss := http.FileServer(http.Dir("3_Immancimech"))
	//fileServerJs := http.FileServer(http.Dir("src/js"))
	fileServerHtml := http.FileServer(http.Dir("G:/1_2_Andrey_programming_All/localhost/3_Immancimech/"))
	muxer.Handle("/", fileServerHtml)
	//muxer.Handle("/css", fileServerCss)
	//muxer.Handle("/js", fileServerJs)
	http.ListenAndServe(":80", muxer)
}

/*
package main

import (
	"fmt"
	"net/http"
)

// A HandlerFunc function
// Notice the signature of the function
func RootHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(w, req.RequestURI)
	fmt.Println("*http.Request = ", req.RequestURI)
	w.WriteHeader()
	w.Write()
}

func main() {
	// Here we pass the reference to the `RootHandler` handler function
	http.HandleFunc("/", RootHandler)
	panic(http.ListenAndServe(":80", nil))
}
*/
