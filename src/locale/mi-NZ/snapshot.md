# Māori (mi-NZ) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                               | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | --------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987                                          | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5                                             | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987                                          | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 4                                             | 0003-12-29T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1                                             | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                             | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | HW1                                           | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | HW2                                           | Invalid Date             |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | Hauwhā tuatahi                                | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | Hauwhā tuarua                                 | Invalid Date             |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                             | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                             | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1                                             | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                             | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | HW1                                           | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | HW2                                           | Invalid Date             |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | Hauwhā tuatahi                                | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | Hauwhā tuarua                                 | Invalid Date             |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2                                             | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7                                             | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | Hui                                           | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Hōngo                                         | 2019-07-01T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | Huitanguru                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Hōngongoi                                     | 2019-07-01T00:00:00.000Z |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | H                                             | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | H                                             | Invalid Date             |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2                                             | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7                                             | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | Hui                                           | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Hōngo                                         | 2019-07-01T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | Huitanguru                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Hōngongoi                                     | 2019-07-01T00:00:00.000Z |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | H                                             | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | H                                             | Invalid Date             |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1                                             | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48                                            | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1                                             | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48                                            | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28                                            | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365                                           | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | Rāhina                                        | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Rāmere                                        | Invalid Date             |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | H                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | M                                             | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Hin                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Mer                                           | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5                                             | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | Rāhina                                        | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Rāmere                                        | Invalid Date             |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | H                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | M                                             | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Hin                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Mer                                           | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5                                             | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | Rāhina                                        | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Rāmere                                        | Invalid Date             |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | H                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | M                                             | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Hin                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Mer                                           | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5                                             | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Tū                                            | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Hor                                           | 2019-02-16T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Rāhina                                        | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Rāmere                                        | Invalid Date             |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | H                                             | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | M                                             | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Hin                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Mer                                           | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | am                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                            | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | am                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                            | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                            | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                            | 2019-02-11T00:00:00.000Z |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | ata                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | po                                            | 2019-02-11T00:00:00.000Z |
|                                 | BB           | 2019-02-11T11:13:14.015Z | ata                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | po                                            | 2019-02-11T00:00:00.000Z |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | ata                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | po                                            | 2019-02-11T00:00:00.000Z |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | i te ata                                      | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | i te ahiahi                                   | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | i te ahiahi                                   | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | i te po                                       | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | ata                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | ahiahi                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | po                                            | 2019-02-11T00:00:00.000Z |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11                                            | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11                                            | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11                                            | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23                                            | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11                                            | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11                                            | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11                                            | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23                                            | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1                                             | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55                                            | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1                                             | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55                                            | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11/02/1987                                    | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453                                    | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11 Hui 1987                                   | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Hara 1453                                  | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11 Huitanguru 1987                            | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Haratua 1453                               | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | Rāapa 11 Huitanguru 1987                      | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | Rātapu 29 Haratua 1453                        | 1453-05-29T00:00:00.000Z |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                         | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                         | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                      | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                      | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+0                                | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+0                                | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+00:00                            | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+00:00                            | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11/02/1987, 12:13                             | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453, 23:59                             | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11 Hui 1987, 12:13:14                         | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Hara 1453, 23:59:59                        | 1453-05-29T23:59:59.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11 Huitanguru 1987 i 12:13:14 GMT+0           | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Haratua 1453 i 23:59:59 GMT+0              | Errored                  |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | Rāapa 11 Huitanguru 1987 i 12:13:14 GMT+00:00 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | Rātapu 29 Haratua 1453 i 23:59:59 GMT+00:00   | Errored                  |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                     | `includeSeconds: true` | `addSuffix: true`                   |
| ------------------------ | -------------------------- | ---------------------- | ----------------------------------- |
| 2006-01-01T00:00:00.000Z | tata ki te 6 tau           | tata ki te 6 tau       | i roto i tata ki te 6 tau           |
| 2005-01-01T00:00:00.000Z | tata ki te 5 tau           | tata ki te 5 tau       | i roto i tata ki te 5 tau           |
| 2004-01-01T00:00:00.000Z | tata ki te 4 tau           | tata ki te 4 tau       | i roto i tata ki te 4 tau           |
| 2003-01-01T00:00:00.000Z | tata ki te 3 tau           | tata ki te 3 tau       | i roto i tata ki te 3 tau           |
| 2002-01-01T00:00:00.000Z | tata ki te 2 tau           | tata ki te 2 tau       | i roto i tata ki te 2 tau           |
| 2001-06-01T00:00:00.000Z | neke at ui te tau          | neke at ui te tau      | i roto i neke at ui te tau          |
| 2001-02-01T00:00:00.000Z | tata ki te kotahi tau      | tata ki te kotahi tau  | i roto i tata ki te kotahi tau      |
| 2001-01-01T00:00:00.000Z | tata ki te kotahi tau      | tata ki te kotahi tau  | i roto i tata ki te kotahi tau      |
| 2000-06-01T00:00:00.000Z | e 5 marama                 | e 5 marama             | i roto i e 5 marama                 |
| 2000-03-01T00:00:00.000Z | e 2 marama                 | e 2 marama             | i roto i e 2 marama                 |
| 2000-02-01T00:00:00.000Z | kotahi marama pea          | kotahi marama pea      | i roto i kotahi marama pea          |
| 2000-01-15T00:00:00.000Z | e 14 nga ra                | e 14 nga ra            | i roto i e 14 nga ra                |
| 2000-01-02T00:00:00.000Z | kotahi ra                  | kotahi ra              | i roto i kotahi ra                  |
| 2000-01-01T06:00:00.000Z | tata ki te 6 haora         | tata ki te 6 haora     | i roto i tata ki te 6 haora         |
| 2000-01-01T01:00:00.000Z | kotahi haora pea           | kotahi haora pea       | i roto i kotahi haora pea           |
| 2000-01-01T00:45:00.000Z | kotahi haora pea           | kotahi haora pea       | i roto i kotahi haora pea           |
| 2000-01-01T00:30:00.000Z | 30 meneti                  | 30 meneti              | i roto i 30 meneti                  |
| 2000-01-01T00:15:00.000Z | 15 meneti                  | 15 meneti              | i roto i 15 meneti                  |
| 2000-01-01T00:01:00.000Z | kotahi meneti              | kotahi meneti          | i roto i kotahi meneti              |
| 2000-01-01T00:00:25.000Z | iti iho i te kotahi meneti | hawhe meneti           | i roto i iti iho i te kotahi meneti |
| 2000-01-01T00:00:15.000Z | iti iho i te kotahi meneti | iti iho i te 20 hēkona | i roto i iti iho i te kotahi meneti |
| 2000-01-01T00:00:05.000Z | iti iho i te kotahi meneti | iti iho i te 10 hēkona | i roto i iti iho i te kotahi meneti |
| 2000-01-01T00:00:00.000Z | iti iho i te kotahi meneti | iti iho i te 5 hēkona  | kei kona iti iho i te kotahi meneti |
| 1999-12-31T23:59:55.000Z | iti iho i te kotahi meneti | iti iho i te 10 hēkona | kei kona iti iho i te kotahi meneti |
| 1999-12-31T23:59:45.000Z | iti iho i te kotahi meneti | iti iho i te 20 hēkona | kei kona iti iho i te kotahi meneti |
| 1999-12-31T23:59:35.000Z | iti iho i te kotahi meneti | hawhe meneti           | kei kona iti iho i te kotahi meneti |
| 1999-12-31T23:59:00.000Z | kotahi meneti              | kotahi meneti          | kei kona kotahi meneti              |
| 1999-12-31T23:45:00.000Z | 15 meneti                  | 15 meneti              | kei kona 15 meneti                  |
| 1999-12-31T23:30:00.000Z | 30 meneti                  | 30 meneti              | kei kona 30 meneti                  |
| 1999-12-31T23:15:00.000Z | kotahi haora pea           | kotahi haora pea       | kei kona kotahi haora pea           |
| 1999-12-31T23:00:00.000Z | kotahi haora pea           | kotahi haora pea       | kei kona kotahi haora pea           |
| 1999-12-31T18:00:00.000Z | tata ki te 6 haora         | tata ki te 6 haora     | kei kona tata ki te 6 haora         |
| 1999-12-30T00:00:00.000Z | e 2 nga ra                 | e 2 nga ra             | kei kona e 2 nga ra                 |
| 1999-12-15T00:00:00.000Z | e 17 nga ra                | e 17 nga ra            | kei kona e 17 nga ra                |
| 1999-12-01T00:00:00.000Z | kotahi marama pea          | kotahi marama pea      | kei kona kotahi marama pea          |
| 1999-11-01T00:00:00.000Z | e 2 marama                 | e 2 marama             | kei kona e 2 marama                 |
| 1999-06-01T00:00:00.000Z | e 7 marama                 | e 7 marama             | kei kona e 7 marama                 |
| 1999-01-01T00:00:00.000Z | tata ki te kotahi tau      | tata ki te kotahi tau  | kei kona tata ki te kotahi tau      |
| 1998-12-01T00:00:00.000Z | tata ki te kotahi tau      | tata ki te kotahi tau  | kei kona tata ki te kotahi tau      |
| 1998-06-01T00:00:00.000Z | neke at ui te tau          | neke at ui te tau      | kei kona neke at ui te tau          |
| 1998-01-01T00:00:00.000Z | tata ki te 2 tau           | tata ki te 2 tau       | kei kona tata ki te 2 tau           |
| 1997-01-01T00:00:00.000Z | tata ki te 3 tau           | tata ki te 3 tau       | kei kona tata ki te 3 tau           |
| 1996-01-01T00:00:00.000Z | tata ki te 4 tau           | tata ki te 4 tau       | kei kona tata ki te 4 tau           |
| 1995-01-01T00:00:00.000Z | tata ki te 5 tau           | tata ki te 5 tau       | kei kona tata ki te 5 tau           |
| 1994-01-01T00:00:00.000Z | tata ki te 6 tau           | tata ki te 6 tau       | kei kona tata ki te 6 tau           |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result        | `addSuffix: true`      | With forced unit (i.e. `hour`) |
| ------------------------ | ------------- | ---------------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | e 6 tau       | i roto i e 6 tau       | e 52608 haora                  |
| 2005-01-01T00:00:00.000Z | e 5 tau       | i roto i e 5 tau       | e 43848 haora                  |
| 2004-01-01T00:00:00.000Z | e 4 tau       | i roto i e 4 tau       | e 35064 haora                  |
| 2003-01-01T00:00:00.000Z | e 3 tau       | i roto i e 3 tau       | e 26304 haora                  |
| 2002-01-01T00:00:00.000Z | e 2 tau       | i roto i e 2 tau       | e 17544 haora                  |
| 2001-06-01T00:00:00.000Z | kotahi tau    | i roto i kotahi tau    | e 12408 haora                  |
| 2001-02-01T00:00:00.000Z | kotahi tau    | i roto i kotahi tau    | e 9528 haora                   |
| 2001-01-01T00:00:00.000Z | kotahi tau    | i roto i kotahi tau    | e 8784 haora                   |
| 2000-06-01T00:00:00.000Z | e 5 marama    | i roto i e 5 marama    | e 3648 haora                   |
| 2000-03-01T00:00:00.000Z | e 2 marama    | i roto i e 2 marama    | e 1440 haora                   |
| 2000-02-01T00:00:00.000Z | kotahi marama | i roto i kotahi marama | e 744 haora                    |
| 2000-01-15T00:00:00.000Z | e 14 nga ra   | i roto i e 14 nga ra   | e 336 haora                    |
| 2000-01-02T00:00:00.000Z | kotahi ra     | i roto i kotahi ra     | e 24 haora                     |
| 2000-01-01T06:00:00.000Z | e 6 haora     | i roto i e 6 haora     | e 6 haora                      |
| 2000-01-01T01:00:00.000Z | kotahi haora  | i roto i kotahi haora  | kotahi haora                   |
| 2000-01-01T00:45:00.000Z | 45 meneti     | i roto i 45 meneti     | kotahi haora                   |
| 2000-01-01T00:30:00.000Z | 30 meneti     | i roto i 30 meneti     | kotahi haora                   |
| 2000-01-01T00:15:00.000Z | 15 meneti     | i roto i 15 meneti     | e 0 haora                      |
| 2000-01-01T00:01:00.000Z | kotahi meneti | i roto i kotahi meneti | e 0 haora                      |
| 2000-01-01T00:00:25.000Z | e 25 hēkona   | i roto i e 25 hēkona   | e 0 haora                      |
| 2000-01-01T00:00:15.000Z | e 15 hēkona   | i roto i e 15 hēkona   | e 0 haora                      |
| 2000-01-01T00:00:05.000Z | e 5 hēkona    | i roto i e 5 hēkona    | e 0 haora                      |
| 2000-01-01T00:00:00.000Z | e 0 hēkona    | kei kona e 0 hēkona    | e 0 haora                      |
| 1999-12-31T23:59:55.000Z | e 5 hēkona    | kei kona e 5 hēkona    | e 0 haora                      |
| 1999-12-31T23:59:45.000Z | e 15 hēkona   | kei kona e 15 hēkona   | e 0 haora                      |
| 1999-12-31T23:59:35.000Z | e 25 hēkona   | kei kona e 25 hēkona   | e 0 haora                      |
| 1999-12-31T23:59:00.000Z | kotahi meneti | kei kona kotahi meneti | e 0 haora                      |
| 1999-12-31T23:45:00.000Z | 15 meneti     | kei kona 15 meneti     | e 0 haora                      |
| 1999-12-31T23:30:00.000Z | 30 meneti     | kei kona 30 meneti     | kotahi haora                   |
| 1999-12-31T23:15:00.000Z | 45 meneti     | kei kona 45 meneti     | kotahi haora                   |
| 1999-12-31T23:00:00.000Z | kotahi haora  | kei kona kotahi haora  | kotahi haora                   |
| 1999-12-31T18:00:00.000Z | e 6 haora     | kei kona e 6 haora     | e 6 haora                      |
| 1999-12-30T00:00:00.000Z | e 2 nga ra    | kei kona e 2 nga ra    | e 48 haora                     |
| 1999-12-15T00:00:00.000Z | e 17 nga ra   | kei kona e 17 nga ra   | e 408 haora                    |
| 1999-12-01T00:00:00.000Z | kotahi marama | kei kona kotahi marama | e 744 haora                    |
| 1999-11-01T00:00:00.000Z | e 2 marama    | kei kona e 2 marama    | e 1464 haora                   |
| 1999-06-01T00:00:00.000Z | e 7 marama    | kei kona e 7 marama    | e 5136 haora                   |
| 1999-01-01T00:00:00.000Z | kotahi tau    | kei kona kotahi tau    | e 8760 haora                   |
| 1998-12-01T00:00:00.000Z | kotahi tau    | kei kona kotahi tau    | e 9504 haora                   |
| 1998-06-01T00:00:00.000Z | e 2 tau       | kei kona e 2 tau       | e 13896 haora                  |
| 1998-01-01T00:00:00.000Z | e 2 tau       | kei kona e 2 tau       | e 17520 haora                  |
| 1997-01-01T00:00:00.000Z | e 3 tau       | kei kona e 3 tau       | e 26280 haora                  |
| 1996-01-01T00:00:00.000Z | e 4 tau       | kei kona e 4 tau       | e 35064 haora                  |
| 1995-01-01T00:00:00.000Z | e 5 tau       | kei kona e 5 tau       | e 43824 haora                  |
| 1994-01-01T00:00:00.000Z | e 6 tau       | kei kona e 6 tau       | e 52584 haora                  |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                |
| ------------------------ | --------------------- |
| 2000-01-10T00:00:00.000Z | 10/01/2000            |
| 2000-01-05T00:00:00.000Z | a te Rāapa a te 00:00 |
| 2000-01-02T00:00:00.000Z | apopo a te 00:00      |
| 2000-01-01T00:00:00.000Z | i tenei ra i te 00:00 |
| 1999-12-31T00:00:00.000Z | inanahi i te 00:00    |
| 1999-12-27T00:00:00.000Z | last Rāhina at 00:00  |
| 1999-12-21T00:00:00.000Z | 21/12/1999            |
