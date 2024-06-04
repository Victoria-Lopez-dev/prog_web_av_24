import z from "zod";
const currentYear = new Date().getFullYear();
const movieSchema = z.object({
  title: z
    .string({
      required_error: "Field is required",
    })
    .min(1),
  year: z.number().int().min(1895).max(currentYear),
  director: z
    .string({
      required_error: "Field is required",
    })
    .min(6),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url(),
  genre: z
    .enum([
      "Action",
      "Adventure",
      "Biography",
      "Comedy",
      "Crime",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Thriller",
    ])
    .array(),
});

export function validateMovie(object) {
  return movieSchema.safeParse(object);
}
export function validatePartialMovie(object) {
  return movieSchema.partial().safeParse(object);
}
