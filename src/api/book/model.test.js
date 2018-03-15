import { Book } from '.'

let book

beforeEach(async () => {
  book = await Book.create({ title: 'test', description: 'test', author: 'test', publicationDate: 'test', genre: 'test', price: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = book.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.title).toBe(book.title)
    expect(view.description).toBe(book.description)
    expect(view.author).toBe(book.author)
    expect(view.publicationDate).toBe(book.publicationDate)
    expect(view.genre).toBe(book.genre)
    expect(view.price).toBe(book.price)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = book.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.title).toBe(book.title)
    expect(view.description).toBe(book.description)
    expect(view.author).toBe(book.author)
    expect(view.publicationDate).toBe(book.publicationDate)
    expect(view.genre).toBe(book.genre)
    expect(view.price).toBe(book.price)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
