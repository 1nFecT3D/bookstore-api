# bookstore-api v0.0.0



- [Book](#book)
	- [Create book](#create-book)
	- [Delete book](#delete-book)
	- [Retrieve book](#retrieve-book)
	- [Retrieve books](#retrieve-books)
	- [Update book](#update-book)
	


# Book

## Create book



	POST /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Book's title.</p>							|
| description			| 			|  <p>Book's description.</p>							|
| author			| 			|  <p>Book's author.</p>							|
| publicationDate			| 			|  <p>Book's publicationDate.</p>							|
| genre			| 			|  <p>Book's genre.</p>							|
| price			| 			|  <p>Book's price.</p>							|

## Delete book



	DELETE /books/:id


## Retrieve book



	GET /books/:id


## Retrieve books



	GET /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update book



	PUT /books/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Book's title.</p>							|
| description			| 			|  <p>Book's description.</p>							|
| author			| 			|  <p>Book's author.</p>							|
| publicationDate			| 			|  <p>Book's publicationDate.</p>							|
| genre			| 			|  <p>Book's genre.</p>							|
| price			| 			|  <p>Book's price.</p>							|


