let animes = [
    {
      id: 1,
      title: 'Fullmetal Alchemist: Brotherhood',
      year: '2009',
      genre: 'Ação, Aventura, Drama, Fantasia',
      poster: 'https://media.fstatic.com/hMVj6_2kIu8eQaqOv75n3QuRul4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/03/0d6b90e151a6d55b450d81df1ff6ee55.jpg'
    },

    {
      id: 2,
      title: 'Shigatsu wa kimi no Uso',
      year: '2014',
      genre: 'Drama, Música, Romance',
      poster: 'https://media.fstatic.com/nrh1oqERVYPf-k4xEU3X4f6gBeA=/322x478/smart/filters:format(webp)/media/movies/covers/2014/11/shigatsu-wa-kimi-no-uso_t106389.jpg'
    },

    {
      id: 3,
      title: 'Kaguya-sama: Love is War',
      year: '2019-?',
      genre: 'Comédia, Romance',
      poster: 'https://media.fstatic.com/qa8yqA1z94VvEgqONsdiViHqTYs=/322x478/smart/filters:format(webp)/media/movies/covers/2022/04/kaguya-sama-love-is-war-temporada-3-arte.jpg'
    },

    {
      id: 4,
      title: 'Bocchi The Rock!',
      year: '2022',
      genre: 'Comédia, Música',
      poster: 'https://media.fstatic.com/zvYfZeXRlJoAxxzVbnUUhz-o7aU=/322x478/smart/filters:format(webp)/media/movies/covers/2022/10/Bocchi.jpeg'
    },

    {
        id: 5,
        title: 'Hunter x Hunter (2011)',
        year: '2011-2014',
        genre: 'Ação, Aventura, Fantasia',
        poster: 'https://media.fstatic.com/Byhdq9j4qmtr_ncniyyL-yx7Atw=/322x478/smart/filters:format(webp)/media/movies/covers/2018/07/Hunter_x_Hunter_2011_Anime.jpg'
    },

    {
        id: 6,
        title: 'Elfen Lied',
        year: '2004',
        genre: 'Ação, Drama, Ficção Científica, Terror, Suspense',
        poster: 'https://media.fstatic.com/MiD7udW4gu-UcN5GFROV3lXeUW8=/322x478/smart/filters:format(webp)/media/movies/covers/2014/08/elfen-lied_t31188_26.jpg'
    },

    { 
        id: 7,
        title: 'Demon Slayer: Kimetsu no Yaiba',
        year: '2019-?',
        genre: 'Ação, Fantasia',
        poster: 'https://media.fstatic.com/7OMrqr6xNVh8B6q6HBasBsFQpL0=/322x478/smart/filters:format(webp)/media/movies/covers/2019/08/Capa.jpg'
    },

    {
        id: 8,
        title: 'Steins;Gate',
        year: '2011',
        genre: 'Ficção Científica, Drama, Suspense',
        poster: 'https://media.fstatic.com/mz7cVA-knQn8FB9XPmH-0ojbyHA=/322x478/smart/filters:format(webp)/media/movies/covers/2014/06/steins-gate_t47631_2.jpg'
      },

    { 
        id: 9,
        title: 'Oshi no Ko',
        year: '2023-?', 
        genre: 'Drama, Sobrenatural',
        poster: 'https://media.fstatic.com/HjHFe9-HxD6GDaXBLlPVhzL1f5A=/322x478/smart/filters:format(webp)/media/movies/covers/2023/03/FsB8niAWAAEi8ja.jpg'
    },
    
    { 
        id: 10,
        title: 'Shingeki no Kyojin',
        year: '2013-2023',
        genre: 'Ação, Drama, Suspense',
        poster: 'https://media.fstatic.com/LtxCX7G5ImO6H8eFQ6vhvARpZ18=/322x478/smart/filters:format(webp)/media/movies/covers/2013/03/79ed5608c5d1120fa42c77f69dbe5267.jpg'
    },
    
    { 
        id: 11,
        title: 'Cowboy Bebop',
        year: '1998',
        genre: 'Ação, Ficção Científica',
        poster: 'https://media.fstatic.com/SB-qXnx68llFAv6n5Br9apDw8R4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/08/9b109afaab6019a0a1f50ec17e98c5be.jpg'
    },
    
    { 
        id: 12,
        title: '86: Eighty-Six',
        year: '2021-?',
        genre: 'Ação, Drama, Ficção Científica',
        poster: 'https://media.fstatic.com/6ORlC9EWJSp9cmOIhZRFiPKayBA=/322x478/smart/filters:format(webp)/media/movies/covers/2021/10/86_Anime_S1_Poster_Oficial.jpg'
    },
    
    { 
        id: 13,
        title: 'Boku dake ga Inai Machi',
        year: '2016',
        genre: 'Mistério, Sobrenatural, Suspense',
        poster: 'https://media.fstatic.com/DE2PNxGQGJHw8EsOhRpCIDD-EbU=/322x478/smart/filters:format(webp)/media/movies/covers/2016/03/boku-dake-ga-inai-machi_t197492_iTJmAdT.jpg'
    },
    
    { 
        id: 14,
        title: 'Made in Abyss',
        year: '2017-?',
        genre: 'Aventura, Drama, Fantasia, Mistério',
        poster: 'https://media.fstatic.com/hMqG6GTGe-tkyCi78l1dPVCRZSQ=/322x478/smart/filters:format(webp)/media/movies/covers/2017/09/86733l.jpg'
    },
    
    { 
        id: 15,
        title: 'Sora yori mo Tooi Basho',
        year: '2018',
        genre: 'Aventura, Comédia, Drama',
        poster: 'https://media.fstatic.com/7ndsrU4gEj2cFY_mDh4IfH5WMAU=/322x478/smart/filters:format(webp)/media/movies/covers/2017/12/88906l.jpg'
    },
    
    { 
        id: 16,
        title: 'Spy x Family',
        year: '2022-?',
        genre: 'Comédia, Ação',
        poster: 'https://media.fstatic.com/INDN96zMyNSv-UGLMD2cl5xpuuQ=/322x478/smart/filters:format(webp)/media/movies/covers/2022/03/FNLNY3hXIAMs980.jpg'
    },

    
    { 
        id: 17,
        title: 'Fumetsu no Anata e',
        year: '2021-?',
        genre: 'Aventura, Drama, Sobrenatural',
        poster: 'https://media.fstatic.com/N-cTSECBqQ6ogGgANmKQMnqGi2o=/322x478/smart/filters:format(webp)/media/movies/covers/2020/03/pSEGKpAkRihS9XNvw4648DnHwcI.jpg'
    },
    
    { 
        id: 18,
        title: 'Chainsaw Man',
        year: '2022-?',
        genre: 'Ação, Fantasia',
        poster: 'https://media.fstatic.com/BnStloAgU5qRlB9ZN9NeMVtklIk=/322x478/smart/filters:format(webp)/media/movies/covers/2022/08/c6827c0c18d3d99fe635177fb28f618f1658950447-main-1_sfun.png'
    },

    
    { 
        id: 19,
        title: 'Neon Genesis Evangelion',
        year: '1995-1996',
        genre: 'Ação, Drama, Ficção Científica',
        poster: 'https://media.fstatic.com/j-inJ2FDRuyQ95ewBQYbtFVQeOo=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/fb21888724b50cbb3737b7dd2aae9525.jpg'
    },

    { 
        id: 20,
        title: 'Zankyou no Terror',
        year: '2014',
        genre: 'Mistério, Suspense',
        poster: 'https://media.fstatic.com/p1tbYK2S8nkacDft_a8gN-8d3K0=/322x478/smart/filters:format(webp)/media/movies/covers/2014/07/zankyou-no-terror_t96896.jpg'
    },
  ]