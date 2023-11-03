let filmes = [
    {
      id: 1,
      title: 'Um Heroi de Brinquedo',
      year: '1996',
      genre: 'Comédia, Família',
      poster: 'https://media.fstatic.com/x8LXNvYBvQxFn867rW1jYgwra8c=/322x478/smart/filters:format(webp)/media/movies/covers/2018/12/gggg.jpg'
    },

    {
      id: 2,
      title: 'Um Sonho de Liberdade',
      year: '2010',
      genre: 'Drama, Policial',
      poster: 'https://media.fstatic.com/8dBkVH3gkxmjuO4gOkR2icV3o3o=/322x478/smart/filters:format(webp)/media/movies/covers/2009/03/1bfa0336b1f93ed2e9c16bfd4ee3fbec.jpg'
    },

    {
      id: 3,
      title: 'Clube da Luta',
      year: '1999',
      genre: 'Drama',
      poster: 'https://media.fstatic.com/KFXt7TLzdJIOy--c75N-6ZaAyIg=/322x478/smart/filters:format(webp)/media/movies/covers/2017/03/Clube_da_Luta.jpg'
    },

    {
      id: 4,
      title: 'À Espera de um Milagre',
      year: '1999',
      genre: 'Drama, Fantasia, Mistério, Policial',
      poster: 'https://media.fstatic.com/wXlm9fqxw4_6Zpxu0Y6jeBnebJg=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/0f0941f96361d5437fc82ad4ed74781b.jpg'
    },

    {
        id: 5,
        title: 'La La Land: Cantando Estações',
        year: '2017',
        genre: 'Comédia, Drama, Música, Musical, Romance',
        poster: 'https://media.fstatic.com/qgczmD0i5cw8xTawUmSW0CTnJGo=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/097062.jpg'
    },

    {
        id: 6,
        title: 'Corra!',
        year: '2017',
        genre: 'Suspense, Terror, Mistério',
        poster: 'https://media.fstatic.com/tTRhwkCA85OI-hQAKWYgg65HmJY=/322x478/smart/filters:format(webp)/media/movies/covers/2017/04/577190.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg'
    },

    { 
        id: 7,
        title: 'Garota Exemplar',
        year: '2014',
        genre: 'Drama, Mistério, Policial, Suspense',
        poster: 'https://media.fstatic.com/qqvKpe3nQFhYbgVATIajo6PW-mg=/322x478/smart/filters:format(webp)/media/movies/covers/2014/08/garota-exemplar_t77448_2.jpg'
    },

    { 
        id: 8,
        title: 'O Quarto de Jack',
        year: '2017',
        genre: 'Drama',
        poster: 'https://media.fstatic.com/DiNKGQrPbhIJzZsuAiSZjt4K-YU=/322x478/smart/filters:format(webp)/media/movies/covers/2015/07/room_t98036.jpeg'
    },

    { 
        id: 9,
        title: 'Falcão: O Campeão dos Campeões',
        year: '1987', 
        genre: 'Ação, Drama, Esporte',
        poster: 'https://media.fstatic.com/o0NkIzPD5OPxE4r8HhSHY_b_H3I=/322x478/smart/filters:format(webp)/media/movies/covers/2012/10/cf599e04d45af0f8304856fe63748332.jpg'
    },
    
    { 
        id: 10,
        title: 'O Grande Dragão Branco',
        year: '1988',
        genre: 'Ação, Biografia, Drama',
        poster: 'https://media.fstatic.com/qlLvsVxqy2qY8vHREoWI0sYnctk=/322x478/smart/filters:format(webp)/media/movies/covers/2012/09/46f03841b6d4e0307bbd73ad536cb2af.jpg'
    },
    
    { 
        id: 11,
        title: 'Whiplash: Em Busca da Perfeição',
        year: '2017',
        genre: 'Drama, Música',
        poster: 'https://media.fstatic.com/ibFV3R42K0ndzw6xM6SFKLk7Unw=/322x478/smart/filters:format(webp)/media/movies/covers/2015/01/whiplash-em-busca-da-perfeicao_t90046_2.jpg'
    },
    
    { 
        id: 12,
        title: 'A Chegada',
        year: '2016',
        genre: 'Drama, Ficção Científica, Suspense, Mistério',
        poster: 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg'
    },
    
    { 
        id: 13,
        title: 'O Show de Truman',
        year: '1998',
        genre: 'Drama, Comédia, Ficção Científica',
        poster: 'https://media.fstatic.com/GOKRIaIGs8HI-ubhGTGJoMPiN6Q=/322x478/smart/filters:format(webp)/media/movies/covers/2011/08/8cf5caddf5a20dd4e90e8c9fc7b66a20.jpg'
    },
    
    { 
        id: 14,
        title: 'Clube dos Cinco',
        year: '1985',
        genre: 'Comédia, Drama',
        poster: 'https://media.fstatic.com/maxMqpz0ejQa_NGV2m9Z0D_wKyA=/322x478/smart/filters:format(webp)/media/movies/covers/2012/01/2bad46dc35f072f9d4b45f393ecaea63.jpg'
    },
    
    { 
        id: 15,
        title: 'Interestelar',
        year: '2014',
        genre: 'Aventura, Drama, Ficção Científica',
        poster: 'https://media.fstatic.com/YTz-kfNphh-TH6vn_jT3eTM_Q3U=/322x478/smart/filters:format(webp)/media/movies/covers/2014/09/interestelar_t27814_15.jpg'
    },
    
    { 
        id: 16,
        title: 'Parasita',
        year: '2019',
        genre: 'Drama, Comédia, Suspense',
        poster: 'https://media.fstatic.com/cJWrR1YAxH7jfPOv9fQZdEecp-w=/322x478/smart/filters:format(webp)/media/movies/covers/2016/09/hacksaw_ridge_ver2_xxlg.jpg'
    },

    
    { 
        id: 17,
        title: 'Bastardos Inglórios',
        year: '2009',
        genre: 'Aventura, Drama, Guerra',
        poster: 'https://media.fstatic.com/ISaR3n7muWmhElYhj7EQjMs_6q4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/f6a7646173ad7f8487828ccfbd813ebf.jpg'
    },

    
    { 
        id: 18,
        title: 'Ilha do Medo',
        year: '2010',
        genre: 'Drama, Mistério, Suspense',
        poster: 'https://media.fstatic.com/J5cOSqhfcCrylSEcQBcvVlz6wQs=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/f8503d117d5560c07478c1fde344a4e8.jpg'
    },

    
    { 
        id: 19,
        title: 'Gênio Indomável',
        year: '1997',
        genre: 'Drama',
        poster: 'https://media.fstatic.com/jMuwPFvy5v1I7U_BuQd_0bKs5ns=/322x478/smart/filters:format(webp)/media/movies/covers/2011/09/4d73290efd2a7dbc763b7a17e0c652c5.jpg'
    },

    
    { 
        id: 20,
        title: 'Beleza Americana',
        year: '1999',
        genre: 'Drama',
        poster: 'https://media.fstatic.com/dg2E6VyXGM-7r10BxWoOWZ-xMok=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/a7a2b44a16026c798c23af225a2b74d4.jpg'
    }

  ]