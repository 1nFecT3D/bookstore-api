import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Book, { schema } from './model'

const router = new Router()
const { title, description, author, publicationDate, genre, price } = schema.tree

/**
 * @api {post} /books Create book
 * @apiName CreateBook
 * @apiGroup Book
 * @apiParam title Book's title.
 * @apiParam description Book's description.
 * @apiParam author Book's author.
 * @apiParam publicationDate Book's publicationDate.
 * @apiParam genre Book's genre.
 * @apiParam price Book's price.
 * @apiSuccess {Object} book Book's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Book not found.
 */
router.post('/',
  body({ title, description, author, publicationDate, genre, price }),
  create)

/**
 * @api {get} /books Retrieve books
 * @apiName RetrieveBooks
 * @apiGroup Book
 * @apiUse listParams
 * @apiSuccess {Object[]} books List of books.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /books/:id Retrieve book
 * @apiName RetrieveBook
 * @apiGroup Book
 * @apiSuccess {Object} book Book's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Book not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /books/:id Update book
 * @apiName UpdateBook
 * @apiGroup Book
 * @apiParam title Book's title.
 * @apiParam description Book's description.
 * @apiParam author Book's author.
 * @apiParam publicationDate Book's publicationDate.
 * @apiParam genre Book's genre.
 * @apiParam price Book's price.
 * @apiSuccess {Object} book Book's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Book not found.
 */
router.put('/:id',
  body({ title, description, author, publicationDate, genre, price }),
  update)

/**
 * @api {delete} /books/:id Delete book
 * @apiName DeleteBook
 * @apiGroup Book
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Book not found.
 */
router.delete('/:id',
  destroy)

export default router
