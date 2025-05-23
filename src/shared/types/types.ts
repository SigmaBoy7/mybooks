// Модель ошибки валидации
interface ValidationError {
  loc: string[];
  msg: string;
  type: string;
}

// Обертка для ошибок валидации
interface HTTPValidationError {
  detail: ValidationError[];
}

// Основная модель данных результата поиска
export interface IBook {
  key?: string;
  redirects?: string[];
  title?: string;
  subtitle?: string;
  alternative_title?: string;
  alternative_subtitle?: string;
  cover_i?: number;
  ebook_access?: string;
  edition_count?: number;
  edition_key?: string[];
  format?: string[];
  by_statement?: string;
  publish_date?: string;
  lccn?: string[];
  ia?: string[];
  oclc?: string[];
  isbn?: string[];
  contributor?: string[];
  publish_place?: string;
  publisher?: string;
  first_sentence?: string;
  author_key?: string[];
  author_name?: string[];
  author_alternative_name?: string[];
  subject?: string[];
  person?: string[];
  place?: string[];
  time?: string[];
  has_fulltext?: boolean;
  title_suggest?: string;
  publish_year?: number;
  language?: string[];
  number_of_pages_median?: number;
  ia_count?: number;
  publisher_facet?: string[];
  author_facet?: string[];
  first_publish_year?: number;
  ratings_count?: number;
  readinglog_count?: number;
  want_to_read_count?: number;
  currently_reading_count?: number;
  already_read_count?: number;
  subject_key?: string[];
  person_key?: string[];
  place_key?: string[];
  time_key?: string[];
  lcc?: string[];
  ddc?: string[];
  lcc_sort?: string;
  ddc_sort?: string;
}

// Ответ от API поиска
export interface ISearchResultResponse {
  docs?: IBook[];
  documentation_url?: string;
  numFound?: number;
  numFoundExact?: boolean;
  num_found?: number;
  offset?: number;
  q?: string;
  start?: number;
}
