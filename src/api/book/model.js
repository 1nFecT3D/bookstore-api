import mongoose, { Schema } from 'mongoose'

const bookSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  publicationDate: {
    type: String
  },
  genre: {
    type: String
  },
  price: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

bookSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      description: this.description,
      author: this.author,
      publicationDate: this.publicationDate,
      genre: this.genre,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Book', bookSchema)

export const schema = model.schema
export default model
